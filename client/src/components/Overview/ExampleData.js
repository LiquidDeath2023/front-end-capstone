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
    "id": 37318,
    "campus": "hr-rfe",
    "name": "YEasy 350",
    "slogan": "Just jumped over jumpman",
    "description": "These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.",
    "category": "Kicks",
    "default_price": "450.00",
    "created_at": "2021-08-13T14:37:33.145Z",
    "updated_at": "2021-08-13T14:37:33.145Z",
    "features": [
        {
            "feature": "Sole",
            "value": "Rubber"
        },
        {
            "feature": "Material",
            "value": "FullControlSkin"
        },
        {
            "feature": "Stitching",
            "value": "Double Stitch"
        }
    ]
};

/*
======== GET PRODUCT STYLES =========
https://apilink/hr-rfe/products/:product_id/styles
*/

let productStyles = {
    "product_id": "37318",
    "results": [
        {
            "style_id": 221034,
            "name": "Zebra Stripe",
            "original_price": "900.00",
            "sale_price": null,
            "default?": false,
            "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1542818212-9899bafcb9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1542818212-9899bafcb9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80"
                }
            ],
            "skus": {
                "1281279": {
                    "quantity": 14,
                    "size": "7"
                },
                "1281280": {
                    "quantity": 25,
                    "size": "7.5"
                },
                "1281281": {
                    "quantity": 9,
                    "size": "8"
                },
                "1281282": {
                    "quantity": 2,
                    "size": "8.5"
                },
                "1281283": {
                    "quantity": 18,
                    "size": "9"
                },
                "1281284": {
                    "quantity": 12,
                    "size": "9.5"
                },
                "1281285": {
                    "quantity": 10,
                    "size": "10"
                },
                "1281286": {
                    "quantity": 18,
                    "size": "10.5"
                },
                "1281287": {
                    "quantity": 11,
                    "size": "11"
                },
                "1281288": {
                    "quantity": 35,
                    "size": "11.5"
                },
                "1281289": {
                    "quantity": 25,
                    "size": "12"
                }
            }
        },
        {
            "style_id": 221035,
            "name": "Oreo",
            "original_price": "750.00",
            "sale_price": null,
            "default?": false,
            "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1520904549193-5ab0027b3fa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1520904549193-5ab0027b3fa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                }
            ],
            "skus": {
                "1281290": {
                    "quantity": 14,
                    "size": "7"
                },
                "1281291": {
                    "quantity": 25,
                    "size": "7.5"
                },
                "1281292": {
                    "quantity": 9,
                    "size": "8"
                },
                "1281293": {
                    "quantity": 2,
                    "size": "8.5"
                },
                "1281294": {
                    "quantity": 18,
                    "size": "9"
                },
                "1281295": {
                    "quantity": 12,
                    "size": "9.5"
                },
                "1281296": {
                    "quantity": 10,
                    "size": "10"
                },
                "1281297": {
                    "quantity": 18,
                    "size": "10.5"
                },
                "1281298": {
                    "quantity": 11,
                    "size": "11"
                },
                "1281299": {
                    "quantity": 35,
                    "size": "11.5"
                },
                "1281300": {
                    "quantity": 25,
                    "size": "12"
                }
            }
        },
        {
            "style_id": 221036,
            "name": "Red Supply",
            "original_price": "450.00",
            "sale_price": null,
            "default?": false,
            "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1473396413399-6717ef7c4093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1473396413399-6717ef7c4093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                }
            ],
            "skus": {
                "1281301": {
                    "quantity": 14,
                    "size": "7"
                },
                "1281302": {
                    "quantity": 25,
                    "size": "7.5"
                },
                "1281303": {
                    "quantity": 9,
                    "size": "8"
                },
                "1281304": {
                    "quantity": 2,
                    "size": "8.5"
                },
                "1281305": {
                    "quantity": 18,
                    "size": "9"
                },
                "1281306": {
                    "quantity": 12,
                    "size": "9.5"
                },
                "1281307": {
                    "quantity": 10,
                    "size": "10"
                },
                "1281308": {
                    "quantity": 18,
                    "size": "10.5"
                },
                "1281309": {
                    "quantity": 11,
                    "size": "11"
                },
                "1281310": {
                    "quantity": 35,
                    "size": "11.5"
                },
                "1281311": {
                    "quantity": 25,
                    "size": "12"
                }
            }
        },
        {
            "style_id": 221037,
            "name": "White",
            "original_price": "450.00",
            "sale_price": null,
            "default?": true,
            "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                }
            ],
            "skus": {
                "1281312": {
                    "quantity": 14,
                    "size": "7"
                },
                "1281313": {
                    "quantity": 25,
                    "size": "7.5"
                },
                "1281314": {
                    "quantity": 9,
                    "size": "8"
                },
                "1281315": {
                    "quantity": 2,
                    "size": "8.5"
                },
                "1281316": {
                    "quantity": 18,
                    "size": "9"
                },
                "1281317": {
                    "quantity": 12,
                    "size": "9.5"
                },
                "1281318": {
                    "quantity": 10,
                    "size": "10"
                },
                "1281319": {
                    "quantity": 18,
                    "size": "10.5"
                },
                "1281320": {
                    "quantity": 11,
                    "size": "11"
                },
                "1281321": {
                    "quantity": 35,
                    "size": "11.5"
                },
                "1281322": {
                    "quantity": 25,
                    "size": "12"
                }
            }
        },
        {
            "style_id": 221038,
            "name": "Black",
            "original_price": "950.00",
            "sale_price": null,
            "default?": false,
            "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1519482816300-1490fdf2c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1519482816300-1490fdf2c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1542818212-9899bafcb9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1542818212-9899bafcb9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1512521952190-7e1a47820ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1512521952190-7e1a47820ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=978&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1547597456-4c18a06d9073?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1547597456-4c18a06d9073?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                }
            ],
            "skus": {
                "1281323": {
                    "quantity": 14,
                    "size": "7"
                },
                "1281324": {
                    "quantity": 25,
                    "size": "7.5"
                },
                "1281325": {
                    "quantity": 9,
                    "size": "8"
                },
                "1281326": {
                    "quantity": 2,
                    "size": "8.5"
                },
                "1281327": {
                    "quantity": 18,
                    "size": "9"
                },
                "1281328": {
                    "quantity": 12,
                    "size": "9.5"
                },
                "1281329": {
                    "quantity": 10,
                    "size": "10"
                },
                "1281330": {
                    "quantity": 18,
                    "size": "10.5"
                },
                "1281331": {
                    "quantity": 11,
                    "size": "11"
                },
                "1281332": {
                    "quantity": 35,
                    "size": "11.5"
                },
                "1281333": {
                    "quantity": 25,
                    "size": "12"
                }
            }
        },
        {
            "style_id": 221039,
            "name": "Pink",
            "original_price": "450.00",
            "sale_price": null,
            "default?": false,
            "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1554735490-80893c93b06f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1554735490-80893c93b06f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                }
            ],
            "skus": {
                "1281334": {
                    "quantity": 14,
                    "size": "7"
                },
                "1281335": {
                    "quantity": 25,
                    "size": "7.5"
                },
                "1281336": {
                    "quantity": 9,
                    "size": "8"
                },
                "1281337": {
                    "quantity": 2,
                    "size": "8.5"
                },
                "1281338": {
                    "quantity": 18,
                    "size": "9"
                },
                "1281339": {
                    "quantity": 12,
                    "size": "9.5"
                },
                "1281340": {
                    "quantity": 10,
                    "size": "10"
                },
                "1281341": {
                    "quantity": 18,
                    "size": "10.5"
                },
                "1281342": {
                    "quantity": 11,
                    "size": "11"
                },
                "1281343": {
                    "quantity": 35,
                    "size": "11.5"
                },
                "1281344": {
                    "quantity": 25,
                    "size": "12"
                }
            }
        },
        {
            "style_id": 221040,
            "name": "Green",
            "original_price": "450.00",
            "sale_price": null,
            "default?": false,
            "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1550188053-b4e1e8e4f94f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1550188053-b4e1e8e4f94f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                }
            ],
            "skus": {
                "1281345": {
                    "quantity": 14,
                    "size": "7"
                },
                "1281346": {
                    "quantity": 25,
                    "size": "7.5"
                },
                "1281347": {
                    "quantity": 9,
                    "size": "8"
                },
                "1281348": {
                    "quantity": 2,
                    "size": "8.5"
                },
                "1281349": {
                    "quantity": 18,
                    "size": "9"
                },
                "1281350": {
                    "quantity": 12,
                    "size": "9.5"
                },
                "1281351": {
                    "quantity": 10,
                    "size": "10"
                },
                "1281352": {
                    "quantity": 18,
                    "size": "10.5"
                },
                "1281353": {
                    "quantity": 11,
                    "size": "11"
                },
                "1281354": {
                    "quantity": 35,
                    "size": "11.5"
                },
                "1281355": {
                    "quantity": 25,
                    "size": "12"
                }
            }
        },
        {
            "style_id": 221041,
            "name": "Butter",
            "original_price": "450.00",
            "sale_price": "400.00",
            "default?": false,
            "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1548369735-f548cbe6a294?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1548369735-f548cbe6a294?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=977&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                }
            ],
            "skus": {
                "1281356": {
                    "quantity": 14,
                    "size": "7"
                },
                "1281357": {
                    "quantity": 25,
                    "size": "7.5"
                },
                "1281358": {
                    "quantity": 9,
                    "size": "8"
                },
                "1281359": {
                    "quantity": 2,
                    "size": "8.5"
                },
                "1281360": {
                    "quantity": 18,
                    "size": "9"
                },
                "1281361": {
                    "quantity": 12,
                    "size": "9.5"
                },
                "1281362": {
                    "quantity": 10,
                    "size": "10"
                },
                "1281363": {
                    "quantity": 18,
                    "size": "10.5"
                },
                "1281364": {
                    "quantity": 11,
                    "size": "11"
                },
                "1281365": {
                    "quantity": 35,
                    "size": "11.5"
                },
                "1281366": {
                    "quantity": 25,
                    "size": "12"
                }
            }
        },
        {
            "style_id": 221042,
            "name": "Grey",
            "original_price": "450.00",
            "sale_price": null,
            "default?": false,
            "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1536181211993-cf4b2c100475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1536181211993-cf4b2c100475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                }
            ],
            "skus": {
                "1281367": {
                    "quantity": 14,
                    "size": "7"
                },
                "1281368": {
                    "quantity": 25,
                    "size": "7.5"
                },
                "1281369": {
                    "quantity": 9,
                    "size": "8"
                },
                "1281370": {
                    "quantity": 2,
                    "size": "8.5"
                },
                "1281371": {
                    "quantity": 18,
                    "size": "9"
                },
                "1281372": {
                    "quantity": 12,
                    "size": "9.5"
                },
                "1281373": {
                    "quantity": 10,
                    "size": "10"
                },
                "1281374": {
                    "quantity": 18,
                    "size": "10.5"
                },
                "1281375": {
                    "quantity": 11,
                    "size": "11"
                },
                "1281376": {
                    "quantity": 35,
                    "size": "11.5"
                },
                "1281377": {
                    "quantity": 25,
                    "size": "12"
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
    "product": "37318",
    "page": 0,
    "count": 1010,
    "results": [
        {
            "review_id": 1278994,
            "rating": 5,
            "summary": "Wow, would totally buy again!",
            "recommend": true,
            "response": null,
            "body": "Nunc eget lacus a leo imperdiet placerat. Suspendisse ante ligula, consectetur sit amet consectetur sed, hendrerit in ipsum. Nunc quis accumsan nunc. Proin augue eros, hendrerit eu urna ut, consequat malesuada ex. Morbi accumsan leo non mauris dignissim, ac finibus orci euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam a odio fringilla, tempus eros nec, varius diam. Donec in nulla venenatis nibh pharetra vehicula. Sed tincidunt, tellus sollicitudin posuere bibendum, neque nisi tincidunt ex, quis blandit justo neque varius ipsum. Donec tincidunt ligula eget elementum scelerisque. Vestibulum tempor, quam suscipit placerat eleifend, magna ligula fermentum orci, et dignissim est purus eget elit. Curabitur ante mauris, fringilla at luctus eu, suscipit ac risus.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "GreatJoeBuck4",
            "helpfulness": 39,
            "photos": [
                {
                    "id": 2457482,
                    "url": "https://images.unsplash.com/photo-1606297199333-e93f7d726cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457483,
                    "url": "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457484,
                    "url": "https://images.unsplash.com/photo-1559478496-eaef498abbed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }
            ]
        },
        {
            "review_id": 1278995,
            "rating": 5,
            "summary": "Everyone needs to buy these!",
            "recommend": true,
            "response": null,
            "body": "Maecenas euismod tortor eros, eget tincidunt lorem luctus eu. Aenean quis lorem scelerisque, sollicitudin nulla non, cursus odio. Nullam at leo quis dolor lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend porttitor varius. Nunc eu aliquam velit. Ut diam felis, vulputate sed cursus id, pellentesque nec nisi. In rhoncus vehicula massa, ac cursus turpis porttitor sit amet. Quisque cursus faucibus lacus, non imperdiet nisi dapibus sed. Pellentesque a nunc id velit aliquet dictum eget non turpis. Nam blandit massa sit amet consequat elementum. Quisque nec metus quis orci condimentum elementum. Suspendisse in purus dignissim, faucibus elit vitae, aliquam enim. Aliquam eu ipsum diam.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "NotSteve",
            "helpfulness": 23,
            "photos": [
                {
                    "id": 2457485,
                    "url": "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457486,
                    "url": "https://images.unsplash.com/photo-1559478496-eaef498abbed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457487,
                    "url": "https://images.unsplash.com/photo-1606297199333-e93f7d726cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }
            ]
        },
        {
            "review_id": 1278998,
            "rating": 5,
            "summary": "Wow, these fit amazing.",
            "recommend": true,
            "response": null,
            "body": "Sed maximus tincidunt viverra. Cras lacinia tincidunt felis. Proin in ultricies arcu, in bibendum lacus. Aliquam ultricies faucibus ligula non pretium. Quisque ut convallis lectus, vel egestas justo. Suspendisse egestas, ante vitae convallis sollicitudin, elit est euismod est, a scelerisque sapien eros vitae risus. Integer ac augue porta, tempus arcu nec, ornare tortor. Nunc a turpis nulla. Integer sollicitudin consequat lorem. Sed porttitor, est eu posuere vestibulum, erat ante lacinia tellus, sodales blandit enim ipsum et turpis. Morbi eu hendrerit tellus, in finibus velit. Donec at ornare tellus. Nullam vel dapibus urna. Pellentesque quis neque consequat, ultricies justo id, commodo dolor.\n\nFusce eu leo sit amet ante convallis porttitor id sed dui. Cras cursus eget purus eu consequat. Nullam in convallis tellus, id finibus neque. Aenean cursus, sem at sollicitudin malesuada, arcu lacus tempus turpis, id dapibus tortor ex vel est. Suspendisse suscipit blandit ipsum, vel hendrerit sap",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "ChatGPT",
            "helpfulness": 16,
            "photos": [
                {
                    "id": 2457494,
                    "url": "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                },
                {
                    "id": 2457495,
                    "url": "https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                },
                {
                    "id": 2457496,
                    "url": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                }
            ]
        },
        {
            "review_id": 1278986,
            "rating": 5,
            "summary": "Amazing!",
            "recommend": true,
            "response": null,
            "body": "Nunc eget lacus a leo imperdiet placerat. Suspendisse ante ligula, consectetur sit amet consectetur sed, hendrerit in ipsum. Nunc quis accumsan nunc. Proin augue eros, hendrerit eu urna ut, consequat malesuada ex. Morbi accumsan leo non mauris dignissim, ac finibus orci euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam a odio fringilla, tempus eros nec, varius diam. Donec in nulla venenatis nibh pharetra vehicula. Sed tincidunt, tellus sollicitudin posuere bibendum, neque nisi tincidunt ex, quis blandit justo neque varius ipsum. Donec tincidunt ligula eget elementum scelerisque. Vestibulum tempor, quam suscipit placerat eleifend, magna ligula fermentum orci, et dignissim est purus eget elit. Curabitur ante mauris, fringilla at luctus eu, suscipit ac risus.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "User123",
            "helpfulness": 10,
            "photos": [
                {
                    "id": 2457458,
                    "url": "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457459,
                    "url": "https://images.unsplash.com/photo-1606297199333-e93f7d726cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457460,
                    "url": "https://images.unsplash.com/photo-1559478496-eaef498abbed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }
            ]
        },
        {
            "review_id": 1278989,
            "rating": 2,
            "summary": "Amazing!",
            "recommend": true,
            "response": null,
            "body": "Nunc eget lacus a leo imperdiet placerat. Suspendisse ante ligula, consectetur sit amet consectetur sed, hendrerit in ipsum. Nunc quis accumsan nunc. Proin augue eros, hendrerit eu urna ut, consequat malesuada ex. Morbi accumsan leo non mauris dignissim, ac finibus orci euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam a odio fringilla, tempus eros nec, varius diam. Donec in nulla venenatis nibh pharetra vehicula. Sed tincidunt, tellus sollicitudin posuere bibendum, neque nisi tincidunt ex, quis blandit justo neque varius ipsum. Donec tincidunt ligula eget elementum scelerisque. Vestibulum tempor, quam suscipit placerat eleifend, magna ligula fermentum orci, et dignissim est purus eget elit. Curabitur ante mauris, fringilla at luctus eu, suscipit ac risus.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "User123",
            "helpfulness": 10,
            "photos": [
                {
                    "id": 2457467,
                    "url": "https://images.unsplash.com/photo-1606297199333-e93f7d726cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457468,
                    "url": "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457469,
                    "url": "https://images.unsplash.com/photo-1559478496-eaef498abbed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }
            ]
        },
        {
            "review_id": 1278992,
            "rating": 4,
            "summary": "Somewhat Amazing Yay. What great shoes!",
            "recommend": true,
            "response": null,
            "body": "Nunc eget lacus a leo imperdiet placerat. Suspendisse ante ligula, consectetur sit amet consectetur sed, hendrerit in ipsum. Nunc quis accumsan nunc. Proin augue eros, hendrerit eu urna ut, consequat malesuada ex. Morbi accumsan leo non mauris dignissim, ac finibus orci euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam a odio fringilla, tempus eros nec, varius diam. Donec in nulla venenatis nibh pharetra vehicula. Sed tincidunt, tellus sollicitudin posuere bibendum, neque nisi tincidunt ex, quis blandit justo neque varius ipsum. Donec tincidunt ligula eget elementum scelerisque. Vestibulum tempor, quam suscipit placerat eleifend, magna ligula fermentum orci, et dignissim est purus eget elit. Curabitur ante mauris, fringilla at luctus eu, suscipit ac risus.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "AverageJoe",
            "helpfulness": 8,
            "photos": [
                {
                    "id": 2457476,
                    "url": "https://images.unsplash.com/photo-1559478496-eaef498abbed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457477,
                    "url": "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457478,
                    "url": "https://images.unsplash.com/photo-1606297199333-e93f7d726cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }
            ]
        },
        {
            "review_id": 1278985,
            "rating": 5,
            "summary": "Amazing!",
            "recommend": true,
            "response": null,
            "body": "Nunc eget lacus a leo imperdiet placerat. Suspendisse ante ligula, consectetur sit amet consectetur sed, hendrerit in ipsum. Nunc quis accumsan nunc. Proin augue eros, hendrerit eu urna ut, consequat malesuada ex. Morbi accumsan leo non mauris dignissim, ac finibus orci euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam a odio fringilla, tempus eros nec, varius diam. Donec in nulla venenatis nibh pharetra vehicula. Sed tincidunt, tellus sollicitudin posuere bibendum, neque nisi tincidunt ex, quis blandit justo neque varius ipsum. Donec tincidunt ligula eget elementum scelerisque. Vestibulum tempor, quam suscipit placerat eleifend, magna ligula fermentum orci, et dignissim est purus eget elit. Curabitur ante mauris, fringilla at luctus eu, suscipit ac risus.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "User123",
            "helpfulness": 7,
            "photos": []
        },
        {
            "review_id": 1278993,
            "rating": 5,
            "summary": "Wow, would totally buy again!",
            "recommend": true,
            "response": null,
            "body": "Nunc eget lacus a leo imperdiet placerat. Suspendisse ante ligula, consectetur sit amet consectetur sed, hendrerit in ipsum. Nunc quis accumsan nunc. Proin augue eros, hendrerit eu urna ut, consequat malesuada ex. Morbi accumsan leo non mauris dignissim, ac finibus orci euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam a odio fringilla, tempus eros nec, varius diam. Donec in nulla venenatis nibh pharetra vehicula. Sed tincidunt, tellus sollicitudin posuere bibendum, neque nisi tincidunt ex, quis blandit justo neque varius ipsum. Donec tincidunt ligula eget elementum scelerisque. Vestibulum tempor, quam suscipit placerat eleifend, magna ligula fermentum orci, et dignissim est purus eget elit. Curabitur ante mauris, fringilla at luctus eu, suscipit ac risus.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "GreatJoeBuck4",
            "helpfulness": 7,
            "photos": [
                {
                    "id": 2457479,
                    "url": "https://images.unsplash.com/photo-1559478496-eaef498abbed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457481,
                    "url": "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457480,
                    "url": "https://images.unsplash.com/photo-1606297199333-e93f7d726cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }
            ]
        },
        {
            "review_id": 1278988,
            "rating": 3,
            "summary": "Amazing!",
            "recommend": true,
            "response": null,
            "body": "Nunc eget lacus a leo imperdiet placerat. Suspendisse ante ligula, consectetur sit amet consectetur sed, hendrerit in ipsum. Nunc quis accumsan nunc. Proin augue eros, hendrerit eu urna ut, consequat malesuada ex. Morbi accumsan leo non mauris dignissim, ac finibus orci euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam a odio fringilla, tempus eros nec, varius diam. Donec in nulla venenatis nibh pharetra vehicula. Sed tincidunt, tellus sollicitudin posuere bibendum, neque nisi tincidunt ex, quis blandit justo neque varius ipsum. Donec tincidunt ligula eget elementum scelerisque. Vestibulum tempor, quam suscipit placerat eleifend, magna ligula fermentum orci, et dignissim est purus eget elit. Curabitur ante mauris, fringilla at luctus eu, suscipit ac risus.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "User123",
            "helpfulness": 7,
            "photos": [
                {
                    "id": 2457464,
                    "url": "https://images.unsplash.com/photo-1559478496-eaef498abbed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457465,
                    "url": "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457466,
                    "url": "https://images.unsplash.com/photo-1606297199333-e93f7d726cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }
            ]
        },
        {
            "review_id": 1278996,
            "rating": 5,
            "summary": "Great buy!",
            "recommend": true,
            "response": null,
            "body": "Fusce eu leo sit amet ante convallis porttitor id sed dui. Cras cursus eget purus eu consequat. Nullam in convallis tellus, id finibus neque. Aenean cursus, sem at sollicitudin malesuada, arcu lacus tempus turpis, id dapibus tortor ex vel est. Suspendisse suscipit blandit ipsum, vel hendrerit sapien rutrum id. Pellentesque eget metus ut purus finibus semper. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nNunc eget lacus a leo imperdiet placerat. Suspendisse ante ligula, consectetur sit amet consectetur sed, hendrerit in ipsum. Nunc quis accumsan nunc. Proin augue eros, hendrerit eu urna ut, consequat malesuada ex. Morbi accumsan leo non mauris dignissim, ac finibus orci euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam a odio fringilla, tempus eros nec, varius diam. Donec in nulla venenatis nibh pharetra vehicula. Sed tincidunt, tellus sollicitudin posuere bibendum, neque nisi tincidunt ex, quis blan",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "Bucky",
            "helpfulness": 6,
            "photos": [
                {
                    "id": 2457488,
                    "url": "https://images.unsplash.com/photo-1561053720-76cd73ff22c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                },
                {
                    "id": 2457489,
                    "url": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                },
                {
                    "id": 2457490,
                    "url": "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                }
            ]
        },
        {
            "review_id": 1278984,
            "rating": 5,
            "summary": "Amazing!",
            "recommend": true,
            "response": null,
            "body": "Nunc eget lacus a leo imperdiet placerat. Suspendisse ante ligula, consectetur sit amet consectetur sed, hendrerit in ipsum. Nunc quis accumsan nunc. Proin augue eros, hendrerit eu urna ut, consequat malesuada ex. Morbi accumsan leo non mauris dignissim, ac finibus orci euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam a odio fringilla, tempus eros nec, varius diam. Donec in nulla venenatis nibh pharetra vehicula. Sed tincidunt, tellus sollicitudin posuere bibendum, neque nisi tincidunt ex, quis blandit justo neque varius ipsum. Donec tincidunt ligula eget elementum scelerisque. Vestibulum tempor, quam suscipit placerat eleifend, magna ligula fermentum orci, et dignissim est purus eget elit. Curabitur ante mauris, fringilla at luctus eu, suscipit ac risus.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "User123",
            "helpfulness": 5,
            "photos": []
        },
        {
            "review_id": 1279031,
            "rating": 5,
            "summary": "Everyone needs to buy these!",
            "recommend": true,
            "response": null,
            "body": "Maecenas euismod tortor eros, eget tincidunt lorem luctus eu. Aenean quis lorem scelerisque, sollicitudin nulla non, cursus odio. Nullam at leo quis dolor lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend porttitor varius. Nunc eu aliquam velit. Ut diam felis, vulputate sed cursus id, pellentesque nec nisi. In rhoncus vehicula massa, ac cursus turpis porttitor sit amet. Quisque cursus faucibus lacus, non imperdiet nisi dapibus sed. Pellentesque a nunc id velit aliquet dictum eget non turpis. Nam blandit massa sit amet consequat elementum. Quisque nec metus quis orci condimentum elementum. Suspendisse in purus dignissim, faucibus elit vitae, aliquam enim. Aliquam eu ipsum diam.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "NotSteve",
            "helpfulness": 3,
            "photos": [
                {
                    "id": 2457593,
                    "url": "https://images.unsplash.com/photo-1559478496-eaef498abbed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457592,
                    "url": "https://images.unsplash.com/photo-1606297199333-e93f7d726cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457594,
                    "url": "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }
            ]
        },
        {
            "review_id": 1278987,
            "rating": 5,
            "summary": "Amazing!",
            "recommend": true,
            "response": null,
            "body": "Nunc eget lacus a leo imperdiet placerat. Suspendisse ante ligula, consectetur sit amet consectetur sed, hendrerit in ipsum. Nunc quis accumsan nunc. Proin augue eros, hendrerit eu urna ut, consequat malesuada ex. Morbi accumsan leo non mauris dignissim, ac finibus orci euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam a odio fringilla, tempus eros nec, varius diam. Donec in nulla venenatis nibh pharetra vehicula. Sed tincidunt, tellus sollicitudin posuere bibendum, neque nisi tincidunt ex, quis blandit justo neque varius ipsum. Donec tincidunt ligula eget elementum scelerisque. Vestibulum tempor, quam suscipit placerat eleifend, magna ligula fermentum orci, et dignissim est purus eget elit. Curabitur ante mauris, fringilla at luctus eu, suscipit ac risus.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "User123",
            "helpfulness": 3,
            "photos": [
                {
                    "id": 2457461,
                    "url": "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457462,
                    "url": "https://images.unsplash.com/photo-1606297199333-e93f7d726cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457463,
                    "url": "https://images.unsplash.com/photo-1559478496-eaef498abbed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }
            ]
        },
        {
            "review_id": 1278983,
            "rating": 5,
            "summary": "Amazing!",
            "recommend": true,
            "response": null,
            "body": "Nunc eget lacus a leo imperdiet placerat. Suspendisse ante ligula, consectetur sit amet consectetur sed, hendrerit in ipsum. Nunc quis accumsan nunc. Proin augue eros, hendrerit eu urna ut, consequat malesuada ex. Morbi accumsan leo non mauris dignissim, ac finibus orci euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam a odio fringilla, tempus eros nec, varius diam. Donec in nulla venenatis nibh pharetra vehicula. Sed tincidunt, tellus sollicitudin posuere bibendum, neque nisi tincidunt ex, quis blandit justo neque varius ipsum. Donec tincidunt ligula eget elementum scelerisque. Vestibulum tempor, quam suscipit placerat eleifend, magna ligula fermentum orci, et dignissim est purus eget elit. Curabitur ante mauris, fringilla at luctus eu, suscipit ac risus.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "User123",
            "helpfulness": 2,
            "photos": []
        },
        {
            "review_id": 1278982,
            "rating": 5,
            "summary": "Wow I want to buy more!",
            "recommend": true,
            "response": null,
            "body": "Nunc eget lacus a leo imperdiet placerat. Suspendisse ante ligula, consectetur sit amet consectetur sed, hendrerit in ipsum. Nunc quis accumsan nunc. Proin augue eros, hendrerit eu urna ut, consequat malesuada ex. Morbi accumsan leo non mauris dignissim, ac finibus orci euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam a odio fringilla, tempus eros nec, varius diam. Donec in nulla venenatis nibh pharetra vehicula. Sed tincidunt, tellus sollicitudin posuere bibendum, neque nisi tincidunt ex, quis blandit justo neque varius ipsum. Donec tincidunt ligula eget elementum scelerisque. Vestibulum tempor, quam suscipit placerat eleifend, magna ligula fermentum orci, et dignissim est purus eget elit. Curabitur ante mauris, fringilla at luctus eu, suscipit ac risus.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "YesMan1",
            "helpfulness": 2,
            "photos": [
                {
                    "id": 2457456,
                    "url": "https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                },
                {
                    "id": 2457455,
                    "url": "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457457,
                    "url": "https://images.unsplash.com/photo-1548369735-f548cbe6a294?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=737&q=80"
                }
            ]
        },
        {
            "review_id": 1278980,
            "rating": 1,
            "summary": "Dont buy these",
            "recommend": true,
            "response": null,
            "body": "Aliquam euismod at ex eget hendrerit. Nunc cursus ligula id libero tincidunt aliquam. Nam porta justo ut mi rhoncus, a pulvinar nulla aliquam. Duis laoreet ipsum quis volutpat posuere. Mauris scelerisque velit quis ultricies convallis. Sed iaculis risus eget purus maximus auctor. Pellentesque augue orci, vulputate nec luctus a, congue et leo.\n\nAenean et ultrices mi. Fusce id libero a nunc vulputate aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque tempus turpis massa, sed elementum erat auctor sit amet. Praesent urna lectus, pretium non hendrerit sit amet, interdum ac nibh. Mauris purus odio, pellentesque a purus id, gravida semper ante. Sed eget libero mi. Proin sollicitudin lectus sed condimentum luctus. Aenean et dolor et turpis mollis tempus. Etiam suscipit diam at ante vehicula aliquam. Sed nec ipsum fermentum, pretium libero sit amet, malesuada lacus. Maecenas quis ultricies diam. Donec vitae lobortis diam.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "Nike",
            "helpfulness": 2,
            "photos": [
                {
                    "id": 2457450,
                    "url": "https://images.unsplash.com/photo-1606297199333-e93f7d726cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457449,
                    "url": "https://images.unsplash.com/photo-1548369735-f548cbe6a294?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=737&q=80"
                },
                {
                    "id": 2457451,
                    "url": "https://images.unsplash.com/photo-1612723683658-89814a429607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                }
            ]
        },
        {
            "review_id": 1278977,
            "rating": 5,
            "summary": "Absolutely do not love it",
            "recommend": false,
            "response": null,
            "body": "Proin ut tristique nunc. Quisque luctus metus sed odio accumsan, vel luctus quam blandit. Suspendisse sed lacus blandit, tempor enim sit amet, auctor urna. Nulla dapibus libero at erat scelerisque eleifend. Suspendisse ultrices ut lectus eu dignissim. Praesent nibh eros, vehicula id mattis non, semper vel massa. Proin interdum diam eu magna rutrum, non malesuada risus finibus. Donec non risus justo. Nunc quis gravida purus, quis mattis magna. Nulla ullamcorper a arcu non blandit. Sed eu cursus ligula, sit amet tincidunt ante.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "Lies5",
            "helpfulness": 1,
            "photos": [
                {
                    "id": 2457441,
                    "url": "https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                },
                {
                    "id": 2457440,
                    "url": "https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                },
                {
                    "id": 2457442,
                    "url": "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80"
                }
            ]
        },
        {
            "review_id": 1278981,
            "rating": 3,
            "summary": "Average review",
            "recommend": true,
            "response": null,
            "body": "Nunc posuere rhoncus finibus. Morbi quis sem neque. Cras aliquet ipsum varius ipsum maximus, ut interdum purus dignissim. Fusce dignissim eu elit vitae semper. Nunc gravida, nisi et laoreet scelerisque, magna felis aliquet nisi, non tempor purus metus rhoncus lacus. Praesent euismod eu nisl eu lacinia. Curabitur sed aliquam nulla. Donec quam purus, rhoncus at auctor quis, ornare et tellus. Vivamus finibus elit egestas porttitor placerat. Mauris ut vulputate erat. Vestibulum pulvinar sagittis felis, ac vulputate leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed nec lectus sagittis, interdum quam sed, lobortis justo. Donec augue erat, semper nec rhoncus eu, varius in turpis. Proin et tincidunt tellus. Aliquam felis est, efficitur in iaculis quis, maximus at urna.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "ARealUser5",
            "helpfulness": 1,
            "photos": [
                {
                    "id": 2457452,
                    "url": "https://images.unsplash.com/photo-1606297199333-e93f7d726cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457453,
                    "url": "https://images.unsplash.com/photo-1612723683658-89814a429607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                },
                {
                    "id": 2457454,
                    "url": "https://images.unsplash.com/photo-1606297255627-c58c609140e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }
            ]
        },
        {
            "review_id": 1278009,
            "rating": 3,
            "summary": "Too expensive",
            "recommend": false,
            "response": null,
            "body": "Not bad shoes but also not worth the price.",
            "date": "2022-12-16T00:00:00.000Z",
            "reviewer_name": "steve",
            "helpfulness": 1,
            "photos": []
        },
        {
            "review_id": 1278007,
            "rating": 4,
            "summary": "Best shoes ever",
            "recommend": false,
            "response": null,
            "body": "I love these shoes, everyone should buy a pair.",
            "date": "2022-12-16T00:00:00.000Z",
            "reviewer_name": "george",
            "helpfulness": 1,
            "photos": []
        },
        {
            "review_id": 1115346,
            "rating": 3,
            "summary": "we love it!",
            "recommend": true,
            "response": null,
            "body": "",
            "date": "2021-12-24T00:00:00.000Z",
            "reviewer_name": "Alex",
            "helpfulness": 1,
            "photos": []
        },
        {
            "review_id": 1176409,
            "rating": 5,
            "summary": "Awesome!",
            "recommend": false,
            "response": null,
            "body": "I haven't worn these yet but they look great! I can't wait to wear them.",
            "date": "2022-04-15T00:00:00.000Z",
            "reviewer_name": "Gregory",
            "helpfulness": 1,
            "photos": []
        },
        {
            "review_id": 1280311,
            "rating": 1,
            "summary": "Mike Tyson Hates Them",
            "recommend": true,
            "response": null,
            "body": "I think you should buy these shoes. Mike Tyson hates them. they're bad. 1/1000 stars. Buy them.",
            "date": "2023-07-07T00:00:00.000Z",
            "reviewer_name": "thatguy",
            "helpfulness": 0,
            "photos": []
        },
        {
            "review_id": 1280308,
            "rating": 4,
            "summary": "",
            "recommend": true,
            "response": null,
            "body": "I want another product! asdfjasjkf;klajsdfja;slkfjlksadf",
            "date": "2023-07-07T00:00:00.000Z",
            "reviewer_name": "brett",
            "helpfulness": 0,
            "photos": []
        },
        {
            "review_id": 1279954,
            "rating": 5,
            "summary": "",
            "recommend": true,
            "response": null,
            "body": "This is the best product ever. I love it, except I don't.",
            "date": "2023-05-16T00:00:00.000Z",
            "reviewer_name": "",
            "helpfulness": 0,
            "photos": []
        },
        {
            "review_id": 1279939,
            "rating": 4,
            "summary": "Great purchase",
            "recommend": true,
            "response": null,
            "body": "Overall, I am very glad with my purchase. I cannot believe how easy it was to buy them. Would do it again!",
            "date": "2023-05-16T00:00:00.000Z",
            "reviewer_name": "",
            "helpfulness": 0,
            "photos": []
        },
        {
            "review_id": 1279938,
            "rating": 1,
            "summary": "Grumble",
            "recommend": false,
            "response": null,
            "body": "The ay pee eye was making me a wee bit bitter. 1 star.",
            "date": "2023-05-16T00:00:00.000Z",
            "reviewer_name": "",
            "helpfulness": 0,
            "photos": []
        },
        {
            "review_id": 1279936,
            "rating": 3,
            "summary": "All the better 2",
            "recommend": true,
            "response": null,
            "body": "This is the best thing. The greatest thing. Let's see how long a good thing truly lasts. I am happy with my purchase. I am over the moon. I am over the sun and the hills",
            "date": "2023-05-16T00:00:00.000Z",
            "reviewer_name": "",
            "helpfulness": 0,
            "photos": []
        },
        {
            "review_id": 1279935,
            "rating": 3,
            "summary": "All the better 2",
            "recommend": true,
            "response": null,
            "body": "This is the best thing. The greatest thing. Let's see how long a good thing truly lasts. I am happy with my purchase. I am over the moon. I am over the sun and the hills",
            "date": "2023-05-16T00:00:00.000Z",
            "reviewer_name": "",
            "helpfulness": 0,
            "photos": []
        },
        {
            "review_id": 1279297,
            "rating": 1,
            "summary": "This is the WORST product i have ever used..",
            "recommend": false,
            "response": null,
            "body": "This experience was so bad, the shipping was delayed 3 weeks! and it was supposed to be a gift for my niece.. When it did finally arrive it was the wrong size, and the colors were very faded. I would stay away from this product!!",
            "date": "2023-03-25T00:00:00.000Z",
            "reviewer_name": "Johnathan McCormick jr. III sr.",
            "helpfulness": 0,
            "photos": []
        },
        {
            "review_id": 1279046,
            "rating": 5,
            "summary": "Everyone needs to buy these!",
            "recommend": true,
            "response": null,
            "body": "Maecenas euismod tortor eros, eget tincidunt lorem luctus eu. Aenean quis lorem scelerisque, sollicitudin nulla non, cursus odio. Nullam at leo quis dolor lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend porttitor varius. Nunc eu aliquam velit. Ut diam felis, vulputate sed cursus id, pellentesque nec nisi. In rhoncus vehicula massa, ac cursus turpis porttitor sit amet. Quisque cursus faucibus lacus, non imperdiet nisi dapibus sed. Pellentesque a nunc id velit aliquet dictum eget non turpis. Nam blandit massa sit amet consequat elementum. Quisque nec metus quis orci condimentum elementum. Suspendisse in purus dignissim, faucibus elit vitae, aliquam enim. Aliquam eu ipsum diam.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "NotSteve",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2457638,
                    "url": "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457637,
                    "url": "https://images.unsplash.com/photo-1559478496-eaef498abbed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457639,
                    "url": "https://images.unsplash.com/photo-1606297199333-e93f7d726cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }
            ]
        },
        {
            "review_id": 1278997,
            "rating": 3,
            "summary": "Would probably maybe not buy again.",
            "recommend": true,
            "response": null,
            "body": "Aliquam dui massa, venenatis ut fermentum id, ultricies non erat. Phasellus et ultrices lorem. Pellentesque auctor ullamcorper ex ut bibendum. In scelerisque erat non eros suscipit, mollis bibendum risus vulputate. Nulla eget tortor eu magna consectetur posuere sit amet luctus ligula. Nullam id porttitor quam. Maecenas sit amet lorem sit amet erat vulputate fringilla. Duis imperdiet justo eget quam vulputate, et ultricies nibh pellentesque. Morbi condimentum leo nec erat condimentum, sed pretium sem malesuada. In pretium odio velit, id vehicula nisl congue ac. Integer egestas fermentum nisi, ac luctus ex congue sed. Phasellus sagittis purus sed lobortis efficitur. Fusce cursus auctor luctus.\n\nSed maximus tincidunt viverra. Cras lacinia tincidunt felis. Proin in ultricies arcu, in bibendum lacus. Aliquam ultricies faucibus ligula non pretium. Quisque ut convallis lectus, vel egestas justo. Suspendisse egestas, ante vitae convallis sollicitudin, elit est euismod est, a scelerisque sapien",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "ManCantDecide",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2457491,
                    "url": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                },
                {
                    "id": 2457492,
                    "url": "https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                },
                {
                    "id": 2457493,
                    "url": "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                }
            ]
        },
        {
            "review_id": 1279014,
            "rating": 5,
            "summary": "Everyone needs to buy these!",
            "recommend": true,
            "response": null,
            "body": "Maecenas euismod tortor eros, eget tincidunt lorem luctus eu. Aenean quis lorem scelerisque, sollicitudin nulla non, cursus odio. Nullam at leo quis dolor lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend porttitor varius. Nunc eu aliquam velit. Ut diam felis, vulputate sed cursus id, pellentesque nec nisi. In rhoncus vehicula massa, ac cursus turpis porttitor sit amet. Quisque cursus faucibus lacus, non imperdiet nisi dapibus sed. Pellentesque a nunc id velit aliquet dictum eget non turpis. Nam blandit massa sit amet consequat elementum. Quisque nec metus quis orci condimentum elementum. Suspendisse in purus dignissim, faucibus elit vitae, aliquam enim. Aliquam eu ipsum diam.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "NotSteve",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2457542,
                    "url": "https://images.unsplash.com/photo-1559478496-eaef498abbed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457541,
                    "url": "https://images.unsplash.com/photo-1606297199333-e93f7d726cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457543,
                    "url": "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }
            ]
        },
        {
            "review_id": 1279013,
            "rating": 5,
            "summary": "Everyone needs to buy these!",
            "recommend": true,
            "response": null,
            "body": "Maecenas euismod tortor eros, eget tincidunt lorem luctus eu. Aenean quis lorem scelerisque, sollicitudin nulla non, cursus odio. Nullam at leo quis dolor lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend porttitor varius. Nunc eu aliquam velit. Ut diam felis, vulputate sed cursus id, pellentesque nec nisi. In rhoncus vehicula massa, ac cursus turpis porttitor sit amet. Quisque cursus faucibus lacus, non imperdiet nisi dapibus sed. Pellentesque a nunc id velit aliquet dictum eget non turpis. Nam blandit massa sit amet consequat elementum. Quisque nec metus quis orci condimentum elementum. Suspendisse in purus dignissim, faucibus elit vitae, aliquam enim. Aliquam eu ipsum diam.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "NotSteve",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2457540,
                    "url": "https://images.unsplash.com/photo-1559478496-eaef498abbed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457539,
                    "url": "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457538,
                    "url": "https://images.unsplash.com/photo-1606297199333-e93f7d726cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }
            ]
        },
        {
            "review_id": 1279012,
            "rating": 5,
            "summary": "Everyone needs to buy these!",
            "recommend": true,
            "response": null,
            "body": "Maecenas euismod tortor eros, eget tincidunt lorem luctus eu. Aenean quis lorem scelerisque, sollicitudin nulla non, cursus odio. Nullam at leo quis dolor lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend porttitor varius. Nunc eu aliquam velit. Ut diam felis, vulputate sed cursus id, pellentesque nec nisi. In rhoncus vehicula massa, ac cursus turpis porttitor sit amet. Quisque cursus faucibus lacus, non imperdiet nisi dapibus sed. Pellentesque a nunc id velit aliquet dictum eget non turpis. Nam blandit massa sit amet consequat elementum. Quisque nec metus quis orci condimentum elementum. Suspendisse in purus dignissim, faucibus elit vitae, aliquam enim. Aliquam eu ipsum diam.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "NotSteve",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2457537,
                    "url": "https://images.unsplash.com/photo-1606297199333-e93f7d726cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457536,
                    "url": "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457535,
                    "url": "https://images.unsplash.com/photo-1559478496-eaef498abbed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }
            ]
        },
        {
            "review_id": 1279011,
            "rating": 5,
            "summary": "Everyone needs to buy these!",
            "recommend": true,
            "response": null,
            "body": "Maecenas euismod tortor eros, eget tincidunt lorem luctus eu. Aenean quis lorem scelerisque, sollicitudin nulla non, cursus odio. Nullam at leo quis dolor lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend porttitor varius. Nunc eu aliquam velit. Ut diam felis, vulputate sed cursus id, pellentesque nec nisi. In rhoncus vehicula massa, ac cursus turpis porttitor sit amet. Quisque cursus faucibus lacus, non imperdiet nisi dapibus sed. Pellentesque a nunc id velit aliquet dictum eget non turpis. Nam blandit massa sit amet consequat elementum. Quisque nec metus quis orci condimentum elementum. Suspendisse in purus dignissim, faucibus elit vitae, aliquam enim. Aliquam eu ipsum diam.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "NotSteve",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2457532,
                    "url": "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457533,
                    "url": "https://images.unsplash.com/photo-1559478496-eaef498abbed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457534,
                    "url": "https://images.unsplash.com/photo-1606297199333-e93f7d726cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }
            ]
        },
        {
            "review_id": 1279010,
            "rating": 5,
            "summary": "Everyone needs to buy these!",
            "recommend": true,
            "response": null,
            "body": "Maecenas euismod tortor eros, eget tincidunt lorem luctus eu. Aenean quis lorem scelerisque, sollicitudin nulla non, cursus odio. Nullam at leo quis dolor lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend porttitor varius. Nunc eu aliquam velit. Ut diam felis, vulputate sed cursus id, pellentesque nec nisi. In rhoncus vehicula massa, ac cursus turpis porttitor sit amet. Quisque cursus faucibus lacus, non imperdiet nisi dapibus sed. Pellentesque a nunc id velit aliquet dictum eget non turpis. Nam blandit massa sit amet consequat elementum. Quisque nec metus quis orci condimentum elementum. Suspendisse in purus dignissim, faucibus elit vitae, aliquam enim. Aliquam eu ipsum diam.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "NotSteve",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2457531,
                    "url": "https://images.unsplash.com/photo-1559478496-eaef498abbed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457530,
                    "url": "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457529,
                    "url": "https://images.unsplash.com/photo-1606297199333-e93f7d726cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }
            ]
        },
        {
            "review_id": 1279009,
            "rating": 5,
            "summary": "Everyone needs to buy these!",
            "recommend": true,
            "response": null,
            "body": "Maecenas euismod tortor eros, eget tincidunt lorem luctus eu. Aenean quis lorem scelerisque, sollicitudin nulla non, cursus odio. Nullam at leo quis dolor lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend porttitor varius. Nunc eu aliquam velit. Ut diam felis, vulputate sed cursus id, pellentesque nec nisi. In rhoncus vehicula massa, ac cursus turpis porttitor sit amet. Quisque cursus faucibus lacus, non imperdiet nisi dapibus sed. Pellentesque a nunc id velit aliquet dictum eget non turpis. Nam blandit massa sit amet consequat elementum. Quisque nec metus quis orci condimentum elementum. Suspendisse in purus dignissim, faucibus elit vitae, aliquam enim. Aliquam eu ipsum diam.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "NotSteve",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2457528,
                    "url": "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457527,
                    "url": "https://images.unsplash.com/photo-1606297199333-e93f7d726cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457526,
                    "url": "https://images.unsplash.com/photo-1559478496-eaef498abbed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }
            ]
        },
        {
            "review_id": 1279008,
            "rating": 5,
            "summary": "Everyone needs to buy these!",
            "recommend": true,
            "response": null,
            "body": "Maecenas euismod tortor eros, eget tincidunt lorem luctus eu. Aenean quis lorem scelerisque, sollicitudin nulla non, cursus odio. Nullam at leo quis dolor lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend porttitor varius. Nunc eu aliquam velit. Ut diam felis, vulputate sed cursus id, pellentesque nec nisi. In rhoncus vehicula massa, ac cursus turpis porttitor sit amet. Quisque cursus faucibus lacus, non imperdiet nisi dapibus sed. Pellentesque a nunc id velit aliquet dictum eget non turpis. Nam blandit massa sit amet consequat elementum. Quisque nec metus quis orci condimentum elementum. Suspendisse in purus dignissim, faucibus elit vitae, aliquam enim. Aliquam eu ipsum diam.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "NotSteve",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2457525,
                    "url": "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457523,
                    "url": "https://images.unsplash.com/photo-1559478496-eaef498abbed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                },
                {
                    "id": 2457524,
                    "url": "https://images.unsplash.com/photo-1606297199333-e93f7d726cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }
            ]
        },
        {
            "review_id": 1278978,
            "rating": 3,
            "summary": "Maybe I do not like it for sure. Hmm, thinking.",
            "recommend": true,
            "response": null,
            "body": "Mauris aliquam facilisis condimentum. Vivamus non sem eros. Nunc scelerisque, tortor in placerat auctor, arcu purus consequat erat, vel hendrerit odio mauris id leo. Praesent quis metus maximus, pellentesque ex ac, dictum nisi. In et aliquam purus, in congue nunc. Fusce ac elit massa. Praesent vitae dolor nisi. Proin mauris est, consectetur vitae varius vitae, fringilla ut tellus.\n\nIn eu ipsum a sem bibendum luctus. Ut posuere urna vel convallis rutrum. In ac turpis in risus ornare aliquet ac at augue. Proin turpis sapien, dignissim at neque at, lobortis vulputate leo. Sed blandit sem eleifend condimentum viverra. Praesent pharetra laoreet odio, sit amet auctor velit condimentum sit amet. Fusce vulputate tempus orci, nec accumsan enim cursus non. Mauris vestibulum bibendum facilisis. Nulla facilisi.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "YesDude5",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2457444,
                    "url": "https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                },
                {
                    "id": 2457443,
                    "url": "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80"
                },
                {
                    "id": 2457445,
                    "url": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                }
            ]
        },
        {
            "review_id": 1280067,
            "rating": 1,
            "summary": "bad",
            "recommend": false,
            "response": null,
            "body": "very bad",
            "date": "2023-05-19T00:00:00.000Z",
            "reviewer_name": "test",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2458938,
                    "url": "https://media.cnn.com/api/v1/images/stellar/prod/200906155336-04-thompson-farm-sunflowers.jpg?q=x_2,y_112,h_898,w_1596,c_crop/h_540,w_960/f_webp"
                }
            ]
        },
        {
            "review_id": 1116059,
            "rating": 2,
            "summary": "testing testing",
            "recommend": true,
            "response": null,
            "body": "testing expensive product. testing expensive product. testing expensive product. ",
            "date": "2022-01-18T00:00:00.000Z",
            "reviewer_name": "userA",
            "helpfulness": 0,
            "photos": []
        }
    ]
};

module.exports.products = products;
module.exports.product = product;
module.exports.productStyles = productStyles;
module.exports.productReviews = productReviews;