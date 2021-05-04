# MERN-Stack Backend API

This is a backend code for React Native Mobile Application found in the same git project. It has been build using Node.js

## Run

### Configure Database Connection String
You need to go to `.env.example` file and add your connection string to your mongoDB database and copy it into `.env` file and place it in the directory file of the project.
You can use the following url, but you need to get your `username`, `password` and `dbname` which you created in your databse in mongodb site.

```
mongodb+srv://<username>:<password>@cluster0.x1ccn.mongodb.net/<dbname>?retryWrites=true&w=majority
```


### Install

```
npm install
```

### Start API

```
npm start
```

## Routes

### Categories

```
GET      /api/v1/categories
GET      /api/v1/categories/:id
POST     /api/v1/categories
PUT      /api/v1/categories/:id
DELETE   /api/v1/categories/:id
```
### Products

```
GET      /api/v1/products
GET      /api/v1/products/:id
POST     /api/v1/products
PUT      /api/v1/products/:id
DELETE   /api/v1/products/:id
PUT gallery-images : /api/v1/products/gallery-images/:id
GET featured products: /api/v1/products/get/featured/:count
GET products count: /api/v1/products/get/count
```

### Orders

```
GET      /api/v1/orders
GET      /api/v1/orders/:id
POST     /api/v1/orders
PUT      /api/v1/orders/:id
DELETE   /api/v1/orders/:id
GET orders count: /api/v1/orders/get/count
```

### Users

```
GET      /api/v1/users
GET      /api/v1/users/:id
POST     /api/v1/users
PUT      /api/v1/users/:id
DELETE   /api/v1/users/:id
GET users count: /api/v1/users/get/count
```

#### Register new user

```
POST     /api/v1/users/register
```

#### Login user

To login the user and get the auth token you can use:

```
POST     /api/v1/users/login
```
