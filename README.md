# GitHub and Stack Overflow Mashup - Backend

This is the backend part of the GitHub and Stack Overflow Mashup project in Nestjs. It is responsible for handling API requests, fetching data from GitHub and Stack Overflow, and serving it to the frontend.

## Getting Started

These instructions will get the backend part up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (v14.x or later)
- [npm](https://www.npmjs.com/get-npm) (v6.x or later)

### Installation

1. **Clone the repository (if you haven't already):**

   ```bash
   git clone https://github.com/sbondai/github-and-stack-overflow-mashup-backend.git
   ```

2. **Navigate to the backend directory:**

   ```bash
   cd github-and-stack-overflow-mashup-backend
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```
# Changing the Port Number in the Backend

In order to set a custom port for the backend server of the GitHub and Stack Overflow Mashup project, you will need to modify the `.env` file located in the root directory of the backend project.

Here are the steps to do so:

1. **Locate the `.env` file:**  
   Navigate to the root directory of the backend project and find the `.env` file. If the file does not exist, you will need to create it.

2. **Set the Port Number:**  
   Open the `.env` file in a text editor, and add or modify the following line to specify your desired port number:

   ```env
   PORT=4000

### Running the Application

1. **Start the backend server:**

   ```bash
   npm run start
   ```

The backend server will start, and you can interact with it via the specified port, e.g., `http://localhost:4000`.
