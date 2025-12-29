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
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'object',
      description: 'Optional subtitle displayed above the main title on the hero section',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
        },
        {
          name: 'bg',
          title: 'Bulgarian',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'object',
      description: 'Short description displayed in the footer',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'text',
          rows: 2,
        },
        {
          name: 'bg',
          title: 'Bulgarian',
          type: 'text',
          rows: 2,
        },
      ],
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
      name: 'apartmentRooms',
      title: 'Apartment Rooms',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'object',
              title: 'Room Name',
              fields: [
                {name: 'en', type: 'string', title: 'English'},
                {name: 'bg', type: 'string', title: 'Bulgarian'},
              ],
            },
            {
              name: 'description',
              type: 'object',
              title: 'Description',
              fields: [
                {name: 'en', type: 'text', title: 'English'},
                {name: 'bg', type: 'text', title: 'Bulgarian'},
              ],
            },
            {
              name: 'images',
              type: 'array',
              title: 'Room Images',
              of: [
                {
                  type: 'image',
                  options: {hotspot: true},
                  fields: [
                    {
                      name: 'alt',
                      type: 'object',
                      title: 'Alternative Text',
                      fields: [
                        {name: 'en', type: 'string', title: 'English'},
                        {name: 'bg', type: 'string', title: 'Bulgarian'},
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'hotelAmenities',
      title: 'Hotel Amenities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'object',
              title: 'Amenity Name',
              fields: [
                {name: 'en', type: 'string', title: 'English'},
                {name: 'bg', type: 'string', title: 'Bulgarian'},
              ],
            },
            {
              name: 'description',
              type: 'object',
              title: 'Description',
              fields: [
                {name: 'en', type: 'text', title: 'English'},
                {name: 'bg', type: 'text', title: 'Bulgarian'},
              ],
            },
            {
              name: 'icon',
              type: 'string',
              title: 'Icon Name',
              description: 'Icon identifier for the amenity',
            },
            {
              name: 'images',
              type: 'array',
              title: 'Amenity Images',
              of: [
                {
                  type: 'image',
                  options: {hotspot: true},
                  fields: [
                    {
                      name: 'alt',
                      type: 'object',
                      title: 'Alternative Text',
                      fields: [
                        {name: 'en', type: 'string', title: 'English'},
                        {name: 'bg', type: 'string', title: 'Bulgarian'},
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'exteriorImages',
      title: 'Exterior & Drone Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'object',
              title: 'Alternative Text',
              fields: [
                {name: 'en', type: 'string', title: 'English'},
                {name: 'bg', type: 'string', title: 'Bulgarian'},
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'specifications',
      title: 'Property Specifications',
      type: 'object',
      fields: [
        {
          name: 'bedrooms',
          type: 'number',
          title: 'Number of Bedrooms',
        },
        {
          name: 'bathrooms',
          type: 'number',
          title: 'Number of Bathrooms',
        },
        {
          name: 'size',
          type: 'number',
          title: 'Size (sq m)',
        },
        {
          name: 'maxGuests',
          type: 'number',
          title: 'Maximum Guests',
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
        {
          name: 'messengerUrl',
          type: 'url',
          title: 'Facebook Messenger URL',
          description: 'Full Messenger link (e.g., https://m.me/yourpage)',
        },
        {
          name: 'viberUrl',
          type: 'string',
          title: 'Viber URL',
          description: 'Viber chat link (e.g., viber://chat?number=+1234567890)',
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      description: 'Social media profiles displayed in the footer',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              type: 'string',
              title: 'Platform',
              options: {
                list: [
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'Twitter/X', value: 'twitter'},
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'YouTube', value: 'youtube'},
                  {title: 'TikTok', value: 'tiktok'},
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              type: 'url',
              title: 'URL',
              validation: (Rule) => Rule.required().uri({scheme: ['http', 'https']}),
            },
          ],
          preview: {
            select: {
              platform: 'platform',
              url: 'url',
            },
            prepare({platform, url}) {
              return {
                title: platform ? platform.charAt(0).toUpperCase() + platform.slice(1) : 'Social Link',
                subtitle: url,
              }
            },
          },
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
        {
          name: 'googleMapsUrl',
          type: 'url',
          title: 'Google Maps URL',
          description: 'Your Google Maps business listing URL (e.g., from "Share" button on your pin)',
          validation: (Rule) => Rule.optional(),
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
