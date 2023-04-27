import { PrismaClient } from '@prisma/client'

export const DELETE = async (event) => {
  const data = await event.request.json()

  const prisma = new PrismaClient()

  await prisma.post.deleteMany({
    where: {
      slug: data.slug,
    }
  })

  const posts = await prisma.post.findMany({
    select: {
      slug: true,
      title: true,
      abstract: true
    },
    where: {
      active: true
    }
  })

  await prisma.$disconnect();
  
  return new Response(JSON.stringify({status: true, posts}))
}