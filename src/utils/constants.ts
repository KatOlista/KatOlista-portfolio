import Nothing from '../assets/images/nothing.webp';
import TaskFlow from '../assets/images/task-flow.webp';
import BlueHouse from '../assets/images/blue-house.webp';
import Respirator from '../assets/images/respirator.webp';
import NiceGadgets from '../assets/images/nice-gadgets.webp';
import HomeTextile from '../assets/images/home-textile.webp';
import CurrencyConverter from '../assets/images/currency-converter.webp';

import { Project } from '../types';

export const menuList = ['About', 'Projects', 'Contacts'];

export const skills = [
  'React',
  'Redux Toolkit',
  'Zustand',
  'JavaScript',
  'TypeScript',
  'SASS',
  'CSS3',
  'JSS',
  'GSAP',
  'HTML5',
  'Git',
  'Github',
  'Bitbucket',
  'Fetch',
  'REST API',
  'SQL',
  'NPM',
  'VS Code',
  'FETCH',
  'Open Graph',
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Blue House',
    image: BlueHouse,
    demo: 'https://bluehouse.is/',
    code: '',
    technologies:
      'Used technologies: React, JavaScript, CSS, Styled Components, Swiper, and HTML5',
    description:
      'is a website of Reykjavik hotel Blue House Bed and Breakfast. It is at the end of the rebranding process. The mobile and tablet versions of the site have been added.',
  },
  {
    id: 2,
    title: 'Nice Gadgets',
    image: NiceGadgets,
    demo: 'https://fe-jul23-team6.github.io/product_catalog/',
    code: 'https://github.com/fe-jul23-team6/product_catalog',
    technologies:
      'Used technologies: React, TypeScript, SASS, HTML5, Express + Sequelize and Node.js.',
    description:
      'is a user-friendly platform where customers could explore and purchase a wide range of Apple products, including smartphones, tablets, and watches.',
  },
  {
    id: 7,
    title: 'Currency converter',
    image: CurrencyConverter,
    demo: 'https://katolista.github.io/convertor-animated/',
    code: 'https://github.com/KatOlista/convertor-animated',
    technologies:
      'Used technologies: React, Redux Toolkit, JavaScript, FETCH, Vite, Vite plugin SVGR, GSAP, HTML5, SASS, and Open Graph.',
    description:
      'is a simple web application that allows you to convert currency at the NBU rate.',
  },
  {
    id: 3,
    title: 'TaskFlow',
    image: TaskFlow,
    demo: 'https://katolista.github.io/todo-list-with-redux/',
    code: 'https://github.com/KatOlista/todo-list-with-redux',
    technologies:
      'Used technologies: React, Redux Toolkit, TypeScript, Vite, GSAP, HTML5, JSS, and Open Graph.',
    description:
      'is a simple web application that allows to create and download your daily tasks to avoid missing anything.',
  },
  {
    id: 4,
    title: 'Nothing',
    image: Nothing,
    demo: 'https://katolista.github.io/nothing-landing/',
    code: 'https://github.com/KatOlista/nothing-landing',
    technologies: 'Used technologies: SCSS, and HTML5',
    description:
      'The landing page is a static single-page website, ensuring a smooth and visually pleasing experience across various devices, from desktops to mobile.',
  },
  {
    id: 5,
    title: 'HomeTextile',
    image: HomeTextile,
    demo: 'https://katolista.github.io/home-textile/',
    code: 'https://github.com/KatOlista/home-textile',
    technologies:
      'Used technologies: React, Vite, JavaScript, SASS, Swiper, Vite plugin SVGR, and SANITY',
    description:
      'is a single-page website that extracts dynamic content from Headless CMS Sanity.',
  },
  {
    id: 6,
    title: 'Respirators',
    image: Respirator,
    demo: 'https://katolista.github.io/respirators/',
    code: 'https://github.com/KatOlista/respirators',
    technologies: 'Used technologies: Gulp, JavaScript, HTML5, and SASS.',
    description:
      'is a landing page. It was built using responsive design principles, ensuring a smooth and visually pleasing experience across various devices, from desktops to mobile.',
  },
];

import Phone from '../assets/icons/phone.svg?react';
import LinkedIn from '../assets/icons/in.svg?react';
import GitHub from '../assets/icons/gh.svg?react';
import Telegram from '../assets/icons/telegram.svg?react';
import Mail from '../assets/icons/mail.svg?react';

export const contacts = [
  {
    id: 'linkedin',
    target: '_blanc',
    title: 'LinkedIn',
    icon: LinkedIn,
    link: 'https://www.linkedin.com/in/ola-katiushyna-katolista/',
    info: '',
  },
  {
    id: 'github',
    target: '_blanc',
    title: 'GitHub',
    icon: GitHub,
    link: 'https://github.com/KatOlista',
    info: '',
  },
  {
    id: 'telegram',
    target: '_blanc',
    title: 'Telegram',
    icon: Telegram,
    link: 'https://t.me/KatOlista',
    info: '',
  },
  {
    id: 'phone',
    target: '_self',
    title: '+48533076993',
    icon: Phone,
    link: 'tel: +48533076993',
    info: '+48533076993',
  },
  {
    id: 'email',
    target: '_self',
    title: 'ola.katiushyna@gmail.com',
    icon: Mail,
    link: 'mailto: ola.katiushyna@gmail.com',
    info: 'ola.katiushyna@gmail.com',
  },
];
