import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import data from './data.json'

const port = process.env.PORT || 8001
const app = express()

console.log(data.length)

// middlewares
// cors: makes it easier for the frontend use the api; allows technologies to say where requests can come from for a little added security
// bodyParser: allows cors to read json in POST requests
app.use(cors())
app.use(bodyParser.json())

// define routes (aka endpoints)
app.get('/', (request, results) => {
  res.send('Build an API codealong. Here we go!')
})

app.get('/nominations', (req, res) => {
  // this endpoint will list everything
  res.json(data)
})

// since this dataset has not assigned each object an ID, we wouldn't be able to get data for a particular object using this method, however, we could return all films from a particular year, ceremony, category, etc


// let's create an endpoint for all who were nominated for awards in 2010
app.get('/year/:year', (req, res) => {
  const year = req.params.year
  console.log({ year })
  // be sure that numbers vs strings matches data from your file.
  // here the year we're looking for in the json file is a number, not a string.   
  // in using  === year, we're looking for a string
  // in this case, we'd like to turn our string into a number.
  // using == +year, so adding "+" will make it a number
  let nominationsFromYear = data.filter((item) => item.year_award === +year)
  const showWon = req.query.won
  

  if (showWon) {
    nominationsFromYear = nominationsFromYear.filter((item) => item.win)
  }

  res.json(nominationsFromYear)
  console.log(nominationsFromYear.length)
})

// what if we want to filter, by year, only those who won?
// we can either create a new endpoint (if we went down this path, we would get a lot of routes!) OR we could use a query (better solution and more commonly used)
// we can add line 41 to define the query
//
// http://localhost:8001/year/2010?won=true


// starts server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})