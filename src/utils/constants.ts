import TaskFlow from '../assets/images/TaskFlow.jpg';

import { Project } from "../types";

export const menuList = ["About", "Projects", "Contacts"];

export const skills = [
  "React",
  "Redux Toolkit",
  "JavaScript",
  "TypeScript",
  "SASS",
  "CSS3",
  "HTML5",
  "Git",
  "Github",
  "Fetch",
  "REST API",
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Loungewear',
    image: TaskFlow ,
    demo: 'https://katolista.github.io/byteex_product-page/',
    code: 'https://github.com/KatOlista/byteex_product-page',
    technologies: 'Used technologies: React, Vite, SASS, Swiper, Vite plugin SVGR, SANITY',
    description: 'is a dynamic single-page website that extracts dynamic content from Headless CMS Sanity.' },
  {
    id: 2,
    title: 'Masks',
    image: TaskFlow,
    demo: 'https://katolista.github.io/next-g-test-task/',
    code: 'https://github.com/KatOlista/next-g-test-task',
    technologies: 'Used technologies: Gulp and SASS.',
    description: 'is a landing page. It was built using responsive design principles, ensuring a smooth and visually pleasing experience across various devices, from desktops to mobile.' },
  {
    id: 3,
    title: 'Nice Gadgets',
    image: TaskFlow,
    demo: 'https://fe-jul23-team6.github.io/product_catalog/',
    code: 'https://github.com/fe-jul23-team6/product_catalog',
    technologies: 'Used technologies: React, TypeScript, Express + Sequelize and Node.js.',
    description: 'is a user-friendly platform where customers could explore and purchase a wide range of Apple products, including smartphones, tablets, and watches.' },
  {
    id: 4,
    title: 'TaskFlow',
    image: TaskFlow,
    demo: 'https://katolista.github.io/todo-list-with-redux/',
    code: 'https://github.com/KatOlista/todo-list-with-redux',
    technologies: 'Used technologies: Redux Toolkit, React, Vite, TypeScript, and JSS.',
    description: 'is a simple web application that allows to create and download your daily tasks to avoid missing anything.' },
];
