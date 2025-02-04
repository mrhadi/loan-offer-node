import expressApp from './utils/expressApp'
import { Config } from './utils/config'

const start = async () => {
    try {
        const app = expressApp()
        const server = app.listen(Config.PORT)
        console.log('Server started and listening on port', Config.PORT)

        return { server }
    } catch (err) {
        console.error('Could not start the server:', err)
        throw err
    }
}

export default { start }
