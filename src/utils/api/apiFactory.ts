import { getErrorMessage, isJSONString } from '../helpers';

const responseStatusHandler = (status: number) => {
  if (status === 401) {
    // gestion de l'erreur d'authentification
    return Promise.reject(new Error('Unauthorized'));
  }
};

const responseErrorHandler = (error: unknown) => {
  return Promise.reject(error);
};

const apiFactory = (baseUrl: string) => ({
  get: async <TOutput>(
    path: string,
    options: RequestInit = {}
  ): Promise<TOutput> => {
    try {
      const response = await fetch(`${baseUrl}${path}`, {
        ...options,
        headers: {
          ...options.headers,
          'ENVIFY-API-Key': `${process.env.NEXT_PUBLIC_ENVIFY_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('response', response);

      if (!response.ok) {
        const res = await response.text();
        const error = isJSONString(res) ? JSON.parse(res) : res;
        throw error;
      }

      return response.json() as Promise<TOutput>;
    } catch (error) {
      return responseErrorHandler(getErrorMessage(error));
    }
  },

  post: async <TInput, TOutput>(
    path: string,
    data: TInput,
    options: RequestInit = {}
  ): Promise<TOutput> => {
    try {
      const response = await fetch(`${baseUrl}${path}`, {
        ...options,
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          ...options.headers,
          'ENVIFY-API-Key': `${process.env.NEXT_PUBLIC_ENVIFY_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      responseStatusHandler(response.status);

      return response.json() as Promise<TOutput>;
    } catch (error) {
      return responseErrorHandler(error);
    }
  },
});

export const apiClient = apiFactory(`${process.env.NEXT_PUBLIC_API_URL}`);
export const apiAuthClient = apiFactory(
  `${process.env.NEXT_PUBLIC_AUTH_API_URL}`
);
