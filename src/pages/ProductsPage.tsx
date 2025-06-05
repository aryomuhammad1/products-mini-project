import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { useProductCount } from '../hooks/useProductCount.ts';
import Layout from '../components/Layout';
import BackButton from '../components/BackButton';
import PaginationList from '../components/Pagination/PaginationList';

const ProductsPage = () => {
    const { brandId } = useParams<{ brandId: string }>();
    const [page, setPage] = useState(1);
    const limit = 4;

    const { data: total = 0, isLoading: isCountLoading } = useProductCount(brandId!);
    const { data: products, isLoading } = useProducts(brandId!, page, limit);

    return (
        <Layout>
            <BackButton>Back to Brands</BackButton>
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
                            className="block p-4 bg-white shadow rounded hover:bg-blue-50 ">
                            {product.name}
                        </a>
                    </li>
                )}
            />
        </Layout>
    );
};

export default ProductsPage;
