import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    await dbConnect();
    const products = await Product.find({}).sort({ order: 1 });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const formData = await request.formData();
    
    const title = formData.get('title') as string;
    const category = formData.get('category') as string;
    const subCategory = formData.get('subCategory') as string;
    const links = JSON.parse(formData.get('links') as string);
    const image = formData.get('image') as File | null;

    let imagePath = '';
    if (image) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      const filename = Date.now() + '-' + image.name.replace(/\s+/g, '_');
      const publicPath = path.join(process.cwd(), 'public', 'uploads', filename);
      await writeFile(publicPath, buffer);
      imagePath = '/uploads/' + filename;
    }

    const product = await Product.create({
      title,
      category,
      subCategory,
      links,
      image: imagePath
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Error in products POST:', error);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}