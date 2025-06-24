export interface Product {
    id: number;
    price: number;
    title: string;
    description: string;
    thumbnail: string;
    images: string[];
    discountPercentage: number;
    rating: number;
    availabilityStatus: string;
    stock: number;
    shippingInformation: string;
    warrantyInformation: string;
}

export const formatPrice = (price: number): string => {
    return `$${price.toFixed(2).replace('.', ',')}`;
};

export const formatDiscount = (discountPercentage: number): string => {
    const discountPercent = Math.round(discountPercentage);
    return `-${discountPercent}%`;
};

export const formatRealPrice = (price: number, discountPercentage: number): string => {
    const discountPercent = Math.round(discountPercentage);
    const realPrice = price / (1-(discountPercent / 100));
    return `$${realPrice.toFixed(2).replace('.', ',')}`;
};