import React from "react"; // Import React
import { Avatar } from "@mantine/core"; // Import Avatar component from Mantine

interface SkillsViewProps {
    title?: string; // Optional title prop
    skills?: string[]; // Optional array of skills
}

// SkillsCard component to display title and badges
const SkillsCard: React.FC<SkillsViewProps> = ({ title = "", skills = [] }) => {

    return (
        <div className="!w-[100%] border border-white p-5 rounded-xl">
            <div className="text-3xl text-white text-center !font-mono mb-4">
                {title} {/* Render title */}
            </div>
            <div >
                <SkillBadge skills={skills} title={title} /> {/* Render skills with badges */}
            </div>
        </div>
    );
};


// SkillBadge component to display individual skills with images
const SkillBadge: React.FC<{ skills: string[], title: string }> = ({ skills }) => {
    return (
        <div className="flex  flex-wrap">
            {skills.map((skillname, index) => (
                <div key={index} className="text-white p-2 border-red-600 rounded-lg m-1 border hover:scale-95  !text-center ">
                    <Avatar className=" "
                        variant="outline"
                        radius=""
                        size="lg"


                        src={`../../assets/Icons/${skillname}.png`}  // Corrected path for images
                    />
                    <div className="!font-mono ">

                        {skillname} {/* Render the skill name */}
                    </div>
                </div>
            ))}
        </div>
    );
};




export default SkillsCard;
