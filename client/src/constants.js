const env = process.env.NODE_ENV || 'development'
const serverIP = 'localhost'
const serverPort = 5000
export default {
  CUSTOMER: 'customer',
  CREATOR: 'creator',
  CONTEST_STATUS_ACTIVE: 'active',
  CONTEST_STATUS_FINISHED: 'finished',
  CONTEST_STATUS_PENDING: 'pending',
  NAME_CONTEST: 'name',
  LOGO_CONTEST: 'logo',
  TAGLINE_CONTEST: 'tagline',
  OFFER_STATUS_REJECTED: 'rejected',
  OFFER_STATUS_WON: 'won',
  OFFER_STATUS_PENDING: 'pending',
  STATIC_IMAGES_PATH: '/staticImages/',
  ANONYM_IMAGE_PATH: '/staticImages/anonym.png',
  BASE_URL: `http://${serverIP}:${serverPort}/`,
  ACCESS_TOKEN: 'accessToken',
  publicURL:
    env === 'production'
      ? `http://${serverIP}:80/images/`
      : `http://${serverIP}:${serverPort}/public/images/`,
  NORMAL_PREVIEW_CHAT_MODE: 'NORMAL_PREVIEW_CHAT_MODE',
  FAVORITE_PREVIEW_CHAT_MODE: 'FAVORITE_PREVIEW_CHAT_MODE',
  BLOCKED_PREVIEW_CHAT_MODE: 'BLOCKED_PREVIEW_CHAT_MODE',
  CATALOG_PREVIEW_CHAT_MODE: 'CATALOG_PREVIEW_CHAT_MODE',
  CHANGE_BLOCK_STATUS: 'CHANGE_BLOCK_STATUS',
  ADD_CHAT_TO_OLD_CATALOG: 'ADD_CHAT_TO_OLD_CATALOG',
  CREATE_NEW_CATALOG_AND_ADD_CHAT: 'CREATE_NEW_CATALOG_AND_ADD_CHAT',
  USER_INFO_MODE: 'USER_INFO_MODE',
  CASHOUT_MODE: 'CASHOUT_MODE',
  HEADER_ANIMATION_TEXT: [
    'a Company',
    'a Brand',
    'a Website',
    'a Service',
    'a Book',
    'a Business',
    'an App',
    'a Product',
    'a Startup'
  ],
  FooterItems: [
    {
      title: 'SQUADHELP',
      items: ['About', 'Contact', 'How It Works?', 'Testimonials', 'Our Work']
    },
    {
      title: 'RESOURCES',
      items: [
        'How It Works',
        'Become a Creative',
        'Business Name Generator',
        'Discussion Forum',
        'Blog',
        'Download eBook',
        'Pricing',
        'Help & FAQs'
      ]
    },
    {
      title: 'OUR SERVICES',
      items: [
        'Naming',
        'Logo Design',
        'Taglines',
        'Premium Names For Sale',
        'Creative Owned Names For Sale',
        'Audience Testing',
        'Trademark Research & Filling',
        'Managed Agency Service'
      ]
    },
    {
      title: 'LEGAL',
      items: ['Terms of Service', 'Privacy Policy', 'Cookie Policy']
    }
  ],

  HeaderNavItems: [
    {
      title: 'NAME IDEAS',
      items: [
        {titleItem: 'Beauty', linkItem: 'http://www.google.com'},
        {titleItem: 'Consulting', linkItem: 'http://www.google.com'},
        {titleItem: 'E-Commerce', linkItem: 'http://www.google.com'},
        {titleItem: 'Fashion & Clothing', linkItem: 'http://www.google.com'},
        {titleItem: 'Finance', linkItem: 'http://www.google.com'},
        {titleItem: 'Real Estate', linkItem: 'http://www.google.com'},
        {titleItem: 'Tech', linkItem: 'http://www.google.com'},
        {titleItem: 'More Categories', linkItem: 'http://www.google.com'}
      ]
    },
    {
      title: 'CONTESTS', 
      items: [
        {titleItem: 'HOW IT WORKS', linkItem: 'http://www.google.com'},
        {titleItem: 'PRICING', linkItem: 'http://www.google.com'},
        {titleItem: 'AGENCY SERVICE', linkItem: 'http://www.google.com'},
        {titleItem: 'ACTIVE CONTESTS', linkItem: 'http://www.google.com'},
        {titleItem: 'WINNERS', linkItem: 'http://www.google.com'},
        {titleItem: 'LEADERBOARD', linkItem: 'http://www.google.com'},
        {titleItem: 'BECOME A CREATIVE', linkItem: 'http://www.google.com'},
    ]},
    {
      title: 'Our Work', 
      items: [
        {titleItem: 'NAMES', linkItem: 'http://www.google.com'},
        {titleItem: 'TAGLINES', linkItem: 'http://www.google.com'},
        {titleItem: 'LOGOS', linkItem: 'http://www.google.com'},
        {titleItem: 'TESTIMONIALS', linkItem: 'http://www.google.com'},
    ]},
    {
      title: 'Names For Sale', 
      items: [
        {titleItem: 'POPULAR NAMES', linkItem: 'http://www.google.com'},
        {titleItem: 'SHORT NAMES', linkItem: 'http://www.google.com'},
        {titleItem: 'INTRIGUING NAMES', linkItem: 'http://www.google.com'},
        {titleItem: 'NAMES BY CATEGORY', linkItem: 'http://www.google.com'},
        {titleItem: 'VISUAL NAME SEARCH', linkItem: 'http://www.google.com'},
        {titleItem: 'SELL YOUR DOMAINS', linkItem: 'http://www.google.com'},
      ]},
    {
      title: 'Blog', 
      items: [
        {titleItem: 'ULTIMATE NAMING GUIDE', linkItem: 'http://www.google.com'},
        {titleItem: 'POETIC DEVICES IN BUSINESS NAMING', linkItem: 'http://www.google.com'},
        {titleItem: 'CROWDED BAR THEORY', linkItem: 'http://www.google.com'},
        {titleItem: 'ALL ARTICLES', linkItem: 'http://www.google.com'},
    ]},
  ]

}
