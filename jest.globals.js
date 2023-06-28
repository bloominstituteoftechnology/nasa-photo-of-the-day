// This makes fetch and axios work in the tests
const axios = require('axios')
const nodeFetch = require('node-fetch')

globalThis.axios = axios
globalThis.fetch = nodeFetch
globalThis.Request = nodeFetch.Request
globalThis.Response = nodeFetch.Response
