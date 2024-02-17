import { WeatherBar } from "./WeatherBar.component";
import { useSelector } from "react-redux";
import { RootState } from "../../../utils/store";

export const WeatherList: React.FC = () => {
  const weatherList = useSelector((state: RootState) => state.weather);

  return (
    <>
      {weatherList.length ? (
        <>
          <p style={{ color: "white" }}>Latest locations</p>
          <div style={{ maxHeight: "calc(100vh - 250px)", overflow: "auto" }}>
            {weatherList.map((item) => {
              return (
                <div key={item.id}>
                  <WeatherBar data={item} />
                  <hr />
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
