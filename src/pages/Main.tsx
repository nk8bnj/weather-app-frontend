import axios from 'axios'
import React, { useState } from 'react'

import Loader from '../components/Loader/Loader'

import { IWeather } from '../types/types'
import { handleErrors } from '../utils/handleErrors'

const Main: React.FC = () => {
  const [cityName, setCityName] = useState('')
  const [weatherData, setWeatherData] = useState<IWeather | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null)
    setCityName(event.target.value)
  }

  const handleCityChangeByEnter = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      fetchWeatherData()
    }
  }

  const fetchWeatherData = async () => {
    setIsLoading(true)
    try {
      const response = await axios.post('http://localhost:3003/api/weather', {
        city: cityName,
      })
      setWeatherData(response.data)
    } catch (error: any) {
      setErrorMessage(handleErrors(error.code))
      setWeatherData(null)
    } finally {
      setIsLoading(false)
      setCityName('')
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mb-8 text-gray-400">
        Check the weather in your city
      </h1>

      <div className="mb-8">
        <input
          type="text"
          value={cityName}
          onChange={handleCityChange}
          onKeyUp={handleCityChangeByEnter}
          placeholder="Enter city name"
          className="border border-gray rounded-md p-4 text-lg mr-4 w-96"
          required
        />

        <button
          onClick={fetchWeatherData}
          className="bg-teal-500 p-4 rounded-md text-white text-lg hover:bg-teal-300 transition-all duration-300">
          Show
        </button>
      </div>

      {errorMessage && (
        <div className="text-3xl text-red-500">{errorMessage}</div>
      )}

      {isLoading ? (
        <div className="text-3xl text-gray-500">
          <Loader />
        </div>
      ) : (
        weatherData && (
          <div className="flex flex-col items-center">
            <h2 className="text-3xl mb-4">Weather in {weatherData.city}</h2>

            <ul className="text-center">
              <li className="text-3xl mb-4">
                Temp: {weatherData.data.main.temp}
              </li>
              <li className="text-3xl mb-4">
                Temp max: {weatherData.data.main.temp_max}
              </li>
              <li className="text-3xl mb-4">
                Temp min: {weatherData.data.main.temp_min}
              </li>
              <li className="text-3xl mb-4">
                Feels like: {weatherData.data.main.feels_like}
              </li>
              <li className="text-3xl mb-4">
                Humidity: {weatherData.data.main.humidity}
              </li>
              <li className="text-3xl mb-4">
                Pressure: {weatherData.data.main.pressure}
              </li>
            </ul>
          </div>
        )
      )}
    </div>
  )
}

export default Main
