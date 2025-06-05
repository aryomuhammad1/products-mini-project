import { useState } from 'react';
import { useBrands } from '../hooks/useBrands';
import { useBrandCount } from '../hooks/useBrandCount';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import PaginationList from '../components/Pagination/PaginationList';

const BrandsPage = () => {
    const [page, setPage] = useState(1);
    const limit = 4;

    const { data: brands, isLoading, error: brandsError } = useBrands(page, limit);

    const { data: total = 0, isLoading: isCountLoading, error: countError } = useBrandCount();

    const hasError = brandsError || countError;

    return (
        <Layout>
            {hasError ? (
                <div className="text-red-500 bg-red-100 p-4 rounded mb-4">
                    {brandsError?.message || countError?.message || 'An error occurred while fetching brands.'}
                </div>
            ) : (
                <PaginationList
                    title="Brands"
                    items={brands ?? []}
                    isLoading={isLoading || isCountLoading}
                    total={total}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                    renderItem={(brand) => (
                        <li key={brand.id}>
                            <Link
                                to={`/brand/${brand.id}`}
                                className="block p-4 bg-white shadow rounded hover:bg-blue-50">
                                {brand.name}
                            </Link>
                        </li>
                    )}
                />
            )}
        </Layout>
    );
};

export default BrandsPage;
