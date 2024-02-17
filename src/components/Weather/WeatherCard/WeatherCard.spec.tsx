import { render, screen } from "@testing-library/react";
import { WeatherCard } from "./WeatherCard.component";
import { Provider } from "react-redux";
import { Weather } from "../../../types/weather.types";
import store from "../../../utils/store";

export const weatherData: Weather = {
  coord: {
    lon: 21.0118,
    lat: 52.2298,
  },
  weather: [
    {
      id: 803,
      main: "Clouds",
      description: "broken clouds",
      icon: "04d",
    },
  ],
  base: "stations",
  main: {
    temp: 8.79,
    feels_like: 6.46,
    temp_min: 7.9,
    temp_max: 9.41,
    pressure: 1020,
    humidity: 77,
  },
  visibility: 10000,
  wind: {
    speed: 4.12,
    deg: 140,
  },
  clouds: {
    all: 75,
  },
  dt: 1708007738,
  sys: {
    type: 2,
    id: 2035775,
    country: "PL",
    sunrise: 1707976388,
    sunset: 1708012040,
  },
  timezone: 3600,
  id: 756135,
  name: "Warsaw",
  cod: 200,
};

describe("WeatherCard component", () => {
  test("renders WeatherCard component", () => {
    render(
      <Provider store={store}>
        <WeatherCard data={weatherData} />
      </Provider>
    );

    screen.debug();

    expect(screen.getByText("9")).toBeInTheDocument();
    expect(screen.getByText("Warsaw")).toBeInTheDocument();
    expect(screen.getByText("6°C")).toBeInTheDocument();
    expect(screen.getByText("77%")).toBeInTheDocument();
    expect(screen.getByText("1020")).toBeInTheDocument();
    expect(screen.getByText("4.12m/s")).toBeInTheDocument();

    expect(screen.getByText("Feels like")).toBeInTheDocument();
    expect(screen.getByText("Humidity")).toBeInTheDocument();
    expect(screen.getByText("Pressure")).toBeInTheDocument();
    expect(screen.getByText("Wind Speed")).toBeInTheDocument();
  });
});
