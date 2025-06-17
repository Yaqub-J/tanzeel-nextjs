interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

type RequestBody = Record<string, unknown>;

export const api = {
  async get<T>(url: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return {
        data,
        status: response.status
      };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : 'An error occurred',
        status: 500
      };
    }
  },

  async post<T>(url: string, body: RequestBody): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      return {
        data,
        status: response.status
      };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : 'An error occurred',
        status: 500
      };
    }
  },

  async put<T>(url: string, body: RequestBody): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      return {
        data,
        status: response.status
      };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : 'An error occurred',
        status: 500
      };
    }
  },

  async delete<T>(url: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(url, {
        method: 'DELETE'
      });
      const data = await response.json();
      return {
        data,
        status: response.status
      };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : 'An error occurred',
        status: 500
      };
    }
  }
}; 