export const initialState = {
  response: null,
  error: null,
  isLoading: false,
};

export const Actions = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

const apiReducer = (state, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case Actions.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case Actions.SUCCESS:
      return {
        ...state,
        response: action.payload.response,
        isLoading: false,
      };

    case Actions.ERROR:
      return {
        ...state,
        error: action.payload.error,
        sLoading: false,
      };
  }
};

export default apiReducer;
