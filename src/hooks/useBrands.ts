import { useQuery } from '@tanstack/react-query';
import { fetchBrands } from '../api/brands';
import type { Brand } from '../types';

export const useBrands = (page: number, limit: number) => {
    return useQuery<Brand[]>({
        queryKey: ['brands', page],
        queryFn: () => fetchBrands(page, limit),
        // keepPreviousData: true,
    });
};
