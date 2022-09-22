import axios from 'axios';

export const baseUrl = 'https:realty-in-us.p.rapidapi.com'
  
export const fetchApi = async (url) => {

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://realty-in-us.p.rapidapi.com/locations/auto-complete',
  params: {input: ''},
  headers: {
    'X-RapidAPI-Key': 'f198b1f51cmsh678f55da22750e4p1eb753jsn3ee0e422fc14',
    'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

return data;
}

