import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.send('Hello, World!')
})

app.get("/users", (req, res) => {
  // normally we would link to a json file. in this example we'll just write some names in an array
  res.json([
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Peggy' },
    { name: 'Chris' },
    { name: 'Jennie' }
  ])
})

// the location can be anything we choose. we're using port 3000 here.
app.listen(3030, () => console.log("App listening to port 3030. Yay!"))