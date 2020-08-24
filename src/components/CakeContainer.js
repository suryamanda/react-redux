import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

const CakeContainer = (props) => {
    return (
        <div>
            <h2>No of Available cakes - {props.numberOfCakes}</h2>
            <button onClick = {props.buyCake}>Buy Cakes</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfCakes : state.cake.numberOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)