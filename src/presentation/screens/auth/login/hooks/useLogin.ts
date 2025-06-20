import { useLoginMutation } from '@data/auth/authDataSource';
import { LoginData } from '@data/auth/models/LoginData';
import { useAppContext } from '@context/AppContext';
import { setAuthToken } from 'src/data/local/appStorage';
import useAlert from '@alert';

export const useLogin = () => {
    const { logIn } = useAppContext();
    const { showAlert } = useAlert();
    const { mutate, isLoading } = useLoginMutation();

    const makeLogin = (data: LoginData) => {
        mutate(data, {
            onSuccess: async (result) => {
                await setAuthToken(result.accessToken);
                logIn();
            },
            onError: (error) => {
                console.log('login error: ' + error.message);
                showAlert(error.message);
            },
        });
    };

    return { makeLogin, isLoading };
};
