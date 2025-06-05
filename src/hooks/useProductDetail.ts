import { useQuery } from "@tanstack/react-query";
import { fetchProductDetail } from "../api/productDetails";
import type { ProductDetail } from "../types";

export const useProductDetail = (productId: string) => {
    return useQuery<ProductDetail | undefined>({
        queryKey: ["product-detail", productId],
        queryFn: () => fetchProductDetail(productId),
        enabled: !!productId,
    });
};
