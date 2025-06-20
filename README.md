# 📦 User Management CRUD API

A simple RESTful API built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)** to perform Create, Read, Update, and Delete operations on user data. Tested using **Postman**.

---

## 🚀 Features

- ➕ Create a new user
- 📥 Fetch all users
- 📝 Update an existing user
- ❌ Delete a user
- ✅ Duplicate email validation
- 📦 MongoDB Atlas cloud database integration

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas, Mongoose
- **Environment**: dotenv
- **Development Tools**: Nodemon, Postman

---

## 📁 Project Structure

```
curd/
├── controller/
│   └── userController.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRouters.js
├── .env
├── index.js
├── package.json
```

---

## ⚙️ Environment Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/curd-api.git
cd curd-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add:

```
PORT=8000
MONGO_URL="your_mongodb_connection_string"
```

> 💡 Replace `your_mongodb_connection_string` with your MongoDB Atlas URI.

---

## 📡 Running the Server

```bash
npm start
```

- Server will start at: `http://localhost:8000`
- If connected successfully, terminal shows:
  ```
  Database connected successful
  Server is running on port 8000
  ```

---

## 🧪 API Endpoints (Base URL: `/api/user`)

| Method | Endpoint             | Description          | Request Body                       |
|--------|----------------------|----------------------|-------------------------------------|
| POST   | `/create`            | Create a new user    | `{ name, email, collage, subject, branch }` |
| GET    | `/getAllusers`       | Get all users        | -                                   |
| PUT    | `/updateuser/:id`    | Update user by ID    | `{ name?, email?, ... }`            |
| DELETE | `/delete/:id`        | Delete user by ID    | -                                   |

---

## 📬 Sample JSON for POST (Create User)

```json
{
  "name": "Alice Roy",
  "email": "alice.roy@example.com",
  "collage": "Techno India University",
  "subject": "Information Technology",
  "branch": "IT"
}
```

---

## ❗ Notes

- Ensure all required fields are passed; schema validation is enforced.
- Duplicate emails are not allowed.
- All endpoints return standard HTTP status codes and JSON responses.
- Data is stored in MongoDB Atlas, not locally.

---

## 👤 Author

**Swarnadeep Roy**  
[LinkedIn](https://www.linkedin.com/in/swarnadeep-roy/) | [GitHub](https://github.com/swarnadeep-roy)

---

## 📜 License

This project is licensed under the MIT License.
