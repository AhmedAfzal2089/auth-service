import winston from 'winston'
import { Config } from '.'

const logger = winston.createLogger({
    level: 'info', //its value is 2 less value will be shown if we use it
    defaultMeta: {
        serviceName: 'auth-service ', //this will show on every log
    },
    transports: [
        new winston.transports.File({
            level: 'info', // if we not give the info here than it will take the root info
            dirname: 'logs',
            filename: 'combine.log',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
            ),
            silent: Config.NODE_ENV === 'test',
        }),
        new winston.transports.File({
            level: 'error', // if we not give the info here than it will take the root info
            dirname: 'logs',
            filename: 'error.log',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
            ),
            silent: Config.NODE_ENV === 'test',
        }),
        new winston.transports.Console({
            level: 'info', // if we not give the info here than it will take the root info
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
            ),
            silent: Config.NODE_ENV === 'test',
        }),
    ],
})
export default logger
