import Typewriter from "typewriter-effect";
import { SkillInfo } from "./skillsinfo";
import SkillCard from "./skillscard";

const Skills = () => {
    return (
        <div className="m-0 text-center">
            <span className="text-red-700 text-6xl font-bold">
                <Typewriter
                    options={{
                        strings: ["03. Skills"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>
            <div className="flex flex-wrap justify-center my-2 gap-1"> {/* Flex container for alignment */}
                {SkillInfo.map((skill, index) => (
                    <div key={index} className="w-4/12 !flex !flex-wrap !justify-between m-3 p-4  "> {/* Adjusted width to ensure four items per row */}
                        <SkillCard
                            title={skill.title}
                            skills={skill.skills}
                        />
                    </div>
                ))}
            </div>
        </div>
    );

};

export default Skills;
