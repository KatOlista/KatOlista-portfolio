import TaskFlow from '../assets/images/task-flow.png';
import BlueHouse from '../assets/images/blue-house.png';
import NiceGadgets from '../assets/images/nice-gadgets.png';
import Nothing from '../assets/images/nothing.png';

import { Project } from '../types';

export const menuList = ['About', 'Projects', 'Contacts'];

export const skills = [
  'React',
  'Redux Toolkit',
  'JavaScript',
  'TypeScript',
  'SASS',
  'CSS3',
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
  'ClickUp',
  'Bitrix',
  'Trello',
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Blue House',
    image: BlueHouse,
    demo: 'https://bluehouse.is/',
    code: '',
    technologies:
      'Used technologies: React, JavaScript, CSS, styled components, Swiper',
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
      'Used technologies: React, TypeScript, Express + Sequelize and Node.js.',
    description:
      'is a user-friendly platform where customers could explore and purchase a wide range of Apple products, including smartphones, tablets, and watches.',
  },
  {
    id: 3,
    title: 'TaskFlow',
    image: TaskFlow,
    demo: 'https://katolista.github.io/todo-list-with-redux/',
    code: 'https://github.com/KatOlista/todo-list-with-redux',
    technologies:
      'Used technologies: Redux Toolkit, React, Vite, TypeScript, and JSS.',
    description:
      'is a simple web application that allows to create and download your daily tasks to avoid missing anything.',
  },
  {
    id: 4,
    title: 'Nothing',
    image: Nothing,
    demo: 'katolista.github.io/nothing-landing/',
    code: 'https://github.com/KatOlista/nothing-landing',
    technologies:
      'Used technologies: SCSS, and HTML5',
    description:
      'The landing page is a static single-page website, ensuring a smooth and visually pleasing experience across various devices, from desktops to mobile.',
  },

  {
    id: 6,
    title: 'Loungewear',
    image: TaskFlow,
    demo: 'https://katolista.github.io/byteex_product-page/',
    code: 'https://github.com/KatOlista/byteex_product-page',
    technologies:
      'Used technologies: React, Vite, SASS, Swiper, Vite plugin SVGR, SANITY',
    description:
      'is a single-page website that extracts dynamic content from Headless CMS Sanity.',
  },
  {
    id: 5,
    title: 'Masks',
    image: TaskFlow,
    demo: 'https://katolista.github.io/next-g-test-task/',
    code: 'https://github.com/KatOlista/next-g-test-task',
    technologies: 'Used technologies: Gulp and SASS.',
    description:
      'is a landing page. It was built using responsive design principles, ensuring a smooth and visually pleasing experience across various devices, from desktops to mobile.',
  }
];

import Phone from '../assets/icons/phone.svg?react';
import LinkedIn from '../assets/icons/in.svg?react';
import GitHub from '../assets/icons/gh.svg?react';
import Telegram from '../assets/icons/telegram.svg?react';
import Mail from '../assets/icons/mail.svg?react';

export const contacts = [
  {
    id: 'phone',
    target: '_self',
    title: '+48533076993',
    icon: Phone,
    link: 'tel: +48533076993',
    info: '+48533076993',
  },
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
    id: 'email',
    target: '_self',
    title: 'ola.katiushyna@gmail.com',
    icon: Mail,
    link: 'mailto: ola.katiushyna@gmail.com',
    info: 'ola.katiushyna@gmail.com',
  },
];
