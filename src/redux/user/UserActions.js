import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './UserActionTypes'
import axios from 'axios'

const fetchUsersRequest = () => {
    console.log('in fetch users request')
    return {
        type : FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type : FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type : FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    console.log('in fetch Users')
    return dispatch => {
        console.log('in dispatch')
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            response => {
                const users = response.data
                console.log('users', users)
                dispatch(fetchUsersSuccess(users))
            })
            .catch(
                error => {
                    const errorMsg = error.message
                    console.log('error')
                    dispatch(fetchUsersFailure(errorMsg))
                }
            )    
    }


}