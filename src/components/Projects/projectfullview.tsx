import { Badge, Text, Group, Image, Indicator, Modal, Button } from "@mantine/core";


interface FullProjectViewProps {
    opened: boolean;
    close: () => void;
    images: string[]; // New prop for image
    title: string; // New prop for title
    description: string; // New prop for description
    technologies: string[]; // New prop for technologies
    github: string; // New prop for GitHub link
    live: boolean; // New prop for live status
    link?: string; // Optional live link
    badgeText?: string; // Optional badge text

}

const FullProjectView: React.FC<FullProjectViewProps> = ({ opened,
    close,
    images,
    title,
    badgeText,
    description,
    technologies,
    github,
    live,
    link }) => {
    return (
        <>
            <Modal.Root size="70%" opened={opened} onClose={close}>
                <Modal.Overlay />
                <Modal.Content className="!rounded-3xl  text-red-600 text-lg ">
                    <Modal.Header className=" !bg-black  !border-red-900 border-b-0 border-2 !rounded-tl-3xl !rounded-tr-3xl">
                        <Modal.Title className=" items-center flex gap-3 !text-3xl !font-bold " > {title}
                            <Badge size="lg"
                                className='!gap-4'
                                style={{ marginLeft: '10px' }} // Add margin for spacing
                                variant='outline'
                                color={live ? "green" : "#B92341"} // Change badge color based on live status
                                c="#ffff"
                                rightSection={
                                    <Indicator size={20}
                                        color={live ? "green" : "rgba(158, 8, 8, 1)"} // Change indicator color based on live status
                                        position="middle-end"
                                        withBorder
                                        processing
                                    />
                                }
                            >
                                {badgeText || (live ? "Live" : "Offline")} {/* Change badge text based on live status */}
                            </Badge>
                        </Modal.Title>

                        <Modal.CloseButton className="!text-red-500" size="md" iconSize="30px" />
                    </Modal.Header>

                    <Modal.Body className="!bg-[#060E1Bff] !border-red-900 !border-t-0  !pt-4 "  >

                        {images.map((image, index) => (
                            <Image
                                key={index} // Unique key for each image
                                style={{
                                    width: '100%', // Make the image fill the width of the container
                                    height: 'auto', // Adjust height to maintain aspect ratio
                                    maxHeight: '75vh', // Limit the maximum height to 75% of the viewport height
                                    objectFit: 'contain', // Maintain aspect ratio and fit within the container
                                    display: 'flex',
                                    alignItems: 'center', // Ensure it's treated as a block element for proper alignment
                                    margin: '0 auto', // Center align the image
                                }}
                                src={image || "https://via.placeholder.com/200"} // Use the image or a placeholder
                                alt={`${title} Image ${index + 1}`} // Better alt text for accessibility
                            />
                        ))}

                        {/* Add Technologies Display */}
                        <Group justify="" mt="xs" mb="xs">
                            {technologies.map((tech: string, index: number) => (
                                <Badge className='!text-white !p-2' key={index} variant="outline" color="red" size="3xl" radius="sm">
                                    {tech}
                                </Badge>
                            ))}
                        </Group>

                        <Text className="!text-justify" lineClamp={4} size="sm" c="#ffff">
                            {description || "Project description goes here."}
                        </Text>

                        {/* GitHub and Live Link Buttons */}
                        <Group mt="md">
                            {link && (
                                <Button color="#073500" radius="md" component="a" href={"https://wa.link/hrlayj"} target="_blank" rel="noopener noreferrer">
                                    Get-Demo-Free
                                </Button>
                            )}
                            {github && (
                                <Button color="#B91C1C" radius="md" component="a" href={github} target="_blank" rel="noopener noreferrer">
                                    View-Code
                                </Button>
                            )}


                        </Group>




                    </Modal.Body>

                </Modal.Content>
            </Modal.Root>

        </>
    );
};

export default FullProjectView;
