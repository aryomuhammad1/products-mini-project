import api from './axios';
import type { Brand } from '../types';

export const fetchBrands = async (page: number, limit: number): Promise<Brand[]> => {
    try {
        const { data } = await api.get<Brand[]>(`/brands?_sort=id&_order=asc&_page=${page}&_limit=${limit}`);
        return data;
    } catch (error) {
        console.error('Failed to fetch brands:', error);
        throw new Error('Could not fetch brands. Please try again later.');
    }
};

export const fetchBrandCount = async (): Promise<number> => {
    try {
        // Right now we're getting all the data just for the mock.
        // Ideally, the backend will provide separate endpoint for count, so we don't have to get all the data just for count.
        const { data } = await api.get<Brand[]>(`/brands`);
        return data.length;
    } catch (error) {
        console.error('Failed to fetch brand count:', error);
        throw new Error('Could not fetch brand count.');
    }
};
