// apiService.ts
export const apiService = {
    fetchData: async (url: string, headers: any) => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
      }
    },
  };
  