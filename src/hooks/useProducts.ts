import { useQuery } from '@tanstack/react-query';
import { fetchProductsByBrand } from '../api/products';
import type { Product } from '../types';

export const useProducts = (brandId: string, page: number, limit: number) => {
    return useQuery<Product[]>({
        queryKey: ['products', brandId, page],
        queryFn: () => fetchProductsByBrand(brandId, page, limit),
        enabled: !!brandId,
    });
};
