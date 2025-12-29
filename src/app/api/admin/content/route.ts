import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Content from '@/models/Content';

export async function GET() {
  try {
    await dbConnect();
    const content = await Content.find({});
    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const content = await Content.findOneAndUpdate(
      { key: body.key },
      body,
      { upsert: true, new: true }
    );
    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save content' }, { status: 500 });
  }
}
