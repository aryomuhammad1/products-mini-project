import api from './axios';
import type { Product } from '../types';

export const fetchProductsByBrand = async (brandId: string, page?: number, limit?: number): Promise<Product[]> => {
    const { data } = await api.get<Product[]>(`/products?brandId=${brandId}&_page=${page}&_limit=${limit}`);
    return data;
};

export const fetchProductCountByBrand = async (brandId: string): Promise<number> => {
    // Right now we're getting all the data just for the mock.
    // Ideally, the backend will provide separate endpoint for count, so we don't have to get all the data just for count.
    const { data } = await api.get<Product[]>(`/products?brandId=${brandId}`);
    return data.length;
};
