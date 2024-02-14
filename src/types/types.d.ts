// used for http-common.ts
type HeadersInit = [string, string][] | Record<string, string> | Headers;
type BodyInit = ReadableStream<any> | XMLHttpRequestBodyInit;
type XMLHttpRequestBodyInit = string | Blob | FormData | URLSearchParams;
type RequestMode = 'cors' | 'navigate' | 'no-cors' | 'same-origin';
type RequestCache =
    | 'default'
    | 'force-cache'
    | 'no-cache'
    | 'no-store'
    | 'only-if-cached'
    | 'reload';
type RequestCredentials = 'same-origin' | 'include' | 'omit';
type RequestRedirect = 'error' | 'follow' | 'manual';
type ReferrerPolicy =
    | ''
    | 'same-origin'
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url';
declare type RequestInit = {
    method?: string;
    headers?: HeadersInit;
    body?: BodyInit | null;
    mode?: RequestMode;
    credentials?: RequestCredentials;
    cache?: RequestCache;
    redirect?: RequestRedirect;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;
    integrity?: string;
    keepalive?: boolean;
    signal?: AbortSignal | null;
};