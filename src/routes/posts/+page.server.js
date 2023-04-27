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

  await prisma.$disconnect();


  return {
    posts
  }
}

export const actions = {
  
  'create': () => {
    console.log('create')
  },
  'inna': () => {
    console.log('inna')
  }
  
}