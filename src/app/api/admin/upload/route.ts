import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_session');

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Read the incoming FormData from the client
    const formData = await request.formData();

    // Forward the FormData to the backend upload endpoint
    const response = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/upload`, {
      method: 'POST',
      headers: {
        'Cookie': `admin_session=${token.value}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('[API] Upload error from backend:', response.status, data);
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}
