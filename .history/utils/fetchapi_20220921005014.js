import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'
  
export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'ec8acdca54msh4dccdd9f491103ap1cef7fjsnbac899a4d5a2',
             'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
           },  
});

return data;
}

