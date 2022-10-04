// 39 City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:


function city_country(city, country = "Pakistan"){
    console.log(`${city}, ${country}`)
}

city_country("Karachi")
city_country("Lahore")
city_country("Nyc", "USA")