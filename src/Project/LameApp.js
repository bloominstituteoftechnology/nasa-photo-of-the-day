import React, { useState, useEffect } from 'react'
import axios from 'axios'

// attempt 1
// function nasaPhotoGetter() {
//   axios
//     .get('https://api.nasa.gov/planetary/apod?api_key=zqbVT1Tkx9kHqMrwhi7nXnjFnR0cHesfdOTmOuNf&date=2020-10-31')
//     .then(res => {
//       console.log(res.data)
//     })
//     .catch(err => {
//       console.log(`${err}`)
//       console.log('U GOT AN ERR')
//   })
// }

// nasaPhotoGetter()