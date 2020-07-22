import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

    // await prisma.executeRaw(`INSERT INTO "WithNan" (num) VALUES (1);`)

    // await prisma.executeRaw(`ALTER TABLE "public"."WithNan" ALTER COLUMN "num" TYPE double precision`)

    // await prisma.executeRaw(`INSERT INTO "WithNan" (num) VALUES ('NaN');`)


    const rows = await prisma.withNan.findMany({})

    console.log(rows)
}

main()

  .catch(e => {

    throw e

  })

  .finally(async () => {

    await prisma.disconnect()

  })
