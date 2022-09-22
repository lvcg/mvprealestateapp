import axios from 'axios';

export const baseUrl = 'https://realty-in-us.p.rapidapi.com'
  
export const fetchApi = async (url) => {

    const axios = require("axios");

    const options = {
      method: 'GET',
      url: 'https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale',
      params: {
        city: 'Chicago',
        state_code: 'Il',
        offset: '0',
        limit: '200',
        sort: 'relevance'
      },
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

