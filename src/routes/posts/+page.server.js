import { PrismaClient } from '@prisma/client'


export const load = async () => {

  const prisma = new PrismaClient()

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


  return {
    posts
  }
}

  