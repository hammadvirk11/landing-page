import { createStore, combineReducers } from 'redux'

const initialState = {

  product:"",

}
const changeState = (state = initialState, action) => {
    switch (action.type) {

      case "product": {
        console.log(action.product.data,"response product")

        return {
          ...state,
          product: action.product.data,
        };
      }

      default:
        return {
          ...state,
        };
    }
  }
    const reducers = combineReducers({
        changeState,
});
//   const store = createStore(changeState)
  export default reducers;


// export default reducers;