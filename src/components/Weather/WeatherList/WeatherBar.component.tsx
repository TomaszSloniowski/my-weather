import { Weather } from "../../../types/weather.types";
import { getWeatherSmallIcon } from "../../../utils/utils";
import classes from "./WeatherBar.module.css";

interface WeatherBarProps {
  data?: Weather;
}

export const WeatherBar: React.FC<WeatherBarProps> = (props) => {
  const { data } = props;

  return (
    <>
      {data && (
        <div className={classes.container}>
          <div className={classes.name}>{data.name}</div>
          <div className={classes.temperature}>
            {Math.round(data.main.temp)} °C
          </div>
          <div>{getWeatherSmallIcon(data.weather[0].icon)}</div>
        </div>
      )}
    </>
  );
};
