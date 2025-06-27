// Import utilities from `astro:content`
import { z, defineCollection, image } from "astro:content";
import {  file } from 'astro/loaders'; // Not available with legacy API

///////////Portfolio
const pagePortfolio = (image) => z.object({
  title: z.string(),
  items: z.array( z.object({
    visible: z.boolean(),
    title: z.string(),
    slug: z.string(),
    image: image(),
    additionalImages: z.array(image()).optional(),
    description: z.string().optional()
  }))
})

const pagePortfolioi18n = ({ image }) => z.object({
  pl: pagePortfolio(image),
});


const pagePortfolioCollection = defineCollection({
  loader: file('src/content/pagePortfolio/pagePortfolio.md'),
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
  loader: file('src/content/pageAbout/pageAbout.md'),
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
  loader: file('src/content/pageContact/pageContact.md'),
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
  loader: file('src/content/pageOffer/pageOffer.md'),
  schema: pageOfferi18n
});

////////////// Główna
const pageHomepage = (image) => z.object({
  image: image(),
})

const pageHomepagei18n = ({ image }) => z.object({
  pl: pageHomepage(image),
});


const pageHomepageCollection = defineCollection({
  loader: file('src/content/pageHomepage/pageHomepage.md'),
  schema: pageHomepagei18n
});

////////////// Error
const pageError = (image) => z.object({
  image: image(),
  description: z.string()
})

const pageErrori18n = ({ image }) => z.object({
  pl: pageError(image),
});


const pageErrorCollection = defineCollection({
  loader: file('src/content/pageError/pageError.md'),
  schema: pageErrori18n
});


/// Ustawienia
const metaSettingsSchema = (image) => z.object({
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

const metaSettingsSchemai18n = ({ image }) => z.object({
  pl: metaSettingsSchema(image),
});

const metaSettings = defineCollection({
  loader: file('src/content/settings/meta.md'),
  schema: metaSettingsSchemai18n
});
export const collections = {
  pagePortfolioCollection,
  pageAboutCollection,
  pageContactCollection,
  pageOfferCollection,
  pageHomepageCollection,
  pageErrorCollection,
  metaSettings
}