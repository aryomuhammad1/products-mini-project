import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { useProductCount } from '../hooks/useProductCount';
import Layout from '../components/Layout';
import BackButton from '../components/BackButton';
import PaginationList from '../components/Pagination/PaginationList';

const ProductsPage = () => {
    const { brandId } = useParams<{ brandId: string }>();
    const [page, setPage] = useState(1);
    const limit = 4;

    const { data: total = 0, isLoading: isCountLoading, error: countError } = useProductCount(brandId!);

    const { data: products, isLoading, error: productsError } = useProducts(brandId!, page, limit);

    const hasError = countError || productsError;

    return (
        <Layout>
            <BackButton>Back to Brands</BackButton>

            {hasError ? (
                <div className="text-red-500 bg-red-100 p-4 rounded mb-4">
                    {productsError?.message || countError?.message || 'An unexpected error occurred.'}
                </div>
            ) : (
                <PaginationList
                    title="Products"
                    items={products ?? []}
                    isLoading={isLoading || isCountLoading}
                    total={total}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                    renderItem={(product) => (
                        <li key={product.id}>
                            <a
                                href={`/brand/${brandId}/${product.id}`}
                                className="block p-4 bg-white shadow rounded hover:bg-blue-50">
                                {product.name}
                            </a>
                        </li>
                    )}
                />
            )}
        </Layout>
    );
};

export default ProductsPage;
