import axios from "axios";
const BASE_URL = process.env.BACKEND_URL ||  "http://localhost:3001";

class YodlrApi {

    static async request(endpoint, params = {}, verb = "get") {
        
        console.debug("API Call:", endpoint, params, verb);

        let q;

        if (verb === "get") {
            q = axios.get(
            `${BASE_URL}/${endpoint}`, { params: {  ...params } });
        } else if (verb === "post") {
            q = axios.post(
            `${BASE_URL}/${endpoint}`, {  ...params });
        } else if (verb === "patch") {
            q = axios.patch(
            `${BASE_URL}/${endpoint}`, {  ...params });
        } else if (verb === "delete") {
            q = axios.delete(
            `${BASE_URL}/${endpoint}`, {});
        }

    
        try {
            return (await q).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async register(data) {
        let res = await this.request(`users`, data, 'post');
        return res;
    }
    static async getAllUsers() {
        let res = await this.request(`users/`);
        return res;
    }

    static async updateUser(username, data) {
        let res = await this.request(`users/${username}`, data, 'patch');
        return res;
    }
    
}

export default YodlrApi;