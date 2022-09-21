import axios from 'axios';

export const baseUrl = 'https:realty-in-us.p.rapidapi.com'
  
export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'ec8acdca54msh4dccdd9f491103ap1cef7fjsnbac899a4d5a2',
             'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
           },  
});

return data;
}

