/* tslint:disable */
/* eslint-disable */
/**
 * Wmail API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface AccountInfoResp
 */
export interface AccountInfoResp {
    /**
     * 
     * @type {string}
     * @memberof AccountInfoResp
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountInfoResp
     */
    'name'?: string;
}
/**
 * 
 * @export
 * @interface AccountLoginReq
 */
export interface AccountLoginReq {
    /**
     * 
     * @type {string}
     * @memberof AccountLoginReq
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountLoginReq
     */
    'password'?: string;
}
/**
 * 
 * @export
 * @interface AccountRegisterReq
 */
export interface AccountRegisterReq {
    /**
     * 
     * @type {string}
     * @memberof AccountRegisterReq
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountRegisterReq
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountRegisterReq
     */
    'password'?: string;
}
/**
 * 
 * @export
 * @interface AccountUpdateReq
 */
export interface AccountUpdateReq {
    /**
     * 
     * @type {string}
     * @memberof AccountUpdateReq
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountUpdateReq
     */
    'password'?: string;
}
/**
 * 
 * @export
 * @interface ApiV1AccountInfoGet200Response
 */
export interface ApiV1AccountInfoGet200Response {
    /**
     * 
     * @type {AccountInfoResp}
     * @memberof ApiV1AccountInfoGet200Response
     */
    'data'?: AccountInfoResp;
    /**
     * 
     * @type {UtilsResponse}
     * @memberof ApiV1AccountInfoGet200Response
     */
    'utils.Response'?: UtilsResponse;
}
/**
 * 
 * @export
 * @interface ApiV1MailListGet200Response
 */
export interface ApiV1MailListGet200Response {
    /**
     * 
     * @type {Array<MailRecord>}
     * @memberof ApiV1MailListGet200Response
     */
    'data'?: Array<MailRecord>;
    /**
     * 
     * @type {UtilsResponse}
     * @memberof ApiV1MailListGet200Response
     */
    'utils.Response'?: UtilsResponse;
}
/**
 * 
 * @export
 * @interface ApiV1MailMailIdGet200Response
 */
export interface ApiV1MailMailIdGet200Response {
    /**
     * 
     * @type {MailEmail}
     * @memberof ApiV1MailMailIdGet200Response
     */
    'data'?: MailEmail;
    /**
     * 
     * @type {UtilsResponse}
     * @memberof ApiV1MailMailIdGet200Response
     */
    'utils.Response'?: UtilsResponse;
}
/**
 * 
 * @export
 * @interface MailEmail
 */
export interface MailEmail {
    /**
     * 
     * @type {Array<string>}
     * @memberof MailEmail
     */
    'bcc'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof MailEmail
     */
    'cc'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof MailEmail
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof MailEmail
     */
    'from'?: string;
    /**
     * 
     * @type {string}
     * @memberof MailEmail
     */
    'html'?: string;
    /**
     * 
     * @type {string}
     * @memberof MailEmail
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof MailEmail
     */
    'last_event'?: string;
    /**
     * 
     * @type {string}
     * @memberof MailEmail
     */
    'object'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof MailEmail
     */
    'reply_to'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof MailEmail
     */
    'subject'?: string;
    /**
     * 
     * @type {string}
     * @memberof MailEmail
     */
    'text'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof MailEmail
     */
    'to'?: Array<string>;
}
/**
 * 
 * @export
 * @interface MailRecord
 */
export interface MailRecord {
    /**
     * 
     * @type {string}
     * @memberof MailRecord
     */
    'create_time'?: string;
    /**
     * 
     * @type {string}
     * @memberof MailRecord
     */
    'mail_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof MailRecord
     */
    'title'?: string;
}
/**
 * 
 * @export
 * @interface MailSendReq
 */
export interface MailSendReq {
    /**
     * 
     * @type {string}
     * @memberof MailSendReq
     */
    'content'?: string;
    /**
     * 
     * @type {string}
     * @memberof MailSendReq
     */
    'subject'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof MailSendReq
     */
    'to'?: Array<string>;
}
/**
 * 
 * @export
 * @interface UtilsResponse
 */
export interface UtilsResponse {
    /**
     * 
     * @type {number}
     * @memberof UtilsResponse
     */
    'code'?: number;
    /**
     * 
     * @type {object}
     * @memberof UtilsResponse
     */
    'data'?: object;
    /**
     * 
     * @type {string}
     * @memberof UtilsResponse
     */
    'message'?: string;
}

/**
 * AccountApi - axios parameter creator
 * @export
 */
export const AccountApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * no description
         * @summary 取得用戶資訊
         * @param {string} authorization token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1AccountInfoGet: async (authorization: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('apiV1AccountInfoGet', 'authorization', authorization)
            const localVarPath = `/api/v1/account/info`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * no description
         * @summary 登入
         * @param {AccountLoginReq} request request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1AccountLoginPost: async (request: AccountLoginReq, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'request' is not null or undefined
            assertParamExists('apiV1AccountLoginPost', 'request', request)
            const localVarPath = `/api/v1/account/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(request, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * no description
         * @summary 註冊
         * @param {AccountRegisterReq} request request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1AccountRegisterPost: async (request: AccountRegisterReq, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'request' is not null or undefined
            assertParamExists('apiV1AccountRegisterPost', 'request', request)
            const localVarPath = `/api/v1/account/register`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(request, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * no description
         * @summary 更新資料
         * @param {string} authorization token
         * @param {AccountUpdateReq} request request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1AccountUpdatePost: async (authorization: string, request: AccountUpdateReq, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('apiV1AccountUpdatePost', 'authorization', authorization)
            // verify required parameter 'request' is not null or undefined
            assertParamExists('apiV1AccountUpdatePost', 'request', request)
            const localVarPath = `/api/v1/account/update`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(request, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * no description
         * @summary 更新Token
         * @param {string} authorization token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1AccountUpdateTokenGet: async (authorization: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('apiV1AccountUpdateTokenGet', 'authorization', authorization)
            const localVarPath = `/api/v1/account/updateToken`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AccountApi - functional programming interface
 * @export
 */
export const AccountApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AccountApiAxiosParamCreator(configuration)
    return {
        /**
         * no description
         * @summary 取得用戶資訊
         * @param {string} authorization token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1AccountInfoGet(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiV1AccountInfoGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1AccountInfoGet(authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * no description
         * @summary 登入
         * @param {AccountLoginReq} request request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1AccountLoginPost(request: AccountLoginReq, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UtilsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1AccountLoginPost(request, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * no description
         * @summary 註冊
         * @param {AccountRegisterReq} request request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1AccountRegisterPost(request: AccountRegisterReq, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UtilsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1AccountRegisterPost(request, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * no description
         * @summary 更新資料
         * @param {string} authorization token
         * @param {AccountUpdateReq} request request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1AccountUpdatePost(authorization: string, request: AccountUpdateReq, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UtilsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1AccountUpdatePost(authorization, request, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * no description
         * @summary 更新Token
         * @param {string} authorization token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1AccountUpdateTokenGet(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UtilsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1AccountUpdateTokenGet(authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AccountApi - factory interface
 * @export
 */
export const AccountApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AccountApiFp(configuration)
    return {
        /**
         * no description
         * @summary 取得用戶資訊
         * @param {string} authorization token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1AccountInfoGet(authorization: string, options?: any): AxiosPromise<ApiV1AccountInfoGet200Response> {
            return localVarFp.apiV1AccountInfoGet(authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * no description
         * @summary 登入
         * @param {AccountLoginReq} request request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1AccountLoginPost(request: AccountLoginReq, options?: any): AxiosPromise<UtilsResponse> {
            return localVarFp.apiV1AccountLoginPost(request, options).then((request) => request(axios, basePath));
        },
        /**
         * no description
         * @summary 註冊
         * @param {AccountRegisterReq} request request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1AccountRegisterPost(request: AccountRegisterReq, options?: any): AxiosPromise<UtilsResponse> {
            return localVarFp.apiV1AccountRegisterPost(request, options).then((request) => request(axios, basePath));
        },
        /**
         * no description
         * @summary 更新資料
         * @param {string} authorization token
         * @param {AccountUpdateReq} request request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1AccountUpdatePost(authorization: string, request: AccountUpdateReq, options?: any): AxiosPromise<UtilsResponse> {
            return localVarFp.apiV1AccountUpdatePost(authorization, request, options).then((request) => request(axios, basePath));
        },
        /**
         * no description
         * @summary 更新Token
         * @param {string} authorization token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1AccountUpdateTokenGet(authorization: string, options?: any): AxiosPromise<UtilsResponse> {
            return localVarFp.apiV1AccountUpdateTokenGet(authorization, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AccountApi - object-oriented interface
 * @export
 * @class AccountApi
 * @extends {BaseAPI}
 */
export class AccountApi extends BaseAPI {
    /**
     * no description
     * @summary 取得用戶資訊
     * @param {string} authorization token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public apiV1AccountInfoGet(authorization: string, options?: AxiosRequestConfig) {
        return AccountApiFp(this.configuration).apiV1AccountInfoGet(authorization, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * no description
     * @summary 登入
     * @param {AccountLoginReq} request request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public apiV1AccountLoginPost(request: AccountLoginReq, options?: AxiosRequestConfig) {
        return AccountApiFp(this.configuration).apiV1AccountLoginPost(request, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * no description
     * @summary 註冊
     * @param {AccountRegisterReq} request request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public apiV1AccountRegisterPost(request: AccountRegisterReq, options?: AxiosRequestConfig) {
        return AccountApiFp(this.configuration).apiV1AccountRegisterPost(request, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * no description
     * @summary 更新資料
     * @param {string} authorization token
     * @param {AccountUpdateReq} request request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public apiV1AccountUpdatePost(authorization: string, request: AccountUpdateReq, options?: AxiosRequestConfig) {
        return AccountApiFp(this.configuration).apiV1AccountUpdatePost(authorization, request, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * no description
     * @summary 更新Token
     * @param {string} authorization token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public apiV1AccountUpdateTokenGet(authorization: string, options?: AxiosRequestConfig) {
        return AccountApiFp(this.configuration).apiV1AccountUpdateTokenGet(authorization, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * EmailApi - axios parameter creator
 * @export
 */
export const EmailApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * no description
         * @summary 取得寄送列表
         * @param {string} authorization token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1MailListGet: async (authorization: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('apiV1MailListGet', 'authorization', authorization)
            const localVarPath = `/api/v1/mail/list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * no description
         * @summary 取得郵件內容
         * @param {string} authorization token
         * @param {string} mailId mail id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1MailMailIdGet: async (authorization: string, mailId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('apiV1MailMailIdGet', 'authorization', authorization)
            // verify required parameter 'mailId' is not null or undefined
            assertParamExists('apiV1MailMailIdGet', 'mailId', mailId)
            const localVarPath = `/api/v1/mail/{mailId}`
                .replace(`{${"mailId"}}`, encodeURIComponent(String(mailId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * no description
         * @summary 寄送Email
         * @param {string} authorization token
         * @param {MailSendReq} request request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1MailSendPost: async (authorization: string, request: MailSendReq, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('apiV1MailSendPost', 'authorization', authorization)
            // verify required parameter 'request' is not null or undefined
            assertParamExists('apiV1MailSendPost', 'request', request)
            const localVarPath = `/api/v1/mail/send`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(request, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EmailApi - functional programming interface
 * @export
 */
export const EmailApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EmailApiAxiosParamCreator(configuration)
    return {
        /**
         * no description
         * @summary 取得寄送列表
         * @param {string} authorization token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1MailListGet(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiV1MailListGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1MailListGet(authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * no description
         * @summary 取得郵件內容
         * @param {string} authorization token
         * @param {string} mailId mail id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1MailMailIdGet(authorization: string, mailId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiV1MailMailIdGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1MailMailIdGet(authorization, mailId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * no description
         * @summary 寄送Email
         * @param {string} authorization token
         * @param {MailSendReq} request request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1MailSendPost(authorization: string, request: MailSendReq, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UtilsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1MailSendPost(authorization, request, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EmailApi - factory interface
 * @export
 */
export const EmailApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EmailApiFp(configuration)
    return {
        /**
         * no description
         * @summary 取得寄送列表
         * @param {string} authorization token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1MailListGet(authorization: string, options?: any): AxiosPromise<ApiV1MailListGet200Response> {
            return localVarFp.apiV1MailListGet(authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * no description
         * @summary 取得郵件內容
         * @param {string} authorization token
         * @param {string} mailId mail id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1MailMailIdGet(authorization: string, mailId: string, options?: any): AxiosPromise<ApiV1MailMailIdGet200Response> {
            return localVarFp.apiV1MailMailIdGet(authorization, mailId, options).then((request) => request(axios, basePath));
        },
        /**
         * no description
         * @summary 寄送Email
         * @param {string} authorization token
         * @param {MailSendReq} request request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1MailSendPost(authorization: string, request: MailSendReq, options?: any): AxiosPromise<UtilsResponse> {
            return localVarFp.apiV1MailSendPost(authorization, request, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EmailApi - object-oriented interface
 * @export
 * @class EmailApi
 * @extends {BaseAPI}
 */
export class EmailApi extends BaseAPI {
    /**
     * no description
     * @summary 取得寄送列表
     * @param {string} authorization token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailApi
     */
    public apiV1MailListGet(authorization: string, options?: AxiosRequestConfig) {
        return EmailApiFp(this.configuration).apiV1MailListGet(authorization, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * no description
     * @summary 取得郵件內容
     * @param {string} authorization token
     * @param {string} mailId mail id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailApi
     */
    public apiV1MailMailIdGet(authorization: string, mailId: string, options?: AxiosRequestConfig) {
        return EmailApiFp(this.configuration).apiV1MailMailIdGet(authorization, mailId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * no description
     * @summary 寄送Email
     * @param {string} authorization token
     * @param {MailSendReq} request request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailApi
     */
    public apiV1MailSendPost(authorization: string, request: MailSendReq, options?: AxiosRequestConfig) {
        return EmailApiFp(this.configuration).apiV1MailSendPost(authorization, request, options).then((request) => request(this.axios, this.basePath));
    }
}


