export interface IWeatherData {
  main: {
    temp: number
    temp_max: number
    temp_min: number
    feels_like: number
    humidity: number
    pressure: number
  }
}

export interface IWeather {
  city: string
  data: IWeatherData
}

export type IWeatherRequest = {
  id: string
  city: string
  data: {
    main: {
      temp: number
    }
  }
  createdAt: string
}
