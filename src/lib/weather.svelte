<script>
    import { onMount } from 'svelte';
    import { fetchWeather } from '../utils/weather';
  
    let location = 'London'; // Default location
  
    let weatherData = {};
  
    async function getWeather() {
      weatherData = await fetchWeather(location);

      if(weatherData && weatherData.main){
        weatherData.main.temp = Math.round(weatherData.main.temp - 273.15);
      }
    }

    function formatUnixTimestamp(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds
    return date.toLocaleString(); // Format the date and time according to the browser's locale
  }
  
    onMount(getWeather);

  </script>

<h1>Weather App</h1>

<input type="text" bind:value={location} on:change={getWeather} placeholder="Enter a City" class="text-center "/>

{#if weatherData && weatherData.main}
  <p>Location: {weatherData.name}</p>
  <p>Temperature: {weatherData.main.temp}°C</p>
  <p>Weather: {weatherData.weather[0].description}</p>
  <p>Updated : {formatUnixTimestamp(weatherData.dt)}</p>
{:else}
  <p class=" mt-3   d-flex justify-content-center align-items-center align-self-center  spinner-border ">C</p>
{/if}