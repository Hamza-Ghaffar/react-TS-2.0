
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Burger } from '@mantine/core';

import { navLinks } from '../Header/header';



const SideBar = () => {
    const [opened, { toggle }] = useDisclosure(false);



    return (
        <>
            <Drawer.Root opened={opened}
                onClose={toggle} position='right' >
                <Drawer.Overlay style={{ backgroundOpacity: .5, blur: 4 }} className='md:hidden !-z-0' />
                <Drawer.Content className='md:hidden !-z-0  ' >


                    <Drawer.Body bg='#0A0A0A' className='mt-40 flex flex-col'>
                        {/* Aligned Menu in the Drawer */}
                        {navLinks(true)}
                        <nav className="flex flex-col gap-4 p-4">
                            <a href="#About" className="text-white hover:text-textPrimaryHover">
                                About
                            </a>
                            <a href="#Work" className="text-white hover:text-textPrimaryHover">
                                Work
                            </a>
                            <a href="#Skills" className="text-white hover:text-textPrimaryHover">
                                Skills
                            </a>
                            <a href="#Contact" className="text-white hover:text-textPrimaryHover">
                                Contact
                            </a>
                        </nav>
                    </Drawer.Body>
                </Drawer.Content>
            </Drawer.Root>


            <Burger className="md:!hidden !z-10 " size={"lg"} opened={opened} onClick={toggle} />
        </>
    );
};

export default SideBar;
