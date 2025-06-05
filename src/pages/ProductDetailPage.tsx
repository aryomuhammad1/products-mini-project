import { useParams } from 'react-router-dom';
import { useProductDetail } from '../hooks/useProductDetail';
import Layout from '../components/Layout';
import BackButton from '../components/BackButton.tsx';

const ProductDetailPage = () => {
    const { productDetailId } = useParams<{ productDetailId: string }>();
    const { data: detail, isLoading } = useProductDetail(productDetailId!);

    return (
        <Layout>
            <BackButton>Back</BackButton>
            <h2 className="text-xl font-semibold mb-4">Product Detail</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : !detail ? (
                <p>Product not found.</p>
            ) : (
                <div className="bg-white p-6 rounded shadow space-y-2">
                    <h3 className="text-lg font-bold">ID: {detail.productId}</h3>
                    <p>{detail.description}</p>
                    <p className="text-green-600 font-semibold">${detail.price}</p>
                </div>
            )}
        </Layout>
    );
};

export default ProductDetailPage;
