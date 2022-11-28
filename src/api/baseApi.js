import axios from "axios";

export const getUrlInstanse = () =>{
    return axios.create({
         baseURL: 'http://localhost:3000',

     })
 
 
 }
 export const getUrlInstansePrivate = () =>{
    return axios.create({
         baseURL: 'https://twitterapi.liara.run/api',

     })
 
 
 }