import axios from 'axios';
import { GET_ALL_PRODUCTS, ADD_PRODUCT } from "./constants";




export const addProductFn = (formData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        method: 'post',
        url: ADD_PRODUCT,
        data: formData,
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmQzMzI0NGU4MzEzM2NkMjA2ZmRiNCIsImlhdCI6MTY3MDI1OTEwMiwiZXhwIjoxNjcwMzQ1NTAyfQ.14rLN1-yWbWGzDN4Ktk-jQarppUgzP2RAOAaev-N4-I'
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











export const getAllProducts = (type) => {
  return new Promise((resolve, reject) => {
    try {
      // axios.get(GET_ALL_PRODUCTS + '?sort=' + type)  
      //     .then((res) => {
      //         console.log("getAllProducts> axios res=", res);
      //         resolve(res.data);   
      //   }).catch((err) => {
      //         console.log("getAllProducts > axios err=", err);
      //         reject("Error in getAllProducts axios!");
      // })


      axios({
        method: 'get',
        url: GET_ALL_PRODUCTS,
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmQzMzI0NGU4MzEzM2NkMjA2ZmRiNCIsImlhdCI6MTY2OTU2ODgxOCwiZXhwIjoxNjY5NjU1MjE4fQ.C1pEDVyk5OsvYbL08k96CTXHdwa--6kiZZ_o18mWdT4'
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