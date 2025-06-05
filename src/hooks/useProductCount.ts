import { useQuery } from '@tanstack/react-query';
import { fetchProductCountByBrand } from '../api/products';

export const useProductCount = (brandId: string) => {
    return useQuery({
        queryKey: ['productCount', brandId],
        queryFn: () => fetchProductCountByBrand(brandId),
        enabled: !!brandId,
    });
};
