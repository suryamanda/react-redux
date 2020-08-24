import React from 'react'
import { buyIceCream } from '../redux' 
import { useSelector, useDispatch } from 'react-redux'

const IceCreamContainer = (props) => {
    const numberOfIceCreams = useSelector(state => state.iceCream.numberOfIceCreams);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of icecreams available : {numberOfIceCreams} </h2>
            <button onClick = {() => dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    )
}


export default IceCreamContainer