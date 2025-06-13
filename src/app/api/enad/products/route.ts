import { NextRequest, NextResponse } from 'next/server';

const ENAD_BASE_URL = 'https://shopper.enad.io/api/v1';
const APP_ID = 'fb1929ce-24d0-4f84-8fa4-a191f870ff4b';
const MARKET = 'sweden';
const LOCALE = 'en';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const page = searchParams.get('page') || '1';
    const perPage = searchParams.get('per_page') || '20';

    const params = new URLSearchParams({
      page,
      per_page: perPage,
    });

    if (category && category !== 'all') {
      params.append('category', category);
    }

    const enadUrl = `${ENAD_BASE_URL}/${APP_ID}/${MARKET}/${LOCALE}/products?${params}`;
    
    console.log('Fetching from Enad API:', enadUrl);
    
    const response = await fetch(enadUrl, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    });

    if (!response.ok) {
      console.error(`Enad API error: ${response.status} ${response.statusText}`);
      throw new Error(`Enad API responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    // Log the response structure for debugging
    console.log('Enad API response structure:', {
      hasData: !!data.data,
      dataLength: data.data?.length || 0,
      hasMeta: !!data.meta,
      hasPagination: !!data.meta?.pagination
    });
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in products API route:', error);
    
    // Return a structured error response that matches expected format
    return NextResponse.json(
      { 
        data: [],
        meta: {
          pagination: {
            current_page: 1,
            per_page: 20,
            total: 0,
            total_pages: 1
          }
        },
        error: 'Failed to fetch products from Enad API'
      },
      { status: 500 }
    );
  }
}