# Quick Setup Checklist ✅

## Migration Complete! Do These 5 Steps to Run Your App:

### Step 1: Set Up Your Database ⚠️ REQUIRED

**Option 1: NeonDB (Recommended - Free Tier)**

1. Go to https://neon.tech
2. Click "Create a project"
3. Copy the connection string (looks like: `postgresql://user:pass@ep-xxx...`)
4. Paste it in your `.env` file replacing the placeholder:
   ```env
   DATABASE_URL="paste-your-connection-string-here"
   ```

**Option 2: Local PostgreSQL** (for testing only)
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/mango_admi"
```

---

### Step 2: Initialize Database

Run this command in your terminal:

```bash
npx prisma db push
```

✅ You should see: `✔ Database schema successfully pushed`

---

### Step 3: Start Your App

```bash
npm run dev
```

✅ Visit: **http://localhost:3000**

---

### Step 4: Test It Works

1. Homepage should load at http://localhost:3000
2. Try clicking "Schedule" in the navbar
3. Fill out the contact form and submit
4. Check if email is sent (see console for logs)

---

### Step 5: Check Database (Optional)

```bash
npm run db:studio
```

This opens a database GUI where you can see submitted forms.

---

## Email Configuration Already Set Up! ✅

Your email credentials are already configured in `.env`:
- Email: bhanushalideep24@gmail.com
- Admin receives: sahay@mangoadmi.in

If emails don't send, you may need a Gmail App Password:
1. Go to https://myaccount.google.com/apppasswords
2. Generate a new App Password
3. Replace `SMTP_PASS` in `.env`

---

## Troubleshooting

**"Database connection failed"?**
- Check your `DATABASE_URL` is correct in `.env`
- Make sure you ran `npx prisma db push`

**"Port 3000 already in use"?**
```bash
npx kill-port 3000
```

**"Cannot find module errors"?**
```bash
npm install
```

---

## What's Been Done ✅

- ✅ Next.js 15 installed
- ✅ All pages converted (11 pages)
- ✅ API routes created (signup, contact, health)
- ✅ Database schema created (Prisma)
- ✅ Email service configured
- ✅ Components updated
- ✅ Prisma Client generated

---

## What You Need To Do 🎯

1. **Set up NeonDB database** (Step 1 above)
2. **Run `npx prisma db push`** (Step 2 above)
3. **Run `npm run dev`** (Step 3 above)
4. **Test the app** (Step 4 above)

That's it! Your app is ready. 🚀

---

**Need help?** Check `MIGRATION_GUIDE.md` for detailed instructions.
