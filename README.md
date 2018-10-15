# GameDrop
A shopping cart application built for WD6-International Inc, the world leader in online video game sales.

## Getting Started
These instructions will help you get a local copy of the application up and running on your machine.

### Requirements

- You must have [Node.js](https://nodejs.org/en/) installed
- You must have [MongoDB](https://www.mongodb.com/) installed
- You must have a Stripe.com API Key

### Clone Repo

*Change to an easily accessible location*
```
$ cd desktop
```

*Clone down the repo*
```
$ git clone https://github.com/TraceLarson/WD6-ProjectPortfolio.git
```

### Change Into Application Root Directory

*Change into application directory*
```
$ cd WD6-ProjectPortfolio
```

*Change into application root*
```
$ cd "Team Development"/gamedrop
```

### Install Dependencies

```
$ npm install
```

### Create .env File

*Create file*
```
$ touch .env
```

*Edit File*  

*(Replace value with your Stripe<span>.</span>com test API Key)*

*.env*
```
APIKEY_STRIPE=uh23932rg68uib978
```

### Start MongoDB

*This example is for Windows, but start MongoDB whichever way you're used to*
```
$ net start MongoDB
```

### Start Server

```
$ npm start
```