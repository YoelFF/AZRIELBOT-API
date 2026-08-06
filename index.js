const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

// Página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// API Facto
app.get('/api/facto', (req, res) => {

    const factos = [
        "No todos son iguales, cada quien es leal a quien quiere.",
        "Las personas te critican por lo que no pueden lograr.",
        "El tiempo pone a cada quien en su lugar.",
        "Las acciones siempre hablan más que las palabras.",
        "Quien te quiere de verdad, lo demuestra."
    ]

    const random = factos[Math.floor(Math.random() * factos.length)]

    res.json({
        status: true,
        creador: "AZRIELBOT",
        resultado: random
    })

})

// API Frase
app.get('/api/frase', (req, res) => {

    const frases = [
        "Nunca dejes de creer en ti.",
        "Cada día es una nueva oportunidad.",
        "El éxito llega para quien nunca se rinde.",
        "Todo esfuerzo tiene su recompensa.",
        "Los sueños se cumplen trabajando."
    ]

    const random = frases[Math.floor(Math.random() * frases.length)]

    res.json({
        status: true,
        creador: "AZRIELBOT",
        resultado: random
    })

})

app.listen(PORT, () => {
    console.log(`🚀 API iniciada en el puerto ${PORT}`)
})
