import React, {useEffect, useReducer} from 'react';
import axios from 'axios';


const initialState = {
    loading : true,
    error : '',
    post : {}
}

const reducer = (state, action) => {
    switch(action.type){
        case  'FETCH_SUCCESS':
            return {
                loading : false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something Went Wrong !'
            }
        default:
            return state
    }
}

function DataFetchUsingUseReducer() {
    const [state, dispatch]= useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/11')
            .then(response => {
                dispatch({type: 'FETCH_SUCCESS', payload: response.data})
            }).catch(err => {
                dispatch({ type: 'FETCH_ERROR'})
            })
    }, [])


    return (
        <div>
            {state.loading ? 'Loading...' : state.post.title}
            {state.error ? state.error : null}
        </div>
    );
}

export default DataFetchUsingUseReducer;