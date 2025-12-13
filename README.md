# Sweet Shop Management System

## Overview
The Sweet Shop Management System is a full-stack web application designed to manage sweets inventory, user authentication, and purchasing workflows. The system provides secure REST APIs, role-based access control, and inventory management features such as purchasing and restocking sweets.

The project focuses on clean backend architecture, RESTful API design, database integration, and test-driven development practices.

---

## Tech Stack

### Backend
- Framework : Nodejs
- Authentication: JWT-based authentication  
- Database: PostgreSQL  
- ORM : Prisma
- Testing: Jest 


---

## Features

### Authentication
- User registration
- User login with JWT token
- Role-based access (Admin / User)

### Sweets Management (Protected)
- Add a new sweet (Admin)
- View all sweets
- Search sweets by name, category, or price range
- Update sweet details (Admin)
- Delete a sweet (Admin)

### Inventory Management
- Purchase a sweet (decreases quantity)
- Restock a sweet (Admin only)
- Purchase button disabled when stock is zero

---

## API Endpoints (Summary)

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Sweets
- `POST /api/sweets` (Admin)
- `GET /api/sweets`
- `GET /api/sweets/search`
- `PUT /api/sweets/{id}` (Admin)
- `DELETE /api/sweets/{id}` (Admin)

### Inventory
- `POST /api/sweets/{id}/purchase`
- `POST /api/sweets/{id}/restock` (Admin)

---

## Running the Project Locally

### Backend Setup
1. Clone the repository
2. Run the nodejs application
3. Backend will be available at `http://localhost:4000`

---

## Testing
- Backend logic is covered with unit and integration tests.
- Tests are written following a TDD approach where possible.

## Project Status & Known Issues

The backend API is implemented using **Node.js**, **PostgreSQL**, and **Prisma ORM**.  
Core application structure, authentication flow, and API endpoints have been completed.

During development, I encountered persistent issues related to **Prisma database migrations and client synchronization** with PostgreSQL in the given time constraints. Due to this blocker and parallel university examinations, I decided to halt further development at this stage.

The issue is isolated to the ORM/database integration layer. With additional time, the next steps would be:
- Re-initializing Prisma migrations with a clean schema
- Verifying environment configuration consistency
- Completing integration tests for database-dependent endpoints

This decision was made to submit a transparent and honest snapshot of the work completed so far rather than rushing an unstable solution.

