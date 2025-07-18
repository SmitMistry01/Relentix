# 📊 Relentix – Project Management System

**Relentix** is a full-stack Project Management Dashboard designed to enhance user productivity by up to 60%. It features an intuitive interface, real-time analytics, and interactive project views such as boards, Gantt charts, and tables — all built to support modern teams with seamless project execution and monitoring.

---

## 🚀 Key Features

- 🧩 **Interactive Views**
  - **Board View (Kanban)** – Drag and drop tasks across lists
  - **Gantt Chart** – Visualize project timelines and dependencies
  - **Table View** – Structured task and project overview

- ⚙️ **Robust State Management**
  - Powered by **Redux Toolkit** and **RTK Query** for scalable state handling

- 📊 **Analytics & Dashboard**
  - Integrated **Material UI Data Grid** for displaying detailed analytics and project statistics
  - Full **CRUD operations** for projects and tasks

- 🔐 **User Authentication**
  - Implemented with **AWS Cognito**
  - Hosted via **AWS Amplify** for CI/CD and scalability

---

## 🧱 Tech Stack

| Layer           | Technologies                                                                 |
|----------------|------------------------------------------------------------------------------|
| Frontend        | React, TypeScript, TailwindCSS, Material UI                                 |
| State Management| Redux Toolkit, RTK Query                                                     |
| Backend         | Node.js, Express.js, Prisma ORM                                              |
| Database        | PostgreSQL, RDS,S3                                                                   |
| Auth & Hosting  | AWS Cognito, AWS Amplify                                                     |

---
## Deployed Link

https://main.dhc6pd33mdwph.amplifyapp.com/

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/relentix.git
cd relentix
cd server
npm run dev

cd ..
cd client
npm run dev

```
### 2.  Setup Environment Variables
Create a .env file in both client and server directories and configure the following:

.env (example for server):
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/relentix

.env (example for client):
VITE_BASE_API_URL = http://localhost:3000
AWS_REGION=your_region
VITE_COGNITO_USER_POOL_ID=your_user_pool_id
VITE_COGNITO_CLIENT_ID=your_app_client_id


### 3 Run the app
# In server/
npm run dev

# In client/
npm run dev
