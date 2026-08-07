const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

// Página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// API Facto
app.get('/api/facto', (req, res) => {
    const factos = [
        "No todos son iguales, cada quien es leal a quien quiere.",
        "Las acciones hablan más que las palabras.",
        "El tiempo pone a cada quien en su lugar.",
        "Quien te quiere lo demuestra.",
        "Nunca dejes de creer en ti."
    ]

    const random = factos[Math.floor(Math.random() * factos.length)]

    res.json({
        status: true,
        creator: "AZRIELBOT",
        result: random
    })
})

// API Frase
app.get('/api/frase', (req, res) => {
    const frases = [
        "Cada día es una nueva oportunidad.",
        "Todo esfuerzo tiene su recompensa.",
        "Los sueños se cumplen trabajando.",
        "Nunca te rindas.",
        "La disciplina vence al talento."
    ]

    const random = frases[Math.floor(Math.random() * frases.length)]

    res.json({
        status: true,
        creator: "AZRIELBOT",
        result: random
    })
})

// Información de la API
app.get('/api', (req, res) => {
    res.json({
        name: "AZRIELBOT API",
        version: "1.0.0",
        creator: "YoelFF",
        status: "online",
        endpoints: [
            "/api",
            "/api/facto",
            "/api/frase"
        ]
    })
})

// Error 404
app.use((req, res) => {
    res.status(404).json({
        status: false,
        message: "Endpoint no encontrado."
    })
})

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 AZRIELBOT API iniciada en el puerto ${PORT}`)
})
