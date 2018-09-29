var offersSchema = {
  type: 'object',
  properties: {
    offers: {
      type: 'array',
      minItems: 600,
      maxItems: 1000,
      uniqueItems: true,
      items: {
        type: 'object',
        properties: {
          offerId: {
            type: 'integer',
            autoIncrement: true
          },
          productId: {
            type: 'integer',
            default: 0
          },
          title: {
            type: 'string',
            faker: 'company.companyName'
          },
          description: {
            type: 'string',
            faker: 'lorem.text'
          },
          url: {
            type: 'string',
            faker: 'internet.url'
          },
          img_url: {
            type: 'string',
            faker: 'image.imageUrl'
          },
          price: {
            type: 'integer',
            faker: 'commerce.price',
            minimum: 1
          }
        },
        required: ['offerId', 'productId', 'title', 'description', 'url', 'img_url', 'price']
      }
    }
  },
  required: ['offers']
}

module.exports = offersSchema
