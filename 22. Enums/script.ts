/*
  Enums:

  Enum is a way to define a set of named constants. 

  Enums allow you to define a collection of related values 
  that can be used interchangeably in your code.
*/

/*
  For example, 
  let's say you're building a weather app and you want to define 
  a set of possible weather conditions like "sunny", "cloudy", 
  "rainy", and "snowy".
  
  You could define an enum like this:

  enum Weather Conditions {
    Sunny,
    Cloudy,
    Rainy,
    Snowy,
  }

  In this example, 
  Weather Conditions is the name of the enum, and each of the values 
  (e.g. Sunny, Cloudy, etc.) is assigned an automatic numerical value 
  starting from 0.

  i.e.
  Sunny = 0
  Cloudy = 1
  Rainy = 2
  Snowy = 3
*/

/*
  You can also assign specific values to each enum member like this:

  enum WeatherConditions {
    Sunny = "sunny",
    Cloudy = "cloudy",
    Rainy = "rainy",
    Snowy = "snowy",
  }
*/

// Usage:

enum WeatherConditions {
  Sunny = "The sun is shining",
  Cloudy = "The clouds are covering the sky",
  Rainy = "Smell of wet soil in the air",
  Snowy = "The snow is so beautiful",
}
const currentWeather = WeatherConditions.Cloudy;
console.log(`The current weather is: ${currentWeather}`);
