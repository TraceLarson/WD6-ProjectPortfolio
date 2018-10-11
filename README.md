# WD6-ProjectPorfolio
Portfolio Repo For Project &amp; Porfolio 6 at Full Sail University Online

To run application make sure you have mongoDB installed and it is running.
Also install concurrently globally:
```
mongod
npm i concurrently -g
```


This is for the Team Development project, so make sure you are in **Team Development** folder:
````
cd Team\ Development
````

Install dependencies:
````
npm install
npm run client-install
````


Application uses two servers to run; backend and client.
The backend server runs on port 5000, client runs on port 3000

To start the development server run:
````
npm run dev
````

To seed local DB for dev environment:
````
cd seed
node item-seeder.js
````

Start mongo shell / view local DB:
````
sudo mongo
use gamedrop
show collections
````
