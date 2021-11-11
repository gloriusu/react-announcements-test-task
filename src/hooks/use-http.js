import {useReducer, useCallback} from 'react';


const httpReducer = (state, action) => {
    switch (action.type) {
        case 'SEND':
            return {
                data: null,
                error: null,
                status: 'loading',
            }
        case 'SUCCESS':
            return {
                data: action.responseData,
                error: null,
                status: 'completed',
            }
        case 'ERROR':
            return {
                data: null,
                error: action.errorMessage,
                status: 'completed',
            }
        default:
            return state;
    }
}


const UseHttp = (httpFunction, loadingFromStart = false) => {

    const INITIAL_STATE = {
        data: null,
        error: null,
        status: loadingFromStart ? 'loading' : null,
    }

    const [state, dispatch] = useReducer(httpReducer, INITIAL_STATE);

    const sendRequest = useCallback(
        async (requestData) => {
            dispatch({
                type: 'SEND'
            });
            try {
                const responseData = await httpFunction(requestData);
                dispatch({
                    type: 'SUCCESS',
                    responseData
                });
            } catch (error) {
                dispatch({
                    type: 'ERROR',
                    errorMessage: error.message
                });
            }
        }, [httpFunction]
    );

    return {
        sendRequest,
        ...state
    }
};

export default UseHttp;