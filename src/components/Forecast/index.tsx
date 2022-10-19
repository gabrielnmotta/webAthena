import moment from "moment";
import "./forecast.scss";
import { IData } from "../../interfaces/IForecast";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Button } from "@mui/material";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';

interface Props {
  forecast: IData;
}

export function Forecast({ forecast }: Props) {
  const [showSwipe, setShowSwipe] = useState(true);

  const handleShowSwipe = () => {
    setShowSwipe(!showSwipe);
  };

  return (
    <Swiper
      direction="vertical"
      autoplay={{ delay: 4000 }}
      slidesPerView={1}
      spaceBetween={25}
      mousewheel
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination, Autoplay]}
      className="mySwiper"
    >
      {showSwipe ? (
        <div>
          {forecast.past.map((item) => {
            return (
              <SwiperSlide className="car__bottom-left" key={item.blockId}>
                <div className="containerx">
                  <Button
                    color="error"
                    size="small"
                    aria-hidden
                    type="button"
                    className="buttonp "
                    onClick={() => handleShowSwipe()}
                  >
                    next 10 days
                  </Button>
                  <div className="prev">

                    <p className="date">{moment(item.date).format("DD/MM")}</p>
                    <p>Rain: {Math.round(item.rain)} mm</p>
                    <p>Relative Humidity:   {item.relativeHumidity.toPrecision(2)} %</p>
                    <p>Solar Irradiation:   {Math.round(item.solarIrradiation)}mj/m²</p>
                    <p>Temperature Average:  {item.temperatureAverage.toPrecision(2)}°C</p>
                    <p>Temperature Max:  {item.temperatureMax.toPrecision(2)}°C</p>
                    <p>Temperature Min:  {item.temperatureMin.toPrecision(2)}°C</p>
                    <p>Wind Speed: {item.windSpeed.toPrecision(2)} m/s </p>
                    
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      ) : (
        <div>
          {forecast.forecast.map((item) => {
            return (
              <SwiperSlide className="car__bottom-left" key={item.blockId}>
                <div className="containerx">
                  <Button
                    color="error"
                    size="small"
                    aria-hidden
                    type="button"
                    className="buttonp "
                    onClick={() => handleShowSwipe()}
                  >
                    last 10 days
                  </Button>
                  <div className="prev">
                    <p className="date">{moment(item.date).format("DD/MM")}</p>
                    <p>Rain Prediction: {item.rainPrediction}</p>
                    <p>Rain: {Math.round(item.rain)} mm</p>
                    <p>Rain Probability: {Math.round(item.rainProbability)}%</p>
                    <p>Max Temperature: {item.temperatureMax.toPrecision(2)}°C</p>
                    <p>Min Temperature: {item.temperatureMin.toPrecision(2)}°C</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      )}
    </Swiper>
  );
}
