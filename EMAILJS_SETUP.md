# EmailJS Setup Guide

Follow these steps to configure EmailJS for your contact form:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email
5. Copy the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set up your template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{to_name}}` - Your name (Meruva Lokesh)

Example template:
```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Save the template and copy the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `aBcDeFgHiJkLmNo`)

## Step 5: Update .env File

1. Open the `.env` file in your project root
2. Replace the placeholder values:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
REACT_APP_EMAILJS_PUBLIC_KEY=aBcDeFgHiJkLmNo
```

## Step 6: Restart Development Server

After updating the .env file, restart your development server:

```bash
npm start
```

## Testing

1. Go to your portfolio contact form
2. Fill in all fields
3. Click "Send Message"
4. You should receive an email at your configured email address

## Troubleshooting

### Form shows error message
- Check that all three credentials are correctly set in `.env`
- Verify credentials match exactly from EmailJS dashboard
- Make sure you restarted the server after editing `.env`

### Email not received
- Check your spam/junk folder
- Verify email service is properly connected in EmailJS
- Test sending an email directly from EmailJS dashboard first

### Rate limits
- Free tier: 200 emails/month
- Upgrade if you need more

## Security Notes

- ✅ `.env` is in `.gitignore` - won't be committed to Git
- ✅ Use `.env.example` as a template for others
- ❌ Never commit actual credentials to version control
- ❌ Don't share your Public Key publicly (it's in frontend, but still keep it safe)

## Alternative: Direct mailto Link

If you don't want to set up EmailJS, users can still contact you via the "Send Email Directly" button which opens their default email client.
