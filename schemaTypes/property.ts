import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'bg',
          title: 'Bulgarian',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'text',
          rows: 4,
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'bg',
          title: 'Bulgarian',
          type: 'text',
          rows: 4,
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'object',
          title: 'Alternative Text',
          fields: [
            {
              name: 'en',
              type: 'string',
              title: 'English',
            },
            {
              name: 'bg',
              type: 'string',
              title: 'Bulgarian',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'object',
              title: 'Alternative Text',
              fields: [
                {
                  name: 'en',
                  type: 'string',
                  title: 'English',
                },
                {
                  name: 'bg',
                  type: 'string',
                  title: 'Bulgarian',
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'en',
              type: 'string',
              title: 'English',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'bg',
              type: 'string',
              title: 'Bulgarian',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'email',
          type: 'string',
          title: 'Email',
          validation: (Rule) => Rule.email(),
        },
        {
          name: 'phone',
          type: 'string',
          title: 'Phone',
        },
        {
          name: 'address',
          type: 'object',
          title: 'Address',
          fields: [
            {
              name: 'en',
              type: 'text',
              title: 'English',
            },
            {
              name: 'bg',
              type: 'text',
              title: 'Bulgarian',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'lat',
          type: 'number',
          title: 'Latitude',
          validation: (Rule) => Rule.required().min(-90).max(90),
        },
        {
          name: 'lng',
          type: 'number',
          title: 'Longitude',
          validation: (Rule) => Rule.required().min(-180).max(180),
        },
      ],
    }),
  ],
  preview: {
    select: {
      titleEn: 'title.en',
      titleBg: 'title.bg',
      media: 'mainImage',
    },
    prepare(selection) {
      const {titleEn, titleBg, media} = selection
      return {
        title: titleEn || titleBg || 'Untitled',
        subtitle: titleBg && titleEn !== titleBg ? titleBg : undefined,
        media: media,
      }
    },
  },
})
