import Grid from "@mui/material/Grid";
import { WeatherCard } from "../Weather/WeatherCard/WeatherCard.component";
import { Searchbar } from "../Searchbar/Searchbar.component";
import { useEffect, useState } from "react";
import { Weather } from "../../types/weather.types";
import { getWeather } from "../../services/weather.service";
import { WeatherList } from "../Weather/WeatherList/WeatherList.component";
import { useDispatch } from "react-redux";
import { weatherActions } from "../../utlils/weatherSlice";

function Main() {
  const [city, setCity] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [weather, setWeather] = useState<Weather>();

  const dispatch = useDispatch();

  const getData = () => {
    getWeather(city)
      .then((response) => {
        setWeather(response.data);
        console.log(response.data);
        setIsError(false);
        dispatch(weatherActions.addWeather(response.data));
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  };

  useEffect(() => {
    if (!city.length) return;
    getData();
  }, [city]);

  return (
    <>
      <Grid container margin={2}>
        <Grid item xs={5}>
          <Grid item margin={2}>
            <Searchbar onChange={setCity} value={city} />
          </Grid>
          <Grid
            container
            item
            justifyContent={"center"}
            alignItems={"center"}
            direction={"column"}
            margin={2}
          >
            {!isError ? (
              <WeatherCard data={weather} />
            ) : (
              <p
                style={{
                  fontSize: "1rem",
                  color: "#FFFFFF",
                  paddingLeft: "10px",
                }}
              >
                No search results...
              </p>
            )}
          </Grid>
        </Grid>
        <Grid item xs={7}>
          <Grid item margin={5} style={{ padding: "40px" }}>
            <WeatherList />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Main;
