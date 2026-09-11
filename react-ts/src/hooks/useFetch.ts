import { useEffect, useState } from "react";
interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
export function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    async function fetchData() {
      setState({ data: null, loading: true, error: null });
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const data: T = await response.json();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error:
            error instanceof Error ? error.message : "Something went wrong",
        });
      }
    }
    fetchData();
  }, [url]);
  return state;
}
