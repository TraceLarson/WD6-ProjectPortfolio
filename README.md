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

*Change directories into project*

`cd WD6-ProjectPortfolio/`

### Install Dependencies
Install package dependencies so it can run properly.

`npm install`

Also install client dependencies so the front-end can run properly.

`npm run client-install`

### Ensure MongoDB is running

`mongod`

### Install *concurrently* package

`npm install concurrently -g`

### Change into App Directory

`cd "Team Development"`

### Start Servers

Application uses two servers to run: *backend* and *client*

The *backend* server runs on port 5000

The *client* server runs on port 3000

Start the development server (this will use concurrently to run both the *backend* and *client* servers)
````
npm run dev
````

To seed local DB for dev environment:
````
cd seed
node item-seeder.js
````

### Done!

You can now use the application and make any necessary changes.

The server uses *nodemon* so you won't have to restart the server everytime you make changes to it.

Have fun!
