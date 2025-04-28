# ExpressPratical

A simple Express.js application that serves a list of products and allows fetching individual product details by ID.

## Features

- **GET /**: Returns a message indicating the server is working.
- **GET /products**: Returns a list of all products.
- **GET /products/:id**: Returns details of a specific product by its ID.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup Instructions

### 1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ExpressPratical
   ```
### 2. Install dependencies:
   ```bash
   npm install
   ```
### 3. start the server:
   ```bash
   node index.js
   ```
### 4. The server will start on http://localhost:8000.

## API Endpoints

### 1. Root Endpoint
**GET /**  
Returns a message indicating the server is working.  
**Response:**
```json
{
  "message": "Server is working"
}
```

### 2. Get All Products
**GET /products**  
Returns a list of all products.  
**Response:**
```json
[
  {
        "id": 1,
        "name": "Wireless Mouse",
        "category": "Electronics",
        "price": 620,
        "available": true,
        "manufacturer": "Logitech",
        "description": "A sleek and ergonomic wireless mouse ..."
    },
    {
        "id": 2,
        "name": "Bluetooth Headphones",
        "category": "Electronics",
        "price": 799,
        "available": true,
        "manufacturer": "Sony",
        "description": "High-quality wireless headphones ..."
    }, .....
]
```

### 3. Get Product by ID
**GET /products/:id**  
Returns details of a specific product by its ID.  

**Response (Success):**
```json
{
  {
    "id": 1,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 620,
    "available": true,
    "manufacturer": "Logitech",
    "description": "A sleek and ergonomic wireless mouse ..."
}
}
```

**Response (Error):**
```json
{
  "error": "Product not found"
}
```