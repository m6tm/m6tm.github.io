/**
 * Options pour les requêtes HTTP.
 */
export interface HttpRequestOptions {
    headers?: Record<string, string>;
    signal?: AbortSignal;
}

/**
 * Réponse HTTP générique.
 */
export interface HttpResponse<T> {
    data: T;
    status: number;
    ok: boolean;
}

/**
 * Erreur HTTP.
 */
export class HttpError extends Error {
    constructor(
        public status: number,
        public statusText: string,
        public data?: unknown
    ) {
        super(`HTTP Error ${status}: ${statusText}`);
        this.name = 'HttpError';
    }
}

/**
 * Client HTTP réutilisable basé sur fetch.
 */
export class HttpClient {
    private baseUrl: string;

    constructor(baseUrl: string = '') {
        this.baseUrl = baseUrl;
    }

    /**
     * Effectue une requête GET.
     */
    async get<T>(
        endpoint: string,
        options: HttpRequestOptions = {}
    ): Promise<HttpResponse<T>> {
        return this.request<T>('GET', endpoint, undefined, options);
    }

    /**
     * Effectue une requête POST.
     */
    async post<T>(
        endpoint: string,
        body: unknown,
        options: HttpRequestOptions = {}
    ): Promise<HttpResponse<T>> {
        return this.request<T>('POST', endpoint, body, options);
    }

    /**
     * Effectue une requête PUT.
     */
    async put<T>(
        endpoint: string,
        body: unknown,
        options: HttpRequestOptions = {}
    ): Promise<HttpResponse<T>> {
        return this.request<T>('PUT', endpoint, body, options);
    }

    /**
     * Effectue une requête DELETE.
     */
    async delete<T>(
        endpoint: string,
        options: HttpRequestOptions = {}
    ): Promise<HttpResponse<T>> {
        return this.request<T>('DELETE', endpoint, undefined, options);
    }

    /**
     * Méthode principale pour effectuer une requête.
     */
    private async request<T>(
        method: string,
        endpoint: string,
        body?: unknown,
        options: HttpRequestOptions = {}
    ): Promise<HttpResponse<T>> {
        const url = `${this.baseUrl}${endpoint}`;

        const headers: Record<string, string> = {
            ...options.headers,
        };

        if (body && !(body instanceof FormData)) {
            headers['Content-Type'] = 'application/json';
        }

        const response = await fetch(url, {
            method,
            headers,
            body: body ? (body instanceof FormData ? body : JSON.stringify(body)) : undefined,
            signal: options.signal,
        });

        let data: T;

        const contentType = response.headers.get('content-type');
        if (contentType?.includes('application/json')) {
            data = await response.json();
        } else {
            data = (await response.text()) as unknown as T;
        }

        if (!response.ok) {
            throw new HttpError(response.status, response.statusText, data);
        }

        return {
            data,
            status: response.status,
            ok: response.ok,
        };
    }
}

/**
 * Instance par défaut du client HTTP.
 */
export const httpClient = new HttpClient();
