import classes from "../components/Weather/WeatherCard/WeatherCard.module.css";
import Sun from "../assets/icons/sun.svg";
import Rain from "../assets/icons/cloud-and-rain.svg";
import CloudAndSun from "../assets/icons/cloud-and-sun.svg";
import Cloud from "../assets/icons/cloud.svg";
import Thunderstorm from "../assets/icons/cloud-and-lightening.svg";
import Snow from "../assets/icons/cloud-and-snow.svg";

export const getWeatherIcon = (
  description?: string
): JSX.Element | undefined => {
  switch (description) {
    case "clear sky":
      return (
        <img src={Sun} className={classes.weatherIcon} alt="weatherIcon" />
      );
    case "few clouds":
      return (
        <img
          src={CloudAndSun}
          className={classes.weatherIcon}
          alt="weatherIcon"
        />
      );
    case "scattered clouds":
      return (
        <img src={Cloud} className={classes.weatherIcon} alt="weatherIcon" />
      );
    case "broken clouds":
      return (
        <img src={Cloud} className={classes.weatherIcon} alt="weatherIcon" />
      );
    case "overcast clouds":
      return (
        <img src={Cloud} className={classes.weatherIcon} alt="weatherIcon" />
      );
    case "shower rain":
      return (
        <img src={Rain} className={classes.weatherIcon} alt="weatherIcon" />
      );
    case "light rain":
      return (
        <img src={Rain} className={classes.weatherIcon} alt="weatherIcon" />
      );
    case "rain":
      return (
        <img src={Rain} className={classes.weatherIcon} alt="weatherIcon" />
      );
    case "thunderstorm":
      return (
        <img
          src={Thunderstorm}
          className={classes.weatherIcon}
          alt="weatherIcon"
        />
      );
    case "snow":
      return (
        <img src={Snow} className={classes.weatherIcon} alt="weatherIcon" />
      );
    case "mist":
      return (
        <img src={Cloud} className={classes.weatherIcon} alt="weatherIcon" />
      );
  }
};

export const getWeatherSmallIcon = (icon?: string): JSX.Element | undefined => {
  const url = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return <img src={url} style={{ width: "40px" }} />;
};
