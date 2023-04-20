
export const load = ({ params }) => {
  
  const { slug } = params
  
  console.log(slug)
  return {
    slug
  }
}