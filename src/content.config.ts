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


////////////menu
const menuSettingsSchema = (image) => z.object({
    highlight: z.boolean(),
    background: z.string(),
    homepage: z.object({
      image: image(),
      altText: z.string()
    })
  })

const menuSettingsSchemai18n = ({image}) => z.object({
  pl: menuSettingsSchema(image),
});

const menuSettings = defineCollection({
  loader: glob({pattern: "menu.md", base: 'src/content/settings'}),
  schema: menuSettingsSchemai18n
});

export const weekSchema = z.object({
  title: z.string(), // Tytuł tygodnia
  dateFrom: z.date(), // Tydzień od
  dateTo: z.date(),   // Tydzień do
  events: z.array(
    z.object({
      title: z.string(),         // Tytuł wydarzenia
      date: z.string(),          // Data wydarzenia (można zmienić na z.date() jeśli chcesz walidację ISO)
      location: z.string(),      // Miejsce wydarzenia
      price: z.string().optional(),         // Cena (opcjonalnie)
      registration: z.string().optional(),  // Zapisy (opcjonalnie)
      body: z.string(),          // Opis (markdown)
    })
  )
})

const weeks = defineCollection({
  loader: glob({pattern: "*.md", base: 'src/content/cowewro'}),
  schema: weekSchema
});
export const collections = {
  portfolio,
  about,
  contact,
  offer,
  homepage,
  error,
  metaSettings,
  menuSettings,
  weeks
}