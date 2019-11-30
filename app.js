const request = require('request')
//
// const url = 'https://api.darksky.net/forecast/3319335b26f20fb3e3ca1d5cc1da57ae/37.8267,-122.4233'
// const geoCodingUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGFtenp6eiIsImEiOiJjazNnZGZvMnAwMHBmM2pwZXFtNmtueXZ6In0.dBBOoka9J5By0EjSJCJB5Q"
// request({url:url, json:true}, (error,respose) => {
//   // const data = JSON.parse(respose.body)
//   // console.log(respose.body.currently)
// })
//
// request({url:geoCodingUrl, json:true},(error, respose) => {
//   console.log(respose.body.features[0].center)
// })


const add  = (a, b, callBack) => {
  setTimeout(()=>{
    callBack(a+b)
  }, 2000)
}

add(1,4,(sum)=>{
  console.log(sum)
})
