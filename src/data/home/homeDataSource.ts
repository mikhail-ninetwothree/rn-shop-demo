import { HttpMethod, request } from '../remote/networkModule';
import { ErrorCause } from 'src/util/errorParser';
import { useMutation } from '@tanstack/react-query';
import { ProductsResponse } from './models/ProductsResponse';
import { PaginationData } from './models/PaginationData';

const HomeEndpoints = {
    GET_PRODUCTS: 'products',
};

const HomeMutationKeys = {
    GET_PRODUCTS: 'getProducts',
};

const getProducts = async (data: PaginationData): Promise<ProductsResponse> => {
    return request<ProductsResponse>(HttpMethod.GET, HomeEndpoints.GET_PRODUCTS)({ 
        query: { 
            limit: data.limit,
            skip: data.page * data.limit
        }
    });
};

export const useHomeMutation = () => useMutation<ProductsResponse, ErrorCause, PaginationData>({
    mutationKey: [HomeMutationKeys.GET_PRODUCTS],
    mutationFn: getProducts
});
