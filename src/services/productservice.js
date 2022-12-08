import axios from 'axios';
import { GET_ALL_PRODUCTS, ADD_PRODUCT, GET_SINGLE_PRODUCTS, UPDATE_SINGLE_PRODUCT } from "./constants";




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





export const getSingleProduct = (id) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        method: 'get',
        url: GET_SINGLE_PRODUCTS + id,
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        let data = response.data
        resolve(data);
      }).catch((err) => {
        console.log("getSingleProduct > axios err=", err);
        reject("Error in getAllProducts axios!");
      })


    } catch (err) {
      reject(err);
    }
  });

}


export const updateSingleProduct = (formData, accessToken) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        method: 'put',
        url: UPDATE_SINGLE_PRODUCT,
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