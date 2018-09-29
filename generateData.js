var fs = require('fs')
var jsf = require('json-schema-faker')

var categoriesSchema = require('./schemas/categoriesSchema')
var productsSchema = require('./schemas/productsSchema')
var offersSchema = require('./schemas/offersSchema')

// setting of czech localization
jsf.extend('faker', function () {
    var faker = require('faker')

    faker.locale = 'cz'
    return faker
})

jsf.option({
    useDefaultValue: true
})

var categories = jsf(categoriesSchema).categories
var products = jsf(productsSchema).products
var offers = jsf(offersSchema).offers

// assigning foreign keys to products
for (var productIndex in products) {
    var categoryRandomIndex = Math.floor(Math.random() * categories.length)

    products[productIndex].categoryId = categories[categoryRandomIndex].categoryId
}

// assigning foreign keys to offers
for (var offerIndex in offers) {
    var productRandomIndex = Math.floor(Math.random() * products.length)

    offers[offerIndex].productId = products[productRandomIndex].productId
}

var productCounts = []
for (var categoryIndex in categories) {
    var categoryId = categories[categoryIndex].categoryId

    productCounts.push({
        categoryId: categoryId,
        count: products.filter(function (e) {
            return e.categoryId === categoryId
        }).length
    })
}

var offerCounts = []
for (var productIndex in products) {
    var productId = products[productIndex].productId

    offerCounts.push({
        productId: productId,
        count: products.filter(function (e) {
            return e.productId === productId
        }).length
    })
}

const jsonDb = JSON.stringify({
    categories,
    products,
    offers,
    productCounts,
    offerCounts
})

fs.writeFile('./db.json', jsonDb, function (err) {
    if (err) {
        console.log('\x1b[31m', err.message)
    } else {
        console.log('\x1b[32m', 'Data generated for mock api.')
    }
})
