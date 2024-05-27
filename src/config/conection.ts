import { PrismaClient } from '@prisma/client'

export  const prisma = new PrismaClient()

export default async function conectionDatabase() {
  // ... you will write your Prisma Client queries here
}

conectionDatabase()
  .then(async () => {
    console.log("Conexão com banco de dados realizada com sucesso.")
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

