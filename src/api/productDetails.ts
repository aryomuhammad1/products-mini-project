import api from './axios';
import type { ProductDetail } from '../types';

export const fetchProductDetail = async (productId: string): Promise<ProductDetail | undefined> => {
    try {
        const { data } = await api.get<ProductDetail[]>(`/productDetails?productId=${productId}`);
        return data[0];
    } catch (error) {
        console.error('Failed to fetch product detail:', error);
        throw new Error('Could not fetch product detail.');
    }
};
