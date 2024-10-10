import { Avatar, Timeline, useMatches } from "@mantine/core";
import Typewriter from 'typewriter-effect';
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { ExperienceInfo } from "../../User";

const TimelineItem = (items: any) => {
    const size = useMatches({
        xs: 15,
        md: 20,
    });

    return items.map((item: any, index: number) => (
        <Timeline.Item
            data-aos="fade-up"
            data-aos-duration="800"
            key={index}
            className="!pt-12 !mb-2 sm-mx:!p-1"
            bullet={<IconBriefcaseFilled className="!text-red-600" size={size} />}
        >
            <div className="!w-[100%] border border-white p-5 rounded-xl shadow-[0_0_10px_0_#64FFDA50] hover:-translate-y-2 transition transform duration-300 ease-in-out bg-[#0a192f]">
                <div className="flex gap-2 items-center">
                    <img
                        className="rounded-lg w-16 md-mx:w-14"
                        srcSet={`
    ../../assets/${item.company}.webp 1x,
    ../../assets/${item.company}.png 2x,
    ../../assets/${item.company}.jpg 3x
  `}
                        src={`../../assets/${item.company}.png`} // Fallback for browsers that don't support srcset
                        alt="Company"
                    />
                    <div className="flex flex-col">
                        <div className="text-3xl text-white font-mono mb-4">{item.role}</div>
                        <div className="text-lg font-semibold text-red-600 md-mx:text-base sm-mx:text-sm xs-mx:text-xs">
                            {item.company} &#x2022; {item.date}
                        </div>
                    </div>
                </div>
                <div className="text-white leading-6 text-justify md-mx:text-sm xs-mx:text-xs mb-2">
                    {item.desc}
                </div>

                <div className="text-lg font-medium text-white md-mx:text-base sm-mx:text-sm xs-mx:text-xs flex gap-1">
                    <div className="font-semibold text-red-600">Skills:</div>
                    <div className="flex gap-1 flex-wrap">
                        {item.skills.map((skill: any, index: number) => (
                            <div key={index} className="p-2 border-red-600 rounded-lg m-1 border text-center hover:scale-95">
                                <Avatar
                                    variant="outline"
                                    radius=""
                                    size="lg"
                                    src={`../../assets/Icons/${skill}.png`}
                                />
                                <div className="font-mono text-white">{skill}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Timeline.Item>
    ));
};

const Experience = () => {
    const size = useMatches({
        xs: 15,
        md: 20,
    });
    const dot = useMatches({
        xs: 25,
        md: 30,
    });

    return (
        <div className="px-16 mx-20 md-mx:px-6 sm-mx:px-2 lg-mx:mx-0 my-10 mb-28 font-mono" id="Experience">
            <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white">
                <span className="text-red-700 text-6xl font-bold">
                    <Typewriter
                        options={{
                            strings: ["04. Experience"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </span>
            </h1>
            <Timeline color="#64FFDA" active={5} bulletSize={dot} lineWidth={2}>
                {TimelineItem(ExperienceInfo)}
                <Timeline.Item bullet={<IconBriefcaseFilled className="!text-red-600" size={size} />} />
            </Timeline>
        </div>
    );
};

export default Experience;
