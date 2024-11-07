import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projects } from '../../utils';
import { ProjectItem, Title } from '..';

import styles from './Projects.module.scss';

export const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.timeline()
      .from(`.${styles.projects}`, {
        scrollTrigger: {
          trigger: `.${styles.projects}`,
          start: 'top 80%',
          end: '5%',
          scrub: 1,
        },
        opacity: 0,
        y: '10%',
        delay: 1,
        duration: 1,
      })
    });

  return (
    <section id="Projects" className={styles.projects}>
      <div className="container">
        <Title content="Projects" />

        <ul className={styles.projects__list}>
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
};
