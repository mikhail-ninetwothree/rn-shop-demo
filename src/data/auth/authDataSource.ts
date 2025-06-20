import { HttpMethod, request } from '../remote/networkModule';
import { LoginData } from './models/LoginData';
import { LoginResponse } from './models/LoginResponse';
import { ErrorCause } from 'src/util/errorParser';
import { useMutation } from '@tanstack/react-query';

const AuthEndpoints = {
    LOGIN: 'auth/login',
};

const AuthMutationKeys = {
    LOGIN: 'makeLogin',
};

const makeLogin = async (data: LoginData): Promise<LoginResponse> => {
    return request<LoginResponse>(HttpMethod.POST, AuthEndpoints.LOGIN)({ body: data });
};

export const useLoginMutation = () => useMutation<LoginResponse, ErrorCause, LoginData>({
    mutationKey: [AuthMutationKeys.LOGIN],
    mutationFn: makeLogin
});
