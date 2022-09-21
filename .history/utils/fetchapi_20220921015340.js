import axios from 'axios';

export const baseUrl = 'https:realty-in-us.p.rapidapi.com'
  
export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'f198b1f51cmsh678f55da22750e4p1eb753jsn3ee0e422fc14',
             'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
           },  
});

return data;
}

