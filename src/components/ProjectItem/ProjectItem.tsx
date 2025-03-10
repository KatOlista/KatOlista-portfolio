import React from 'react';

import { Project } from '../../types';
import { Button } from '..';

import styles from './ProjectItem.module.scss';

import Arrow from '../../assets/icons/arrow.svg?react';
import Back from '../../assets/icons/back.svg?react';

type Props = {
  project: Project;
};

export const ProjectItem: React.FC<Props> = ({ project }) => {
  const showDescriptionHandler = () => {
    const currentItem = document.querySelector(`#item-${project.id}`);

    document
      .getElementById('Projects')
      ?.classList.add(`${styles.project__index}`);

    currentItem?.classList.add(`${styles.project__current}`);

    document.body.classList.add('noscroll');
  };

  const closeDescriptionHandler = () => {
    document
      .querySelector(`#item-${project.id}`)
      ?.classList.remove(`${styles.project__current}`);

    document
      .getElementById('Projects')
      ?.classList.remove(`${styles.project__index}`);

    document.body.classList.remove('noscroll');
  };

  return (
    <li id={`li-${project.id}`} className={styles.project}>
      {/* <div className={styles.project__wrapper}> */}
      <Button label="project item" buttonClassName={styles.project__wrapper}>
        <img
          className={styles.project__image}
          src={project.image}
          alt={project.title}
          onClick={showDescriptionHandler}
        />
      </Button>

      <div id={`item-${project.id}`} className={styles.project__description}>
        <div>
          <Button label="back" onClick={closeDescriptionHandler}>
            <Back className={styles.project__back} />
          </Button>

          <div className={styles.project__info}>
            <h2 className={styles.project__title}>{project.title}</h2>
            &nbsp;
            {project.description}
          </div>
        </div>

        <a target="_blanc" href={project.demo} className={styles.project__link}>
          <img
            className={styles.project__img}
            src={project.image}
            alt={project.title}
          />
        </a>

        <div className={styles.project__info}>
          {project.technologies}

          <div className={styles.project__buttons}>
            <a
              className={styles.project__button}
              target="_blanc"
              href={project.demo}
            >
              see case <Arrow className={styles.project__icon} />
            </a>

            {!!project.code && (
              <a
                className={styles.project__button}
                target="_blanc"
                href={project.code}
              >
                analyze code <Arrow className={styles.project__icon} />
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
