import api from './axios';
import type { ProductDetail } from '../types';

export const fetchProductDetail = async (productId: string): Promise<ProductDetail | undefined> => {
    const { data } = await api.get<ProductDetail[]>(`/productDetails?productId=${productId}`);
    return data[0];
};
