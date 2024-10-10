import { Card, Image, Text, Badge, Button, Group, Indicator } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FullProjectView from './projectfullview';


interface ProjectCardProps {
    images: string[];
    title: string; // Make this required
    badgeText?: string; // Optional
    description: string; // Make this required
    buttonText?: string; // Optional
    technologies: string[]; // Add this for technologies
    github: string; // Add this for GitHub link
    live: boolean; // Add this for live status
    link?: string; // Optional for the live link
}

function ProjectCard({ images, title, badgeText, description, technologies, github, live, link }: ProjectCardProps) {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            {/* Make the entire card clickable by adding onClick */}
            <Card
                className="!bg-[#0E2342] !border-1 !rounded-xl cursor-pointer hover:!scale-[1.02]"
                color="pink"
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{ width: '353px' }}
                onClick={open} // This will open the modal when the card is clicked
            >
                <Card.Section className='!p-3'>
                    {images.length > 0 && ( // Check if there are images
                        <Image
                            key={0} // Key for the first image
                            style={{
                                width: '100%', // Make the image fill the width of the container
                                height: '200px', // Set a fixed height (or adjust as needed)
                                objectFit: 'contain', // Ensure the image covers the area
                            }}
                            src={images[0] || "https://via.placeholder.com/200"} // Use the first image or a placeholder
                            alt={`${title} Image`} // Better alt text for accessibility
                        />
                    )}
                </Card.Section>

                <Group justify="space-between" mt="xs" mb="xs">
                    <div>
                        <Text c="#DF4B33" fw={900} style={{ display: 'flex', alignItems: 'center' }}>
                            {title || "Project Title"}
                            <Badge
                                className='!gap-2'
                                style={{ marginLeft: '10px' }} // Add margin for spacing
                                variant='outline'
                                color={live ? "green" : "#B92341"} // Change badge color based on live status
                                c="#ffff"
                                rightSection={
                                    <Indicator
                                        color={live ? "green" : "rgba(158, 8, 8, 1)"} // Change indicator color based on live status
                                        position="middle-end"
                                        withBorder
                                        processing
                                    />
                                }
                            >
                                {badgeText || (live ? "Live" : "Offline")} {/* Change badge text based on live status */}
                            </Badge>
                        </Text>
                    </div>
                </Group>

                <Text className="!text-justify" lineClamp={4} size="sm" c="#ffff">
                    {description || "Project description goes here."}
                </Text>

                {/* Add Technologies Display */}
                <Group justify="" mt="xs" mb="xs">
                    {technologies.map((tech: string, index: number) => (
                        <Badge className='!text-white' key={index} variant="outline" color="red" size="lg" radius="sm">
                            {tech}
                        </Badge>
                    ))}
                </Group>

                {/* GitHub and Live Link Buttons */}
                <Group mt="md">
                    <Button color="#B91C1C" fullWidth radius="md" component="a" href={github} target="_blank" rel="noopener noreferrer">
                        View code
                    </Button>
                    {live && (
                        <Button onClick={(e) => { e.stopPropagation(); open(); }} color="#4A6D6F" fullWidth radius="md">
                            View More
                        </Button>
                    )}
                </Group>
            </Card>

            {/* Modal for full project view */}
            <FullProjectView
                opened={opened}
                close={close}
                images={images} // Pass image prop
                title={title} // Pass title prop
                description={description} // Pass description prop
                technologies={technologies} // Pass technologies prop
                github={github} // Pass GitHub link
                live={live} // Pass live status
                link={link} // Pass optional live link 
            />
        </>
    );
}

export default ProjectCard;
