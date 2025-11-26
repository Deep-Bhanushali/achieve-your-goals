# System Architecture - Mango Admi

## Complete System Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                         FRONTEND (React + Vite)                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Pages: SignUp, Contact Forms, Index, Services, etc.         │   │
│  │ Components: Navbar, Footer, Forms, CTA                      │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                             │                                        │
│                             ▼                                        │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ API Utilities (lib/api.ts)                                   │   │
│  │ - userApi.signUp()                                          │   │
│  │ - contactApi.submitForm()                                   │   │
│  └──────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
                   HTTP (JSON) │ CORS Enabled
                             │
              ┌──────────────┴──────────────┐
              │                             │
              ▼                             ▼
    ┌──────────────────────┐    ┌──────────────────────┐
    │  POST /api/users     │    │ POST /api/contact    │
    │  /signup             │    │ /submit              │
    └──────────────────────┘    └──────────────────────┘
              │                             │
              └──────────────┬──────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    BACKEND (Node.js + Express)                       │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Routes Layer                                                 │   │
│  │ - userRoutes.ts    (POST /signup, GET /:id, etc)            │   │
│  │ - contactRoutes.ts (POST /submit, GET /, DELETE /:id)       │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                             │                                        │
│                             ▼                                        │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Controllers Layer                                            │   │
│  │ - userController.ts   (Business logic for users)            │   │
│  │ - contactController.ts (Business logic for forms)           │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                             │                                        │
│                ┌────────────┼────────────┐                          │
│                │            │            │                          │
│                ▼            ▼            ▼                          │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │ Services Layer                                                │ │
│  │ - emailService.ts:                                            │ │
│  │   - sendContactFormToAdmin()    → Sends form to admin email  │ │
│  │   - sendResponseToClient()      → Sends auto-reply to user   │ │
│  │   - sendEmail()                 → Generic email sender       │ │
│  └───────────────────────────────────────────────────────────────┘ │
│                             │                                        │
│                             ▼                                        │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Models Layer                                                 │   │
│  │ - User.ts (firstName, lastName, email, phone, password)     │   │
│  │ - ContactForm.ts (firstName, lastName, email, message, etc) │   │
│  └──────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
              │                             │
              ▼                             ▼
    ┌──────────────────────┐    ┌──────────────────────┐
    │  MongoDB Database    │    │  Nodemailer Service  │
    │  ┌────────────────┐  │    │  (SMTP Integration)  │
    │  │ users          │  │    │ ┌────────────────┐   │
    │  │ contactforms   │  │    │ │ Gmail          │   │
    │  └────────────────┘  │    │ │ or other SMTP  │   │
    └──────────────────────┘    └──────────────────────┘
                                         │
                                         ▼
                               ┌──────────────────────┐
                               │  Email Service       │
                               │  ┌────────────────┐  │
                               │  │ Admin Email    │  │
                               │  │ Client Email   │  │
                               │  └────────────────┘  │
                               └──────────────────────┘
```

## Data Flow - User Sign Up

```
Frontend Form
     │
     ├─ Validation (client-side)
     │
     ▼
POST /api/users/signup
{
  firstName, lastName, email, phone,
  password, confirmPassword, agreeToTerms
}
     │
     ▼
userController.signUp()
     │
     ├─ Validate input
     ├─ Check if email exists
     ├─ Hash password with bcryptjs
     ├─ Save user to MongoDB
     │
     ├─ Trigger: sendResponseToClient()
     │  └─ Email sent to user: "Thank you, we'll contact you"
     │
     ▼
Response: {
  message: "Account created successfully",
  user: { id, firstName, lastName, email, phone }
}
     │
     ▼
Frontend Toast: ✓ Account created successfully
```

## Data Flow - Contact Form Submission

```
Frontend Form
     │
     ├─ Validation (client-side)
     │
     ▼
POST /api/contact/submit
{
  firstName, lastName, email, phone,
  message, subject, serviceType
}
     │
     ▼
contactController.submitContactForm()
     │
     ├─ Validate input
     ├─ Save to MongoDB (ContactForm collection)
     │
     ├─ Parallel execution:
     │  │
     │  ├─ sendContactFormToAdmin()
     │  │  └─ Email to ADMIN_EMAIL with full form details
     │  │     + All user info
     │  │     + Message content
     │  │     + Timestamp
     │  │
     │  └─ sendResponseToClient()
     │     └─ Email to CLIENT_EMAIL
     │        "We received your message"
     │        "We'll contact you in 24-48 hours"
     │
     ▼
Response: {
  message: "Your message has been received. We will contact you soon!",
  data: { /* saved form object */ }
}
     │
     ▼
Frontend Toast: ✓ Message received, we'll contact you soon
```

## Database Schema

### Users Collection
```
{
  _id: ObjectId
  firstName: String (required, min 2 chars)
  lastName: String (required, min 2 chars)
  email: String (required, unique, email format)
  phone: String (required, 10-15 digits)
  password: String (required, 6+ chars, HASHED)
  agreeToTerms: Boolean (required)
  createdAt: Date (automatic)
  updatedAt: Date (automatic)
}

Indexes:
- _id (primary)
- email (unique)
```

### ContactForms Collection
```
{
  _id: ObjectId
  firstName: String (required)
  lastName: String (required)
  email: String (required, email format)
  phone: String (required, 10-15 digits)
  message: String (required, min 10 chars)
  subject: String (optional)
  serviceType: String (enum: Individual, Business, Combo, Investments, 1-1, Other)
  createdAt: Date (automatic)
  updatedAt: Date (automatic)
}

Indexes:
- _id (primary)
- email (for querying)
- createdAt (for sorting)
```

## Email Flow

```
┌─────────────────────────────────┐
│ Nodemailer Configuration        │
│ SMTP_HOST: smtp.gmail.com       │
│ SMTP_PORT: 587 (TLS)            │
│ SMTP_USER: your-email@gmail.com │
│ SMTP_PASS: app-password         │
└─────────────────────────────────┘
            │
            ▼
┌──────────────────────────────────┐
│   transporter.sendMail()         │
│   (nodemailer/config/mailer.ts)  │
└──────────────────────────────────┘
            │
    ┌───────┴────────┬────────────┐
    │                │            │
    ▼                ▼            ▼
┌──────────┐  ┌──────────────┐  ┌──────────────┐
│ Welcome  │  │ Admin Form   │  │ Auto-Reply   │
│ Email    │  │ Notification │  │ to Client    │
│          │  │              │  │              │
│ To: User │  │ To: Admin    │  │ To: Client   │
└──────────┘  └──────────────┘  └──────────────┘
    │                │            │
    └────────────────┴────────────┘
                     │
                     ▼
            ┌────────────────────┐
            │ Gmail/SMTP Server  │
            └────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
        ▼                         ▼
   ┌─────────┐              ┌────────────┐
   │ Inbox   │              │ Spam       │
   │(usually)│              │(sometimes) │
   └─────────┘              └────────────┘
```

## API Endpoints Map

```
┌─────────────────────────────────────────┐
│     API Routes (Port 5000)              │
├─────────────────────────────────────────┤
│                                         │
│  /api/                                  │
│  ├── health (GET) → Server status       │
│  │                                      │
│  ├── users/                             │
│  │   ├── POST   /signup                 │
│  │   ├── GET    /                       │
│  │   ├── GET    /:id                    │
│  │   ├── PUT    /:id                    │
│  │   └── DELETE /:id                    │
│  │                                      │
│  └── contact/                           │
│      ├── POST   /submit                 │
│      ├── GET    /                       │
│      ├── GET    /:id                    │
│      └── DELETE /:id                    │
│                                         │
└─────────────────────────────────────────┘
```

## Deployment Architecture

```
┌──────────────────────────────────────────────────────┐
│  Production Environment                              │
├──────────────────────────────────────────────────────┤
│                                                      │
│  ┌─────────────────────────────────────────────┐   │
│  │ Frontend (Vercel/Netlify)                   │   │
│  │ - Built React app                           │   │
│  │ - Static hosting                            │   │
│  └─────────────────────────────────────────────┘   │
│            │                                        │
│            └──────────────────────┐                │
│                                   │                │
│  ┌────────────────────────────────▼────────────┐  │
│  │ Backend (Heroku/Railway/Vercel)             │  │
│  │ - Express.js server                         │  │
│  │ - Node.js runtime                           │  │
│  │ - PORT: process.env.PORT                    │  │
│  └────────────────────────────────▲────────────┘  │
│                                   │                │
│    ┌──────────────────────────────┴─────────────┐ │
│    │                                            │  │
│    ▼                                            ▼  │
│ ┌──────────────┐                      ┌──────────┐│
│ │ MongoDB Atlas│                      │  Gmail   ││
│ │ (Cloud DB)   │                      │ (SMTP)   ││
│ └──────────────┘                      └──────────┘│
│                                                      │
└──────────────────────────────────────────────────────┘
```

## Development Architecture

```
Local Machine
│
├─ Frontend Dev Server (Port 8081)
│  └─ http://localhost:8081
│     ├─ Hot reload enabled
│     └─ Uses VITE_API_URL=http://localhost:5000/api
│
├─ Backend Dev Server (Port 5000)
│  └─ http://localhost:5000
│     ├─ Node --watch (auto-reload)
│     └─ Connected to local MongoDB
│
└─ Local MongoDB (Port 27017)
   └─ mongodb://localhost:27017/mango-admi
```

---

This architecture ensures:
✅ Separation of concerns
✅ Easy to scale
✅ Easy to maintain
✅ Easy to deploy
✅ Secure password storage
✅ Automatic email notifications
✅ CORS support for frontend
✅ Type-safe with TypeScript
