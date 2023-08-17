import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '31bc52db235ff608ca620724045f719a';

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY
    }
  });

  return data;
};

// import axios from 'axios';

// // const URL = 'https://api.openweathermap.org/data/3.0/weather';

// // const API_KEY = '31bc52db235ff608ca620724045f719a';

// // const URRL = `
// // https://api.openweathermap.org/data/3.0/onecall?lat=${33.44}&lon=-${94.04}&appid=${API_KEY}`;

// export const fetchWeather = async (name) => {
//   const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;
//   const { data } = await axios.get(URL, {
//     // params: {
//     //   q: query,
//     //   units: 'metric',
//     //   APPID: API_KEY
//     // }
//   });

//   console.log(data);

//   return data;
// };
