import React from 'react';

import { IconHexagonLetterHFilled } from '@tabler/icons-react';
import SideBar from '../Drawer/sidebar';

const links = ["About", "Work", "Skills", "Experience", "Education", "Contact"];

const navLinks = (col: boolean) => {
    return links.map((link, index) => (
        <a
            key={index}
            href={`#${link}`}
            target="_blank"
            rel="noopener noreferrer" // Added for security
            className={`${col ? 'flex flex-col' : ''}  space-mono-regular text-white text-lg items-center gap-4 hover:text-lg hover:text-textPrimaryHover hover:border-white px-4 py-4 rounded-sm hover:border-2`}
        >
            <span className=''>0{index + 1}. </span> {link}
        </a>
    ));
};

const Header: React.FC = () => {
    return (
        <nav className="flex bg-themebody h-[15vh] p-12 text-textPrimary space-mono-regular justify-between items-center">
            <IconHexagonLetterHFilled
                size={120}
                color="#ffff"
                stroke={1.5}
                className='!z-10'
            />
            <div className="md:flex gap-12 hidden">
                {navLinks(false)}
            </div>
            <SideBar />
        </nav>
    );
};

export default Header;
export { navLinks };
