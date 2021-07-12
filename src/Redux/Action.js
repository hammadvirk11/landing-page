import { axiosClient } from '../helper';
import { NotificationManager } from "react-notifications";


function addProductAction(data) {
    return {
      type: "product",
      product:data
    };
  }
export function addProduct(data) {
    console.log(data)

    return async (dispatch) => {
      try {
        const res = await axiosClient().post(`store/manual/product`, data);
        NotificationManager.success(res?.data?.message);

        dispatch(
            addProductAction(
            res.data,
        
          )
        );
      } catch (err) {
        console.log(err);
        NotificationManager.error(err.response?.data.message);
      }
    };
  }

  function getProductsAction(data) {
    return {
      type: "products",
      products:data
    };
  }
export function getProducts() {


    return async (dispatch) => {
      try {
        const res = await axiosClient().get(`platforms/075fbd22-012c-cc3e-a382-f4147380402f/products`);
        NotificationManager.success("products Found");

        dispatch(
          getProductsAction(
            res.data.products,
        
          )
        );
      } catch (err) {
        console.log(err);
        NotificationManager.error(err.response?.data.message);
      }
    };
  }
  function getVendorsAction(data) {
    return {
      type: "vendors",
      vendors:data
    };
  }
export function getVendors() {


    return async (dispatch) => {
      try {
        const res = await axiosClient().get(`platforms/075fbd22-012c-cc3e-a382-f4147380402f/vendors`);

        dispatch(
          getVendorsAction(
            res.data,
        
          )
        );
      } catch (err) {
        console.log(err);
        NotificationManager.error(err.response?.data.message);
      }
    };
  }
  function exploreAction(data) {
    return {
      type: "explore",
      explore:data
    };
  }
export function explore() {


    return async (dispatch) => {
      try {
        const res = await axiosClient().get(`platforms/075fbd22-012c-cc3e-a382-f4147380402f/products?maxRange=2&currency="ETH"`);

        dispatch(
          exploreAction(
            res.data.products,
        
          )
        );
      } catch (err) {
        console.log(err);
        NotificationManager.error(err.response?.data.message);
      }
    };
  }
  function hotCollectionAction(data) {
    return {
      type: "hotCollection",
      hotCollection:data
    };
  }
export function hotCollection() {


    return async (dispatch) => {
      try {
        const res = await axiosClient().get(`platforms/075fbd22-012c-cc3e-a382-f4147380402f/products?maxRange=2&currency="ETH"`);

        dispatch(
          hotCollectionAction(
            res.data.products,
        
          )
        );
      } catch (err) {
        console.log(err);
        NotificationManager.error(err.response?.data.message);
      }
    };
  }