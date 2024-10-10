
import "./tools.css";

export const Tools = () => {
  // Direct paths to images stored in the public/assets folder
  const images = [
    "/assets/jenkins.png",
    "/assets/ansible.png",
    "/assets/kubernet.png",
    "/assets/python.png",
    "/assets/git.png", "/assets/jenkins.png",
    "/assets/ansible.png",
    "/assets/kubernet.png",
    "/assets/jenkins.png",
    "/assets/jenkins.png", "/assets/jenkins.png", "/assets/kubernet.png", "/assets/git.png",

  ];

  return (
    <div className="flex p-8 flex-col">
      <section id="toolPage">
        <div id="clients">
          <div className="toolsImgs">
            {images.map((image, index) => (
              <img
                className="toolsImg"
                key={index}
                src={image}
                alt={`Image ${index + 1}`} // Set alt text for accessibility
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
