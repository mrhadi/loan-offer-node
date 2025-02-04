const expressApp = require('./utils/expressApp')
import { Config } from './utils/config'

const start = async () => {
    try {
        const app = await expressApp()
        const server = await app.listen(Config.PORT)
        console.log('Server started and listening on port', Config.PORT)

        return { server }
    } catch (err) {
        console.error('Could not start the server:', err)
        throw err
    }
}

module.exports = { start }
