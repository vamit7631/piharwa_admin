import axios from 'axios';
import { GET_ALL_CATEGORIES, GET_ROOT_CATEGORIES } from "./constants";


export const getRootCategories = () => {
    return new Promise((resolve, reject) => {
        try {
            axios({
                method: 'get',
                url: GET_ROOT_CATEGORIES,
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                let data = response.data
                resolve(data);
            }).catch((err) => {
                console.log("getRootCategories > axios err=", err);
                reject("Error in getRootProducts axios!");
            })


        } catch (err) {
            reject(err);
        }
    });

}



export const getAllCategories = (rootCategoryId) => {
    return new Promise((resolve, reject) => {
        try {
            axios({
                method: 'get',
                url: GET_ALL_CATEGORIES + rootCategoryId,
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                let data = response.data
                resolve(data);
            }).catch((err) => {
                console.log("getAllCategories > axios err=", err);
                reject("Error in getAllProducts axios!");
            })


        } catch (err) {
            reject(err);
        }
    });

}