import axios from "axios";
import { api } from "../../consts/api";

export const PostData = ({ access_type, destination }: any) => {

    const time = new Date()

    console.log(time)
    const options = {
        method: 'POST',
        /* url:'https://turing-api-prod-3qo7y2nenq-ue.a.run.app/auth/login', */
        url: `${api}/data/add`,
        headers: { 'Content-Type': 'application/json' },
        data: { access_type, destination, time }
    };
    console.log(options)
    const res = axios.request(options).then(function (response) {
        return response
    }).catch(function (error) {
        if (error.response.status === 401) {
            return error.response
        }
    });

    return res;
}

