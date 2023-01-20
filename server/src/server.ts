import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()

app.register(cors)
app.register(appRoutes)

app.listen({
  host: '0.0.0.0',
  port: 1337
}, () => {
  console.log('Server running on port 1337')
})