const express = require('express');
const router = express.Router();

// Mock data for demonstration
const products = [
  {
    id: 3,
    title: 'Classic Heather Gray Hoodie',
    slug: 'classic-heather-gray-hoodie',
    price: 69,
    description: 'Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.',
    category: {
      id: 1,
      name: 'clothes',
      slug: 'clothes',
      image: 'https://i.imgur.com/QkIa5Tt.jpeg',
      creationAt: '2026-02-01T19:28:25.000Z',
      updatedAt: '2026-02-01T19:28:25.000Z'
    },
    images: [
      'https://i.imgur.com/dHdlUCu.jpeg',
      'https://i.imgur.com/CFOj4Pk.jpeg',
      'https://i.imgur.com/wbIMme.jpeg'
    ],
    creationAt: '2026-02-01T19:28:25.000Z',
    updatedAt: '2026-02-01T19:28:25.000Z'
  },
  {
    id: 6,
    title: 'Classic Comfort Fit Joggers',
    slug: 'classic-comfort-fit-joggers',
    price: 25,
    description: 'Discover the perfect blend of style and comfort with our Classic Comfort Fit Joggers. These versatile black joggers feature a soft elastic waistband with an adjustable drawstring, two side pockets, and ribbed ankle cuffs for a secure fit. Made from a lightweight and durable fabric, they are ideal for both active days and relaxed lounging.',
    category: {
      id: 1,
      name: 'clothes',
      slug: 'clothes',
      image: 'https://i.imgur.com/QkIa5Tt.jpeg',
      creationAt: '2026-02-01T19:28:25.000Z',
      updatedAt: '2026-02-01T19:28:25.000Z'
    },
    images: [
      'https://i.imgur.com/ZKGofuB.jpeg',
      'https://i.imgur.com/GJ17h3D.jpeg',
      'https://i.imgur.com/63Gfprz.jpeg'
    ],
    creationAt: '2026-02-01T19:28:25.000Z',
    updatedAt: '2026-02-01T19:28:25.000Z'
  }
];

// GET /products
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;