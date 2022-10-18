import moment from "moment";
import "./forecast.scss";
import { IData } from "../../interfaces/IForecast";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

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
                  <button
                    aria-hidden
                    type="button"
                    className="buttonp "
                    onClick={() => handleShowSwipe()}
                  >
                    next 10 days
                  </button>
                  <div className="prev">
                    <p className="date">{moment(item.date).format("DD/MM")}</p>
                    <h1>{item.blockId}</h1>
                    <h2>{item.name}</h2>
                    <p>{Math.round(item.rain)} mm</p>
                    <p>{item.relativeHumidity.toPrecision(2)} %</p>
                    <p>{Math.round(item.solarIrradiation)}mj/m²</p>
                    <p>{item.temperatureAverage.toPrecision(2)}°C</p>
                    <p>{item.blockId}</p>
                    <p>{item.temperatureMax.toPrecision(2)}°C</p>
                    <p>{item.temperatureMin.toPrecision(2)}°C</p>
                    <p>{item.windSpeed.toPrecision(2)} m/s</p>
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
                  <button
                    aria-hidden
                    type="button"
                    className="buttonp "
                    onClick={() => handleShowSwipe()}
                  >
                    last 10 days
                  </button>
                  <div className="prev">
                    <h1>{item.blockId}</h1>
                    <h2>{item.name}</h2>
                    <p className="date">{moment(item.date).format("DD/MM")}</p>
                    <p>{item.rainPrediction}</p>
                    <p>{Math.round(item.rain)} mm</p>
                    <p>{Math.round(item.rainProbability)}%</p>
                    <p>{item.temperatureMax.toPrecision(2)}°C</p>
                    <p>{item.temperatureMin.toPrecision(2)}°C</p>
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
