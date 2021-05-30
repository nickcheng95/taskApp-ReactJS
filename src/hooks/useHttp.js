import {useCallback, useState} from 'react'

const useHttp = () => {
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig,applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const {url, method = 'GET' , body = null, headers = {}} = requestConfig
      const response = await fetch(
        url,
        {
          method,
          body: body ? JSON.stringify(body) : null,
          headers
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      applyData(data)
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  },[]);

  return {
    isLoading,
    error,
    sendRequest
  }
}


export default useHttp
