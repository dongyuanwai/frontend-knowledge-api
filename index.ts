import run from './app'
import config from './app/config'
console.log("🚀 ~ config:", config)

run(config.server.port)
