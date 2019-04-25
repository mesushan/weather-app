class Weather {
  constructor(city) {
    this.apiKey = '765068a549941e36e26b0eddb07463f8';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${
        this.apiKey
      }&units=metric`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}
