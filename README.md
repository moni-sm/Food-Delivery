# 🍔 MERN Food Delivery Web App

## 📌 Overview
The **MERN Food Delivery Web App** is a full-stack application that allows users to browse food items, add them to their cart, and make secure payments using **Stripe API**. The frontend is styled with **CSS** for a clean and user-friendly interface.

## 🛠 Tech Stack
- **Frontend:** React.js, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Payment Integration:** Stripe API

## 🎯 Features
✅ User Authentication (Signup/Login using JWT)
✅ Browse and Search for Food Items
✅ Add/Remove Items from Cart
✅ Secure Payment Processing via Stripe
✅ Order History and User Dashboard
✅ Admin Panel to Manage Food Items

## 📂 Folder Structure
```
📦 MERN-FoodDelivery-App
├── 📂 backend
│   ├── 📂 config       # Database & server configurations
│   ├── 📂 controllers  # Business logic (authentication, orders, etc.)
│   ├── 📂 models       # Mongoose schemas
│   ├── 📂 routes       # API endpoints
│   ├── 📂 middleware   # Authentication & error handling
│   ├── server.js       # Express server setup
│
├── 📂 frontend
│   ├── 📂 src
│   │   ├── 📂 components  # Reusable UI components
│   │   ├── 📂 pages       # Application pages
│   │   ├── 📂 styles      # CSS for styling
│   │   ├── App.js        # Main React component
│   │   ├── index.js      # ReactDOM rendering
│
├── 📄 .env              # Environment variables
├── 📄 package.json      # Dependencies & scripts
├── 📄 README.md         # Project documentation
```

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/mern-food-delivery.git
cd mern-food-delivery
```

### 2️⃣ Setup Backend
```sh
cd backend
npm install
```
Create a `.env` file inside `backend` and add:
```env

Run the backend server:
```sh
npm start
```

### 3️⃣ Setup Frontend
```sh
cd frontend
npm install
npm start
```

## 💳 Stripe Payment Integration
1. Sign up at [Stripe](https://stripe.com)
2. Get your **Publishable Key** and **Secret Key**
3. Add the keys to your `.env` file

## 🎨 Styling
- **CSS is used for styling** with a clean and modern layout.
- Responsive design ensures smooth user experience on all devices.
- Custom UI elements for a visually appealing interface.

## 📝 Future Enhancements
🔹 Deployment to a hosting platform (Netlify/Vercel for frontend, Render for backend)
🔹 Real-time order tracking
🔹 User reviews and ratings

## 📌 Conclusion
This project provides a fully functional **food ordering system** built with the **MERN stack** and **Stripe payment integration**. Future improvements include **deploying** and adding **real-time features**. Contributions are welcome!

📧 **Contact:** [monikasm2019@gmail.com]

