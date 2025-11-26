# Quick Reference - Backend Commands

## Installation & Setup

```bash
# Install dependencies
cd backend
npm install

# Create environment file
cp .env.example .env

# Edit .env with your credentials
# Required:
# - MONGODB_URI (local or MongoDB Atlas)
# - SMTP_USER (your email)
# - SMTP_PASS (app password for Gmail)
# - ADMIN_EMAIL (where forms are sent)
```

## Running the Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## File Locations

| File | Purpose |
|------|---------|
| `backend/src/index.ts` | Main server entry point |
| `backend/src/config/database.ts` | MongoDB connection |
| `backend/src/config/mailer.ts` | Nodemailer setup |
| `backend/src/models/User.ts` | User database schema |
| `backend/src/models/ContactForm.ts` | Contact form schema |
| `backend/src/controllers/userController.ts` | User endpoints logic |
| `backend/src/controllers/contactController.ts` | Form endpoints logic |
| `backend/src/services/emailService.ts` | Email sending logic |

## API Endpoints

### User Endpoints
```
POST   /api/users/signup        Create new user
GET    /api/users               Get all users
GET    /api/users/:id           Get specific user
PUT    /api/users/:id           Update user
DELETE /api/users/:id           Delete user
```

### Contact Form Endpoints
```
POST   /api/contact/submit      Submit form (sends emails)
GET    /api/contact             Get all forms
GET    /api/contact/:id         Get specific form
DELETE /api/contact/:id         Delete form
```

### System
```
GET    /api/health              Server health check
```

## Testing with curl

```bash
# Test server is running
curl http://localhost:5000/api/health

# Test signup
curl -X POST http://localhost:5000/api/users/signup \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "password": "password123",
    "confirmPassword": "password123",
    "agreeToTerms": true
  }'

# Test contact form
curl -X POST http://localhost:5000/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane@example.com",
    "phone": "9876543210",
    "message": "I need your services",
    "subject": "Help wanted",
    "serviceType": "Business"
  }'
```

## Frontend Integration

```typescript
import { userApi, contactApi } from '@/lib/api';

// Sign up user
const response = await userApi.signUp({
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  phone: "9876543210",
  password: "password123",
  confirmPassword: "password123",
  agreeToTerms: true
});

// Submit contact form
const response = await contactApi.submitForm({
  firstName: "Jane",
  lastName: "Smith",
  email: "jane@example.com",
  phone: "9876543210",
  message: "Message here",
  serviceType: "Business"
});
```

## Environment Variables Needed

```env
# Database
MONGODB_URI=mongodb://localhost:27017/mango-admi

# Server
PORT=5000
FRONTEND_URL=http://localhost:8081

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@email.com
```

## What Happens When:

### User Signs Up
1. Password is hashed
2. User saved to MongoDB
3. Welcome email sent to user
4. Response sent to frontend

### Contact Form Submitted
1. Form validated
2. Saved to MongoDB
3. Email sent to admin with all details
4. Auto-response email sent to user
5. Success message returned to frontend

## Troubleshooting

```bash
# Port already in use
# Change PORT in .env or:
# Kill process: taskkill /PID <process-id> /F

# Module not found
cd backend && npm install

# Database connection error
# Check MONGODB_URI in .env
# Verify MongoDB is running

# Email not sending
# Check SMTP credentials
# Gmail: Enable 2FA and use app password
# Check spam folder
```

## Database Commands (MongoDB Compass)

```javascript
// View all users
db.users.find({})

// View all contact forms
db.contactforms.find({})

// Delete a user
db.users.deleteOne({ _id: ObjectId("...") })

// Count submissions
db.contactforms.countDocuments()
```

## Frontend .env

```env
VITE_API_URL=http://localhost:5000/api
```

## Production Deployment

```bash
# Build for production
npm run build

# Deploy dist/ folder to:
# - Heroku
# - Vercel
# - Railway
# - AWS Lambda
# - Azure App Service
# - DigitalOcean
# - etc.

# Don't forget to:
# - Update .env on production server
# - Update FRONTEND_URL to production domain
# - Use production MongoDB
# - Enable HTTPS
```

## Files to Modify in Frontend

Update these files to use the backend API:

1. **src/pages/SignUp.tsx** - Replace form handler with API call
2. **src/pages/Index.tsx** - Add contact form if needed
3. **src/components/CTA.tsx** - Add contact form if needed
4. **Any other form** - Use API utilities

Example change:
```typescript
// Old: Just show toast
toast.success("Account created!");

// New: Call API
const response = await userApi.signUp(formData);
if (response.user) {
  toast.success(response.message);
}
```

---

**All detailed documentation available in:**
- `backend/README.md` - Complete API reference
- `COMPLETE_SETUP_GUIDE.md` - Full setup walkthrough
- `FRONTEND_SETUP.md` - Frontend integration guide
