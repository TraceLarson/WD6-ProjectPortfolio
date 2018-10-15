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

### DONE

You can now connect to the app by visiting `localhost:3000` in your browser.

The server is run with nodemon, so you don't need to restart it on changes.

## Devs

### Trace Larson
- talarson@student.fullsail.edu
- @TraceLarson (Slack)

### Chris Fiedor
- csfiedor@student.fullsail.edu
- @csfiedor (Slack)

### Daniel Hughes
- dshughes@student.fullsail.edu
- @hughesd22 (Slack)

## Technologies & Integrations

- **Node.js** => Server JavaScript Runtime
- **Express.js** => Web Framework
- **MongoDB** => NoSQL Database
- **NPM** => Dependency Management
- **FontAwesome** => Icons
- **Bootstrap** => User Interface (UI)
- **Stripe API** => Payment Processing