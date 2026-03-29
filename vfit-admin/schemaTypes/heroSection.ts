import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroSection',
  type: 'document',
  title: 'Hero sekcia (Homepage)',
  fields: [
    defineField({
      name: 'badge',
      type: 'string',
      title: 'Badge text',
      description: 'Malý text nad nadpisom (napr. "športovo-relaxačné centrum od 2004")',
    }),
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Hlavný nadpis',
      description: 'Napr. "Prečo CVIČIŤ vo V-FIT Bratislava..."',
    }),
    defineField({
      name: 'headingHighlight',
      type: 'string',
      title: 'Zvýraznená časť nadpisu',
      description: 'Táto časť bude zobrazená v zelenej farbe a kurzívou',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Popis',
      rows: 5,
    }),
  ],
})
