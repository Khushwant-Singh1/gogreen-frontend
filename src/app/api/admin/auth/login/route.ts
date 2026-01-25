import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3001';

export async function POST(request: Request) {
  try {
    // Validate BACKEND_URL is configured
    if (!process.env.BACKEND_URL) {
      console.error('BACKEND_URL environment variable is not configured');
      return NextResponse.json(
        { error: 'Backend configuration error. Please contact support.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    console.log(`Attempting login to backend: ${BACKEND_URL}/api/auth/login`);

    const response = await axios.post(`${BACKEND_URL}/api/auth/login`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
      validateStatus: () => true, // Don't throw on any status
      timeout: 10000, // 10 second timeout
    });

    console.log(`Backend response status: ${response.status}`);

    if (response.status !== 200) {
      return NextResponse.json(response.data, { status: response.status });
    }

    // Forward the cookie from backend to frontend
    const setCookieHeader = response.headers['set-cookie'];
    const nextResponse = NextResponse.json(response.data);
    
    if (setCookieHeader) {
      const cookieValue = Array.isArray(setCookieHeader) ? setCookieHeader[0] : setCookieHeader;
      if (cookieValue) {
        nextResponse.headers.set('Set-Cookie', cookieValue);
      }
    }

    return nextResponse;
  } catch (error) {
    console.error('Login error:', error);
    if (axios.isAxiosError(error)) {
      console.error('Axios error details:', {
        message: error.message,
        code: error.code,
        response: error.response?.data,
        config: { url: error.config?.url, method: error.config?.method }
      });
    }
    return NextResponse.json(
      { error: 'Failed to communicate with authentication service' },
      { status: 500 }
    );
  }
}
