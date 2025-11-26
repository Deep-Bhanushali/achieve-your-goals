### Frontend Setup

To connect your frontend to the backend API:

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Make sure the API URL matches your backend server:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

3. Use the API utilities in your components:

```typescript
import { userApi, contactApi } from '@/lib/api';
import { toast } from 'sonner';

// In your SignUp component
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await userApi.signUp(formData);
    
    if (response.user) {
      toast.success(response.message);
      // Clear form
      setFormData({...});
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error('An error occurred');
  }
};

// In your Contact Form component
const handleContactSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await contactApi.submitForm(formData);
    
    if (response.data) {
      toast.success(response.message); // "Your message has been received..."
      // Clear form
      setFormData({...});
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error('Failed to submit form');
  }
};
```

4. The backend will:
   - Store user data in MongoDB
   - Send form data to admin email
   - Send auto-response to client
   - Return success/error messages

See `backend/README.md` for complete API documentation.
