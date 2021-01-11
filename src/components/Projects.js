import PROJECTS from '../data/projects';
import Project from './Project';
import styles from './Projects.module.css';
const Projects = () => {
	return (
		<div>
			<h2 style={{ fontSize: '2.5rem' }}>Highlighted Projects</h2>
			<div className={styles.Projects}>
				{PROJECTS.map((project) => {
					return <Project key={project.id} {...project} />;
				})}
			</div>
		</div>
	);
};

export default Projects;
