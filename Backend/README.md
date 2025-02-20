# Backend for Chatbot

This is the backend service for the Chatbot application. It is built using Node.js and Express, and it communicates with an external chat model API.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd Chatbot/Backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Running the Server

To start the server, run:
```sh
npm start
```

The server will start on port 5000. You can change the port by modifying the `PORT` variable in `index.js`.

## API Endpoints

### POST /api/chat

This endpoint accepts a user's message and returns a response from the chat model.

- **URL:** `/api/chat`
- **Method:** `POST`
- **Request Body:**
    ```json
    {
        "message": "Your message here"
    }
    ```
- **Response:**
    ```json
    {
        "reply": "Chatbot's reply here"
    }
    ```

## Error Handling

If there is an error processing the request, the server will respond with a 500 status code and a JSON object:
```json
{
    "reply": "Error in processing your request."
}
```

## Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js
- `cors`: Middleware to enable Cross-Origin Resource Sharing
- `axios`: Promise-based HTTP client for the browser and Node.js

## License

This project is licensed under the MIT License.
