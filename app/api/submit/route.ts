import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { form_type, data } = body

    const sheetDbUrl = process.env.NEXT_PUBLIC_SHEETDB_API_URL || process.env.SHEETDB_API_URL

    // If SheetDB URL is not configured or is the default placeholder, run in mock mode
    if (!sheetDbUrl || sheetDbUrl.includes('YOUR_SHEETDB_API_ID')) {
      console.log('\x1b[33m%s\x1b[0m', `[SheetDB Mock Submission] Form Type: "${form_type}"`)
      console.log('Data payload:', data)
      return NextResponse.json({ success: true, mock: true })
    }

    console.log(`[SheetDB Sending] Forwarding "${form_type}" form submission to SheetDB...`)
    
    const response = await fetch(sheetDbUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: [data] }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('SheetDB API error response:', errorText)
      throw new Error(`SheetDB returned status ${response.status}`)
    }

    console.log('\x1b[32m%s\x1b[0m', `[SheetDB Success] Form "${form_type}" row added successfully!`)
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('[SheetDB Error] Submission failed:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}
