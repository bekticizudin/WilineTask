# User Management System

## Overview

The User Management System is a full-stack application built with Spring Boot for the backend and Angular for the frontend. It allows users to manage their user information, including creating, viewing, updating, and deleting user records.

## The application also includes a search feature to filter users based on various criteria.
## http://localhost:8080/api/users?query=name
## http://localhost:8080/api/users?email=example@gmail.com
## http://localhost:8080/api/users?phoneNumber=222-222-2222

## Technologies

- **Backend**: Spring Boot (Java)
- **Frontend**: Angular (TypeScript)
- **Database**: H2 (in-memory database for development)
- **Build Tool**: Maven (backend) and Angular CLI (frontend)

## Features

- **CRUD Operations**: Create, Read, Update, and Delete users.
- **User Search**: Filter users by name, email, and phone number.
- **Responsive UI**: Built with Angular for a dynamic user experience.

## Project Structure

### Backend

- **`UserController`**: Handles HTTP requests related to users.
- **`UserService`**: Contains the business logic for user management.
- **`UserRepository`**: Interfaces with the database for user data.
- **`User`**: Entity class for user data.

### Frontend

- **`UserListComponent`**: Displays the list of users and handles user creation.
- **`UserDetailComponent`**: Manages user detail view and editing.
- **`UserService`**: Angular service for interacting with the backend API.

## Setup and Installation

### Prerequisites

- **Java 17** (or higher)
- **Node.js 18.18.0** (for Angular CLI)
- **Maven 3.8.x** (for backend build)
- **Angular CLI 17.2.2** (for frontend build)

### Backend Setup

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/your-repo/user-management-system.git
    cd user-management-system/backend
    ```

2. **Build the Backend**:
    ```sh
    mvn clean install
    ```

3. **Run the Backend**:
    ```sh
    mvn spring-boot:run
    ```
   The backend will be available at `http://localhost:8080`.

### Frontend Setup

1. **Navigate to the Frontend Directory**:
    ```sh
    cd ../frontend
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Run the Frontend**:
    ```sh
    ng serve
    ```
   The frontend will be available at `http://localhost:4200`.

## Usage

- **Access the Application**: Open `http://localhost:4200` in your web browser to interact with the user interface.
- **API Endpoints**: The backend API is accessible at `http://localhost:8080/api/users`. You can use tools like Postman to test API endpoints or interact with the UI.

## H2 Database Access
Run Backend and Open 'http://localhost:8080/h2-console"
## Database Username: sa
## Database Password: password
