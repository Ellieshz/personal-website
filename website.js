function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
}

setCurrentYear();

function setAbout() {
    const aboutSection = document.getElementById('about');
    
    // Array of paragraph content
    const paragraphs = [
        `Welcome! I’m Ellie, where deep cultural insights meet data-driven precision.`,
        `Trained in Cinema & Media Studies, I excel in observing societal trends and understanding the impact of technology on society.`,
        `With substantial industry experience in digital marketing and data analysis, I develop feasible strategies that transform complex data into valuable insights. I thrive on utilizing tools like Python, R, and Tableau to extract insights and guide decision-making, always with an eye toward innovation and societal well-being.`,
        `I'm fluent in English, Mandarin, and Cantonese, and continuously work on projects that explore the intersection of technology and ethics.`,
        `View my CV to see my professional trajectory and check out my projects to see these strategies in action.`
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
            link: 'https://github.com/Ellieshz/ecommerce-data-analysis', 
            explanation: 'This project analyzes Brazilian e-commerce data to uncover consumer behavior and purchasing patterns. The analysis uses a public dataset and is conducted using Jupyter Notebooks.'
        },
        {
            icon: 'icons/mental-health.png',
            link: 'https://github.com/Ellieshz/mental-health-analysis',
            explanation: 'This project focuses on analyzing mental health data, particularly exploring patterns in depression. The analysis is conducted using R on mental health statistics.'
        },
        {
            icon: 'icons/recommendation.png',
            link: 'https://github.com/Ellieshz/amazon-sales-data-analysis',
            explanation: 'This project analyzes Amazon sales data with a focus on fairness and customer behavior patterns. The analysis includes identifying biases and trends using SQL queries and visualizations through Tableau.'
        }
    ];

    // Loop through the array of projects
    projects.forEach(project => {
        // Create a container for each project
        const projectContainer = document.createElement('div');
        projectContainer.className = 'project-card';
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