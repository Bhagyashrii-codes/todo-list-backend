# To-Do List Backend API

A RESTful To-Do List Backend API developed as part of the CodSoft Backend Development Internship using Node.js, Express.js, and MySQL.

## Features

* Create new tasks
* Retrieve all tasks
* Retrieve a task by ID
* Update task details and status
* Delete tasks
* Search tasks by title or description
* Filter tasks by pending or completed status
* Validate task input
* Use appropriate HTTP status codes
* Store tasks in a MySQL database

## Technologies Used

* Node.js
* Express.js
* MySQL
* mysql2
* dotenv
* Postman

## Project Structure

```text
todo-list-backend/
├── config/
│   └── db.js
├── controllers/
│   └── taskController.js
├── routes/
│   └── taskRoutes.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## Setup Instructions

1. Install Node.js and MySQL.

2. Clone or download this repository.

3. Install dependencies:

   `npm install`

4. Create a MySQL database named `todo_list_db` and create the `tasks` table.

5. Create a `.env` file in the project root with the following settings:

   ```dotenv
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=todo_list_db
   PORT=3000
   ```

   Replace `your_mysql_password` with your local MySQL password. Never upload your actual `.env` file.

6. Start the server:

   `node server.js`

## API Endpoints

| Method | Endpoint                | Description                |
| ------ | ----------------------- | -------------------------- |
| POST   | `/tasks`                | Create a task              |
| GET    | `/tasks`                | Retrieve all tasks         |
| GET    | `/tasks/:id`            | Retrieve a task by ID      |
| PUT    | `/tasks/:id`            | Update a task              |
| DELETE | `/tasks/:id`            | Delete a task              |
| GET    | `/tasks?status=pending` | Filter tasks by status     |
| GET    | `/tasks?q=Java`         | Search tasks by keyword    |
| GET    | `/db-test`              | Test database connectivity |

## Testing

API endpoints can be tested using Postman.

## Internship Project

Developed as part of the CodSoft Backend Development Internship.
# To-Do List Backend API

A RESTful To-Do List Backend API developed as part of the CodSoft Backend Development Internship using Node.js, Express.js, and MySQL.

## Features

* Create new tasks
* Retrieve all tasks
* Retrieve a task by ID
* Update task details and status
* Delete tasks
* Search tasks by title or description
* Filter tasks by pending or completed status
* Validate task input
* Use appropriate HTTP status codes
* Store tasks in a MySQL database

## Technologies Used

* Node.js
* Express.js
* MySQL
* mysql2
* dotenv
* Postman

## Project Structure

```text
todo-list-backend/
├── config/
│   └── db.js
├── controllers/
│   └── taskController.js
├── routes/
│   └── taskRoutes.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## Setup Instructions

1. Install Node.js and MySQL.

2. Clone or download this repository.

3. Install dependencies:

   `npm install`

4. Create a MySQL database named `todo_list_db` and create the `tasks` table.

5. Create a `.env` file in the project root with the following settings:

   ```dotenv
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=todo_list_db
   PORT=3000
   ```

   Replace `your_mysql_password` with your local MySQL password. Never upload your actual `.env` file.

6. Start the server:

   `node server.js`

## API Endpoints

| Method | Endpoint                | Description                |
| ------ | ----------------------- | -------------------------- |
| POST   | `/tasks`                | Create a task              |
| GET    | `/tasks`                | Retrieve all tasks         |
| GET    | `/tasks/:id`            | Retrieve a task by ID      |
| PUT    | `/tasks/:id`            | Update a task              |
| DELETE | `/tasks/:id`            | Delete a task              |
| GET    | `/tasks?status=pending` | Filter tasks by status     |
| GET    | `/tasks?q=Java`         | Search tasks by keyword    |
| GET    | `/db-test`              | Test database connectivity |

## Testing

API endpoints can be tested using Postman.

## Internship Project

Developed as part of the CodSoft Backend Development Internship.
