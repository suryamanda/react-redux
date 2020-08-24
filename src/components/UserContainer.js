import React, { useEffect } from 'react'
import { fetchUsers } from '../redux'
import { connect } from 'react-redux'

const UserContainer = (props) => {

    useEffect(() => {
        console.log('useEffect')
        props.fetchUsers1()
    }, [])

    return (
        <div>
            <h2>User Container</h2>
            <div>{props.userData.users.map(user => <p key={user.email}>{user.email}</p>)}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers1: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)