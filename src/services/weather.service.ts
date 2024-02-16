import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

export const getWeather = async (city: string) => {
  return await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  );
};

export const getWeatherIcon = async (icon: string) => {
  return await axios.get(`https://openweathermap.org/img/wn/${icon}10d@2x.png`);
};
