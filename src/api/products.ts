import api from './axios';
import type { Product } from '../types';

export const fetchProductsByBrand = async (brandId: string, page?: number, limit?: number): Promise<Product[]> => {
    try {
        const { data } = await api.get<Product[]>(`/products?brandId=${brandId}&_page=${page}&_limit=${limit}`);
        return data;
    } catch (error) {
        console.error('Failed to fetch products by brand:', error);
        throw new Error('Could not fetch products. Please try again later.');
    }
};

export const fetchProductCountByBrand = async (brandId: string): Promise<number> => {
    try {
        // Right now we're getting all the data just for the mock.
        // Ideally, the backend will provide separate endpoint for count, so we don't have to get all the data just for count.
        const { data } = await api.get<Product[]>(`/products?brandId=${brandId}`);
        return data.length;
    } catch (error) {
        console.error('Failed to fetch product count:', error);
        throw new Error('Could not fetch product count.');
    }
};
