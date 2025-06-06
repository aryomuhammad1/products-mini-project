# Products Mini Project with Pagination

A simple React project demonstrating a paginated brand and product listing with details, powered by `json-server` as a mock backend and React Query for data fetching.

---

## Project Overview

This project displays a list of brands and their products, with pagination implemented on both lists. You can navigate from brands to their products and view product details, all handled on client side routing with React Router.

---

## Features

- Brands listing with pagination  
- Products listing by brand with pagination  
- Product detail view 
- API data fetched with React Query and Axios  
- Mock backend using `json-server`

---

## Tech Stack & Libraries

- **React** (functional components and hooks)  
- **React Router** for routing  
- **React Query (TanStack Query)** for data fetching and caching  
- **Axios** for HTTP requests  
- **json-server** for mock REST API backend  
- Tailwind CSS for styling 

---

## Project Structure (Simplified)

src/
├── api/ # Axios client and API helper functions
├── components/ # Reusable UI components (PaginationList, Layout, etc)
├── hooks/ # Custom React Query hooks (useBrands, useProducts, etc)
├── pages/ # Page components (BrandsPage, ProductsPage, ProductDetailPage)
├── App.tsx # Main app component with routing
└── index.tsx # React entry point
db.json # Mock backend data



---

## How to Run Locally

1. Clone the repo:

   ```bash
   git clone https://github.com/aryomuhammad1/products-mini-project.git
   cd products-mini-project
   ```

2. Install dependencies:
   
   ```bash
   npm install
   ```
   
4. Start the mock backend with json-server:
   
    ```bash
    npm run server
   ```
    API endpoints will be available at:
   - http://localhost:3001/brands
   - http://localhost:3001/products
   - Supports pagination via _limit and _page query params

5. Start the Vite dev server
   
   ```bash
   npm run dev
   ```
   
Open your browser at : http://localhost:5173

Notes: ⚠️ We do not use a separate endpoint for item counts, though that’s considered a more ideal architecture.
