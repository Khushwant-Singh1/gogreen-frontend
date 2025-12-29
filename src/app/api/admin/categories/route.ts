import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Category from '@/models/Category';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    await dbConnect();
    const categories = await Category.find({}).sort({ order: 1 });
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const slug = formData.get('slug') as string;
    const order = parseInt(formData.get('order') as string) || 0;
    const banner = formData.get('banner') as File | null;

    let bannerPath = '';
    if (banner) {
      const bytes = await banner.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      const filename = Date.now() + '-' + banner.name.replace(/\s+/g, '_');
      const publicPath = path.join(process.cwd(), 'public', 'uploads', filename);
      await writeFile(publicPath, buffer);
      bannerPath = '/uploads/' + filename;
    }

    const category = await Category.create({
      name,
      slug,
      order,
      banner: bannerPath
    });

    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error('Error in categories POST:', error);
    return NextResponse.json({ error: 'Failed to create category' }, { status: 500 });
  }
}