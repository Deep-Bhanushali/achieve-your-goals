# Next.js Migration - Setup Guide

## Migration Complete! ✅

All files have been successfully migrated from Vite + React + Express to Next.js 15 App Router.

---

## Next Steps to Run Your Application

### 1. Set Up NeonDB PostgreSQL Database

You need a PostgreSQL database. Here's how to set it up:

#### Option A: Use NeonDB (Recommended - Free Tier Available)

1. **Create Account**: Go to https://neon.tech
2. **Create Project**:
   - Click "Create a project"
   - Choose a name (e.g., "mango-admi-db")
   - Select a region closest to you
   - Click "Create project"
3. **Get Connection String**:
   - Once created, you'll see a connection string like:
     ```
     postgresql://username:password@ep-xxx.region.aws.neon.tech/dbname?sslmode=require
     ```
4. **Update `.env` file**:
   Replace the placeholder DATABASE_URL with your actual connection string:
   ```env
   DATABASE_URL="postgresql://your-actual-connection-string"
   ```

#### Option B: Use Local PostgreSQL (For Development)

If you prefer to run PostgreSQL locally:
1. Install PostgreSQL on your machine
2. Create a database:
   ```sql
   CREATE DATABASE mango_admi;
   ```
3. Update `.env`:
   ```env
   DATABASE_URL="postgresql://postgres:your-password@localhost:5432/mango_admi"
   ```

### 2. Initialize Database

Run these commands in your terminal:

```bash
# Push database schema to your database
npx prisma db push

# Generate Prisma Client (creates TypeScript types)
npx prisma generate
```

You should see output like:
```
✓ Database schema successfully pushed
✓ Prisma Client generated
```

### 3. Start Development Server

```bash
npm run dev
```

Your app will be available at: **http://localhost:3000**

---

## File Structure After Migration

```
achieve-your-goals/
├── app/                          # Next.js App Router pages
│   ├── api/                      # API routes
│   │   ├── users/
│   │   │   ├── signup/route.ts  # User registration endpoint
│   │   │   └── [id]/route.ts    # User CRUD operations
│   │   ├── contact/
│   │   │   ├── submit/route.ts  # Contact form submission
│   │   │   └── [id]/route.ts    # Contact form CRUD
│   │   └── health/route.ts      # Health check endpoint
│   ├── page.tsx                 # Home page (/)
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── individual/page.tsx      # Individual services
│   ├── business/page.tsx        # Business services
│   ├── combo-service/page.tsx   # Combo services
│   ├── investments/page.tsx     # Investments page
│   ├── 1-1/page.tsx            # One-on-one page
│   ├── prices-plans/page.tsx   # Pricing page
│   ├── schedule/page.tsx        # Schedule/appointment page
│   ├── sign-up/page.tsx         # Sign up page
│   ├── terms-and-conditions/page.tsx
│   └── not-found.tsx           # 404 page
├── components/                  # React components
│   ├── ui/                      # Shadcn UI components
│   ├── Navbar.tsx              # Navigation (updated for Next.js)
│   ├── Footer.tsx
│   └── providers/
│       └── QueryClientProvider.tsx
├── lib/                         # Utility libraries
│   ├── prisma.ts               # Prisma client singleton
│   ├── email.ts                # Email service (Nodemailer)
│   └── api.ts                  # API client functions
├── prisma/
│   └── schema.prisma           # Database schema
├── public/                      # Static assets
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

---

## What Changed?

### ✅ No Longer Needed
- **Vite** - Replaced with Next.js
- **React Router** - Replaced with Next.js file-based routing
- **Express.js backend** - Replaced with Next.js API routes
- **MongoDB/Mongoose** - Replaced with NeonDB PostgreSQL + Prisma
- **`src/` folder** - Files moved to root level (except assets)

### ✅ New Architecture
- **Single codebase**: Frontend and backend together
- **API Routes**: In `app/api/` folder
- **Database**: PostgreSQL via Prisma ORM
- **Routing**: File-based in `app/` directory
- **Environment variables**: Changed from `VITE_*` to `NEXT_PUBLIC_*` for client-side vars

---

## Testing Your Application

### Test API Routes

```bash
# Health check
curl http://localhost:3000/api/health

# Test signup (replace with actual data)
curl -X POST http://localhost:3000/api/users/signup \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "password": "password123",
    "confirmPassword": "password123",
    "agreeToTerms": true
  }'

# Test contact form
curl -X POST http://localhost:3000/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane@example.com",
    "phone": "0987654321",
    "message": "Test message from contact form"
  }'
```

### Test Database Connection

```bash
# Open Prisma Studio (database GUI)
npm run db:studio
```

This opens a web interface where you can view/edit your database tables.

---

## Email Configuration

Your email is already configured! The `.env` file contains:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=bhanushalideep24@gmail.com
SMTP_PASS=pvof xkub txom yhvg
FROM_EMAIL=noreply@mangoadmi.in
ADMIN_EMAIL=sahay@mangoadmi.in
```

**Note**: If using Gmail, you may need to:
1. Enable 2-factor authentication
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the App Password in `SMTP_PASS`

---

## Deployment (Vercel)

When ready to deploy:

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Deploy
```bash
vercel
```

### 3. Add Environment Variables in Vercel Dashboard
- Go to your project settings on Vercel
- Add the following environment variables:
  - `DATABASE_URL` (your NeonDB connection string)
  - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
  - `FROM_EMAIL`, `ADMIN_EMAIL`

### 4. Deploy!
Your app will be live at `https://your-project.vercel.app`

---

## Troubleshooting

### "Cannot find module" errors
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Database connection errors
- Verify your `DATABASE_URL` in `.env` is correct
- Ensure NeonDB project is active
- Try running `npx prisma db push` again

### Port 3000 already in use
```bash
# Kill process on port 3000 (Windows)
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Email not sending
- Check SMTP credentials
- For Gmail, use App Password (not regular password)
- Check console logs for email errors

---

## Old Files (Can Be Deleted)

Once you confirm everything works, you can delete:
- `src/` folder (except `assets/` if referenced)
- `backend/` folder
- `vite.config.ts`
- `index.html`
- `tsconfig.app.json`
- `tsconfig.node.json`

**Keep**: `public/assets/` for images and static files

---

## Next Steps for Development

1. **Add authentication** (if needed):
   - Install NextAuth.js or implement custom JWT
   - Add protected routes

2. **Add payment gateway** (Razorpay):
   - Install Razorpay SDK
   - Create checkout API route
   - Add payment success/failure webhooks

3. **Optimize images**:
   - Convert all `<img>` tags to Next.js `<Image>` component
   - Add image domains to `next.config.ts`

4. **Add SEO**:
   - Update metadata in each page
   - Add sitemap.xml
   - Add robots.txt

---

## Support

If you encounter issues:
1. Check the console for error messages
2. Verify all environment variables are set
3. Ensure database schema is pushed: `npx prisma db push`
4. Check Next.js docs: https://nextjs.org/docs

---

**Migration completed successfully!** 🎉
