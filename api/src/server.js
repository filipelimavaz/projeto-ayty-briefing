import app from "./app.js"

const PORT = process.env.PORT || 8800

app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})