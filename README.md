# Equipment Management System

A full-stack application for tracking facility equipment, managing maintenance logs, and enforcing safety compliance rules.

## 🚀 Quick Start

### 1. Prerequisites
* **Java 17+** (JDK)
* **Node.js** (v18 or higher)
* **Maven** (Optional, uses `./mvnw` wrapper)

---

### 2. Backend Setup (Spring Boot)
The backend runs on **Port 8082** and uses an H2 In-Memory Database.

1. Navigate to the backend directory:
   ```bash
   cd backend
Run the application:

Bash
./mvnw spring-boot:run
Verify the API is running at: http://localhost:8082/api/equipment

3. Frontend Setup (React + Vite)
The frontend runs on Port 5173.

Navigate to the frontend directory:

Bash
cd frontend
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
Open your browser to: http://localhost:5173

🛠 Features & Business Rules
✅ Workflow 1: Auto-Update Status
When a user logs a new maintenance entry for an item marked as "Under Maintenance", the system automatically updates that equipment's status to "Active" upon successful submission.

✅ Workflow 2: 30-Day Cleaning Rule
To ensure safety compliance, the system prevents any equipment from being set to "Active" if its Last Cleaned Date is older than 30 days. An error message will notify the user that cleaning is required.

🏗 Tech Stack
Frontend: React, TypeScript, Tailwind CSS, Shadcn UI, Vite.

Backend: Java, Spring Boot, Spring Data JPA.

Database: H2 (In-Memory).

Icons: Lucide-React.
