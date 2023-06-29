const express = require('express')
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 9009

const server = express()

server.use(express.json())

server.use(express.static(path.join(__dirname, '../dist')))

server.use(cors())

server.get('/api/apod', (req, res) => {
  if (!req.query.api_key || req.query.api_key !== 'DEMO_KEY') {
    return res.status(403).json({
      message: 'Please provide an api_key with your request',
    })
  }
  res.json({
    copyright: "NASA, ESA, and the Hubble Heritage Team (STScI/AURA)",
    date: "April 1, 1995",
    explanation: "The Pillars of Creation is a striking image of interstellar columns of gas and dust in the Eagle Nebula. It was captured by the Hubble Space Telescope and has become one of the most famous astronomical photographs ever taken. The image showcases the ongoing process of star formation and provides valuable insights into the birth and evolution of stars and planetary systems.",
    media_type: "image",
    title: "Pillars of Creation",
    url: "https://bloominstituteoftechnology.github.io/img/pillars-of-creation.png",
    service_version: "v1",
  })
})

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

server.use((req, res) => {
  res.status(404).json({
    message: `Endpoint [${req.method}] ${req.path} does not exist`,
  })
})

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
