require('dotenv').config()

export function getConfig(e: string) {
    return process.env[e]
}