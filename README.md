# 🛍️ My E-Commerce App

This is a full-stack e-commerce application built with **Next.js App Router** and **MongoDB**.

## 🚀 Features

- User & Admin Panel
- JWT-based Authentication
- Product Management
- Responsive Design with Tailwind CSS

## 📁 Folder Structure

# Folder Structure (App Router with Admin & User sections)

app/
├── (admin)/ ← Group routes for Admin
│ ├── layout.jsx ← Admin layout (sidebar, header)
│ ├── dashboard/
│ │ └── page.jsx ← /admin/dashboard
│ ├── login/
│ │ └── page.jsx ← /admin/login
│
├── (user)/ ← Group routes for Users
│ ├── layout.jsx ← User layout (navbar, footer)
│ ├── home/
│ │ └── page.jsx ← /home
│ ├── cart/
│ │ └── page.jsx ← /cart
│ ├── login/
│ │ └── page.jsx ← /login
│
├── layout.jsx ← (Optional) Global layout (used for shared styles)
└── page.jsx ← Root route `/` (can redirect to login or home)

# 🧠 What is (admin) and (user)?

These are called route groups in Next.js App Router.

They help organize your folders without affecting the URL.

So: /dashboard is shown to users from admin/dashboard/page.jsx, but the (admin) part won’t appear in the URL.

✅ It keeps clean URLs like /dashboard, /login, etc.

# Final Result:

Admin login → /admin/login

Admin dashboard → /admin/dashboard

User home → /home

User cart → /cart

Clean & organized folder structure 💪

# Let me know when you're ready and I’ll help you add:

🔐 Route protection (middleware for admin vs user)

🌐 Meta info (SEO)

🎨 Tailwind styling
