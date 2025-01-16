const baseURL = "https://api.weatherapi.com/v1/current.json?key=e63f82a16d8c4e709d4134348251601"

export const getWeatherDataForCity = async (city)=>{
    const res = fetch(`${baseURL}&q=${city}&aqi=yes`)
    return (await res).json()
}

export const getWeatherDataForLocation = async (lat, long)=>{
    const res = fetch(`${baseURL}&q=${lat},${long}&aqi=yes`)
    return (await res).json()
}