import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendContactFormToAdmin, sendResponseToClient } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, message, subject, serviceType } = body

    // Validation
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { message: 'All required fields must be provided' },
        { status: 400 }
      )
    }

    // Create contact form entry
    const contactForm = await prisma.contactForm.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        message,
        subject,
        serviceType,
      },
    })

    // Send email to admin
    try {
      await sendContactFormToAdmin(contactForm)
      console.log('✓ Contact form forwarded to admin for manual reply')
    } catch (adminEmailError) {
      console.error('Failed to send email to admin:', adminEmailError)
    }

    // Send acknowledgement to client
    try {
      await sendResponseToClient(contactForm.email, contactForm.firstName || contactForm.email)
      console.log(`✓ Auto-response sent to client: ${contactForm.email}`)
    } catch (clientEmailError) {
      console.error('Failed to send auto-response to client:', clientEmailError)
    }

    return NextResponse.json(
      {
        message: 'Thank you for contacting us. We have received your message and will get back to you soon!',
        data: contactForm,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
