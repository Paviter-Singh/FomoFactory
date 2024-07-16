# Stock Information Dashboard

This project provides a dashboard for displaying stock information in real-time.

## Tech Used

### Backend
- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Prisma**: Next-generation ORM for Node.js and TypeScript.
- **MongoDB**: NoSQL database for storing stock details.
- **WebSockets**: Real-time communication protocol for subscribing to data updates.

### Frontend
- **React.js**: JavaScript library for building user interfaces.
- **React-Redux**: Predictable state container for JavaScript apps.
- **Redux Toolkit Query (RTK Query)**: Powerful data fetching and caching tool.
- **React Table**: Flexible and extensible data tables for React.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

## Plan

1. **Find a Good API**: Identify a reliable API to fetch stock details.
2. **Database Setup**: Store the fetched information in MongoDB using Prisma for ORM.
3. **State Management**: Implement state management using React-Redux and RTK Query.
4. **Data Presentation**: Use React Table to display stock details.
5. **Styling**: Style the application using Tailwind CSS.

## Setup Instructions

### Backend

1. **Navigate to the API Directory**:
   ```bash
   cd api
2. **Install Dependencies:**:
   ```bash
   npm install
3. **Prisma SetUp**:
   ```bash
   npx prisma generate
   npx prisma migrate dev
4. **Add Environment Variables**:
  Create a .env file inside the api directory
  Refer to .api/sample.env for the required environment variables
5. **Start the Backend Server**:
   ```bash
   npm run dev
    or
   npm start

### Fontend

1. **Navigate to the API Directory**:
   ```bash
   cd ui
2. **Install Dependencies:**:
   ```bash
   npm install
3. **Start the Backend Server**:
   ```bash
   npm run dev
    or
   npm start


**Refer to README files inside the `api` and `ui` directories for more detailed information.**

### Note
**Stock market opens between 2:30 to 9:30 IST, The project will only work in this time range**

