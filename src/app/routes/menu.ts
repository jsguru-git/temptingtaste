
const Home = {
    text: 'Home',
    link: '/home',
    icon: 'icon-home',
    access: ['Vendor', 'Admin']
};
const MainCategories = {
    text: 'Main Categories',
    link: '/mainCategories/manageMainCategories',
    icon: 'icon-note',
    access: ['Vendor', 'Admin']

};
const PickUpLocation = {
    text: 'Pick-Up Location',
    link: '/pickUpLocation/managePickUpLocation',
    icon: 'icon-note',
    access: ['Admin']

};

const Categories = {
    text: 'Categories',
    link: '/categories/manageCategories',
    icon: 'icon-note',
    access: ['Vendor', 'Admin']

};
const Menu = {
    text: 'Menu Items',
    link: '/menu/manageItems',
    icon: 'fa fa-th-list',
    access: ['Vendor', 'Admin']
};
const Vendors = {
    text: 'Vendors',
    link: '/vendors/manageVendors',
    icon: 'fa fa-th-list',
    access: ['Admin']
};

const Orders = {
    text : 'Orders',
    link: '/order/allOrder',
    icon: 'fa fa-bars',
    access: ['Vendor', 'Admin']
};

const Users = {
    text: 'Users',
    link: '/users/manageUsers',
    icon: 'fa fa-users',
    access: ['Admin']
};

const Loyalitys = {
    text: 'Loyalty',
    link: '/loyalty',
    icon: 'fa fa-tags',
    access: ['Admin']
};

const Chat = {
    text: 'Chat',
    link: '/chat',
    icon: 'fa fa-comments-o',
    access: ['Vendor', 'Admin']
};

const Setting = {
    text: 'Setting',
    link: '/setting',
    icon: 'fa fa-cog',
    access: ['Admin']
};

const Tags = {
    text: 'Tags',
    link: '/tags/all',
    icon: 'fa fa-tags',
    access: ['Admin']
};

const News = {
    text: 'News',
    link: '/news/manageNews',
    icon: 'fa fa-newspaper-o',
    access: ['Admin']
};
const Business = {
    text: 'Business Info',
    link: '/businessInfo',
    icon: 'fa fa-briefcase',
    access: ['Admin']
};
const Coupons = {
    text: 'Coupons',
    link: '/coupons/all',
    icon: 'fa fa-minus-square',
    access: ['Admin']
};

const pushNotification = {
    text: 'Push Notification',
    link: '/pushNotification',
    icon: 'fa fa-briefcase',
    access: ['Admin']
};
const Testimonials = {
    text: 'Testimonials',
    link: '/testimonials/manageTestimonials',
    icon: 'fa fa-users',
    access: ['Admin']
};
const Subscribers = {
    text: 'Subscribers',
    link: '/subscribers',
    icon: 'fa fa-rss',
    access: ['Admin']
};
const Tables = {
    text: 'Table Booking',
    link: '/tables/booking',
    icon: 'fa fa-calendar',
    access: ['Admin']
};

const deliveryOptions = {
    text: 'Delivery Options',
    link: '/delivery/options',
    icon: 'fa fa-map-marker',
    access: ['Vendor', 'Admin']
};
// const Pages = {
//     text: 'Pages',
//     link: '/pages',
//     icon: 'icon-doc',
//     submenu: [
//         {
//             text: 'Login',
//             link: '/login'
//         },
//         {
//             text: 'Register',
//             link: '/register'
//         },
//         {
//             text: 'Recover',
//             link: '/recover'
//         },
//         {
//             text: '404',
//             link: '/404'
//         }
//     ]
// };

// const Ecommerce = {
//     text: 'Ecommerce',
//     link: '/ecommerce',
//     icon: 'icon-basket-loaded',
//     submenu: [
//         {
//             text: 'Orders',
//             lin k: '/ecommerce/orders'
//         },
//         {
//             text: 'Order View',
//             link: '/ecommerce/orderview'
//         },
//         {
//             text: 'Products',
//             link: '/ecommerce/products'
//         },
//         {
//             text: 'Product View',
//             link: '/ecommerce/productview'
//         },
//         {
//             text: 'Checkout',
//             link: '/ecommerce/checkout'
//         }
//     ]
// }




const headingMain = {
    text: 'Navigation',
    heading: true
};

const headingComponents = {
    text: 'Components',
    heading: true
};

const headingMore = {
    text: 'More',
    heading: true
};

export const menu = [
    Home,
    MainCategories,
    Categories,
    PickUpLocation,
    Menu,
    Vendors,
    Orders,
    Tables,
    Coupons,
    Tags,
    Users,
    pushNotification,
    News,
    deliveryOptions,
    Loyalitys,
    Business,
    Setting,
    Chat,
    Testimonials,
    Subscribers,
    // Pages
];
