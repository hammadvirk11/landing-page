import { createStore, combineReducers } from 'redux'

const initialState = {

  product:"",
  getproducts:[],
  getvendors:[],
  getexplore:[],
  getHotcollection:[],

}
const changeState = (state = initialState, action) => {
    switch (action.type) {

      case "product": {

        return {
          ...state,
          product: action.product.data,
        };
      }
      case "products": {

        return {
          ...state,
          getproducts: action.products,
        };
      }
      case "vendors": {

        return {
          ...state,
          getvendors: action.vendors,
        };
      }
      case "explore": {

        return {
          ...state,
          getexplore: action.explore,
        };
      }
      case "hotCollection": {

        return {
          ...state,
          getHotcollection: action.hotCollection,
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