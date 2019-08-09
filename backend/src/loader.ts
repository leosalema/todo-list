import Server from './server'

const PORT = process.env.PORT || 3003

Server.listen(PORT, () => console.log(`BACKEND is running in port ${PORT}`))