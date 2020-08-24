const { BUY_ICECREAM } = require("./IceCreamTypes")

const initialState = {
    numberOfIceCreams : 10
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM : 
        return {
            ...state,
            numberOfIceCreams : state.numberOfIceCreams - 1
        }
        default : return state;
    }
}

export default iceCreamReducer