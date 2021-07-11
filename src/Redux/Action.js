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
        console.log(res,"response product")
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