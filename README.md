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

```
   src/
   ├── api/ # Axios client and API helper functions
   ├── components/ # Reusable UI components (PaginationList, Layout, etc)
   ├── hooks/ # Custom React Query hooks (useBrands, useProducts, etc)
   ├── pages/ # Page components (BrandsPage, ProductsPage, ProductDetailPage)
   ├── App.tsx # Main app component with routing
   └── index.tsx # React entry point
   db.json # Mock backend data
```



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


## Additional Questions & Answers

**1. Jelaskan pemahaman Anda mengenai State Management dan sebutkan contoh
nya? **  
State Management adalah bagaimana cara sebuah aplikasih melacak dan mengelola state (data yang bisa berubah seiring berjalan nya waktu).
Implementasi State Management penting untuk memastikan UI merespon perubahan data dengan benar.
Dalam Frontend Development, state mencakup hal-hal seperti :
- Interaksi UI, seperti tombol yang membuka atau menutup modal.
- Data dari API, seperti daftar produk.
- Nilai input form.
- Rute atau halaman yang sedang dibuka.
- Autentikasi pengguna.

Contoh State Management Tools :
- State Local
1. useState, hook bawaan React yang digunakan untuk mengelola state sederhana dalam satu komponen.
* Cara kerja :
   useState menerima initial value sebagai parameter dan mengembalikan array berisi nilai state saat ini dan fungsi untuk mengubah state tersebut.
* Contoh penggunaan :
```jsx
function Counter() {
   const [count, setCount] = useState(0);

   return (
           <div>
              <p>Count: {count}</p>
              <button onClick={() =>  setCount(prevState => prevState + 1)}>
                 Tambah
              </button>
           </div>
   );
}
```

2. useReducer, mirip dengan useState namun digunakan untuk mengelola logika state yang lebih kompleks dalam komponen.
* Cara kerja :
   Menggunakan reducer function yang menerima state dan action kemudian mengembalikan state baru.
* Contoh penggunaan :
```jsx
// 1. Buat reducer function
function counterReducer(state, action) {
   switch (action.type) {
      case 'INCREMENT':
         return state + 1;
      default:
         return state;
   }
}

// 2. Gunakan di dalam komponen.
function Counter() {
   const [count, dispatch] = useReducer(counterReducer, 0);

   return (
           <div>
              <p>Count: {count}</p>
              <button onClick={() => dispatch({ type: 'INCREMENT' })}>
                 Tambah
              </button>
           </div>
   );
}
```  
  
- State Global 
1. Redux, state management populer yang digunakan untuk menyimpan seluruh state aplikasi di dalam satu store global.
* Cara kerja :
   Menggunakan store, actions dan reducers. State hanya bisa diubah dengan cara memanggil dispatch(action)
* Contoh penggunaan :
```jsx
import React from 'react';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';

// 1. Definisikan initial state
const initialState = { count: 0 };

// 3. Buat reducer function (fungsi yang meng-update state berdasarkan action)
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// 4. Buat Redux store (tempat menyimpan semua state)
const store = createStore(counterReducer);

// 5. Gunakan state dan dispatch di dalam komponen
function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        Tambah
      </button>
    </div>
  );
}

// 6. Bungkus komponen App (root) dengan redux provider.
export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

```

- State jarak jauh (sinkronisasi dengan data di server)
1. React Query, untuk fetching, caching dan sinkronisasi data.
2. SWR, alternatif lain untuk fetching dan caching data.
3. Apollo Client, khusus untuk data dari GraphQL API.


**2. Jelaskan pemahaman Anda mengenai TanStack? **  
TanStack adalah kumpulan library Javascript yang membantu developer mengelola data, state dan UI di aplikasi.
Salah satu library TanStack yang saya kenal adalah React Query yang memudahkan proses pengambilan data, penyimpanan cache dan sinkronisasi data secara otomatis agar aplikasi jadi lebih efisien.
Selain React Query, TanStack juga menyediakan library TanStack Table untuk membuat tabel yang interaktif dan TanStack Router untuk mengelola routing di aplikasi React.

