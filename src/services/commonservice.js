import axios from 'axios';
import { SIGNIN_URL } from "./constants";


export const getsigninFn = (loginObj) => {
    return new Promise((resolve, reject) => {
        try {
            axios({
                method: 'post',
                url: SIGNIN_URL,
                data: loginObj,
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                let data = response.data
                resolve(data);
            }).catch((err) => {
                console.log("getSigninUser > axios err=", err);
                reject("Error in getSignin axios!");
            })


        } catch (err) {
            reject(err);
        }
    });

}