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
2. Configure database credentials in `application.properties`
3. Run the Spring Boot application
4. Backend will be available at `http://localhost:8080`

---

## Testing
- Backend logic is covered with unit and integration tests.
- Tests are written following a TDD approach where possible.

```bash
