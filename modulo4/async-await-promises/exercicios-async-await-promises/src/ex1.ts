import axios from 'axios';
import { baseURL } from './baseURL';

//a:
//R: Utilizo o GET Subscribers.

//b:
//R: Promise<any[]>

//c:

async function getAllSubscribers(): Promise<any> {
    const result = await axios.get(`${baseURL}/subscribers`)
    console.log(result.data);
}

getAllSubscribers()







