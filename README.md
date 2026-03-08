# NCVSTC Education Discovery and Management System

A comprehensive, production-ready SaaS platform representing the Navigating Career for Vocational Skill Technology Council (NCVSTC). This system manages vocational training centers, student enrollment workflows, and provides a stunning public-facing educational portal.

## 🚀 Key Features
- **Public Marketing Website**: Beautiful frontend built with Next.js 14, Tailwind V4, and Framer Motion. Distinct pages for Courses, Galleries, Committees, and Online Verification.
- **Role-Based Access Control (RBAC)**: Secure multi-tenant architecture supporting **Super Admin**, **Institution**, and **Student** portals.
- **Application Engine**: Seamless workflow where students apply for courses and institutions admit/reject applicants.
- **RESTful Secure API**: Express backend typed with TypeScript, using Mongoose ODM, JWT tokens, and Zod runtime validations.
- **Real-time Certificate Verification**: A public verification engine for employers to instantly query enrollment numbers against valid issued certificates.

---

## 🛠️ Technology Stack
### Frontend
- Next.js 14 (App Router)
- React 19
- TypeScript
- TailwindCSS v4 + Native SCSS Modules
- Shadcn UI & Framer Motion
- Zustand (Global State) & Axios Interceptors

### Backend
- Node.js & Express.js
- MongoDB & Mongoose ODM
- TypeScript
- JWT Authentication & BCrypt
- Zod (Input Validation)
- Helmet & Express Rate Limiter

---

## ⚙️ Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local instance or Atlas URI)
- npm or yarn package manager

---

## 🔧 Installation & Setup

1. **Clone or Extract the Repository:**
   ```bash
   cd C:/Amal/Ncvstc
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   ```

3. **Backend Environment Variables (`backend/.env`):**
   Create a `.env` file in the `backend` directory with the following keys:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://127.0.0.1:27017/ncvstc-prod
   JWT_SECRET=your_super_secret_jwt_key_here
   NODE_ENV=development
   ```

4. **Frontend Setup:**
   Open a new terminal window.
   ```bash
   cd frontend
   npm install
   ```

5. **Frontend Environment Variables (`frontend/.env.local`):**
   Create a `.env.local` file in the `frontend` directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

---

## 💻 Running the Application

1. **Start the Backend Server:**
   ```bash
   cd backend
   npm run dev
   ```
   *The Express API will start running on `http://localhost:5000`.*

2. **Start the Frontend Application:**
   ```bash
   cd frontend
   npm run dev
   ```
   *The Next.js Application will be available at `http://localhost:3000`.*

---

## 🌱 Seeding Data & Usage Guide

Since this is a fresh database, follow this initial workflow to seed the required platform data and enable end-to-end functionality.

### 1. Create a Super Admin
By default, the UI registration creates `student` or `institution` accounts. To create your master Admin account:
1. Open the UI and Register a normal user (e.g., `admin@ncvstc.org`).
2. Open your MongoDB GUI (like MongoDB Compass) and connect to your database (`ncvstc-prod`).
3. Open the `users` collection, find your newly registered account, and manually change the `"role"` field from `"student"` to `"admin"`.
4. Log back into the application at `http://localhost:3000/login`. You will be immediately routed to the internal **Admin Dashboard**.

### 2. Seed Master Data (Categories)
As an Admin, institutions cannot create courses unless categories exist.
1. In the **Admin Dashboard**, navigate to the **Course Categories** section.
2. Add root categories (e.g., *Computer & IT Skills*, *Health & Paramedical*, *Teacher Training*).

### 3. Setup an Institution
1. Log out of the Admin account.
2. Go to the public `/register` page and select **Institution Registration**.
3. Register a new VTC (Vocational Training Center).
4. Log in. You will be routed to the **Institution Dashboard**.
5. Navigate to your Courses tab and create a new course under one of the seeded Categories.

### 4. End-to-End Student Enrollment
1. Log out and register a new **Student** account.
2. Browse the public `/explore/courses` or `/explore/institutions` pages.
3. Apply for the newly created course.
4. Log back into the **Institution** account to view the application in the admissions tab to Approve or Reject the student.

### 5. Certificate Verification Testing
1. Once a student is completely enrolled, they automatically possess an `enrollmentNo` attached to their profile in the database.
2. Using MongoDB or the Admin panel, locate a student's `enrollmentNo` (e.g., *NCVSTC2026/001*).
3. Append a registered `Certificate` document to their profile using the API or directly in the DB.
4. Go to the public `http://localhost:3000/verify` page.
5. Enter the `enrollmentNo` to test the real-time Verification pipeline endpoint.

---

## 🔒 Security Notes
- Ensure `JWT_SECRET` is changed to a highly secure crypto string in Production.
- Configure CORS accurately in `backend/src/app.ts` before deploying by swapping the wildcard `*` to your exact frontend domain URL (e.g., `https://ncvrtindia.org`).

---

**Developed for the Navigating Career for Vocational Skill Technology Council.**
