'use client';

import { useEffect, useState } from 'react';
import styles from './weather.module.css';
// import { useRouter } from 'next/navigation';

async function getWeather(zipcode: string) {
  try {
    const res = await fetch(
      `
      https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=5ab3b7281136e99c8148e94a90db77b0&units=imperial`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Fetching error: ', error);
  }
}

export default function WeatherPage() {
  const [zipcode, setZipcode] = useState('');
  const [weatherObj, setWeather] = useState();

  // const router = useRouter();

  async function searchWeather(e) {
    e.preventDefault();
    const data = await getWeather(zipcode);
    setWeather(data);
    setZipcode('');
  }

  return (
    <div>
      <h1>Weather</h1>
      <form>
        <input
          type='text'
          placeholder='Type your zipcode...'
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
        <button disabled={!zipcode.length} onClick={(e) => searchWeather(e)}>
          Search
        </button>
      </form>
      {weatherObj && (
        <div className={styles.weather}>
          <h3>{weatherObj.name}</h3>
          <h4>{Math.floor(weatherObj.main?.temp) || ''} F</h4>
          <h5>{weatherObj.weather[0].description}</h5>
        </div>
      )}
    </div>
  );
}
