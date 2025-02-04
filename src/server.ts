const expressApp = require('./utils/expressApp')
const { PORT } = require('./utils/config')

const start = async () => {
    try {
        const app = await expressApp()
        const server = await app.listen(PORT)
        console.log('Server started and listening on port', PORT)

        return { server }
    } catch (err) {
        console.error('Could not start the server:', err)
        throw err
    }
}

module.exports = { start }
