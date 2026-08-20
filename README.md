# Restaurant Management API

RESTful API for managing Restaurants, Menu Items and User Authentication.
Built with Node.js, Express, JWT, bcrypt and MongoDB.

## Setup

1. `cd backend && npm install`
2. Copy `.env.example` to `.env` and add your MONGODB_URI and JWT_SECRET
3. `npm run dev` or `npm start`


## API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | / | No | Welcome route |
| POST | /register | No | Register user |
| POST | /login | No | Login, get JWT |
| GET | /restaurants | No | List restaurants |
| GET | /restaurants/top | No | Top 5 by rating |
| GET | /restaurants/:id | No | Get restaurant |
| POST | /restaurants | Yes | Add restaurant |
| PUT | /restaurants/:id | Yes | Update restaurant |
| DELETE | /restaurants/:id | Yes | Delete restaurant |
| GET | /restaurants/:id/menu | No | Get menu items |
| POST | /restaurants/:id/menu | Yes | Add menu item |
| PUT | /menu/:id | Yes | Update menu item |
| DELETE | /menu/:id | Yes | Delete menu item |

## Auth Flow

Register -> password hashed with bcrypt -> stored in MongoDB.
Login -> checks password, returns JWT.
Protected routes need header: `Authorization: Bearer <token>`

## Notes

- Passwords hashed with bcrypt
- JWT used for protected routes
- Request logger middleware logs method/path/time
- Separate folders for routes, models, controllers

## Author:
Ayush Kumar Singh