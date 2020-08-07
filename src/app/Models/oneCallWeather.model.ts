import { IDailyForecast } from './dailyForecast.model';

export interface IOneCallWeather {
    current: {
        clouds: number
        dew_point: number
        dt: string
        feels_like: number
        humidity: number
        pressure: number
        sunrise: number
        sunset: number
        temp: number
        uvi: number
        visibility: number
        wind_deg: number
        wind_speed: number
        weather: [{
            description: string,
            icon: string,
            id: number,
            main: string
        }
        ]
    }
    daily: IDailyForecast[]
    hourly: [{
        clouds: number
        dew_point: number
        dt: string
        feels_like:number
        humidity:number
        pressure:number
        temp:number
        wind_deg:number
        wind_speed:number
        weather: [
            {
                description: string,
                icon: string,
                id: number,
                main: string,
                wind_deg: number,
                wind_speed: number
            }
        ]
    }]
    
}