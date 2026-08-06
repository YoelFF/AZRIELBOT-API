const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({
    creador: 'AZRIELBOT',
    estado: 'online',
    version: '1.0.0',
    endpoints: [
      '/api/facto',
      '/api/frase'
    ]
  })
})

app.get('/api/facto', (req, res) => {
  const factos = [
    "No todos son iguales, cada quien es leal a quien quiere.",
    "Las personas te critican por lo que no pueden lograr.",
    "El tiempo pone a cada quien en su lugar."
  ]

  res.json({
    status: true,
    resultado: factos[Math.floor(Math.random() * factos.length)]
  })
})

app.get('/api/frase', (req, res) => {
  const frases = [
    "El éxito llega para quien nunca se rinde.",
    "Cada día es una nueva oportunidad.",
    "Las acciones hablan más que las palabras."
  ]

  res.json({
    status: true,
    resultado: frases[Math.floor(Math.random() * frases.length)]
  })
})

app.listen(PORT, () => {
  console.log(`API iniciada en el puerto ${PORT}`)
})
