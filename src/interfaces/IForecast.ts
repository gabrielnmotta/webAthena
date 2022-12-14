export interface IForecast {
    blockId: string;
        name: string;
        date: string;
        temperatureMin: number;
        temperatureMax: number;
        rain: number;
        rainProbability: number;
        rainPrediction: string;
}

export interface IPast {
    blockId: string;
        name: string;
        date: string;
        temperatureAverage: number;
        temperatureMin: number;
        temperatureMax: number;
        relativeHumidity: number;
        solarIrradiation: number;
        rain: number;
        windSpeed: number;
}

export interface IPresent {
    blockId: string;
        name: string;
        date: string;
        temperatureAverage: number;
        temperatureMin: number;
        temperatureMax: number;
        relativeHumidity: number;
        solarIrradiation: number;
        rain: number;
        windSpeed: number;
}

export interface IData{
    blockId: string;
    name: string;
    past: IPast[];
    present: IPresent;
    forecast: IForecast[];
}