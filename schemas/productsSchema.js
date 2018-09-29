var productsSchema = {
  type: 'object',
  properties: {
    products: {
      type: 'array',
      minItems: 100,
      maxItems: 200,
      uniqueItems: true,
      items: {
        type: 'object',
        properties: {
          productId: {
            type: 'integer',
            autoIncrement: true
          },
          title: {
            type: 'string',
            faker: 'commerce.productName'
          },
          categoryId: {
            type: 'integer'
          }
        },
        required: ['productId', 'title', 'categoryId']
      }
    }
  },
  required: ['products']
}

module.exports = productsSchema
