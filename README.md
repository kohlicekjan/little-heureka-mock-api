# little-heureka-mock-api

This is an Mock API for rapid for create app Little Heureka.

## Quick Start

To start it needs to have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/).

Clone the `little-heureka-mock-api` repository using git:

```bash
$ git clone https://github.com/kohlicekjan/little-heureka-mock-api.git
$ cd little-heureka-mock-api
```

Install dependencies:

```bash
$ npm install
```

Start the server:

```bash
$ npm start
```

Server running on [`http://localhost:3003`].

To regenerate data for for Mock API:

```bash
$ npm run regenerate 
```

## API Reference
This API is based on the [original api](https://catalogue9.docs.apiary.io/).

```
GET /categories/
GET /category/{categoryId}/ 
GET /products/{categoryId}/{offset}/{limit}/
GET /products/{categoryId}/ 
GET /offers/{categoryId}/count/
GET /product/{productId}/
GET /offers/{productId}/{offset}/{limit}/
GET /offers/{productId}/
GET /offer/{offerId}/
```
