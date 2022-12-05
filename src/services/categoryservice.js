import axios from 'axios';
import { GET_ALL_CATEGORIES } from "./constants";


export const getAllCategories = () => {
    return new Promise((resolve, reject) => {
        try {
            axios({
                method: 'get',
                url: GET_ALL_CATEGORIES,
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