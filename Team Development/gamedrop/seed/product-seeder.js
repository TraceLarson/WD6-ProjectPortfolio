const mongoose = require("mongoose");

const Product = require("../models/product");

// Connect to db so products can be saved into it
mongoose.connect("mongodb://localhost:27017/gamedrop", { useNewUrlParser: true });

let products = [
    new Product({
        imgPath: "images/game-assassins-creed-odyssey.jpg",
        title: "Assassins Creed Odyssey",
        description: "An action role-playing video game developed by Ubisoft Quebec and published by Ubisoft. Eleventh major installment, and twentieth overall, in the Assassin's Creed series.",
        price: 59.99,
        totalRating: 0,
        numRatings: 0,
        rating: 0
    }),
    new Product({
        imgPath: "images/game-destiny-2.jpg",
        title: "Destiny 2",
        description: "An online-only multiplayer first-person shooter video game developed by Bungie and published by Activision. Sequel to 2014's Destiny and subsequent expansions.",
        price: 39.99,
        totalRating: 0,
        numRatings: 0,
        rating: 0
    }),
    new Product({
        imgPath: "images/game-fortnite.jpg",
        title: "Fortnite Deluxe Edition",
        description: "Fortnite is an online video game first released in 2017 and developed by Epic Games. It is available as separate software packages having different game modes that otherwise share the same general gameplay and game engine.",
        price: 59.99,
        totalRating: 0,
        numRatings: 0,
        rating: 0
    }),
    new Product({
        imgPath: "images/game-gta5.jpg",
        title: "Grand Theft Auto V",
        description: "Grand Theft Auto V is an action-adventure video game developed by Rockstar North and published by Rockstar Games. It was released in September 2013 for PlayStation 3 and Xbox 360, in November 2014 for PlayStation 4 and Xbox One, and in April 2015 for Microsoft Windows.",
        price: 29.99,
        totalRating: 0,
        numRatings: 0,
        rating: 0
    }),
    new Product({
        imgPath: "images/game-rdr.jpg",
        title: "Red Dead Redemption",
        description: "Red Dead Redemption is an action-adventure video game developed by Rockstar San Diego and published by Rockstar Games. ... An online multiplayer mode is included with the game, allowing up to 16 players to engage in both cooperative and competitive gameplay in a recreation of the single-player setting.",
        price: 29.99,
        totalRating: 0,
        numRatings: 0,
        rating: 0
    }),
    new Product({
        imgPath: "images/game-rdr2.png",
        title: "Red Dead Redemption II",
        description: "Red Dead Redemption 2 is an upcoming Western-themed action-adventure video game developed and published by Rockstar Games. It is scheduled to be released for PlayStation 4 and Xbox One on October 26, 2018. The game is a prequel to the 2010 title Red Dead Redemption and will be the third entry in the Red Dead series.",
        price: 59.99,
        totalRating: 0,
        numRatings: 0,
        rating: 0
    }),
    new Product({
        imgPath: "images/game-shadow-of-the-tomb-raider.jpg",
        title: "Shadow of the Tomb Raider",
        description: "Shadow of the Tomb Raider is an action-adventure video game developed by Eidos Montréal in conjunction with Crystal Dynamics and published by Square Enix. It continues the narrative from the 2015 game Rise of the Tomb Raider and is the twelfth mainline entry in the Tomb Raider series.",
        price: 89.99,
        totalRating: 0,
        numRatings: 0,
        rating: 0
    }),
    new Product({
        imgPath: "images/game-sotc.png",
        title: "Shadow of the Colossus",
        description: "Shadow of the Colossus, released in Japan as Wander and the Colossus, is an action-adventure game developed by SCE Japan Studio and Team Ico, and published by Sony Computer Entertainment for the PlayStation 2. The game was released in North America and Japan in October 2005 and PAL regions in February 2006.",
        price: 29.99,
        totalRating: 0,
        numRatings: 0,
        rating: 0
    }),
    new Product({
        imgPath: "images/game-super-mario-galaxy.png",
        title: "Super Mario Galaxy",
        description: "Super Mario Galaxy is a 2007 platform video game by Nintendo for the Wii. It is the third 3D game in the Super Mario series. The story revolves around the protagonist, Mario, who is on a quest to rescue Princess Peach whilst simultaneously saving the universe from Bowser.",
        price: 13.49,
        totalRating: 0,
        numRatings: 0,
        rating: 0
    }),
    new Product({
        imgPath: "images/game-super-mario-galaxy-2.jpg",
        title: "Super Mario Galaxy 2",
        description: "Super Mario Galaxy 2 is a platforming video game developed and published by Nintendo for the Wii. It was first announced at E3 2009 and is the sequel to Super Mario Galaxy. It was released worldwide in 2010.",
        price: 19.88,
        totalRating: 0,
        numRatings: 0,
        rating: 0
    })
];

let done = 0;
for (let i = 0; i < products.length; i++) {
    products[i].save((err, result) => {
        if (err) {console.log(err);}
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}