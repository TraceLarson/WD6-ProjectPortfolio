const Item =  require('../models/item');
const  mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gamedrop', { useNewUrlParser: true })


const items =  [
  new Item ({
    imagePath: 'https://images.igdb.com/igdb/image/upload/t_cover_big/f9jvrf3nwdgdil287sla.jpg',
    title: "Assassin's Creed: Odyssey",
    description:"Write your own epic odyssey and become a legendary Spartan hero in an inspiring adventure where you must forge your destiny and define your own path in a world on the brink of tearing itself apart.",
    releaseDate: 'Oct 05, 2018',
    price: 60,
    rating: 0,
    reviews: []
  }),
  new Item ({
    imagePath: 'https://images.igdb.com/igdb/image/upload/t_cover_big/heeuusaedvtwgsb0hbxe.jpg',
    title: 'Shadow of the Tomb Raider',
    description: 'As Lara Croft races to save the world from a Maya apocalypse, she must become the Tomb Raider she is destined to be.',
    releaseDate: 'Sep 14, 2018 ',
    price: 60,
    rating: 0,
    reviews: []
  }),
  new Item ({
    imagePath: 'https://images.igdb.com/igdb/image/upload/t_cover_big/tri1c6vbydeosoqajwt1.jpg',
    title: 'The Witcher 3: Wild Hunt',
    description: 'The Witcher: Wild Hunt is a story-driven, next-generation open world role-playing game set in a visually stunning fantasy universe full of meaningful choices and impactful consequences.',
    releaseDate: 'May 19, 2015',
    price: 60,
    rating: 0,
    reviews: []
  }),
  new Item ({
    imagePath: 'https://images.igdb.com/igdb/image/upload/t_cover_big/orklbkpdl7ujiojb9ibf.jpg',
    title: 'Destiny 2',
    description: 'In Destiny 2, the last safe city on Earth has fallen and lays in ruins, occupied by a powerful new enemy and his elite army, the Red Legion.',
    releaseDate: 'Sep 06, 2017',
    price: 60,
    rating: 0,
    reviews: []
  }),
  new Item ({
    imagePath: 'https://images.igdb.com/igdb/image/upload/t_cover_big/vkdea0wwyn0zx8fjs1kt.jpg',
    title: 'Battlefield V',
    description: 'A new Battlefield in a new setting, with unseen multiplayer moments, unmatched sights/sounds and with new modes and experiences.',
    releaseDate: 'Nov 20, 2018',
    price: 60,
    rating: 0,
    reviews: []
  }),
  new Item ({
    imagePath: 'https://images.igdb.com/igdb/image/upload/t_cover_big/llhtucsjtyev2ilhtogq.jpg',
    title: 'Hollow Knight',
    description: 'Hollow Knight is a challenging, beautiful action adventure game set in the vast, inter-connected underground kingdom of Hallownest.',
    releaseDate: 'Feb 24, 2017',
    price: 60,
    rating: 0,
    reviews: []
  }),
  new Item ({
    imagePath: 'https://images.igdb.com/igdb/image/upload/t_cover_big/xjqnuckrivp1iwvpneh5.jpg',
    title: 'Middle-Earth: Shadow of War',
    description: 'Go behind enemy lines to forge your army, conquer Fortresses and dominate Mordor from within. Experience how the award winning Nemesis System creates unique personal stories with every enemy.',
    releaseDate: 'Oct 10, 2017',
    price: 60,
    rating: 0,
    reviews: []
  }),
  new Item ({
    imagePath: 'https://images.igdb.com/igdb/image/upload/t_cover_big/t0zqmqhdcxppyol3mtlg.jpg',
    title: 'Grand Theft Auto V',
    description: 'The biggest, most dynamic and most diverse open world ever created, Grand Theft Auto V blends storytelling and gameplay in new ways as players repeatedly jump in and out of the lives of the game’s three lead characters, playing all sides of the game’s interwoven story.',
    releaseDate: 'Nov 18, 2014',
    price: 60,
    rating: 0,
    reviews: []
  }),
  new Item ({
    imagePath: 'https://images.igdb.com/igdb/image/upload/t_cover_big/beo6djh2ks4ybjrszyyl.jpg',
    title: 'Shovel Knight: Treasure Trove',
    description: 'Shovel Knight: Treasure Trove is the new name for the base Shovel Knight game. It will get all future updates and content for free just like before.',
    releaseDate: 'Jun 30, 2017',
    price: 60,
    rating: 0,
    reviews: []
  }),
  new Item ({
    imagePath: 'https://images.igdb.com/igdb/image/upload/t_cover_big/lcy8csmxbak1hnx9kwqg.jpg',
    title: 'Fortnite',
    description: 'Band together online to build extravagant forts, find or build insane weapons and traps and protect your towns from the strange monsters that emerge during the Storm.',
    releaseDate: 'Jul 25, 2017',
    price: 60,
    rating: 0,
    reviews: []
  })
];

var done = 0;
for (var i = 0; i < items.length; i++) {
  items[i].save(function(err, result) {
    done++;
    if (done === items.length) {
      exit();
    }
  })
}

function exit() {
  mongoose.disconnect();
}
