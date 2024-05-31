# Backend API Documentation

## Base URL
`http://localhost:5000/api`

## Projects API

### Create a new project
- **URL:** `/projects`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "name": "Project Name",
    "description": "Project Description"
  }
  ```
- **Success Response:**
  - **Code:** 201
  - **Content:**
    ```json
    {
      "_id": "project_id",
      "name": "Project Name",
      "description": "Project Description",
      "createdAt": "timestamp"
    }
    ```

### Get all projects
- **URL:** `/projects`
- **Method:** `GET`
- **Success Response:**
  - **Code:** 200
  - **Content:** Array of project objects

### Update a project
- **URL:** `/projects/:id`
- **Method:** `PUT`
- **Body:** (Fields to update)
  ```json
  {
    "name": "Updated Project Name",
    "description": "Updated Project Description"
  }
  ```
- **Success Response:**
  - **Code:** 200
  - **Content:** Updated project object

### Delete a project
- **URL:** `/projects/:id`
- **Method:** `DELETE`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "message": "Project deleted"
    }
    ```

## Tasks API

### Create a new task within a project
- **URL:** `/tasks`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "projectId": "project_id",
    "name": "Task Name",
    "description": "Task Description",
    "status": "pending"
  }
  ```
- **Success Response:**
  - **Code:** 201
  - **Content:**
    ```json
    {
      "_id": "task_id",
      "projectId": "project_id",
      "name": "Task Name",
      "description": "Task Description",
      "status": "pending",
      "createdAt": "timestamp"
    }
    ```

### Get all tasks for a project
- **URL:** `/tasks/project/:projectId`
- **Method:** `GET`
- **Success Response:**
  - **Code:** 200
  - **Content:** Array of task objects

### Update a task
- **URL:** `/tasks/:id`
- **Method:** `PUT`
- **Body:** (Fields to update)
  ```json
  {
    "name": "Updated Task Name",
    "description": "Updated Task Description",
    "status": "in-progress"
  }
  ```
- **Success Response:**
  - **Code:** 200
  - **Content:** Updated task object

### Delete a task
- **URL:** `/tasks/:id`
- **Method:** `DELETE`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "message": "Task deleted"
    }
    ```