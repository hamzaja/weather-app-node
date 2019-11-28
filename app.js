const request = require('request')

const url = 'https://api.darksky.net/forecast/3319335b26f20fb3e3ca1d5cc1da57ae/37.8267,-122.4233'

request({url:url, json:true}, (error,respose) => {
  // const data = JSON.parse(respose.body)
  console.log(respose.body.currently)
})
