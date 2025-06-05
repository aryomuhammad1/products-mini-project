import { Routes, Route, Navigate } from 'react-router-dom';
import BrandsPage from './pages/BrandsPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Navigate to="/brands" />}
            />
            <Route
                path="/brands"
                element={<BrandsPage />}
            />
            <Route
                path="/brand/:brandId"
                element={<ProductsPage />}
            />
            <Route
                path="/brand/:brandId/:productDetailId"
                element={<ProductDetailPage />}
            />
        </Routes>
    );
}

export default App;
