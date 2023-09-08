import axios from "axios";
import { api } from "../../consts/api";
/* const path = "/auth/login" */
interface loginTypes {
    email: string,
    password: string
}

export const auth = async ({ email, password }: loginTypes) => {

    const options = {
        method: 'POST',
        /* url:'https://turing-api-prod-3qo7y2nenq-ue.a.run.app/auth/login', */
        url: `${api}/auth/login`,
        //url: 'http://localhost:3000/auth/login',
        headers: { 'Content-Type': 'application/json' },
        data: { email: email, password: password }
    };

    const res = axios.request(options).then(function (response) {
        return response
    }).catch(function (error) {
        if (error.response.status === 401) {
            return error.response
        }
    });

    return res;
}

export function setUserLocalStorage(user: any) {
    localStorage.setItem('USER_TOKEN', JSON.stringify(user));
}

export function getUserLocalStorage() {
    const json = localStorage.getItem('USER_TOKEN');

    if (!json) {
        return null;
    }
    const user = JSON.parse(json);
    return user;
}