function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
}

// Call the function to set the current year
setCurrentYear();

function setAbout() {
    // const aboutSection = document.getElementById('about');
    // const aboutText = document.createElement('p');
    // aboutText.textContent = `I'm Ellie Shilin Zhang, a dedicated marketing analyst with a strong foundation in e-commerce, digital marketing, and data analytics. With a Master’s degree in Global Marketing Management from Boston University and diverse professional experience across industries, I’m passionate about leveraging data-driven strategies to drive business growth. My expertise ranges from customer segmentation and mobile optimization to managing viral content campaigns. I thrive on utilizing tools like Python, R, and Tableau to extract insights and guide decision-making, always with an eye toward innovation and societal well-being. I'm fluent in English, Mandarin, and Cantonese, and continuously work on projects that explore the intersection of technology and ethics, such as analyzing consumer behavior and addressing biases in recommendation systems.`;
    // aboutSection.appendChild(aboutText);
    const aboutSection = document.getElementById('about');
    
    // Array of paragraph content
    const paragraphs = [
        `I'm Ellie Shilin Zhang, a dedicated marketing analyst with a strong foundation in e-commerce, digital marketing, and data analytics.`,
        `With a Master’s degree in Global Marketing Management from Boston University and diverse professional experience across industries, I’m passionate about leveraging data-driven strategies to drive business growth.`,
        `My expertise ranges from customer segmentation and mobile optimization to managing viral content campaigns. I thrive on utilizing tools like Python, R, and Tableau to extract insights and guide decision-making, always with an eye toward innovation and societal well-being.`,
        `I'm fluent in English, Mandarin, and Cantonese, and continuously work on projects that explore the intersection of technology and ethics, such as analyzing consumer behavior and addressing biases in recommendation systems.`
    ];

    // Loop through the array and create a <p> element for each paragraph
    paragraphs.forEach(text => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        aboutSection.appendChild(paragraph);
    });
}

setAbout();

function addProjectIcons() {
    const projectSection = document.getElementById('project-icons');
    
    // Array of projects containing the icon file name, link, and explanation
    const projects = [
        {
            icon: 'icons/e-commerce.png',
            link: 'https://github.com/Ellieshz/ecommerce-data-analysis', // Update with actual link
            explanation: 'Project 1: Description of your first project goes here.'
        },
        {
            icon: 'icons/e-commerce.png',
            link: 'https://github.com/Ellieshz/ecommerce-data-analysis', // Update with actual link
            explanation: 'Project 2: Description of your second project goes here.'
        },
        {
            icon: 'icons/e-commerce.png',
            link: 'https://github.com/Ellieshz/ecommerce-data-analysis', // Update with actual link
            explanation: 'Project 3: Description of your third project goes here.'
        }
    ];

    // Loop through the array of projects
    projects.forEach(project => {
        // Create a container for each project
        const projectContainer = document.createElement('div');
        projectContainer.style.textAlign = 'center'; // Center align text
        
        // Create an anchor element for the project icon
        const projectLink = document.createElement('a');
        projectLink.href = project.link;  // Link to the project
        projectLink.target = '_blank'; // Open in new tab

        // Create an image element for the project icon
        const projectIcon = document.createElement('img');
        projectIcon.src = project.icon;  // Path to the icon image
        projectIcon.alt = 'Project Icon'; // Alternate text for the image
        projectIcon.style.width = '48px'; // Adjust size as needed
        projectIcon.style.height = '48px'; // Adjust size as needed

        // Append the icon to the link
        projectLink.appendChild(projectIcon);
        // Create a paragraph for the project explanation
        const projectExplanation = document.createElement('p');
        projectExplanation.textContent = project.explanation;

        // Append the link and explanation to the project container
        projectContainer.appendChild(projectLink);
        projectContainer.appendChild(projectExplanation);
        // Append the project container to the Projects section
        projectSection.appendChild(projectContainer);
    });
}


addProjectIcons();