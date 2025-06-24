import { useHomeMutation } from 'src/data/home/homeDataSource';
import { PaginationData } from 'src/data/home/models/PaginationData';

export const useHome = () => {
    const { mutateAsync, isPending } = useHomeMutation();    
    
    const getProducts = async (pageData: PaginationData) => {
        const result = await mutateAsync(pageData);
        return result;
    };

    return { getProducts, isPending };
};
