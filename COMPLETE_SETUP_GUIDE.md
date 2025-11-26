# Complete Backend Setup Guide - Mango Admi

## Project Overview

This is a complete full-stack solution for **Mango Admi - Achieve Your Goals** with:
- ✅ Express.js backend server
- ✅ MongoDB database for user & form data
- ✅ Nodemailer email service
- ✅ RESTful API endpoints
- ✅ Frontend integration utilities

---

## Quick Start

### Backend Setup (5 minutes)

```bash
# 1. Navigate to backend
cd backend

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env
# Edit .env with your MongoDB URI and email credentials

# 4. Start development server
npm run dev
```

Server runs on: `http://localhost:5000`

### Frontend Setup (2 minutes)

```bash
# 1. In root project directory
cp .env.example .env

# 2. Ensure VITE_API_URL is set to backend
# VITE_API_URL=http://localhost:5000/api

# 3. Update your components to use the API
# See examples below or FRONTEND_SETUP.md
```

---

## Backend File Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── database.ts        # MongoDB connection
│   │   └── mailer.ts          # Nodemailer setup
│   ├── models/
│   │   ├── User.ts            # User schema
│   │   └── ContactForm.ts     # Contact form schema
│   ├── controllers/
│   │   ├── userController.ts  # User logic
│   │   └── contactController.ts # Form logic
│   ├── routes/
│   │   ├── userRoutes.ts      # /api/users endpoints
│   │   └── contactRoutes.ts   # /api/contact endpoints
│   ├── services/
│   │   └── emailService.ts    # Email sending
│   └── index.ts               # Main server
├── .env.example               # Environment template
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## Key Features & How They Work

### 1. User Management

**Sign Up Flow:**
1. Frontend sends user data to `POST /api/users/signup`
2. Backend validates data
3. Password is hashed using bcryptjs
4. User saved to MongoDB
5. Welcome email sent to user
6. Confirmation response returned to frontend

**Database Fields:**
- firstName, lastName, email, phone, password (hashed), agreeToTerms

### 2. Contact Form Submission

**Contact Flow:**
1. User fills form on website
2. Sends to `POST /api/contact/submit`
3. Backend validates and saves to database
4. **Two emails sent simultaneously:**
   - Email to admin with full form details
   - Auto-response email to client
5. Success message returned to frontend

**Database Fields:**
- firstName, lastName, email, phone, message, subject, serviceType

### 3. Email Service (Nodemailer)

**Auto-sending emails for:**
- Welcome email when user signs up
- Contact form submission to admin
- Auto-response to client (we'll contact you soon)

**Configured via environment variables:**
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
OWNER_EMAIL=admin@email.com
```

---

## Environment Variables Setup

### Backend `.env` File

```env
# Database
MONGODB_URI=mongodb://localhost:27017/mango-admi
DATABASE_NAME=mango-admi

# Server
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:8081

# Email (Gmail Example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
OWNER_EMAIL=admin@mangoadmi.com
FROM_EMAIL=noreply@mangoadmi.com
ADMIN_EMAIL=admin@mangoadmi.com

# JWT (optional, for future auth)
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d
```

### Frontend `.env` File

```env
VITE_API_URL=http://localhost:5000/api
```

---

## API Endpoints Reference

### User Endpoints

#### POST /api/users/signup
Create new user account
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "password": "password123",
  "confirmPassword": "password123",
  "agreeToTerms": true
}
```

#### GET /api/users/:id
Get user by ID

#### GET /api/users
Get all users

#### PUT /api/users/:id
Update user (firstName, lastName, phone)

#### DELETE /api/users/:id
Delete user

---

### Contact Form Endpoints

#### POST /api/contact/submit
Submit contact form
```json
{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "phone": "9876543210",
  "message": "I'm interested in your services",
  "subject": "Service Inquiry",
  "serviceType": "Business"
}
```
**Response:** "Your message has been received. We will contact you soon!"

#### GET /api/contact
Get all contact forms

#### GET /api/contact/:id
Get specific form

#### DELETE /api/contact/:id
Delete form

---

## Frontend Integration Examples

### Example 1: SignUp Component

```typescript
import { userApi } from '@/lib/api';
import { toast } from 'sonner';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await userApi.signUp(formData);
      
      if (response.user) {
        toast.success("Account created successfully! Check your email.");
        // Reset form
        setFormData({...});
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  // Rest of component...
};
```

### Example 2: Contact Form Component

```typescript
import { contactApi } from '@/lib/api';
import { toast } from 'sonner';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await contactApi.submitForm(formData);
      
      if (response.data) {
        toast.success(response.message); 
        // User gets auto-response email automatically
        // Admin gets notified automatically
        setFormData({...}); // Reset form
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Failed to submit form");
    }
  };

  // Rest of component...
};
```

---

## Setup Instructions by Platform

### Gmail (Recommended)

1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Ensure 2-factor authentication is enabled
3. Select "Mail" and "Windows Computer" (or your device)
4. Copy the 16-character password
5. Use it as `SMTP_PASS` in `.env`

### Other Email Providers

Just update the SMTP configuration in `.env`:
- **Outlook**: smtp.outlook.com:587
- **SendGrid**: smtp.sendgrid.net:587
- **Mailgun**: smtp.mailgun.org:587

---

## Database Setup

### Option 1: Local MongoDB

```bash
# Install MongoDB from: https://www.mongodb.com/try/download/community
# Then in .env:
MONGODB_URI=mongodb://localhost:27017/mango-admi
```

### Option 2: MongoDB Atlas (Cloud)

1. Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Add to `.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mango-admi
   ```

---

## Testing the Backend

### 1. Health Check
```bash
curl http://localhost:5000/api/health
# Response: { "message": "Server is running" }
```

### 2. Test with Postman/Insomnia
- Import the endpoints from API Endpoints section above
- Test POST /api/contact/submit to verify email sends

### 3. Check Emails
- Look in Gmail inbox (or spam folder)
- Verify admin gets form details
- Verify client gets auto-response

---

## Common Issues & Solutions

### Issue: "Cannot connect to MongoDB"
**Solution:** 
- Check MongoDB is running locally OR MongoDB Atlas connection string is correct
- Verify `MONGODB_URI` in `.env`

### Issue: "Cannot send email"
**Solution:**
- Verify Gmail app password is correct (not regular password)
- Check 2FA is enabled on Gmail
- Verify `SMTP_USER` and `SMTP_PASS` in `.env`
- Check email in spam folder

### Issue: "CORS errors in frontend"
**Solution:**
- Ensure `FRONTEND_URL` in backend `.env` matches your frontend URL
- Restart backend server after changing `.env`

### Issue: "Module not found" errors
**Solution:**
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## Deployment Checklist

Before deploying to production:

- [ ] Change all passwords in `.env`
- [ ] Set `NODE_ENV=production`
- [ ] Update `FRONTEND_URL` to production domain
- [ ] Use production MongoDB (MongoDB Atlas)
- [ ] Use production email service
- [ ] Update `JWT_SECRET` to strong random string
- [ ] Test all API endpoints
- [ ] Enable HTTPS in production
- [ ] Add rate limiting for API endpoints

---

## Project Statistics

**Backend:**
- 1 main server file
- 2 config files (database, mailer)
- 2 model files (User, ContactForm)
- 2 controller files (user, contact)
- 2 route files (user, contact)
- 1 service file (email)
- Total: ~600 lines of TypeScript code

**API Endpoints:**
- 5 User endpoints
- 4 Contact endpoints
- 1 Health check
- Total: 10 API endpoints

**Database Collections:**
- Users (with hashed passwords)
- ContactForms (with validation)

---

## Next Steps

1. ✅ Run `npm install` in backend
2. ✅ Setup `.env` files (backend & frontend)
3. ✅ Start MongoDB
4. ✅ Run `npm run dev` in backend
5. ✅ Import API functions in frontend components
6. ✅ Replace form handlers with API calls
7. ✅ Test all features
8. ✅ Deploy!

---

## Support & Questions

For issues:
1. Check backend logs in terminal
2. Verify `.env` configuration
3. Test endpoints with Postman
4. Check database with MongoDB Compass
5. Look at error messages returned by API

**Everything is documented in:**
- `backend/README.md` - Complete backend docs
- `FRONTEND_SETUP.md` - Frontend integration guide
- This file - Complete setup guide

---

**Created for: Mango Admi - Achieve Your Goals**
**Date: November 26, 2025**
**Stack: TypeScript, Express, MongoDB, Nodemailer, React**
