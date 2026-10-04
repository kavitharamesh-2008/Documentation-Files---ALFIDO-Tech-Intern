import"./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import Button from "./components/Button";

function App() {
  const skills = [
    {
      skill: "HTML",
      description: "Building structured and semantic web pages."
    },
    {
      skill: "CSS",
      description: "Creating responsive and attractive designs."
    },
    {
      skill: "JavaScript",
      description: "Adding interactive and dynamic functionality."
    },
    {
      skill: "React JS",
      description: "Building reusable and modern UI components."
    }
  ];

const projects = [
  {
    title: "React Portfolio Website",
    description:
      "A personal professional portfolio website built using React JS with reusable components for sections, cards, and buttons.",
    technologies: "React JS, JavaScript, HTML, CSS",
    link: "#"
  },
  {
    title: "React API Project",
    description:
      "A React application that fetches API data and displays it using reusable components, with loading and error handling.",
    technologies: "React JS, JavaScript, API, Fetch",
    link: "#"
  },
  {
    title: "Todo App with Local Storage",
    description:
      "A full-featured Todo application with add, edit, and delete functionality. Tasks are stored using browser local storage.",
    technologies: "React JS, JavaScript, HTML, CSS, Local Storage",
    link: "#"
  }
];

  return (
    <>
      <Navbar />

      <section id="home" className="hero">
        <h1>Hi, I'm Kavitha Ramesh</h1>
        <p>Welcome to my personal professional portfolio</p>

        <Button href="#projects">View My Projects</Button>
      </section>

      <Section id="about" title="About Me">
        <p>
          I am a passionate and motivated web developer with a strong interest
    in creating modern, responsive, and user-friendly websites. I have
    knowledge of HTML, CSS, JavaScript, and React JS, and I enjoy building
    reusable and interactive user interfaces. I am currently developing
    my skills through practical projects and an internship, and I am
    always eager to learn new technologies and improve my development
    skills.
        </p>
      </Section>

      <Section id="skills" title="My Skills">
        <div className="skills-grid">
          {skills.map((item, index) => (
            <SkillCard
              key={index}
              skill={item.skill}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      <Section id="projects" title="My Projects">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact Me">
        <p>Email:kavitharameshs007@ganil.com</p>
        <p>Phone: +91 9940074498</p>
      </Section>

      <footer>
        <p>© 2026 My Portfolio. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;