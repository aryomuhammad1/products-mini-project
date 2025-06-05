export interface Brand {
    id: string;
    name: string;
}

export interface Product {
    id: string;
    brandId: string;
    name: string;
}

export interface ProductDetail {
    id: string;
    productId: string;
    description: string;
    price: number;
}
