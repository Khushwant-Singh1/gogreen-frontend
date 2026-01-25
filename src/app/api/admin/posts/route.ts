import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3001';

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_session');
    const searchParams = request.nextUrl.searchParams;
    const queryString = searchParams.toString();
    
    const url = queryString 
      ? `${BACKEND_URL}/api/posts?${queryString}`
      : `${BACKEND_URL}/api/posts`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Cookie': token ? `admin_session=${token.value}` : '',
      },
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_session');
    const body = await request.json();

    console.log('[API] POST /api/admin/posts - Token present:', !!token);

    const response = await fetch(`${BACKEND_URL}/api/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': token ? `admin_session=${token.value}` : '',
      },
      body: JSON.stringify(body),
      credentials: 'include',
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('[API] Backend error:', response.status, data);
    }
    
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
