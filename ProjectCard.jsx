function ProjectCard({ title, description, technologies, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <p className="technologies">
        <strong>Technologies:</strong> {technologies}
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;