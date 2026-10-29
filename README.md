# Mango Admi - Achieve Your Goals

A modern web platform for financial planning, tax consultation, and investment advisory services built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Prisma ORM**.

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Database & ORM:** [PostgreSQL](https://www.postgresql.org/) (NeonDB-ready) & [Prisma](https://www.prisma.io/)
- **Data Fetching & State:** [TanStack React Query](https://tanstack.com/query/latest)
- **Email Service:** [Nodemailer](https://nodemailer.com/) (SMTP integration)
- **Authentication / Security:** [bcryptjs](https://github.com/dcodeIO/bcrypt.js) for password hashing

---

## ✨ Features

- **Marketing & Advisory Pages:**
  - **Homepage:** Hero, stats counter, services highlight, about story, testimonials, and call-to-actions.
  - **Individual Services:** Customized financial planning for individuals (`/individual`).
  - **Business Services:** Advisory, compliance, and corporate taxation (`/business`).
  - **Combo Services:** Bundled investment and tax management packages (`/combo-service`).
  - **Investments & 1-on-1 Sessions:** Direct advisory and booking flows (`/investments`, `/1-1`).
  - **Tax Calculator:** Tax liability assessment tool & resources (`/tax-calculator`).
  - **Pricing Plans:** Transparent pricing breakdown (`/prices-plans`).
  - **Schedule Consultation:** Direct appointment scheduling (`/schedule`).
- **Contact Forms (`/api/contact/submit`):**
  - Stores inquiries in PostgreSQL.
  - Instantly alerts admin via email with full inquiry details.
  - Sends a confirmation acknowledgement to the client.

---

## 📁 Project Structure

```text
mangoadmi/
├── app/                            # Next.js App Router
│   ├── (routes)/                   # Service and marketing pages
│   │   ├── 1-1/                    # 1-on-1 consultation page
│   │   ├── business/               # Business advisory page
│   │   ├── combo-service/          # Combo services page
│   │   ├── individual/             # Individual planning page
│   │   ├── investments/            # Investments page
│   │   ├── prices-plans/           # Pricing plans
│   │   ├── schedule/               # Consultation scheduling page
│   │   ├── sign-up/                # User registration page
│   │   ├── tax-calculator/         # Tax calculator page
│   │   └── terms-and-conditions/   # Terms and conditions page
│   ├── api/                        # API route handlers
│   │   ├── contact/submit/         # Contact form endpoint
│   │   ├── health/                 # Health check endpoint
│   │   └── users/signup/           # Registration endpoint
│   ├── globals.css                 # Global CSS and Tailwind directives
│   ├── layout.tsx                  # Root application layout
│   └── page.tsx                    # Landing homepage
├── components/                     # Reusable React components
│   ├── providers/                  # QueryClient & UI context providers
│   ├── ui/                         # shadcn/ui components (buttons, dialogs, forms, etc.)
│   ├── Hero.tsx                    # Landing hero section
│   ├── Navbar.tsx                  # Header navigation
│   ├── Footer.tsx                  # Footer component
│   └── ...                         # Feature sections (About, Services, Testimonials, CTA)
├── lib/                            # Shared utilities and server configs
│   ├── email.ts                    # Nodemailer configuration and templates
│   ├── prisma.ts                   # Prisma client singleton
│   └── utils.ts                    # Class name merge utilities (cn)
├── prisma/
│   └── schema.prisma               # Database models (User, ContactForm)
├── public/                         # Static assets (images, icons, logos)
└── .env.example                    # Environment variable template
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.18 or higher recommended)
- [PostgreSQL](https://www.postgresql.org/) database (local instance or hosted on [Neon](https://neon.tech))
- SMTP credentials (e.g., Gmail App Password or SMTP provider)

### 1. Clone & Install Dependencies

```bash
# Clone the repository
git clone <repository-url>
cd mangoadmi

# Install packages
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Fill in your configuration details in `.env`:

```env
# Database (PostgreSQL / NeonDB)
DATABASE_URL="postgresql://username:password@ep-example-region.aws.neon.tech/neondb?sslmode=require"

# Email Configuration (Nodemailer / SMTP)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-specific-password"
FROM_EMAIL="noreply@mangoadmi.in"

# Admin Notifications
ADMIN_EMAIL="admin@mangoadmi.in"
OWNER_EMAIL="owner@mangoadmi.in"
```

### 3. Initialize Database & Prisma Client

Push the schema to your database and generate the Prisma Client:

```bash
# Push schema migrations
npm run db:push

# Generate client types
npm run db:generate
```

> **Tip:** You can visually inspect and manage your database using Prisma Studio:
> ```bash
> npm run db:studio
> ```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Next.js development server on `localhost:3000` |
| `npm run build` | Builds the optimized production application |
| `npm run start` | Runs the compiled production server |
| `npm run lint` | Runs ESLint to check for code issues |
| `npm run db:push` | Pushes schema changes directly to the PostgreSQL database |
| `npm run db:generate` | Generates / updates the Prisma TypeScript client |
| `npm run db:studio` | Launches Prisma Studio GUI for exploring the database |

---

## 🔌 API Reference

### Health Check
- **`GET /api/health`**
  - Response: `{ status: "ok", timestamp: "..." }`

### User Sign-Up
- **`POST /api/users/signup`**
  - **Body:** `{ firstName, lastName, email, phone, password, confirmPassword, agreeToTerms }`
  - Validates input, hashes password, stores user, alerts admin, and sends an automated welcome email.

### Contact Form Submission
- **`POST /api/contact/submit`**
  - **Body:** `{ firstName, lastName, email, phone, message, subject?, serviceType? }`
  - Records form data, emails admin with user inquiry, and sends a receipt confirmation to the user.

---

## 📄 License

This project is proprietary and confidential. All rights reserved.
