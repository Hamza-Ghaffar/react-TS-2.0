import {
    IconBrandHackerrank,
    IconBrandLeetcode,
    IconBrandYoutube,
    IconBrandWhatsapp,
    IconBrandLinkedin,
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandGithub
} from '@tabler/icons-react';

const Social_Component = () => {
    const socials = [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/hamzaghaffar/",
            icon: <IconBrandLinkedin size={20} />
        },
        {
            name: "GitHub",
            link: "https://github.com/Hamza-Ghaffar",
            icon: <IconBrandGithub size={20} />
        },
        {
            name: "YouTube",
            link: "https://www.youtube.com/channel/YOUR_CHANNEL_ID", // Replace with your YouTube link
            icon: <IconBrandYoutube size={20} />
        },
        {
            name: "Facebook",
            link: "https://www.facebook.com/calledhamzy", // Your Facebook link
            icon: <IconBrandFacebook size={20} />
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/calledhamzy", // Your Instagram link
            icon: <IconBrandInstagram size={20} />
        },
        {
            name: "WhatsApp",
            link: "https://wa.me/+43660119777", // WhatsApp link with your phone number
            icon: <IconBrandWhatsapp size={20} />
        },
        {
            name: "HackerRank",
            link: "https://www.hackerrank.com/profile/hamzaghaffar", // Your HackerRank link
            icon: <IconBrandHackerrank size={20} />
        },
        {
            name: "LeetCode",
            link: "https://leetcode.com/u/hamza-ghaffar/", // Your LeetCode link
            icon: <IconBrandLeetcode size={20} />
        },
    ];

    return (
        <div className="flex text-white gap-10 items-center fixed bottom-96 -left-72 rotate-90">
            {socials.map((social, index) => (
                <a
                    key={index}
                    href={social.link}
                    className="-rotate-90 text-xl text-neutral-400 hover:text-white hover:-translate-x-2 transition transform duration-300 ease-in-out"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer" // Security for external links
                >
                    {social.icon}
                </a>
            ))}
            <hr className="border-2 rounded-full border-black bg-white h-2 w-40" />
        </div>
    );
}

export default Social_Component;
