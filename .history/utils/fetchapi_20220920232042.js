import axios from 'axios';

export  const baseUrl = 'https://bayut.p.rapidapi.com'
  
export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'f5d2161703mshcddd73e683070b3p1a0658jsn3c69be973199',
             'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
           },  
    })
}  