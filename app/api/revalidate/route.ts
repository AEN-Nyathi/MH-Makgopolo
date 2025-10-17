
import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

// This is the handler for the POST request to /api/revalidate
export async function POST(request: NextRequest) {
  // IMPORTANT: For security, you must verify that this request is coming from a trusted source.
  // You can do this by checking a secret token.
  // 1. Add a secret token to your environment variables (.env.local)
  //    REVALIDATION_SECRET_TOKEN=your_super_secret_token
  // 2. Your admin backend should send this token in a header, for example:
  //    fetch('https://mh-makgopolo.vercel.app/api/revalidate', {
  //      method: 'POST',
  //      headers: { 
  //        'Content-Type': 'application/json',
  //        'x-revalidation-secret': 'your_super_secret_token'
  //      },
  //      body: JSON.stringify({ path: '/path-to-revalidate' })
  //    })

  const secret = request.headers.get('x-revalidation-secret')
  // It's recommended to use environment variables for the secret token
  const secretToken = process.env.REVALIDATION_SECRET_TOKEN;

  if (!secretToken || secret !== secretToken) {
    return NextResponse.json({ message: 'Invalid secret token' }, { status: 401 })
  }

  const { path } = await request.json()

  if (!path) {
    return NextResponse.json({ message: 'Path parameter is required' }, { status: 400 })
  }

  try {
    // revalidatePath() allows you to revalidate data on-demand for a specific path.
    revalidatePath(path)
    console.log(`Revalidated path: ${path}`)
    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (error) {
    let errorMessage = 'Unknown error';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    console.error('Error revalidating path:', errorMessage)
    return NextResponse.json({ message: `Error revalidating: ${errorMessage}` }, { status: 500 })
  }
}
