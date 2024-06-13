import axios from "axios";
import React, { useEffect, useState } from "react";

import Loader from "../components/Loader/Loader";

import { IWeatherRequest } from "../types/types";

const URL = process.env.REACT_APP_URL || process.env.REACT_APP_LOCAL_HOST;

const List: React.FC = () => {
  const [weatherRequests, setWeatherRequests] = useState<IWeatherRequest[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchWeatherRequests = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<IWeatherRequest[]>(
          `${URL}/api/weather/requests`,
        );
        setWeatherRequests(response.data);
      } catch (error) {
        console.error("Error fetching weather requests:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeatherRequests();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mb-8 text-gray-400">Last 100 Weather Requests</h1>

      {isLoading && <Loader />}

      <ul>
        {weatherRequests.map((request) => (
          <li key={request.id} className="text-3xl mb-4">
            {request.city} - Temp: {request.data.main.temp} - request time:{" "}
            {new Date(request.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
