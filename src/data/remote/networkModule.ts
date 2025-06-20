import axios from 'axios';
import { ErrorCause, ErrorCode, parseNetworkError } from '@util/errorParser';
import { QueryClient } from '@tanstack/react-query';
import Config from 'react-native-config';
import { getAuthToken } from '@data/local/appStorage';
import Constants from '@consts';

export enum HttpMethod {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    PATCH = 'patch',
    DELETE = 'delete',
}

export const api = axios.create({
    baseURL: Config.BASE_URL,
    timeout: Constants.apiTimeoutTime,
});

export const queryClient = new QueryClient();

api.interceptors.request.use(
    async (config) => {
        const token = await getAuthToken();
        if (token) {
            // TODO: add the Auth Header that is accepted by the BE
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log('Request:', `${config.method} ${config.url} params: ${JSON.stringify(config.params, null, 0)} body: ${JSON.stringify(config.data, null, 0)}`);
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => {
        console.log('Response:', JSON.stringify(response.data, null, 2));
        return response;
    },
    (error) => {
        console.log('Response:', JSON.stringify(error, null, 2));
        if (error.status === ErrorCode.UNAUTHORIZED) {
            // TODO: Handle unauthorized error, refresh token, or redirect to login depending on the App requirements
        }
        return Promise.reject(parseNetworkError(error.status, error?.response?.data, error.code));
    }
);

/**
 * Function to automatically replace path params in the URL
 */
const resolvePathParams = (url: string, pathParams?: Record<string, string | number>) => {
    if (!pathParams) {
        return url;
    }

    // Replace all placeholders (e.g., {id}) in the URL with the actual values provided in pathParams
    return url.replace(/{(\w+)}/g, (_, key) => {
        if (key in pathParams) {
            return String(pathParams[key]);
        }
        console.warn(`Path parameter "${key}" was not provided.`);
        return `{${key}}`; // Retain the placeholder if no replacement exists
    });
};


const makeRequest = async <T>(
    method: HttpMethod,
    url: string,
    options: {
        pathParams?: Record<string, string | number>;
        data?: object;
        query?: Record<string, string | number>;
    } = {}
): Promise<T> => {
    const { pathParams, data, query } = options;

    // Resolve URL with path parameters
    const resolvedUrl = resolvePathParams(url, pathParams);

    try {
        const response = await api.request<T>({
            method,
            url: resolvedUrl,
            ...(data && { data }), // JSON body for POST/PATCH requests
            ...(query && { params: query }), // Query params in the URL (e.g., `?key=value`)
        });
        return response.data;
    } catch (error) {
        throw error as ErrorCause;
    }
};


/**
 * Axios wrapper
 *
 * @param  {string} method Method of the request
 * @param  {string} url url of the request
 *
 * @param  {object} params Body data for POST/PATCH/PUT
 * @param  {Record<string, string | number>} pathParams Path parameters to be replaced in the URL
 * @param  {Record<string, string | number>} query  Query parameters
 *
 * @return {object} wrapped axios function that receives params
 */
export const request =
    <T>(method: HttpMethod, url: string): (options?: {
        body?: object;
        pathParams?: Record<string, string | number>;
        query?: Record<string, string | number>;
    }) => Promise<T> => {
        return ({ body, pathParams, query }: {
            body?: object;
            pathParams?: Record<string, string | number>;
            query?: Record<string, string | number>;
        } = {}): Promise<T> => {
            return makeRequest<T>(method, url, { data: body, pathParams, query });
        };
    };
