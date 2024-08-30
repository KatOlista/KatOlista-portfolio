import { projects } from '../../utils';
import { ProjectItem, Title } from '..';

import styles from './Projects.module.scss';

export const Projects = () => {
  return (
    <section id='Projects' className={styles.projects}>
      <div className="container">
        <Title content='Projects' />

        <ul className={styles.projects__list}>
          {projects.map(project => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
};
