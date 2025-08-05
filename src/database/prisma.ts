import  {PrismaClient} from "@prisma/client"

export const prisma = new PrismaClient({
    log: process.env.NOME_ENV === "production" ? [] : ["query"],
})