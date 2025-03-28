Project Tracker Backend

How to Run the App Locally

Prerequisites
1.)Node.js (v16 or later recommended)
1.)MongoDB (Local or Cloud instance)
3.)Git (for cloning the repository)
4.)VS Code (or any preferred code editor)

<!------------------------- Installation Steps--------------------- -->

STEP 1: Getting the Source Code

1: Create a New Folder
Open File Explorer (Windows) or Finder (Mac).

Create a new folder (e.g., project-tracker).

Open VS Code and select File → Open Folder, then choose the newly created folder.

2: Open the Terminal
Windows/Linux: Press Ctrl + J
Mac: Press Cmd + J

3: Clone the Repository
Once the terminal is open, type the following command:
COMMAND: git clone https://github.com/DeboAdeniran/Project-Tracker-Backend .
(The . at the end ensures the repository is cloned directly into the opened folder.)

Step 4: Navigate into the Project (If Needed)
If you didn’t use the ., the project might be inside another folder. Navigate into it using:
COMMAND: cd project-tracker-backend

STEP 2: Installing Dependencies

Run the following command inside the project folder(TERMINAL):
COMMAND: npm install
1: Setting Up MongoDB
This backend requires a MongoDB connection string. You can obtain one using either:

MongoDB Atlas (Cloud-based)

MongoDB Compass (GUI for local databases)

For guidance on setting up MongoDB and getting your connection string, refer to this YouTube video below
https://www.youtube.com/watch?v=c2M-rlkkT5o&t=585s&ab_channel=BroCode
Timestamp: 00:02:08.

2: Configuring Environment Variables
Rename .env.example to .env

Add your MongoDB connection string inside the .env file:
PORT=3000
MONGO_URI=<your-mongodb-connection-string>

3: Running the Server
Start normally:
npm start
Start with Nodemon (for automatic restarts during development):
npm run server

4: Verifying MongoDB Connection
If the database connection is successful, you will see this message in the terminal:
MongoDB connected........

<!------------------- Architectural Overview --------------------------->

📁 Folder Structure

project-tracker-backend/
│-- config/ # Configuration files (e.g., database keys)
│ ├── keys.js
│-- controller/ # Handles business logic for requests
│ ├── project.js
│-- middleware/ # Middleware (e.g., CORS handling)
│ ├── corsMiddleware.js
│-- model/ # Mongoose models for database schema
│ ├── project.js
│-- routes/api/ # API route definitions
│ ├── project.js
│-- .env # Environment variables (excluded from Git)
│-- .env.example # Example environment file
│-- .gitignore # Git ignore file
│-- package.json # Project metadata and dependencies
│-- package-lock.json # Dependency lock file
│-- README.md # Project documentation
│-- server.js # Main entry point

This structured approach ensures separation of concerns (SoC), making the codebase maintainable and scalable.

<!--------------------------- Libraries Used ------------------------>

Core Dependencies

Express.js – Fast and flexible Node.js framework for handling HTTP requests and routing.
Mongoose – Simplifies MongoDB interactions with built-in validation and schema-based modeling.
body-parser – Parses incoming JSON request bodies for API handling.
dotenv – Manages environment variables securely.
CORS – Enables secure cross-origin requests, essential for frontend-backend communication.

Development Dependencies

Nodemon – Watches for file changes and automatically restarts the server, improving development efficiency.

<!---------------------- Code Design & Best Practices -------------------->

This project adheres to SOLID principles for maintainability and scalability:

Single Responsibility Principle (SRP) – Each module (controllers, middleware, models) has a well-defined responsibility.
Open/Closed Principle (OCP) – The system supports extension without modifying existing code.
Liskov Substitution Principle (LSP) – Components are structured for easy reuse without breaking dependencies.
Interface Segregation Principle (ISP) – The API design avoids unnecessary dependencies.
Dependency Inversion Principle (DIP) – The system is loosely coupled, making future changes easier.
