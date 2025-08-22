import { NextRequest, NextResponse } from 'next/server';

// This is a mock API endpoint for testing purposes
// Replace this with your actual backend API
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const scheduledDate = formData.get('scheduledDate') as string;
    const recipients = JSON.parse(formData.get('recipients') as string);
    const image = formData.get('image') as File | null;

    // Log the received data (for testing)
    console.log('Received note data:', {
      title,
      content,
      scheduledDate,
      recipients: recipients.length,
      hasImage: !!image,
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return success response
    return NextResponse.json({
      id: `note_${Date.now()}`,
      message: 'Note created successfully',
      data: {
        title,
        content,
        scheduledDate,
        recipientCount: recipients.length,
        imageUploaded: !!image,
      }
    });

  } catch (error) {
    console.error('Error creating note:', error);
    return NextResponse.json(
      { error: 'Failed to create note' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Mock notes data for testing
  const mockNotes = [
    {
      id: 'note_1',
      title: 'Sample Note 1',
      content: 'This is a sample note for testing.',
      scheduledDate: new Date().toISOString(),
      recipients: 2,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'note_2',
      title: 'Sample Note 2',
      content: 'Another sample note.',
      scheduledDate: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
      recipients: 1,
      createdAt: new Date().toISOString(),
    },
  ];

  return NextResponse.json(mockNotes);
}
