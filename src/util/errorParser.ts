import { Strings } from '@strings';
import { getString } from '@localization';

export enum ErrorCode {
    NO_INTERNET = 0,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    SERVER_ERROR = 500,
    SERVER_UNAVAILABLE = 503,
}

enum AxiosErrorType {
    ERR_BAD_OPTION_VALUE = 'ERR_BAD_OPTION_VALUE',  // Invalid or unsupported value provided in axios configuration.
    ERR_BAD_OPTION = 'ERR_BAD_OPTION',              // Invalid option provided in axios configuration.
    ECONNABORTED = 'ECONNABORTED',                  // Request timed out due to exceeding timeout specified in axios configuration.
    ETIMEDOUT = 'ETIMEDOUT',                        // Request timed out due to exceeding default axios timelimit.
    ERR_NETWORK = 'ERR_NETWORK',                    //	Network-related issue.
    ERR_FR_TOO_MANY_REDIRECTS = 'ERR_FR_TOO_MANY_REDIRECTS', //	Request is redirected too many times; exceeds max redirects specified in axios configuration.
    ERR_DEPRECATED = 'ERR_DEPRECATED',              // Deprecated feature or method used in axios.
    ERR_BAD_RESPONSE = 'ERR_BAD_RESPONSE',          // Response cannot be parsed properly or is in an unexpected format.
    ERR_BAD_REQUEST = 'ERR_BAD_REQUEST',            // Requested has unexpected format or missing required parameters.
    ERR_CANCELED = 'ERR_CANCELED',                  // Feature or method is canceled explicitly by the user.
    ERR_NOT_SUPPORT = 'ERR_NOT_SUPPORT',            // Feature or method not supported in the current axios environment.
    ERR_INVALID_URL = 'ERR_INVALID_URL',            // Invalid URL provided for axios request.
}

interface ErrorBody {
    code: string;
    message: string;
}

export class ErrorCause {
    constructor(public message: string, public code?: ErrorCode, public title?: string) { }
}

export class ServerError extends ErrorCause {
    constructor(code: ErrorCode) {
        super(getString(Strings.errorServerError), code);
    }
}

export class UnauthorizedError extends ErrorCause {
    constructor() {
        super(getString(Strings.errorUnauthorized), ErrorCode.UNAUTHORIZED);
    }
}

export class BadRequestError extends ErrorCause {
    constructor(message: string) {
        super(message, ErrorCode.BAD_REQUEST);
    }
}

export const parseNetworkError = (errorCode?: number, errorBody?: ErrorBody, axiosErrorCode?: AxiosErrorType): ErrorCause => {
    if (axiosErrorCode === AxiosErrorType.ERR_NETWORK) {
        return new ErrorCause(getString(Strings.errorNoInternetTDesc), ErrorCode.NO_INTERNET, getString(Strings.errorNoInternetTTitle));
    }
    switch (errorCode) {
        case ErrorCode.BAD_REQUEST:
            return new ErrorCause(errorBody?.message ?? getString(Strings.errorServerError), errorCode);
        case ErrorCode.UNAUTHORIZED:
            return new UnauthorizedError();
        case ErrorCode.FORBIDDEN:
        case ErrorCode.NOT_FOUND:
        case ErrorCode.SERVER_ERROR:
        case ErrorCode.SERVER_UNAVAILABLE:
            return new ServerError(errorCode);
        default:
            return new ErrorCause(getString(Strings.errorUnexpected, errorBody?.message ?? getString(Strings.errorGeneric)), errorCode);
    }
};

export const isNoInternetError = (error: ErrorCause): boolean => {
    return error.code === ErrorCode.NO_INTERNET;
};
