// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";



const pagePortfolio = (image) => z.object({
  title: z.string(),
  items: z.array( z.object({
    visible: z.boolean(),
    title: z.string(),
    slug: z.string(),
    image: image(),
    description: z.string().optional()
  }))
})

const pagePortfolioi18n = ({ image }) => z.object({
  pl: pagePortfolio(image),
});


const pagePortfolioCollection = defineCollection({
  type: "content",
  schema: pagePortfolioi18n
});

export const collections = {
  // nazwa folderu: nazwa kolekcji
  'pagePortfolio': pagePortfolioCollection
}