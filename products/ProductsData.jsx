export const allProducts = [
    {
        id: 1,
        name: 'AirPods Pro',
        price: 249.00,
        categoryOne: 'GADGETS',
        image: "/airpot.webp",
        popularity: 5,
        rating: 4.5,
        dateAdded: new Date('2024-01-15')
    },
    {
        id: 2,
        name: 'AirTag',
        price: 29.00,
        categoryOne: 'GADGETS',
        image: "/airtage.webp",
        popularity: 3,
        rating: 3.8,
        dateAdded: new Date('2024-03-20')
    },
    {
        id: 3,
        name: 'Apple Watch Series 6',
        price: 399.00,
        categoryOne: 'GADGETS',
        image: "/watch.webp",
        popularity: 4,
        rating: 4.2,
        dateAdded: new Date('2023-11-01')
    },
    {
        id: 4,
        name: 'HTC Vive Pro 2',
        price: 699.00,
        categoryOne: 'GADGETS',
        categoryTow: 'GAMING',
        image: "/HTC Vive Pro 2.webp",
        popularity: 2,
        rating: 4.0,
        dateAdded: new Date('2024-02-10')
    },
    {
        id: 5,
        name: 'Razer Blackshark',
        price: 119.00,
        categoryOne: 'GADGETS',
        categoryTow: 'GAMING',
        image: "/razer-blackshark.webp",
        popularity: 4,
        rating: 4.6,
        dateAdded: new Date('2024-04-05')
    },
    {
        id: 6,
        name: 'Samsung Galaxy S21',
        price: 599.00,
        categoryOne: 'Smartphones',
        image: "/mobile.webp",
        popularity: 5,
        rating: 4.7,
        dateAdded: new Date('2023-09-25')
    },
    {
        id: 7,
        name: 'iPhone 12 Pro',
        price: 999.00,
        categoryOne: 'Smartphones',
        image: "/category-phones.webp",
        popularity: 5,
        rating: 4.7,
        dateAdded: new Date('2023-09-25')
    },
    {
        id: 8,
        name: 'iPad Pro',
        price: 1099.00,
        categoryOne: 'GADGETS',
        categoryTow: 'GAMING',
        image: "/home-page-cta-ipad.webp",
        popularity: 5,
        rating: 4.7,
        dateAdded: new Date('2023-09-25')
    },
    {
        id: 9,
        name: 'Valve Index Knuckles',
        price: 419.00,
        categoryOne: 'GAMING',
        image: "/valve-index-knuckles.webp",
        popularity: 4,
        rating: 4.6,
        dateAdded: new Date('2024-04-05')
    },
    {
        id: 10,
        name: 'XBOX Elite Controller',
        price: 179.00,
        categoryOne: 'GAMING',
        image: "/xbox-elite-controller.webp",
        popularity: 4.7,
        rating: 4.7,
        dateAdded: new Date('2023-09-25')
    },
    {
        id: 11,
        name: 'XBOX Series X',
        price: 499.00,
        categoryOne: 'GAMING',
        image: "/xbox.webp",
        popularity: 4.9,
        rating: 4.7,
        dateAdded: new Date('2023-09-25')
    },
    {
        id: 12,
        name: 'Oculus VR',
        price: 1499.00,
        categoryOne: 'GADGETS',
        image: "/oculus-img.webp",
        popularity: 4.1,
        rating: 4.4,
        dateAdded: new Date('2023-09-25')
    }
];

// يمكنك أيضاً إضافة وظيفة الوصف الكامل هنا
export const getFullDescription = (productId) => {
    switch (productId) {
        case 1:
            return 'Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Ut enim blandit volutpat maecenas. Arcu vitae elementum curabitur vitae nunc sed. Magnis dis parturient montes nascetur. Elit sed vulputate mi sit amet mauris commodo quis. Amet massa vitae tortor condimentum lacinia quis. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Sed felis eget velit aliquet.';
        case 2:
            return 'Bibendum enim facilisis gravida neque convallis a cras semper auctor. Egestas quis ipsum suspendisse ultrices gravida. Faucibus purus in massa tempor. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Sed tempus urna et pharetra pharetra massa massa. Leo duis ut diam quam nulla.';
        default:
            return 'Star ligula ullamcorper malesuada proin libero nunc consequat interdum. Nisl nunc mi ipsum faucibus vitae. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Lacinia at quis risus sed vulputate. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Ac orci phasellus egestas tellus. At urna condimentum mattis pellentesque id nibh tortor id aliquet. Turpis egestas sed tempus urna et pharetra. Proin sed libero enim sed faucibus turpis in eu mi. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Placerat et netus et malesuada fames ac turpis egestas sed.';
    }
};