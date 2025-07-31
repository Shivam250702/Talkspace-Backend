# Talkspace - Backend

This is the backend for Talkspace, a real-time voice chat application. It's built with Node.js, Express, and Socket.io, and it uses MongoDB for the database.

***

## Features

* **Authentication**: Users can sign up and log in using their phone number and an OTP (One-Time Password).
* **Real-time Communication**: Enables real-time communication between clients using Socket.io for various actions like joining rooms, muting/unmuting, and handling peer connections.
* **User Profiles**: Users can set their name and avatar after activating their account.
* **Room Creation**: Authenticated users can create public and private chat rooms.
* **Token-based Security**: Implements JWT (JSON Web Tokens) for secure authentication and session management.
* **Docker Support**: Includes Dockerfiles for both development and production environments, making it easy to containerize and deploy the application.

***

## Use Cases

* **Online Voice Chat Rooms**: Create and join public or private rooms for voice conversations on various topics.
* **Team Communication**: Use private rooms for team meetings and discussions.
* **Online Gaming**: Integrate with online games to provide in-game voice chat functionality.
* **Social Networking**: A platform for users to meet new people and have spontaneous voice conversations.

***

## Getting Started

### Prerequisites

* Node.js (version 14 or higher)
* npm
* MongoDB

### Installation

1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/shivam250702/talkspace-backend.git](https://github.com/shivam250702/talkspace-backend.git)
    cd talkspace-backend
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Configuration

1.  **Environment Variables**: Create a `.env` file in the root directory and add the following environment variables. You can refer to the `.gitignore` file to see which files should not be committed.
    ```
    PORT=5500
    DB_URL='your-mongodb-connection-string'
    JWT_ACCESS_TOKEN_SECRET='your-access-token-secret'
    JWT_REFRESH_TOKEN_SECRET='your-refresh-token-secret'
    SMS_SID='your-twilio-sms-sid'
    SMS_AUTH_TOKEN='your-twilio-auth-token'
    SMS_FROM_NUMBER='your-twilio-phone-number'
    BASE_URL='http://localhost:5500'
    ```

### Running the Application

* **Development mode**:
    ```bash
    npm run dev
    ```
    This will start the server with nodemon, which automatically restarts the server on file changes.

* **Production mode**:
    ```bash
    npm start
    ```

***

## API Endpoints

The following are the available API endpoints. All protected routes require a valid JWT token in the `accessToken` cookie.

* `POST /api/send-otp`: Sends an OTP to the user's phone number.
* `POST /api/verify-otp`: Verifies the OTP and logs in the user.
* `POST /api/activate`: Activates the user's account (protected).
* `GET /api/refresh`: Refreshes the user's access token (protected).
* `POST /api/logout`: Logs out the user (protected).
* `POST /api/rooms`: Creates a new chat room (protected).
* `GET /api/rooms`: Gets a list of all open chat rooms (protected).
* `GET /api/rooms/:roomId`: Gets the details of a specific chat room (protected).
