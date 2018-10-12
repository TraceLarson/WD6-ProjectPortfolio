# WD6-ProjectPorfolio
Portfolio Repo For Project &amp; Porfolio 6 at Full Sail University Online


## Getting Started
This section will help you get a local copy of the project up and running on your machine.

### Clone the Repo
Start by cloning a copy of the repo onto your machine.

*Change to an easily accessible location*

`cd desktop`

*Clone repo*

`git clone https://github.com/TraceLarson/WD6-ProjectPortfolio.git`

*Change into App directory*

`cd WD6-ProjectPortfolio/"Team Development"`

### Install Dependencies
Install package dependencies so it can run properly.

`npm install`

Also install client dependencies so the front-end can run properly.

`npm run client-install`

### Ensure MongoDB is running

`mongod`

### Install *concurrently* package

`npm install concurrently -g`

### Seed Database

Change into seed directory

`cd seed`

Run seeder file to add data into the database

`node item-seeder.js`

### Start Servers

This application uses two servers to run: *backend* and *client*

The *backend* server runs on port 5000

The *client* server runs on port 3000

Start both servers (this command will use concurrently to run both the *backend* and *client* servers)

`npm run dev`

### Done!

You can now use the application and make any necessary changes.

The *backend* server uses *nodemon* so you won't have to restart it everytime you make changes.

Have fun!
