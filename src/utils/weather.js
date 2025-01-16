import  Axios  from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;

export async function fetchWeather(location){
    try{
        const  response = await Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`);
        console.log(response.data);
        return response.data;  //return the data from the api call

    }
    catch(error){
        console.error("There was an error fetching the data: ", error)
        return null;   //if there's an error, return null
    }
}