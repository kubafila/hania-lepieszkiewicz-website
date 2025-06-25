// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

///////////Portfolio
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


////////////// ABOUT ME
const pageAbout = (image) => z.object({
  title: z.string(),
  description: z.string().optional()
})

const pageAbouti18n = ({ image }) => z.object({
  pl: pageAbout(image),
});


const pageAboutCollection = defineCollection({
  type: "content",
  schema: pageAbouti18n
});

////////////// CONTACT
const pageContact = (image) => z.object({
  title: z.string(),
  description: z.string().optional()
})

const pageContacti18n = ({ image }) => z.object({
  pl: pageContact(image),
});


const pageContactCollection = defineCollection({
  type: "content",
  schema: pageContacti18n
});

////////////// Oferta
const pageOffer = (image) => z.object({
  title: z.string(),
  description: z.string().optional()
})

const pageOfferi18n = ({ image }) => z.object({
  pl: pageOffer(image),
});


const pageOfferCollection = defineCollection({
  type: "content",
  schema: pageOfferi18n
});


/// Ustawienia
const siteSettingsSchema = (image) => z.object({
  metaTags: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.string()
  }),
  openGraph: z.object({
    title: z.string(),
    description: z.string(),
    image: image()
  })

});

const siteSettingsSchemai18n = ({ image }) => z.object({
  pl: siteSettingsSchema(image),
});

const settingsCollection = defineCollection({
  type: "content",
  schema: siteSettingsSchemai18n
});
export const collections = {
  // nazwa folderu: nazwa kolekcji
  'pagePortfolio': pagePortfolioCollection,
  'pageAbout': pageAboutCollection,
  'pageContact': pageContactCollection,
  'pageOffer': pageOfferCollection,
  "settings": settingsCollection
}