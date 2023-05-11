import { PrismaClient } from '@prisma/client'
import slugify from 'slugify';

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
  
  'create': async ({ request }) => {
    const data = await request.formData();

    const title = data.get('title');
    const abstract = data.get('abstract');

    const prisma = new PrismaClient()

    await prisma.post.create({
      data: {
        title,
        slug: slugify(title, {lower: true, locale: "pl"}),
        abstract,
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

    return {posts}    
  },
  'inna': (event) => {
    console.log('inna')
  }

}