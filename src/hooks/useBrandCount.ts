import { useQuery } from '@tanstack/react-query';
import { fetchBrandCount } from '../api/brands.ts';

export const useBrandCount = () =>
    useQuery({
        queryKey: ['brand-count'],
        queryFn: fetchBrandCount,
        staleTime: 1000 * 60,
    });
