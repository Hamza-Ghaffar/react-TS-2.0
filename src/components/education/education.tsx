import { Timeline, useMatches } from "@mantine/core";
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { Education } from "../../User"; // Ensure the correct path for your Education data

interface Coursework {
    title: string;
    detail: string;
    links: {
        github?: string; // Marking as optional
    };
}

interface KeySubjectsList {
    [key: string]: string | undefined; // Allow undefined for optional subjects
}

interface EducationItem {
    id: number;
    date: string;
    coursename: string;
    insitutename: string;
    address: string;
    courseworks: {
        [key: string]: Coursework; // Allow dynamic coursework names
    };
    keysubjectslist: KeySubjectsList; // Updated structure
}

interface TimelineItemProps {
    items: EducationItem[];
}

const TimelineItem = ({ items }: TimelineItemProps) => {
    const size = useMatches({
        xs: 15,
        md: 20,
    });

    return (
        <>
            {items.map((item, index) => (
                <Timeline.Item
                    data-aos="fade-up"
                    data-aos-duration="800"
                    key={index}
                    className="!pt-12 !mb-2 sm-mx:!p-1"
                    bullet={<IconBriefcaseFilled className="!text-red-600" size={size} />}
                >
                    <div className="!w-[100%] border border-white p-5 rounded-xl shadow-[0_0_10px_0_#64FFDA50] hover:-translate-y-2 transition transform duration-300 ease-in-out bg-[#0a192f]">
                        <div className="flex gap-2 items-center">
                            {/* Institution Logo */}
                            <img
                                className="rounded-lg w-16 md-mx:w-14"
                                srcSet={`../../assets/${item.insitutename}.webp 1x,
                                          ../../assets/${item.insitutename}.png 2x,
                                          ../../assets/${item.insitutename}.jpg 3x`}
                                src={`../../assets/${item.insitutename}.png`} // Fallback for browsers that don't support srcset
                                alt="Institution Logo"
                            />
                            <div className="flex flex-col">
                                <div className="text-3xl text-white font-mono mb-4">{item.coursename}</div>
                                <div className="text-lg font-semibold text-red-600 md-mx:text-base sm-mx:text-sm xs-mx:text-xs">
                                    {item.insitutename} &#x2022; {item.date}
                                </div>
                            </div>
                        </div>
                        <div className="text-white leading-6 text-justify md-mx:text-sm xs-mx:text-xs mb-2">
                            <div className="font-semibold">Key Subjects:</div>
                            <ul className="list-disc ml-4">
                                {Object.values(item.keysubjectslist).map((subject: string | undefined, subjectIndex: number) => (
                                    subject && <li key={subjectIndex} className="text-white">{subject}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="text-lg font-medium text-white md-mx:text-base sm-mx:text-sm xs-mx:text-xs">
                            <div className="font-semibold text-red-600">Courseworks:</div>
                            {Object.values(item.courseworks).map((coursework, courseworkIndex) => (
                                <div key={courseworkIndex}>
                                    <div className="font-semibold">{coursework.title}</div>
                                    <div className="text-sm text-white">{coursework.detail}</div>
                                    {coursework.links.github && (
                                        <a
                                            href={coursework.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-red-600 hover:underline"
                                        >
                                            View on GitHub
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </Timeline.Item>
            ))}
        </>
    );
};

const Educations = () => {
    const size = useMatches({
        xs: 15,
        md: 20,
    });
    const dot = useMatches({
        xs: 25,
        md: 30,
    });

    return (
        <div className="px-16 mx-20 md-mx:px-6 sm-mx:px-2 lg-mx:mx-0 my-10 mb-28 font-mono" id="Education">
            <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white">
                <span className="text-red-600">03.&nbsp;</span>Education
            </h1>
            <Timeline color="#64FFDA" active={5} bulletSize={dot} lineWidth={2}>
                <TimelineItem items={Education} />
                <Timeline.Item bullet={<IconBriefcaseFilled className="!text-red-600" size={size} />} />
            </Timeline>
        </div>
    );
};

export default Educations;
