// FILE FOR API EXAMPLE DATA

/*
======== GET PRODUCTS ========
https://apilink/hr-rfe/products/
 */
let products = [
  {
    "id": 37311,
    "campus": "hr-rfe",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2021-08-13T14:37:33.145Z",
    "updated_at": "2021-08-13T14:37:33.145Z"
  },
  {
    "id": 37312,
    "campus": "hr-rfe",
    "name": "Bright Future Sunglasses",
    "slogan": "You've got to wear shades",
    "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    "category": "Accessories",
    "default_price": "69.00",
    "created_at": "2021-08-13T14:37:33.145Z",
    "updated_at": "2021-08-13T14:37:33.145Z"
  },
  {
    "id": 37313,
    "campus": "hr-rfe",
    "name": "Morning Joggers",
    "slogan": "Make yourself a morning person",
    "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    "category": "Pants",
    "default_price": "40.00",
    "created_at": "2021-08-13T14:37:33.145Z",
    "updated_at": "2021-08-13T14:37:33.145Z"
  },
  {
    "id": 37314,
    "campus": "hr-rfe",
    "name": "Slacker's Slacks",
    "slogan": "Comfortable for everything, or nothing",
    "description": "I'll tell you how great they are after I nap for a bit.",
    "category": "Pants",
    "default_price": "65.00",
    "created_at": "2021-08-13T14:37:33.145Z",
    "updated_at": "2021-08-13T14:37:33.145Z"
  },
  {
    "id": 37315,
    "campus": "hr-rfe",
    "name": "Heir Force Ones",
    "slogan": "A sneaker dynasty",
    "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
    "category": "Kicks",
    "default_price": "99.00",
    "created_at": "2021-08-13T14:37:33.145Z",
    "updated_at": "2021-08-13T14:37:33.145Z"
  },
  {
    "id": 37316,
    "campus": "hr-rfe",
    "name": "Pumped Up Kicks",
    "slogan": "Faster than a just about anything",
    "description": "The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.",
    "category": "Kicks",
    "default_price": "89.00",
    "created_at": "2021-08-13T14:37:33.145Z",
    "updated_at": "2021-08-13T14:37:33.145Z"
  },
  {
    "id": 37317,
    "campus": "hr-rfe",
    "name": "Blues Suede Shoes",
    "slogan": "2019 Stanley Cup Limited Edition",
    "description": "Touch down in the land of the Delta Blues in the middle of the pouring rain",
    "category": "Dress Shoes",
    "default_price": "120.00",
    "created_at": "2021-08-13T14:37:33.145Z",
    "updated_at": "2021-08-13T14:37:33.145Z"
  },
  {
    "id": 37318,
    "campus": "hr-rfe",
    "name": "YEasy 350",
    "slogan": "Just jumped over jumpman",
    "description": "These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.",
    "category": "Kicks",
    "default_price": "450.00",
    "created_at": "2021-08-13T14:37:33.145Z",
    "updated_at": "2021-08-13T14:37:33.145Z"
  },
  {
    "id": 37319,
    "campus": "hr-rfe",
    "name": "Summer Shoes",
    "slogan": "A risky call in the spring or fall",
    "description": "Low-top panelled buffed leather and mesh sneakers. Sizing embroidered in black at round toe. Tonal lace-up closure. Pull-loop and rubberized style name at padded tongue. Padded collar. Pull-loop at heel collar. Logo embroidered in black at outer side. Tonal treaded rubber sole. Tonal stitching.",
    "category": "Kicks",
    "default_price": "59.00",
    "created_at": "2021-08-13T14:37:33.145Z",
    "updated_at": "2021-08-13T14:37:33.145Z"
  },
  {
    "id": 37320,
    "campus": "hr-rfe",
    "name": "Infinity Stone",
    "slogan": "Reality is often disappointing. That is, it was. Now, reality can be whatever I want.",
    "description": "The Infinity Stones are six immensely powerful stone-like objects tied to different aspects of the universe, created by the Cosmic Entities. Each of the stones possesses unique capabilities that have been enhanced and altered by various alien civilizations for millennia.",
    "category": "Accessories",
    "default_price": "50000000.00",
    "created_at": "2021-08-13T14:37:33.145Z",
    "updated_at": "2021-08-13T14:37:33.145Z"
  }
];

/*
======== GET PRODUCT ========
https://apilink/hr-rfe/products/:product_id
 */

let product = {
  "id": 37320,
  "campus": "hr-rfe",
  "name": "Infinity Stone",
  "slogan": "Reality is often disappointing. That is, it was. Now, reality can be whatever I want.",
  "description": "The Infinity Stones are six immensely powerful stone-like objects tied to different aspects of the universe, created by the Cosmic Entities. Each of the stones possesses unique capabilities that have been enhanced and altered by various alien civilizations for millennia.",
  "category": "Accessories",
  "default_price": "50000000.00",
  "created_at": "2021-08-13T14:37:33.145Z",
  "updated_at": "2021-08-13T14:37:33.145Z",
  "features": []
};

/*
======== GET PRODUCT STYLES =========
https://apilink/hr-rfe/products/:product_id/styles
*/

let productStyles = {
  "product_id": "37320",
  "results": [
      {
          "style_id": 221044,
          "name": "Reality",
          "original_price": "500000000.00",
          "sale_price": null,
          "default?": true,
          "photos": [
              {
                  "thumbnail_url": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/Reality_Stone_VFX.png/revision/latest?cb=20190427012609",
                  "url": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/Reality_Stone_VFX.png/revision/latest?cb=20190427012609"
              }
          ],
          "skus": {
              "null": {
                  "quantity": null,
                  "size": null
              }
          }
      },
      {
          "style_id": 221045,
          "name": "Space",
          "original_price": "500000000.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/0a/Space_Stone_VFX.png/revision/latest?cb=20190427012702",
                  "url": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/0a/Space_Stone_VFX.png/revision/latest?cb=20190427012702"
              }
          ],
          "skus": {
              "null": {
                  "quantity": null,
                  "size": null
              }
          }
      },
      {
          "style_id": 221046,
          "name": "Time",
          "original_price": "500000000.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f0/Time_Stone_VFX.png/revision/latest?cb=20190427012724",
                  "url": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f0/Time_Stone_VFX.png/revision/latest?cb=20190427012724"
              }
          ],
          "skus": {
              "null": {
                  "quantity": null,
                  "size": null
              }
          }
      },
      {
          "style_id": 221047,
          "name": "Power",
          "original_price": "500000000.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/d/d7/Power_Stone_VFX.png/revision/latest?cb=20190427012543",
                  "url": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/d/d7/Power_Stone_VFX.png/revision/latest?cb=20190427012543"
              }
          ],
          "skus": {
              "null": {
                  "quantity": null,
                  "size": null
              }
          }
      },
      {
          "style_id": 221048,
          "name": "Mind",
          "original_price": "500000000.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/e/e4/Mind_Stone_VFX.png/revision/latest?cb=20190427012504",
                  "url": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/e/e4/Mind_Stone_VFX.png/revision/latest?cb=20190427012504"
              }
          ],
          "skus": {
              "null": {
                  "quantity": null,
                  "size": null
              }
          }
      },
      {
          "style_id": 221049,
          "name": "Soul",
          "original_price": "500000000.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/17/Soul_Stone_VFX.png/revision/latest?cb=20190427012633",
                  "url": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/17/Soul_Stone_VFX.png/revision/latest?cb=20190427012633"
              }
          ],
          "skus": {
              "null": {
                  "quantity": null,
                  "size": null
              }
          }
      }
  ]
};

/*
======== GET CART =========
https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart
returns an array of added cart items
*/

/*
======== GET PRODUCT REVIEWS =========
https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/:product_id
returns an array of added cart items
*/

let productReviews = {
    "product": "37320",
    "page": 0,
    "count": 1010,
    "results": [
        {
            "review_id": 1115807,
            "rating": 1,
            "summary": "Too OP",
            "recommend": false,
            "response": null,
            "body": "I just feel like these give the user too much of an advantage and I it's not really fair. Also I miss Peter.",
            "date": "2022-01-06T00:00:00.000Z",
            "reviewer_name": "Tony Stark",
            "helpfulness": 12,
            "photos": []
        },
        {
            "review_id": 1115914,
            "rating": 4,
            "summary": "Big Investment",
            "recommend": false,
            "response": null,
            "body": "Kind of a nasty scheme, each stone is useful on its own but you don't really get the full functionality unless you buy all of them and that seems intentional.",
            "date": "2022-01-07T00:00:00.000Z",
            "reviewer_name": "FrugalSpender",
            "helpfulness": 10,
            "photos": []
        },
        {
            "review_id": 1115796,
            "rating": 5,
            "summary": "What a Snap!",
            "recommend": false,
            "response": null,
            "body": "Just like that I was able to rid the world of its population issues! 10/10 ",
            "date": "2022-01-05T00:00:00.000Z",
            "reviewer_name": "Thanos",
            "helpfulness": 10,
            "photos": []
        },
        {
            "review_id": 1176547,
            "rating": 4,
            "summary": "yolo",
            "recommend": true,
            "response": null,
            "body": "yo",
            "date": "2022-04-22T00:00:00.000Z",
            "reviewer_name": "Steph",
            "helpfulness": 10,
            "photos": []
        },
        {
            "review_id": 1115915,
            "rating": 3,
            "summary": "Only One Stone",
            "recommend": false,
            "response": null,
            "body": "The stone is called \"Infinity Stone\" they will not actually provide infinite stones. I wanted to pave my driveway but I guess thats on me",
            "date": "2022-01-07T00:00:00.000Z",
            "reviewer_name": "Rocks",
            "helpfulness": 9,
            "photos": []
        },
        {
            "review_id": 1176546,
            "rating": 4,
            "summary": "STOP",
            "recommend": true,
            "response": null,
            "body": "Bad product",
            "date": "2022-04-22T00:00:00.000Z",
            "reviewer_name": "check",
            "helpfulness": 9,
            "photos": []
        },
        {
            "review_id": 1277960,
            "rating": 5,
            "summary": "Orchidchrombie and Fetch",
            "recommend": true,
            "response": null,
            "body": "so we made it here and its almost 9pm aklsdjlkasjdlkjaslkd",
            "date": "2022-12-15T00:00:00.000Z",
            "reviewer_name": "something",
            "helpfulness": 0,
            "photos": []
        },
        {
            "review_id": 1277428,
            "rating": 1,
            "summary": "Destruction",
            "recommend": false,
            "response": null,
            "body": "DestructionDestructionDestructionDestructionDestructionDestructionDestructionDestructionDestructionDestructionDestructionDestructionDestructionDestructionDestruction",
            "date": "2022-10-29T00:00:00.000Z",
            "reviewer_name": "TEST TEST",
            "helpfulness": 0,
            "photos": []
        },
        {
            "review_id": 1277363,
            "rating": 3,
            "summary": "afssaffas",
            "recommend": true,
            "response": null,
            "body": "safsasfagfadjkhfkjahbgdlkhsdbklhasgbfuajhkjdjnsvsjsavdsagfagfa",
            "date": "2022-10-28T00:00:00.000Z",
            "reviewer_name": "sfasafsafsa",
            "helpfulness": 0,
            "photos": []
        }
    ]
};

module.exports.products = products;
module.exports.product = product;
module.exports.productStyles = productStyles;
module.exports.productReviews = productReviews;