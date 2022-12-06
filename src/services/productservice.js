import axios from 'axios';
import { GET_ALL_PRODUCTS, ADD_PRODUCT } from "./constants";




export const addProductFn = (formData, accessToken) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        method: 'post',
        url: ADD_PRODUCT,
        data: formData,
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': accessToken
        }
      }).then(function (response) {
        let data = response.data
        resolve(data);
      }).catch((err) => {
        console.log("getAllProducts > axios err=", err);
        reject("Error in getAllProducts axios!");
      })


    } catch (err) {
      reject(err);
    }
  });

}











export const getAllProducts = (accessToken) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        method: 'get',
        url: GET_ALL_PRODUCTS,
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': accessToken
        }
      }).then(function (response) {
        console.log(response, "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
        let data = response.data
        resolve(data);
      }).catch((err) => {
        console.log("getAllProducts > axios err=", err);
        reject("Error in getAllProducts axios!");
      })


    } catch (err) {
      reject(err);
    }
  });

}