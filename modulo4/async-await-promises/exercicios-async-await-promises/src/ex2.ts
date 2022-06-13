import axios from "axios";
import { baseURL } from "./baseURL";

//a:
//R: As arrow functions permitem ter um retorno 
//implícito, que são valores retornados sem ter que usar a palavar return.

//b:
//R: 

const getSubscribers = async (): Promise<any> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    console.log(response.data);     
  };

  getSubscribers()
  





