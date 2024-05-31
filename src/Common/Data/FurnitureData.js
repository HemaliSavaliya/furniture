import quality from "../../Assets/img/feature/feature-1.svg";
import shipping from "../../Assets/img/feature/feature-2.svg";
import payment from "../../Assets/img/feature/feature-3.svg";
import diningTable from "../../Assets/img/categories/dining.svg";
import nightStand from "../../Assets/img/categories/night.svg";
import dressing from "../../Assets/img/categories/dressing.svg";
import bookcase from "../../Assets/img/categories/bookcase.svg";
import table from "../../Assets/img/categories/table.svg";
import sofa from "../../Assets/img/categories/sofa.svg";
import chair from "../../Assets/img/categories/chair.svg";
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";

// Define product list data
export const productListData = [
    {
        id: 1,
        name: "Classic Yellow Chair",
        imageUrl: require("../../Assets/img/product/product-1-1.jpg"),
        label: "new-label",
        rating: 5,
        price: "25.90",
        quantity: 1,
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have be suffered alteration in some form, by injected humour.",
    },
    {
        id: 2,
        name: "Table & Chair Combo",
        imageUrl: require("../../Assets/img/product/product-1-2.jpg"),
        label: "new-label",
        rating: 5,
        price: "80.90",
        quantity: 1,
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have be suffered alteration in some form, by injected humour.",
    },
    {
        id: 3,
        name: "Trendy White sofa",
        imageUrl: require("../../Assets/img/product/product-1-3.jpg"),
        label: "new-label",
        rating: 5,
        price: "650.00",
        quantity: 1,
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have be suffered alteration in some form, by injected humour.",
    },
    {
        id: 4,
        name: "Modern Bookcase",
        imageUrl: require("../../Assets/img/product/product-1-4.jpg"),
        label: "sale-label",
        rating: 5,
        price: "51.00",
        quantity: 1,
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have be suffered alteration in some form, by injected humour.",
    },
    {
        id: 5,
        name: "Night Lamps table",
        imageUrl: require("../../Assets/img/product/product-1-5.jpg"),
        label: "sale-label",
        rating: 5,
        price: "25.00",
        quantity: 1,
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have be suffered alteration in some form, by injected humour.",
    },
];

// Define product grid data
export const productGridData = [
    {
        id: 1,
        name: "Classic Yellow Chair",
        imageUrl: require("../../Assets/img/product/product-1-1.jpg"),
        rating: 3,
        oldPrice: "30.30",
        price: "25.90",
    },
    {
        id: 2,
        name: "Table & Chair Combo",
        imageUrl: require("../../Assets/img/product/product-1-2.jpg"),
        rating: 5,
        oldPrice: "90.30",
        price: "80.90",
    },
    {
        id: 3,
        name: "Trendy White sofa",
        imageUrl: require("../../Assets/img/product/product-1-3.jpg"),
        rating: 5,
        oldPrice: "700.00",
        price: "650.00",
    },
    {
        id: 4,
        name: "Modern Bookcase",
        imageUrl: require("../../Assets/img/product/product-1-4.jpg"),
        rating: 5,
        oldPrice: "55.20",
        price: "51.00",
    },
    {
        id: 5,
        name: "Night Lamps table",
        imageUrl: require("../../Assets/img/product/product-1-5.jpg"),
        rating: 5,
        oldPrice: "30.00",
        price: "25.00",
    },
    {
        id: 6,
        name: "dining table",
        imageUrl: require("../../Assets/img/product/product-1-6.jpg"),
        rating: 5,
        oldPrice: "3000.00",
        price: "2500.00",
    },
    {
        id: 7,
        name: "Living room sofa set",
        imageUrl: require("../../Assets/img/product/product-1-7.jpg"),
        rating: 5,
        oldPrice: "5000.00",
        price: "4000.00",
    },
    {
        id: 8,
        name: "Classic chair",
        imageUrl: require("../../Assets/img/product/product-1-8.jpg"),
        rating: 5,
        oldPrice: "50.30",
        price: "25.90",
    },
    {
        id: 9,
        name: "wall furniture",
        imageUrl: require("../../Assets/img/product/product-1-9.jpg"),
        rating: 5,
        oldPrice: "40.00",
        price: "30.00",
    },
];

// Define color options
export const colorOptions = [
    { color: 'LightSalmon', count: 12 },
    { color: 'Dark Salmon', count: 20 },
    { color: 'Tomato', count: 59 },
    { color: 'Deep Sky Blue', count: 45 },
    { color: 'Electric Purple', count: 78 },
    { color: 'Atlantis', count: 10 },
    { color: 'Deep Lilac', count: 15 },
];

// Define categories
export const categories = ['Small furniture', 'nightstands', 'dressers', 'Bookcase', 'tables', 'sofas', 'chairs'];

// Define teamMember data
export const teamMembers = [
    {
        id: 1,
        name: 'Margaret Bell',
        job: '- Producer -',
        image: require("../../Assets/img/team/our-team-page-1.jpg"),
    },
    {
        id: 2,
        name: 'Carol Stephens',
        job: '- Lead Designer -',
        image: require("../../Assets/img/team/our-team-page-2.jpg"),
    },
    {
        id: 3,
        name: 'Stephen Walker',
        job: '- Copywriter -',
        image: require("../../Assets/img/team/our-team-page-3.jpg"),
    },
    {
        id: 4,
        name: 'Carolyn Estrada',
        job: '- Sales Manager -',
        image: require("../../Assets/img/team/our-team-page-4.jpg"),
    },
];

// Define home2 top product
export const topProducts = [
    {
        id: 1,
        image: require("../../Assets/img/product/product-1.jpg"),
        badge: 'sale',
        rating: 5,
        reviews: 10,
        name: 'Unique Dinning Table',
        oldPrice: "50.00",
        newPrice: "35.00",
    },
    {
        id: 2,
        image: require("../../Assets/img/product/product-2.jpg"),
        badge: 'sale',
        rating: 5,
        reviews: 10,
        name: 'Classic White Sofa',
        oldPrice: "90.00",
        newPrice: "30.00",
    },
    {
        id: 3,
        image: require("../../Assets/img/product/product-3.jpg"),
        badge: 'sale',
        rating: 5,
        reviews: 10,
        name: 'Decor For Bathroom',
        oldPrice: "25.00",
        newPrice: "20.00",
    },
    {
        id: 4,
        image: require("../../Assets/img/product/product-4.jpg"),
        badge: 'sale',
        rating: 5,
        reviews: 10,
        name: 'Study Table',
        oldPrice: "45.00",
        newPrice: "20.00",
    },
];

// Define home2 feature product
export const featureProducts = [
    {
        id: 1,
        image: require("../../Assets/img/feature/fea-5.jpg"),
        rating: 5,
        name: 'Small Coffee Table',
        oldPrice: "10.00",
        newPrice: "2.00",
    },
    {
        id: 2,
        image: require("../../Assets/img/feature/fea-6.jpg"),
        rating: 5,
        name: 'Best Living Room Sofa',
        oldPrice: "50.00",
        newPrice: "35.00",
    },
    {
        id: 3,
        image: require("../../Assets/img/feature/fea-7.jpg"),
        badge: 'sale',
        rating: 5,
        name: 'Classic Dining Table',
        oldPrice: "90.00",
        newPrice: "35.00",
    },
    {
        id: 4,
        image: require("../../Assets/img/feature/fea-8.jpg"),
        badge: 'sale',
        rating: 5,
        name: 'Decor For Living Room',
        oldPrice: "500.00",
        newPrice: "350.00",
    },
];

// Define home2 product categories
export const productCategories = [
    {
        id: 1,
        image: require("../../Assets/img/categories/cat-1.jpg"),
        label: 'Sofa Combo',
        colSize: 'col-xl-6 col-lg-6',
    },
    {
        id: 2,
        image: require("../../Assets/img/categories/cat-2.jpg"),
        label: 'TV unite',
        colSize: 'col-xl-3 col-lg-3',
    },
    {
        id: 3,
        image: require("../../Assets/img/categories/cat-3.jpg"),
        label: 'Orange Chair',
        colSize: 'col-xl-3 col-lg-3',
    },
    {
        id: 4,
        image: require("../../Assets/img/categories/cat-4.jpg"),
        label: 'Table',
        colSize: 'col-xl-3 col-lg-3',
    },
    {
        id: 5,
        image: require("../../Assets/img/categories/cat-5.jpg"),
        label: 'Living Room',
        colSize: 'col-xl-3 col-lg-3',
    },
    {
        id: 6,
        image: require("../../Assets/img/categories/cat-6.jpg"),
        label: 'Bookcase',
        colSize: 'col-xl-6 col-lg-6',
    },
];

// Define all categories data
export const yourCategoryArray = [
    'Small furniture',
    'Nightstands',
    'Dressers',
    'Bookcase',
    'Tables',
    'Sofas',
    'Chairs',
];

// Define home2 footer data
export const footerSections = [
    {
        title: 'Help',
        links: [
            'FAQ\'s',
            'Track',
            'Your order',
            'Return',
        ],
        colSize: 'col-lg-2 col-md-6',
    },
    {
        title: 'About Us',
        links: [
            'Our story',
            'news',
            'store locator',
            'contact us',
        ],
        colSize: 'col-lg-2 col-md-6',
    },
    {
        title: 'Service',
        links: [
            'My account',
            'terms of use',
            'deliveries & Returns',
        ],
        colSize: 'col-lg-2 col-md-6',
    },
    {
        title: 'Newsletter',
        content: 'Enter your email below to be the first to know about new collections and product launches.',
        colSize: 'col-lg-3 col-md-6',
    },
];

// Define home1 slides data
export const slides = [
    {
        image: require("../../Assets/img/hero/hero-1.jpg"),
        alt: "Slider hero 1",
    },
    {
        image: require("../../Assets/img/hero/hero-2.jpg"),
        alt: "Slider hero 2",
    },
];

// Define home1 feature data
export const featureData = [
    {
        image: quality,
        alt: "100% quality",
        title: "100% Quality",
        subtitle: "We provide the quality as <br> per your needs.",
    },
    {
        image: shipping,
        alt: "free shipping",
        title: "Free shipping",
        subtitle: "Two-day delivery on thousands <br> of items.",
    },
    {
        image: payment,
        alt: "secure payment",
        title: "100% secure payment",
        subtitle: "We secure your all transactions <br> from fraud.",
    },
];

// Define home1 product data
export const productData = [
    {
        image: require("../../Assets/img/feature/desk-1.jpg"),
        alt: "Minimal Desk",
        title: "Minimal Desk",
        price: 600,
        buttonText: "Shop Now",
        link: "#",
        contentClass: "tp-product-4__content",
        btnClass: "tp-btn-brown-sm",
    },
    {
        image: require("../../Assets/img/feature/lamp-1.jpg"),
        alt: "Beautiful Lamps",
        title: "Beautiful Lamps",
        price: 150,
        buttonText: "Shop Now",
        link: "#",
        contentClass: "tp-product-4__content-2",
        btnClass: "tp-btn-white-sm"
    },
];

// Define home1 category data
export const categoryData = [
    {
        image: diningTable,
        alt: "Small furniture",
        title: "Small furniture",
    },
    {
        image: nightStand,
        alt: "nightstands",
        title: "nightstands",
    },
    {
        image: dressing,
        alt: "dressers",
        title: "dressers",
    },
    {
        image: bookcase,
        alt: "Bookcase",
        title: "Bookcase",
    },
    {
        image: table,
        alt: "table",
        title: "tables",
    },
    {
        image: sofa,
        alt: "sofa",
        title: "sofas",
    },
    {
        image: chair,
        alt: "chair",
        title: "chairs",
    },
];

// Define home1 footer data
export const aboutUsLinks = [
    "About Us",
    "Reasons to shop",
    "What our customers say",
    "Meet the team",
    "Contact our buyers",
];

// Define home1 footer data
export const socialMediaLinks = [
    { icon: <FaFacebookF />, link: "https://www.facebook.com/" },
    { icon: <FaTwitter />, link: "https://www.twitter.com/" },
    { icon: <FaGoogle />, link: "https://www.google.com/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/" },
];

// Define home1 navbar data
export const navigationLinks = [
    {
        to: '#',
        label: 'home',
        submenu: [
            {
                to: '/',
                label: 'Home 01',
                imgSrc: require("../../Assets/img/banner/hero-banner-1.png")
            },
            {
                to: '/Home2',
                label: 'Home 02',
                imgSrc: require("../../Assets/img/banner/hero-banner-2.png")
            },
        ]
    },
    { to: '/Product', label: 'Products' },
    { to: '/About', label: 'about' },
    { to: '/Contact', label: 'contact us' },
];