import api from './axios';
import type { Brand } from '../types';

export const fetchBrands = async (page: number, limit: number): Promise<Brand[]> => {
    const { data } = await api.get<Brand[]>(`/brands?_sort=id&_order=asc&_page=${page}&_limit=${limit}`);
    return data;
};

export const fetchBrandCount = async (): Promise<number> => {
    // Right now we're getting all the data just for the mock.
    // Ideally, the backend will provide separate endpoint for count, so we don't have to get all the data just for count.
    const { data } = await api.get('/brands');
    return data.length;
};
