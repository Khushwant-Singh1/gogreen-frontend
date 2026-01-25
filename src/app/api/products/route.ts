import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';
const API_URL = `${API_BASE_URL}/api`;

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get('search');
    const subcategoryId = searchParams.get('subcategoryId');
    
    let url = `${API_URL}/products`;
    const params = new URLSearchParams();
    
    if (search) {
      params.append('search', search);
    }
    if (subcategoryId) {
      params.append('subcategoryId', subcategoryId);
    }
    
    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    const response = await fetch(url, {
      cache: 'no-store',
    });

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: 'Failed to fetch products' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in products API route:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
