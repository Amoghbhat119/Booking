# 🏛 Conference Hall Booking System (MERN Stack)

A full-stack **Conference Hall Booking System** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.

This application allows users to browse conference halls, check availability, and book halls for meetings, seminars, and events. Admins can manage halls and bookings.

---

# 🚀 Features

### 👤 User Features

* User Registration
* User Login / Logout
* View Conference Halls
* Book Hall with Date & Time Slot
* View Booking History

### 🏢 Admin Features

* Add Conference Halls
* Manage Hall Details
* View All Bookings
* Manage Users

### ⚙ System Features

* JWT Authentication
* REST API
* MERN Full Stack Architecture
* MongoDB Database
* Responsive React UI

---

# 🛠 Tech Stack

### Frontend

* React.js
* Axios
* React Router
* CSS

### Backend

* Node.js
* Express.js
* JWT Authentication
* Cookie Parser
* CORS

### Database

* MongoDB
* Mongoose

---

# 📂 Project Structure

```
BookIt
│
├── client
│   ├── public
│   ├── src
│   ├── .env
│   └── package.json
│
├── server
│   ├── DB
│   ├── model
│   ├── router
│   ├── .env
│   └── app.js
│
└── README.md
```

---

# ⚙ Installation & Setup

## 1️⃣ Clone the Repository

```
git clone https://github.com/Amoghbhat119/Booking.git
```

```
cd bookit
```

---

# 📦 Backend Setup

Navigate to the **server folder**

```
cd server
```

Install dependencies

```
npm install
```

Create `.env` file inside **server folder**

```
server/.env
```

Example configuration

```

PORT=9002
DATABASE=
SECRET_KEY=
ADMIN_KEY=
ADMIN_EMAIL=
SENDER_EMAIL=
SENDER_PASSWORD=
CLIENT_URL=http://localhost:3000
```

Start backend server

```
npm start
```

Backend will run on

```
http://localhost:9002
```

---

# 💻 Frontend Setup

Open a **new terminal**

Navigate to client folder

```
cd client
```

Install dependencies

```
npm install
```

Create `.env` file inside **client folder**

```
client/.env
```

Example configuration

```
REACT_APP_ADMIN_SIGN_UP=true
REACT_APP_SERVER_URL=http://localhost:9002
```

This connects the frontend to the backend API.

Start the frontend

```
npm start
```

Frontend will run on

```
http://localhost:3000
```

---

# 🗄 Database Setup

Install MongoDB Community Edition

Download:

https://www.mongodb.com/try/download/community

Start MongoDB server

```
mongod
```

Connect using MongoDB Compass

```
mongodb://127.0.0.1:27017
```

Database will automatically be created when the application runs.

---
📧 Email Domain Constraint

The system restricts user registration to official Acropolis Institute email addresses only.

Allowed Email Domains

Users must register using one of the following domains:

@acropolis.in

@acropolis.edu.in

Valid Examples
john.doe@acropolis.in
faculty@acropolis.edu.in
Invalid Examples
john@gmail.com
user@yahoo.com
abc@company.com

# 🔑 API Endpoints

### Authentication

```
POST /signup
POST /signin
POST /logout
```

### Halls

```
GET /halls
POST /addHall
DELETE /deleteHall
```

### Bookings

```
POST /bookHall
GET /myBookings
DELETE /cancelBooking
```

---

# 📸 Application Workflow

1️⃣ User creates account
2️⃣ User logs in
3️⃣ User views conference halls
4️⃣ User selects date and time slot
5️⃣ User confirms booking
6️⃣ Booking stored in MongoDB

---

# 🔒 Security

* JWT Authentication
* Protected Routes
* Secure Password Storage
* CORS Enabled

---

# 📌 Future Improvements

* Online Payment Integration
* Email Notifications
* Real-time Booking Calendar
* Admin Analytics Dashboard

---

# 👨‍💻 Author

**Amogh Venkatraman Bhat**

GitHub
https://github.com/Amoghbhat119

LinkedIn
https://www.linkedin.com/in/amogh-bhat-509761343

---

# ⭐ Support

If you like this project, please give it a ⭐ on GitHub.
