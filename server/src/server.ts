import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/', async () => {
  const habits = prisma.habit.findMany()

  return habits
})

app.listen({
  port: 1337
}, () => {
  console.log('Server running on port 1337')
})