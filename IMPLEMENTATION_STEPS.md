# Step-by-Step Implementation Guide

## Prerequisites

Make sure you have installed:
- Node.js (v16 or higher)
- npm or yarn
- Git (for version control)
- MongoDB (local) OR MongoDB Atlas account (cloud)

## Phase 1: Backend Setup (30 minutes)

### Step 1: Install Backend Dependencies

```powershell
# Navigate to backend
cd backend

# Install dependencies
npm install

# Output should show:
# added 150 packages
```

### Step 2: Setup Environment Variables

```powershell
# Create .env file from template
cp .env.example .env

# Edit the file with your settings
# Open in VSCode: code .env
```

**Fill in `.env` with:**

```env
# REQUIRED: MongoDB
MONGODB_URI=mongodb://localhost:27017/mango-admi
DATABASE_NAME=mango-admi

# REQUIRED: Server
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:8081

# REQUIRED: Email (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
OWNER_EMAIL=admin@mangoadmi.com
FROM_EMAIL=noreply@mangoadmi.com
ADMIN_EMAIL=admin@mangoadmi.com

# OPTIONAL: JWT (for future use)
JWT_SECRET=your-super-secret-key-here
JWT_EXPIRE=7d
```

### Step 3: Setup MongoDB

**Option A: Local MongoDB**

```powershell
# Download from: https://www.mongodb.com/try/download/community
# Install MongoDB Community Edition

# Start MongoDB service (Windows):
# Services app → MongoDB Server → Start

# Verify connection:
mongosh
# If connected, type: exit
```

**Option B: MongoDB Atlas (Recommended)**

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a cluster (M0 Free tier)
4. Get connection string
5. Update `.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mango-admi
   ```

### Step 4: Setup Email (Gmail Example)

1. Go to https://myaccount.google.com/apppasswords
2. Select: Mail → Windows Computer
3. Copy the 16-character password
4. Update `.env`:
   ```
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=the-16-char-password-here
   ```

### Step 5: Start Backend Server

```powershell
# From backend directory
npm run dev

# You should see:
# ✓ MongoDB connected successfully
# ✓ Email service ready
# ✓ Server running on http://localhost:5000

# Press Ctrl+C to stop
```

### Step 6: Test Backend Health

```powershell
# In new terminal:
curl http://localhost:5000/api/health

# Response:
# {"message":"Server is running"}
```

---

## Phase 2: Frontend Integration (20 minutes)

### Step 7: Setup Frontend Environment

```powershell
# In project root (not backend folder)
cp .env.example .env

# Verify it contains:
# VITE_API_URL=http://localhost:5000/api
```

### Step 8: Update SignUp Component

Open `src/pages/SignUp.tsx` and replace the submit handler:

**Find this code:**
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  if (formData.password !== formData.confirmPassword) {
    toast.error("Passwords do not match!");
    return;
  }

  if (!formData.agreeToTerms) {
    toast.error("Please agree to the terms and conditions");
    return;
  }

  toast.success("Account created successfully! Welcome to Mango Admi.");
  // Reset form
  setFormData({...});
};
```

**Replace with:**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Client-side validation
  if (formData.password !== formData.confirmPassword) {
    toast.error("Passwords do not match!");
    return;
  }

  if (!formData.agreeToTerms) {
    toast.error("Please agree to the terms and conditions");
    return;
  }

  try {
    // Import at top: import { userApi } from "@/lib/api";
    const response = await userApi.signUp(formData);
    
    if (response.user) {
      toast.success(response.message);
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
      });
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    console.error("SignUp error:", error);
    toast.error("An error occurred during signup");
  }
};
```

**Add import at top of file:**
```typescript
import { userApi } from "@/lib/api";
```

### Step 9: Create/Update Contact Form Component

Find any contact form in your app (or add one) and use:

```typescript
import { contactApi } from "@/lib/api";
import { toast } from "sonner";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
    serviceType: "Other",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await contactApi.submitForm(formData);
      
      if (response.data) {
        toast.success(response.message); // "Your message has been received..."
        // User automatically gets email confirmation
        // Admin automatically gets notified
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          subject: "",
          serviceType: "Other",
        });
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to submit form");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      {/* ... other form fields ... */}
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
```

### Step 10: Test Frontend-Backend Connection

```powershell
# 1. Make sure backend is running:
cd backend
npm run dev

# 2. In another terminal, run frontend:
npm run dev

# 3. Go to http://localhost:8081
# 4. Try signing up → Check browser console for errors
# 5. Should see success toast and email in inbox
```

---

## Phase 3: Testing (15 minutes)

### Step 11: Test User Registration

**Test Case 1: Successful Signup**
```json
POST http://localhost:5000/api/users/signup
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "9876543210",
  "password": "TestPass123",
  "confirmPassword": "TestPass123",
  "agreeToTerms": true
}
```

Expected:
- ✅ Status: 201
- ✅ Message: "Account created successfully"
- ✅ User data returned
- ✅ Welcome email sent to john.doe@example.com

**Test Case 2: Duplicate Email**
```json
POST http://localhost:5000/api/users/signup
{
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "john.doe@example.com", ← Same email as above
  "phone": "9876543211",
  "password": "TestPass123",
  "confirmPassword": "TestPass123",
  "agreeToTerms": true
}
```

Expected:
- ✅ Status: 409
- ✅ Message: "Email already registered"

### Step 12: Test Contact Form

**Test Case 1: Submit Contact Form**
```json
POST http://localhost:5000/api/contact/submit
{
  "firstName": "Alice",
  "lastName": "Smith",
  "email": "alice@example.com",
  "phone": "9876543212",
  "message": "I'm interested in your Individual service package and would like more information.",
  "subject": "Service Inquiry",
  "serviceType": "Individual"
}
```

Expected:
- ✅ Status: 201
- ✅ Message: "Your message has been received. We will contact you soon!"
- ✅ Email 1: Sent to ADMIN_EMAIL with all form details
- ✅ Email 2: Sent to alice@example.com with auto-response

### Step 13: Verify Emails

**Check your inbox for:**

**Email 1 (From Admin):**
```
Subject: New Contact Form: Service Inquiry
To: admin@mangoadmi.com

New Contact Form Submission
Name: Alice Smith
Email: alice@example.com
Phone: 9876543212
Service Type: Individual
Subject: Service Inquiry

Message:
I'm interested in your Individual service package and would like more information.

Submitted on: [timestamp]
```

**Email 2 (To Client):**
```
Subject: We Received Your Message - Mango Admi
To: alice@example.com

Thank You for Contacting Mango Admi!

Hi Alice,

Thank you for reaching out to us. We have received your message and appreciate your interest in our services.

Our team will review your request and get back to you as soon as possible. We typically respond within 24-48 hours.

If you have any urgent inquiries, please feel free to call us directly.

Best regards,
Mango Admi Team
Achieve Your Goals
```

---

## Phase 4: Deployment (Optional - 30 minutes)

### Option A: Deploy Backend to Railway

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Add backend API"
   git push origin main
   ```

2. Connect to Railway:
   - Go to https://railway.app
   - Sign in with GitHub
   - Select your repo
   - Railway auto-detects Node.js
   - Add environment variables from `.env`

3. Get deployment URL and update frontend:
   ```env
   VITE_API_URL=https://your-app.railway.app/api
   ```

### Option B: Deploy Backend to Heroku

1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Add MongoDB Atlas and update config:
   ```bash
   heroku config:set MONGODB_URI="your-atlas-uri"
   heroku config:set SMTP_USER="your-email@gmail.com"
   ```
5. Deploy:
   ```bash
   git push heroku main
   ```

### Deploy Frontend to Vercel

1. Go to https://vercel.com
2. Import your GitHub repo
3. Set environment variables:
   ```
   VITE_API_URL=https://your-backend-url/api
   ```
4. Deploy!

---

## Troubleshooting Checklist

### Backend Won't Start
- [ ] Is MongoDB running?
- [ ] Is `.env` file in `backend` folder?
- [ ] Are all dependencies installed? (`npm install`)
- [ ] Is port 5000 available?

### Emails Not Sending
- [ ] Check SMTP credentials in `.env`
- [ ] Is Gmail 2FA enabled?
- [ ] Did you use app password (not regular password)?
- [ ] Check spam folder
- [ ] Check backend logs for errors

### Frontend Can't Connect to Backend
- [ ] Is backend server running? (`npm run dev` in backend folder)
- [ ] Is `VITE_API_URL` correct?
- [ ] Check browser console for errors
- [ ] Check CORS settings in backend

### Database Issues
- [ ] Is MongoDB running/accessible?
- [ ] Is `MONGODB_URI` correct?
- [ ] Can you connect with MongoDB Compass?
- [ ] Check backend logs

---

## Success Checklist

- [ ] Backend server starts with `npm run dev`
- [ ] Frontend connects to backend
- [ ] User can sign up successfully
- [ ] Welcome email received
- [ ] Contact form can be submitted
- [ ] Admin email received with form details
- [ ] Client receives auto-response email
- [ ] All data appears in MongoDB

---

## What's Next?

1. **Frontend Features**
   - Update all forms to use API
   - Add loading states
   - Add error boundaries

2. **Backend Enhancements**
   - Add authentication (JWT)
   - Add rate limiting
   - Add logging
   - Add file uploads

3. **Email Templates**
   - Customize email styling
   - Add company branding
   - Add tracking/analytics

4. **Deployment**
   - Setup CI/CD pipeline
   - Setup automated backups
   - Setup monitoring

---

## Quick Command Reference

```powershell
# Backend commands
cd backend
npm install                 # Install dependencies
npm run dev                # Start dev server
npm run build              # Build for production
npm start                  # Run production build

# Frontend commands
cd ..
npm run dev                # Start dev server
npm run build              # Build for production
npm run preview            # Preview build

# MongoDB
mongosh                    # Connect to MongoDB
db.users.find({})         # View all users
db.contactforms.find({})  # View all contact forms

# Testing (with curl)
curl http://localhost:5000/api/health
curl -X POST http://localhost:5000/api/users/signup \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","lastName":"User","email":"test@example.com","phone":"1234567890","password":"pass123","confirmPassword":"pass123","agreeToTerms":true}'
```

---

## Documentation Reference

- `COMPLETE_SETUP_GUIDE.md` - Full setup walkthrough
- `QUICK_REFERENCE.md` - Quick commands
- `FRONTEND_SETUP.md` - Frontend integration
- `ARCHITECTURE.md` - System diagrams
- `backend/README.md` - API documentation
- `BACKEND_SUMMARY.md` - Summary of what was created

---

**You're all set! 🚀**

Your backend is ready. Follow these steps and you'll have a fully functional Mango Admi backend with user management, contact forms, and email notifications!

Good luck! 💪
