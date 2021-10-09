import { useEffect, useReducer } from 'react';
import apiReducer, { initialState, Actions } from './apiReducer';

const useApi = path => {
  const [{ response, error, isLoading }, dispatch] = useReducer(apiReducer, initialState);

  useEffect(() => {
    (async () => {
      dispatch({ type: Actions.LOADING });
      try {
        const res = await fetch(`https://got4yfo1jg.execute-api.eu-west-2.amazonaws.com/live/content/${path}`);
        const response = await res.json();

        dispatch({ type: Actions.SUCCESS, payload: { response } });
      } catch (error) {
        dispatch({ type: Actions.ERROR, error });
      }
    })();
  }, [path]);

  return { response, error, isLoading };
};

export default useApi;
