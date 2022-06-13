import { baseURL } from "./baseURL";
import axios from "axios";

type user = {
    id: string;
    name: string;
    email: string;
}

const getSubscribers = async (): Promise<any> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    console.log(
        response.data.map((res: user) => {
            return {
                id: res.id,
                name: res.name,
                email: res.email,
            };
        })
    );

};

getSubscribers()
