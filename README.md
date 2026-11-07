# MamiKost – Boarding House Website

MamiKost is a frontend website project inspired by [Mamikos](https://mamikos.com/), an Indonesian boarding house discovery and booking platform.

This project was developed as part of the Frontend Engineer Technical Test for MagangHub. It aims to recreate a simplified boarding house website experience, featuring accommodation listings, property information, and an inquiry form connected to a custom REST API.

## Project Overview

**Project Name:** MamiKost  
**Project Type:** Website Clone / Inspired Project  
**Reference Website:** [Mamikos](https://mamikos.com/)  
**Purpose:** Frontend Engineer Technical Test – MagangHub

## Features

- Responsive homepage inspired by Mamikos.
- Boarding house listings and accommodation information.
- Property detail presentation.
- Booking / inquiry form.
- Dynamic accommodation data fetched from a custom REST API.
- Inquiry submission through a POST API.
- Loading and error handling for API requests.
- Form submission feedback and input validation.

## Tech Stack

### 1. Frontend
- React.js
- Vite
- JavaScript (ES6+)
- React Router DOM
- HTML5
- CSS3
- Tailwind CSS
- Lucide React

### 2. Backend
- Node.js
- Express.js
- REST API
- CORS
- JSON

### 3. Data Management
- JavaScript Static Data (`kosts.js`)
- In-memory data storage (`inquiries.js`)
- No external database is currently used.

### 4. Development Tools
- Visual Studio Code
- Git
- GitHub
- npm

### 5. AI-Assisted Development
- ChatGPT
- Google Gemini

AI tools were used to assist with project planning, code generation, implementation guidance, debugging, and interface refinement. Generated code was reviewed, tested, and adjusted throughout the development process.

## Project Structure

mamikost/
│
├── backend/
│   ├── controllers/
│   │   ├── kostController.js
│   │   └── inquiryController.js
│   │
│   ├── data/
│   │   ├── kosts.js
│   │   └── inquiries.js
│   │
│   ├── routes/
│   │   ├── kostRoutes.js
│   │   └── inquiryRoutes.js
│   │
│   ├── app.js
│   └── server.js
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── assets/
│       └── ...
│
└── README.md


## API Documentation

The backend provides two main API endpoints to support accommodation listings and inquiry submissions.

### 1. Get Boarding House Listings

**Endpoint:** `GET /api/kosts`

Retrieves the available boarding house data from the backend.

**Example Request:**
GET /api/kosts

**Example Response:**
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Sample Kost",
      "price": 1500000
    }
  ]
}

*Note: The response above is an illustrative example. Actual fields depend on the implemented data structure.*

### 2. Submit an Inquiry

**Endpoint:** `POST /api/inquiries`

Submits a booking or accommodation inquiry to the backend.

**Example Request:**
POST /api/inquiries
Content-Type: application/json

Example request body:

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "081234567890",
  "message": "I would like to inquire about this boarding house."
}

**Successful Response:**

{
  "success": true,
  "message": "Inquiry submitted successfully."
}

**Validation Error Response (400):**

{
  "success": false,
  "message": "Please provide all required fields."
}

*Note: Request fields and response formats should be adjusted to match the actual backend implementation.*

## Frontend Request States

The frontend is designed to handle different API request conditions:

| Request | State |
|---|---|
| GET | Loading |
| GET | Error |
| POST | Success |
| POST | Validation Error |
| POST | Network Error |

These states provide feedback to users during data retrieval and form submission.

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### Installation

Clone the repository:
git clone <YOUR_GITHUB_REPOSITORY_URL>

Navigate to the project directory:
cd mamikost

Install frontend dependencies:
cd frontend
npm install

Install backend dependencies:
cd ../backend
npm install

### Running Locally

Start the backend server:
cd backend
npm run dev

Start the frontend development server in another terminal:
cd frontend
npm run dev

The frontend and backend run separately during local development.

**Local API Base URL:**
http://localhost:5000/api


*Note: The actual scripts and port configuration depend on the project's `package.json` and server configuration.*

## Data Storage

This project currently uses JavaScript-based static data and temporary in-memory storage instead of an external database.

- Boarding house listings are stored in `kosts.js`.
- Inquiry submissions are stored temporarily in `inquiries.js`.
- Inquiry data is not persistent and will reset when the backend server restarts.

No MySQL or PostgreSQL database is required.

## Deployment

**Live Website:** [Deployment URL – To be added]

**Backend API:** [Backend API URL – To be added]

The deployed frontend must communicate with the deployed backend API to ensure that the application works outside the local development environment.

## Project Notes

This is an independent educational and technical assessment project inspired by Mamikos. It is not affiliated with or officially associated with Mamikos.

The project focuses on frontend implementation, AI-assisted development workflow, REST API integration, and basic backend request handling.

---

**Developed for:** MagangHub – Frontend Engineer Technical Test  
**Project:** MamiKost