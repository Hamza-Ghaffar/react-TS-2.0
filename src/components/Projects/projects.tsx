import ProjectCard from "./projectcard";
import Typewriter from "typewriter-effect";
import Projects_info from "./projectsinfo";

const Projects = () => {
    return (
        <div className="m-24  text-center">
            <span className="text-red-700 text-6xl font-bold">
                <Typewriter
                    options={{
                        strings: ["02. Projects"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>
            <div className="flex gap-4 flex-wrap justify-between my-7"> {/* Adjusted spacing and justification */}
                {Projects_info.map((project, index) => (
                    <ProjectCard
                        key={index}
                        images={project.images}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        github={project.github}
                        live={project.live}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
