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
    daily: [{
        clouds: number
        dew_point: number
        dt: string
        feels_like: {
            day:number,
            night:number,
            eve:number,
            morn:number,
        }
        humidity:number,
        pressure:number,
        rain:number,
        sunrise:number,
        sunset:number,
        temp:
        {
            day:number,
            eve:number,
            max:number,
            min:number,
            morn:number,
            night:number,
        }
        uvi:number,
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
        wind_deg: number
        wind_speed:number
    }]
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