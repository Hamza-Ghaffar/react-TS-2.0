import { Button } from "@mantine/core";
import { userinfo } from "./user-info";
import Typewriter from "typewriter-effect";
import Tools from "../Tools/tools";

const About = () => {
    return (
        <div className="w-full bg-[rgba(14, 35, 66, 0.84)] flex"> {/* Background with reduced opacity */}
            <div className="flex flex-col py-7 px-16 text-white ml-20 w-3/5 h-full justify-center"> {/* Text content */}
                <div className="text-4xl">Hi, I am</div> {/* Subheading */}
                <div className="text-6xl font-bold">{userinfo.name}</div> {/* Main heading */}
                <div className="text-3xl flex">
                    I am a&nbsp;
                    <span className="text-red-700 font-semibold">
                        <Typewriter
                            options={{
                                strings: userinfo.stack,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </div> {/* Typewriter text */}
                <div className="text-justify text-2xl font-mono my-8">
                    {userinfo.bio} {/* Body text */}
                </div>
                <Button className="!w-fit !text-red-700 hover:border-white rounded-sm hover:border-4 transition duration-300" size="xl" variant="outline">
                    Check Resume
                </Button>
                <Tools />
            </div>

            {/* Right side image */}
            <div className="flex items-center justify-center h-full  w-2/5"> {/* Full height and width for better alignment */}
                <div className="rounded-full border-4 border-white-400 h-112 w-112 flex items-center justify-center"> {/* Added border and flexbox for centering */}
                    <img
                        style={{
                            width: '100%', // Make the image fill the width of the container
                            height: '350px', // Set a fixed height (or adjust as needed)
                            objectFit: 'cover', // Ensure the image covers the area without distortion
                        }}
                        className="rounded-full" // Maintain circular shape for the image
                        src={userinfo.profile} // Updated path
                        alt="Intro"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
