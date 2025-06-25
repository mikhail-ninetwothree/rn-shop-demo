import { useLoginMutation } from '@data/auth/authDataSource';
import { LoginData } from '@data/auth/models/LoginData';
import { useAppContext } from '@context/AppContext';
import { setAuthToken, setUserProfile } from 'src/data/local/appStorage';
import useAlert from '@alert';

export const useLogin = () => {
    const { logIn } = useAppContext();
    const { showAlert } = useAlert();
    const { mutate, isPending } = useLoginMutation();
    const makeLogin = (data: LoginData) => {
        mutate(data, {
            onSuccess: async (result) => {
                const { accessToken, ...user } = result;
                await setAuthToken(accessToken);
                await setUserProfile(user);
                logIn(user);
            },
            onError: (error) => {
                console.log('login error: ' + error.message);
                showAlert(error.message);
            },
        });
    };

    return { makeLogin, isPending };
};
