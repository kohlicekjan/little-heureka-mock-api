var categoriesSchema = {
  type: 'object',
  properties: {
    categories: {
      type: 'array',
      minItems: 3,
      maxItems: 5,
      uniqueItems: true,
      items: {
        type: 'object',
        properties: {
          categoryId: {
            type: 'integer',
            autoIncrement: true
          },
          title: {
            type: 'string',
            faker: 'commerce.department'
          }
        },
        required: ['categoryId', 'title']
      }
    }
  },
  required: ['categories']
}

module.exports = categoriesSchema
