import { NextRequest, NextResponse } from 'next/server';

const ENAD_BASE_URL = 'https://shopper.enad.io/api/v1';
const APP_ID = 'fb1929ce-24d0-4f84-8fa4-a191f870ff4b';
const MARKET = 'sweden';
const LOCALE = 'en';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryIds = searchParams.get('category_ids');
    
    const facetTypes = 'price,attributes,variant_names';
    const params = new URLSearchParams({});
    
    if (categoryIds) {
      params.append('category_ids', categoryIds);
    }

    const enadUrl = `${ENAD_BASE_URL}/${APP_ID}/${MARKET}/${LOCALE}/facets/${encodeURIComponent(facetTypes)}?${params}`;
    
    const response = await fetch(enadUrl, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Enad API responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching filters from Enad API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch filters' },
      { status: 500 }
    );
  }
}