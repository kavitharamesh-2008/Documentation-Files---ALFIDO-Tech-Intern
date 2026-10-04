function SkillCard({ skill, description }) {
  return (
    <div className="skill-card">
      <h3>{skill}</h3>
      <p>{description}</p>
    </div>
  );
}

export default SkillCard;