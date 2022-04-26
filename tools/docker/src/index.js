const app = require('express')()

app.get('/', (req, res) => {
  res.json({ data: 'hello, docker' })
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server has been started on http://localhost:${port}`))
