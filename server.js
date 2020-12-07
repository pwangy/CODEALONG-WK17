import express from "express"

const app = express()

const users = [
  { id: 1, name: 'Boba', age: 34 },
  { id: 2, name: 'Ivan', age: 22 },
  { id: 3, name: 'Van', age: 24 },
  { id: 4, name: 'Peggy', age: 21 },
  { id: 5, name: 'Jennie', age: 42 },
]


app.get('/', (request, response) => {
  response.send('Hello API! Yr documentation better be good!')
})

app.get('/users', (request, response) => {
  response.json(users)
})

app.get('/users/names', (request, response) => {
  response.json(users.names)
  console.log(users.names)
})


app.get('/users/:id', (request, response) => {
  // for example http://localhost:8080/users/1
  // should print 1 in Terminal
  // console.log(request.params.id)
  response.json(request.params)
  // const { id } = request.params
})

app.listen(8080, () => {
  // the server has started, what should it do now?
  console.log("Hello console, the server is now running.")
})