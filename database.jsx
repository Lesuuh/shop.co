const allProducts = [
  {
    id: 1,
    title: "Gym T-shirt",
    discount: 20,
    price: {
      old: 20,

    },
    rating: 4.5,
    description: "High quality Gym t-shirt",
    category: "gym",
    type: "T-shirt",
    images: [
      "image 7.png",
      "image 7(2).png",
      "image 8-1.png",
    ],
    sizes: ["S", "M", "L", "XL"],
    color: "blue",
    reviews: [
      {
        user: "John Doe",
        rating: 4.5,
        comment: "Amazing Quality",
      },
      {
        user: "Jane Smith",
        rating: 3,
        comment: "Amazing Quality but poor finish",
      },
    ],
    isFeatured: true,
    isNew: true,
  },
  {
    id: 2,
    title: "Yoga Pants",
    discount: 10,
    price: {
      old: 30,

    },
    rating: 5,
    description: "Comfortable yoga pants with stretchable fabric",
    category: "gym",
    type: "pants",
    images: [
      "image 8-2.png",
      "image 7-1.png",
      "image 9-1.png",
    ],
    sizes: ["S", "M", "L"],
    color: "black",
    reviews: [
      {
        user: "Alice Johnson",
        rating: 5,
        comment: "Extremely comfortable!",
      },
      {
        user: "Bob Green",
        rating: 4,
        comment: "Great fit but slightly overpriced.",
      },
    ],
    isFeatured: false,
    isNew: false,
  },
  {
    id: 3,
    title: "Running Shorts",
    discount: 15,
    price: {
      old: 25,

    },
    rating: 4,
    description: "Lightweight running shorts for outdoor activities",
    category: "sports",
    type: "shorts",
    images: [
      "image 9-2.png",
      "image 9.png",
      "image 8.png",
    ],
    sizes: ["M", "L", "XL"],
    color: "gray",
    reviews: [
      {
        user: "Chris Martin",
        rating: 5,
        comment: "Perfect for running and gym workouts!",
      },
    ],
    isFeatured: true,
    isNew: true,
  },
  {
    id: 4,
    title: "Casual Hoodie",
    discount: 25,
    price: {
      old: 50,

    },
    rating: 5,
    description: "Soft and comfortable hoodie for casual wear",
    category: "fashion",
    type: "hoodie",
    images: [
      "image 8-1.png",
      "image 7-1.png",
      "image 10.png",
    ],
    sizes: ["M", "L", "XL", "XXL"],
    color: "navy blue",
    reviews: [
      {
        user: "Sarah Johnson",
        rating: 3,
        comment: "Warm and stylish, love it!",
      },
    ],
    isFeatured: true,
    isNew: true,
  },
  {
    id: 5,
    title: "Denim Jacket",
    discount: 15,
    price: {
      old: 75,
    },
    rating: 2,
    description: "Trendy denim jacket for casual outings",
    category: "fashion",
    type: "jacket",
    images: [
      "image 9.png",
      "image 8-2.png",
      "image 10-1.png",
    ],
    sizes: ["M", "L", "XL"],
    color: "blue",
    reviews: [
      {
        user: "David Walker",
        rating: 2,
        comment: "Stylish and comfortable!",
      },
    ],
    isFeatured: false,
    isNew: true,
  },
  {
    id: 6,
    title: "Formal Shirt",
    discount: 20,
    price: {
      old: 40,

    },
    rating: 4.5,
    description: "Elegant formal shirt for office wear",
    category: "formal",
    type: "shirt",
    images: [
      "image 7.png",
      "image 8.png",
      "image 9.png",
    ],
    sizes: ["S", "M", "L", "XL"],
    color: "white",
    reviews: [
      {
        user: "Mike Anderson",
        rating: 5,
        comment: "Great fit, perfect for meetings!",
      },
    ],
    isFeatured: false,
    isNew: false,
  },
  {
    id: 7,
    title: "Summer Dress",
    discount: 30,
    price: {
      old: 60,
  
    },
    rating: 4,
    description: "Light and airy summer dress for hot days",
    category: "fashion",
    type: "dress",
    images: [
      "image 10-2.png",
      "image 8-2.png",
      "image 9.png",
    ],
    sizes: ["S", "M", "L"],
    color: "yellow",
    reviews: [
      {
        user: "Lisa Brown",
        rating: 4,
        comment: "Absolutely love the fabric and fit!",
      },
    ],
    isFeatured: true,
    isNew: true,
  },
  {
    id: 8,
    title: "Winter Sweater",
    discount: 35,
    price: {
      old: 55,

    },
    rating: 5,
    description: "Warm sweater with a classic design",
    category: "winter",
    type: "sweater",
    images: [
      "image 7.png",
      "image 7-1.png",
      "image 8.png",
    ],
    sizes: ["M", "L", "XL", "XXL"],
    color: "gray",
    reviews: [
      {
        user: "Anna Lee",
        rating: 5,
        comment: "Keeps me warm and looks great!",
      },
    ],
    isFeatured: true,
    isNew: false,
  },
];

export default allProducts;
