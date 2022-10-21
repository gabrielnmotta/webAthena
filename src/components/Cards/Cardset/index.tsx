import { useState } from "react";
import { useTranslation } from "react-i18next";
import IBlocks from "../../../interfaces/IBlocks";
import "./cardset.scss";

export default function Blockx(props: IBlocks) {
  const {t} = useTranslation();

  return (
        <div className="left">
            <span onClick={() => test(props.blockId)} className="title">
              {props.name}
            </span>
            <span>{t('Wind Speed')}: {Math.round(props.data.windSpeed)}</span>
            <span>
              {t('Solar Irradiation')}: {Math.round(props.data.solarIrradiation)}%
            </span>
            <span>{t('Temperature')}: {Math.round(props.data.temperature)}°C</span>
            <span>{t('Rain')}: {Math.round(props.data.rain)}mm</span>
            <span>
              {t('Relative Humidity')}: {Math.round(props.data.relativeHumidity)}%
            </span>
        </div>
  );
}


