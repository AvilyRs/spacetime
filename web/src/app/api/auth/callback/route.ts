import { api } from '@/lib/api';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  const registerResponse = await api.post('/register', {
    code
  });

  const { token } = registerResponse.data;

  const redirectURL = new URL('/', request.url);

  // 60 (1 minute) * 60 (1 hour) * 24 (1 day) * 1 (1 day)
  const cookieExpiresInSeconds = 60 * 60 * 24 * 1; // 1 day

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds}`
    }
  });
}