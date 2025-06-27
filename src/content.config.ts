// Import utilities from `astro:content`
import {z, defineCollection} from "astro:content";
import {file, glob} from 'astro/loaders'; // Not available with legacy API

///////////Portfolio
const pagePortfolio = (image) => z.object({
  title: z.string(),
  items: z.array(z.object({
    visible: z.boolean(),
    title: z.string(),
    slug: z.string(),
    image: image(),
    additionalImages: z.array(image()).optional(),
    description: z.string().optional()
  }))
})

const pagePortfolioi18n = ({image}) => z.object({
  pl: pagePortfolio(image),
});


const portfolio = defineCollection({
  loader: glob({pattern: "portfolio.md", base: './src/content/pages'}),
  schema: pagePortfolioi18n
});


////////////// ABOUT ME
const pageAbout = (image) => z.object({
  title: z.string(),
  description: z.string().optional()
})

const pageAbouti18n = ({image}) => z.object({
  pl: pageAbout(image),
});


const about = defineCollection({
  loader: glob({pattern: "about.md", base: './src/content/pages'}),
  schema: pageAbouti18n
});

////////////// CONTACT
const pageContact = (image) => z.object({
  title: z.string(),
  description: z.string().optional()
})

const pageContacti18n = ({image}) => z.object({
  pl: pageContact(image),
});


const contact = defineCollection({
  loader: glob({pattern: "contact.md", base: './src/content/pages'}),
  schema: pageContacti18n
});

////////////// Oferta
const pageOffer = (image) => z.object({
  title: z.string(),
  description: z.string().optional()
})

const pageOfferi18n = ({image}) => z.object({
  pl: pageOffer(image),
});


const offer = defineCollection({
  loader: glob({pattern: "offer.md", base: './src/content/pages'}),
  schema: pageOfferi18n
});

////////////// Główna
const homepageSchema = (image) => z.object({
  image: image(),
})

const homepageSchemai18n = ({image}) => z.object({
  pl: homepageSchema(image),
});


const homepage = defineCollection({
  loader: glob({pattern: "homepage.md", base: './src/content/pages'}),
  schema: homepageSchemai18n
});

////////////// Error
const pageError = (image) => z.object({
  image: image(),
  description: z.string()
})

const pageErrori18n = ({image}) => z.object({
  pl: pageError(image),
});


const error = defineCollection({
  loader: glob({pattern: "error.md", base: './src/content/pages'}),
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

const metaSettingsSchemai18n = ({image}) => z.object({
  pl: metaSettingsSchema(image),
});

const metaSettings = defineCollection({
  loader: glob({pattern: "meta.md", base: 'src/content/settings'}),
  schema: metaSettingsSchemai18n
});
export const collections = {
  portfolio,
  about,
  contact,
  offer,
  homepage,
  error,
  metaSettings
}