import { Weather } from "../../../types/weather.types";
import { getWeatherIcon } from "../../../utils/utils";
import classes from "./WeatherCard.module.css";

interface WeatherCardProps {
  data?: Weather;
}

export const WeatherCard: React.FC<WeatherCardProps> = (props) => {
  const { data } = props;

  return (
    <>
      {data && (
        <div className={classes.container}>
          <div className={classes.temperatureContainer}>
            <div className={classes.temperature}>
              {Math.round(data.main.temp)}
            </div>
            <div className={classes.temperatureUnits}> °C</div>
            <div>{getWeatherIcon(data.weather[0].description)}</div>
          </div>
          <div className={classes.name}>{data.name}</div>
          <div className={classes.date}>{new Date().toUTCString()}</div>

          <div className={classes.paramsContainer}>
            <p className={classes.param}>
              <b>Feels like</b> {Math.round(data.main.feels_like)}°C
            </p>
            <p className={classes.param}>
              <b>Humidity</b> {data.main.humidity}%
            </p>
            <p className={classes.param}>
              <b>Pressure</b> {data.main.pressure}
            </p>
            <p className={classes.param}>
              <b>Wind Speed</b> {data.wind.speed}m/s
            </p>
          </div>
        </div>
      )}
    </>
  );
};
