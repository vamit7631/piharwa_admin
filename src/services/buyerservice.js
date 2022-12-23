import axios from 'axios';
import { GET_ALL_BUYERS } from "./constants";


export const getAllBuyers = (accessToken) => {
    return new Promise((resolve, reject) => {
        try {
            axios({
                method: 'post',
                url: GET_ALL_BUYERS,
                data: {
                    "pageNo": 1,
                    "noRecord": 5
                },
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': accessToken
                }
            }).then(function (response) {
                let data = response.data
                resolve(data);
            }).catch((err) => {
                console.log("getAllBuyers > axios err=", err);
                reject("Error in getAllBuyers axios!");
            })


        } catch (err) {
            reject(err);
        }
    });

}