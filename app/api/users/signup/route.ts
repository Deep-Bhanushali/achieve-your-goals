import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import * as bcrypt from 'bcryptjs'
import { sendContactFormToAdmin, sendResponseToClient } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, password, confirmPassword, agreeToTerms } = body

    // Validation
    if (!firstName || !lastName || !email || !phone || !password) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      )
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { message: 'Passwords do not match' },
        { status: 400 }
      )
    }

    if (!agreeToTerms) {
      return NextResponse.json(
        { message: 'You must agree to the terms and conditions' },
        { status: 400 }
      )
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json(
        { message: 'Email already registered' },
        { status: 409 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create new user
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        password: hashedPassword,
        agreeToTerms,
      },
    })

    console.log('✓ New user registered and forwarded to admin for manual follow-up')
    console.log(`   Owner will manually review and reply to: ${email}`)

    // Notify admin about new user
    try {
      await sendContactFormToAdmin({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        subject: 'New User Registration',
        message: `A new user has signed up: ${user.firstName} ${user.lastName} (${user.email})`,
        serviceType: 'Other',
      })
    } catch (adminNotifyError) {
      console.error('Failed to notify admin about new user:', adminNotifyError)
    }

    // Send acknowledgement to the user
    try {
      await sendResponseToClient(user.email, user.firstName || user.email)
      console.log(`✓ Welcome/acknowledgement sent to new user: ${user.email}`)
    } catch (clientEmailError) {
      console.error('Failed to send welcome email to user:', clientEmailError)
    }

    return NextResponse.json(
      {
        message: 'Account created successfully! We have received your information and will get back to you soon.',
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
