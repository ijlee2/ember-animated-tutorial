import { Factory } from 'ember-cli-mirage';

// We assume that the probabilities add up to 1
const getRandomNumber = (pdf) => {
    const randomValue = Math.random();
    let sum = 0;

    for (let i = 0; i < pdf.length; i++) {
        const { value, probability } = pdf[i];

        sum += probability;

        if (randomValue < sum) {
            return value;
        }
    }
};

export default Factory.extend({
    degrees() {
        const index = Math.floor(allDegrees.length * Math.random());

        return [
            allDegrees[index],
        ];
    },

    experiences() {
        const numExperiences = getRandomNumber([
            {
                value: 1,
                probability: 0.15,
            },
            {
                value: 2,
                probability: 0.30,
            },
            {
                value: 3,
                probability: 0.35,
            },
            {
                value: 4,
                probability: 0.15,
            },
            {
                value: 5,
                probability: 0.05,
            },
        ]);
        const experiences = [];

        let usedIndices = [];

        while (experiences.length < numExperiences) {
            const index = Math.floor(allExperiences.length * Math.random());

            if (!usedIndices.includes(index)) {
                experiences.push(allExperiences[index]);

                usedIndices.push(index);
            }
        }

        return experiences;
    },


    /*************************************************************************************

        Model relationships

    *************************************************************************************/
    afterCreate(resume, server) {
        const availableSkillIds = server.db.skills.mapBy('id');

        const numSkills = getRandomNumber([
            {
                value: 3,
                probability: 0.05,
            },
            {
                value: 4,
                probability: 0.05,
            },
            {
                value: 5,
                probability: 0.10,
            },
            {
                value: 6,
                probability: 0.15,
            },
            {
                value: 7,
                probability: 0.15,
            },
            {
                value: 8,
                probability: 0.20,
            },
            {
                value: 9,
                probability: 0.10,
            },
            {
                value: 10,
                probability: 0.10,
            },
            {
                value: 11,
                probability: 0.05,
            },
            {
                value: 12,
                probability: 0.05,
            },
        ]);

        // Assign skills to the resume
        const skillIds = [];

        while (skillIds.length < numSkills) {
            const index = Math.floor(availableSkillIds.length * Math.random());
            const id = availableSkillIds[index];

            if (!skillIds.includes(id)) {
                skillIds.push(id);
            }
        }

        resume.skillIds = skillIds;

        // Save skills
        resume.save();
    },
});

const allDegrees = [
    'BA, Advertising',
    'BA, American Studies',
    'BA, Anthropology',
    'BA, Architecture',
    'BA, Art',
    'BA, Art History',
    'BA, Asian Studies',
    'BA, Business',
    'BA, Chinese',
    'BA, Communication',
    'BA, Computer Science',
    'BA, English',
    'BA, European Studies',
    'BA, French',
    'BA, German',
    'BA, Government',
    'BA, History',
    'BA, Humanities',
    'BA, International Business',
    'BA, Journalism',
    'BA, Latin American Studies',
    'BA, Linguistics',
    'BA, Management',
    'BA, Marketing',
    'BA, Mathematics',
    'BA, Music',
    'BA, Nursing',
    'BA, Philosophy',
    'BA, Photography',
    'BA, Physics',
    'BA, Political Science',
    'BA, Psychology',
    'BA, Public Relations',
    'BA, Sociology',
    'BA, Social Work',
    'BA, Theatre Studies',
    'BS, Accounting',
    'BS, Aerospace Engineering',
    'BS, Architectural Engineering',
    'BS, Astronomy',
    'BS, Biochemistry',
    'BS, Biology',
    'BS, Biomedical Engineering',
    'BS, Chemical Engineering',
    'BS, Chemistry',
    'BS, Civil Engineering',
    'BS, Computer Science',
    'BS, Economics',
    'BS, Electrical and Computer Engineering',
    'BS, Geological Sciences',
    'BS, Human Development and Family Services',
    'BS, Finance',
    'BS, Information and Computer Science',
    'BS, Kinesiology',
    'BS, Mathematics',
    'BS, Mechanical Engineering',
    'BS, Neuroscience',
    'BS, Petroleum Engineering',
    'BS, Physics',
    'BS, Pre-Pharmacy',
    'BS, Statistics',
    'BS, Supply Chain Management',
    'Certificate, Full Stack Web Development',
    'Certificate, Project Management Professional',
    'MA, Architecture',
    'MA, Educational Psychology',
    'MA, German',
    'MA, Psychology',
    'MA, Public Affairs',
    'MS, Accounting',
    'MS, Aerospace Engineering',
    'MS, Business Administration',
    'MS, Civil Engineering',
    'MS, Finance',
    'MS, Information Studies',
    'MS, Mathematics',
    'MS, Mechanical Engineering',
    'MS, Statistics',
    'PhD, Computer Science',
    'PhD, Mathematics',
];

const allExperiences = [
    {
        position: 'Adjunct Professor',
        company: 'KA',
        achievements: [
            'Developed lessons and led at least one class each semester',
        ],
    },
    {
        position: 'Application Developer',
        company: 'ST',
        achievements: [
            'Builds enterprise software to improve manufacturing processes',
            'Debugs existing enterprise-level desktop, web, and mobile applications',
            'Analyzes data to come up with solutions for problems by using C# and Microsoft SQL Server',
        ],
    },
    {
        position: 'Application Engineer',
        company: '3D',
        achievements: [
            'Provided on-site and offsite training in object oriented programming, Python, and Geomagic API for clients and partners',
            'Provided technical demonstrations and proof of concepts with live customer data often gathered on-site',
        ],
    },
    {
        position: 'Assistant Manager',
        company: 'GA',
        achievements: [
            'Ensured successful completion of events, including birthdays, corporate events and festivals',
            'Coordinated events to meet the unique demands of the customers',
            'Communicated face-to-face with customers to book events and resolve issues',
        ],
    },
    {
        position: 'Associate Instructor',
        company: 'IN',
        achievements: [
            'Designed, revised, and implemented innovative proficiency-oriented curriculua for German language classes',
            'Coordinated scheduling with numerous clients and provided regular feedback and updates on students\' progress',
            'Observed team members and provided written feedback on classroom practice and performance',
        ],
    },
    {
        position: 'Backend Developer',
        company: 'CH',
        achievements: [
            'Engineered the database through Sequelize, the database was configured to update on user login',
            'Utilized the New York Times API to create the news scroller with relevant drug information',
            'Utilized the Google Maps API to display nearby pharmacies',
        ],
    },
    {
        position: 'Backend Developer',
        company: 'CO',
        achievements: [
            'Employed Google Web APIs to retrieve election information, verify addresses, and provide map to polling location',
            'Implemented Firebase user authentication',
        ],
    },
    {
        position: 'Backend Developer',
        company: 'JU',
        achievements: [
            'Created a database that handles users and authenticates them through login information and secure http-only cookies',
        ],
    },
    {
        position: 'Backend Developer',
        company: 'ST',
        achievements: [
            'Used Swing and AWT in Java to create a program capable of telling robust stories through story scripts',
        ],
    },
    {
        position: 'CAD Drafter',
        company: 'AD',
        achievements: [
            'Mastered v8i Spatial, spatialNET, AutoCAD, and Microstation to design HFC/Broadband networks',
            'Delivered completed projects in a production based environment',
        ],
    },
    {
        position: 'Court and Calendar Researcher',
        company: 'PA',
        achievements: [
            'Manages workflow for litigation across 11 domestic offices ensuring deadlines are always met, preventing malpractice',
            'Spearheads the implementation and oversight of new projects resulting in increased workflow efficiencies',
            'Principal team member to troubleshoot and problem solve issues providing superior customer service to internal team members',
            'Train and mentor junior staff to create a highly skilled team',
        ],
    },
    {
        position: 'Customer Relations Specialist',
        company: 'SI',
        achievements: [
            'Helped customers use our app, tracked money, and reported bugs that anyone might run into',
        ],
    },
    {
        position: 'Customer Support Engineer',
        company: 'CI',
        achievements: [
            'Resolved complex problems daily and complete root cause analyses for a variety of Data Center issues',
            'Engaged in crisis management while handling network outages and other high business impact scenarios',
            'Wrote internal documentation to disseminate subject matter expertise and facilitate knowledge transfer',
            'Created Python scripts to quickly identify known defects and gather relevant data',
        ],
    },
    {
        position: 'Developer',
        company: 'AR',
        achievements: [
            'Worked as one of the key developers on a blockchain project',
            'Rewrote functionality and made substantial UI overhauls to match designs and objectives from UX designers. (C++)',
            'Built from scratch and managed a full CICD pipeline for compile, testing, and deployment using Docker, Codefresh.io, Kubernetes, and Google Cloud Services, providing binaries/executables on cloud storage, build reports, and automated service deployment. Complex pod compositions were required to link blockchain services with traditional web services. (mostly bash and yaml)',
            'Built a perfomant, rubust, and responsive full blockchain navigation site (SPA) with React, Node, Mongo, Webpack, and ChainCoin. Built to adhere to designs and objectives from UX designers. (javascript)',
        ],
    },
    {
        position: 'Developer',
        company: 'DA',
        achievements: [
            'I actively work to maintain, update, and enhance our web app to fulfill business needs and to acommodate our clientele',
        ],
    },
    {
        position: 'Development Intern',
        company: 'UN',
        achievements: [
            'Worked on a full-stack JavaScript app for quick video captioning (React, Sass, Node, and Express)',
            'Built an IoT room schedule display with the Google Calendar API (MicroPython and Flask)',
            'Developed an interactive office map optimized for a touch TV',
        ],
    },
    {
        position: 'Digital Media Developer',
        company: 'AM',
        achievements: [
            'Developed a variety of web, disk-based, and mobile content, with a focus on mini-sites that supplemented textbooks',
        ],
    },
    {
        position: 'EMR Specialist',
        company: 'AU',
        achievements: [
            'Provides support through monthly rounding and check-ins with 7 clinics',
            'Trains and counsels new hires',
        ],
    },
    {
        position: 'Engineering Technician',
        company: 'SA',
        achievements: [
            'Process technician in a fast-paced manufacturing atmosphere',
            'Verification of equipment processes',
            'Performed planned and unplanned manufacturing equipment repairs',
        ],
    },
    {
        position: 'Fine Wine Specialist',
        company: 'GA',
        achievements: [
            'Coordinated entire wine inventory',
            'Managed all wine receiving, transfers and display',
            'Facilitated high end fine wine retail sales both to individual customers and restaurant services',
        ],
    },
    {
        position: 'Freelancer',
        company: 'FR',
        achievements: [
            'Worked on projects as diverse as animated videos, city websites, brochures, and wedding photoshoots',
            'Used Adobe CS to design ads on tight deadlines for daily print publication',
        ],
    },
    {
        position: 'Freelance Web Developer',
        company: 'FR',
        achievements: [
            'Creating an application with React and Authorization that will store events and email reminders specifically for those who compete in rodeos across the country',
        ],
    },
    {
        position: 'Freelance Web Developer',
        company: 'FR',
        achievements: [
            'Created a single page outdoor activities website using HTML, CSS, Bootstrap, Vanilla',
            'JavaScript that allows users to view adventurous tours, book tours, and leave the contacts',
        ],
    },
    {
        position: 'Frontend Developer',
        company: 'GR',
        achievements: [
            'Developed front-end page using Materialize & integrated Google Maps API to interact with Firebase',
        ],
    },
    {
        position: 'Frontend Developer',
        company: 'GR',
        achievements: [
            'Codeveloped front-end of project using Handlebars.js and Semantic-UI to connect to MySQL',
            'Provide a platform for users to add items to a central list based on authorizations',
            'Allows users to add items to a list that is updated for each viewer via socket.io',
        ],
    },
    {
        position: 'Frontend Developer',
        company: 'JA',
        achievements: [
            'Collaborate with two front-end developers on developing an application for the National Science Foundation using Ember.js, Sass, and Bootstrap',
            'Provide automated test coverage by writing unit, integration, and acceptance tests with QUnit. Translate designs and style guides provided by the UI/UX team into functional user interfaces, ensuring cross browser compatibility and performance using Bootstrap and Sass',
            'Use Mirage to mock user data for quicker development in non-production environments',
            'Participate in the Agile development process by updating the team on my progress during daily scrum calls and sprint planning',
        ],
    },
    {
        position: 'Frontend Developer',
        company: 'MO',
        achievements: [
            'Lead developer for all custom WordPress site development',
            'Conduct code reviews and training sessions with junior developers',
            'Develop dynamic and static websites using HTML, CSS, JS (ES6), PHP, and various web APIs',
            'Assist in QA efforts for all company-developed sites',
        ],
    },
    {
        position: 'Frontend Developer Manager',
        company: 'CL',
        achievements: [
            'Developed DNN, WordPress, and static websites using HTML, CSS, JavaScript/jQuery, and SQL',
            'Conducted one-on-one on reviews with front-end development team members',
            'Performed QA on managed projects',
            'Organized and lead training sessions for the front-end development team',
        ],
    },
    {
        position: 'Frontend Interactive Developer',
        company: 'SA',
        achievements: [
            'Develop emails and landing pages from Sketch, Photoshop, or Invision files with pixel perfect accuracy',
            'Code pages with jQuery and Ampscript, and leverage automation, dynamic content, data‑driven segmentation to execute highly dynamic, data‑driven campaigns',
            'Test functional and rendering quality for new solutions using Litmus and Browserstack',
        ],
    },
    {
        position: 'Full Stack Developer',
        company: 'CA',
        achievements: [
            'Build and connect various Swagger API\'s to an Angular application',
            'Building additional Angular components and services to create a seamless, interactive user experience',
        ],
    },
    {
        position: 'Full Stack Developer',
        company: 'IN',
        achievements: [
            'Utilizing a variety of tools and technologies to develop and expand web operations including Django, Python, C++, React, JS, Foundation, jQuery, AJAX, Apache, CentOS, MySQL, PostgreSQL, and AWS',
            'Leading projects including computational research web platforms, task automation, micro-services, internal tooling, and content management systems',
            'Implementation of REST API’s for piping data to micro-services',
            'Promoting continuous integration via deployment of servers and virtual machines while designing for scale',
            'Responsible for internal and external product documentation and tutorial sessions',
        ],
    },
    {
        position: 'Full Stack Developer',
        company: 'NO',
        achievements: [
            'Demonstrates MERN full stack application: React Frontend. Node / Express Backend. MongoDB',
            'GitHub Flow with Issues tied to Projects Kanban board',
            'Hosted on Heroku with Circle CI integration. Testing with Enzyme/Jest',
            'Conversion from Angular 7 version off the app',
        ],
    },
    {
        position: 'Full Stack Developer',
        company: 'RE',
        achievements: [
            'Engineered the database through MongoDB, the database was configured to store a user session',
            'Helped to create multiple components (sign-in, search, conteact pages) as well as suggestions for the UI',
        ],
    },
    {
        position: 'Full Stack Developer',
        company: 'ST',
        achievements: [
            'Responsible for large swaths of the product ranging from database work, routing, and web page management',
        ],
    },
    {
        position: 'Full Stack Web Developer',
        company: 'PS',
        achievements: [
            'Collaborated with product owners and designers to create a cohesive online magazine experience',
            'Extended WordPress with custom plugins, enabling editors to deploy responsive auto­updating pages',
            'Developed custom WordPress theme using HTML5, CSS3, JavaScript, PHP',
            'Utilized Node.js and Bower for package management and Gulp minification to deploy updates',
        ],
    },
    {
        position: 'HR Specialist',
        company: 'TA',
        achievements: [
            'Assisted Head of People Operations with HR projects',
            'Built out custom Performance Review forms for 100+ employees',
            'Planned company events by working with budgets, vendors, and coordinating logistics',
            'Supported recruiter with interview scheduling, posting jobs, and candidate communications',
        ],
    },
    {
        position: 'Implementation Consultant',
        company: 'FA',
        achievements: [
            'Team lead of the site\'s nine-person Production Support team',
            'Lead developer responsible for using VB.NET and SQL to program modules to receive individual income tax returns/payments and to track associated financial transactions',
            'Used SQL to create reports of system and financial activity',
            'Taught training sessions to impart technical expertise to other developers',
            'Lead project\'s converted data testing and comprehensive end-to-end testing runs',
        ],
    },
    {
        position: 'Independent Research',
        company: 'TE',
        achievements: [
            'Self-guided research and development of a novel technology',
            'Presented findings to peers and professionals through a poster presentation and research paper',
        ],
    },
    {
        position: 'IT Consultant',
        company: 'FC',
        achievements: [
            'Managed various servers\' hardware & OS including installation, maintenance and backup',
            'Provided quotes for clients\' workstation or server needs within budget; built, tested and deployed the machince once quotes were approved',
            'Created and revised documentation for clients',
        ],
    },
    {
        position: 'IT Manager',
        company: 'VA',
        achievements: [
            'Installed and maintained all hardware and software for internal departments',
            'Troubleshooting and system updates for Windows OS',
            'Managed network administration and security protocols',
        ],
    },
    {
        position: 'IT Support Technician',
        company: 'UN',
        achievements: [
            'Provided IT support to staff and students in an academic setting',
            'Worked as a member of team to deliver solutions to complex technology needs',
        ],
    },
    {
        position: 'Java Application Support',
        company: 'AC',
        achievements: [
            'Helped produce 100% accurate tax reports for the IRS and the New York Stock Exchange',
            'Saved the client millions in costs by resolving technical issues',
        ],
    },
    {
        position: 'Java Developer',
        company: 'HE',
        achievements: [
            'Expanded Social Sign On functionality to enable customers to sign in using Facebook, Twitter, Google, Yahoo, or LinkedIn credentials and to support multiple countries and languages',
            'Reduced account registration time by 25% and reduced password reset requests by 10%',
            'Managed the authorization and authentication process to ensure secure sign on',
        ],
    },
    {
        position: 'Junior Full Stack Web Developer',
        company: 'TH',
        achievements: [
            'Developed full-stack web applications for clients in the real estate and legal services industries, using Sailsjs, a Nodejs framework',
            'Develops integrations with 3rd party APIs, such Quickbooks (accounting), and zipLogix (real estate)',
            'Provided support in the open-source community for Sailsjs framework and Waterline ORM',
        ],
    },
    {
        position: 'Member Order Specialist',
        company: 'SA',
        achievements: [
            'Streamlined processes necessary to fill business\'s order demands on a daily basis',
            'Collaborated with multiple departments in advance to meet order\'s needs when due',
        ],
    },
    {
        position: 'Network & Systems Administrator',
        company: 'BO',
        achievements: [
            'Completed a technological overhaul of Texas\' largest independent bookstore',
            'Everything from server maintenance (AIX, Linux, Windows) to workstation customization (Linus, Windows, Mac) from corporate requirements (OpenVPN, in-store and remote POS, RAID file repositories) to customer wants (guest WAPs, secure kiosks, Drupal and WordPress websites)',
        ],
    },
    {
        position: 'Orientation Advisor',
        company: 'TH',
        achievements: [
            'Guided incoming freshman college students through orientation procedures and events',
            'Arranged and facilitated guided tours of the university campus',
        ],
    },
    {
        position: 'Pharmacy Technician',
        company: 'WA',
        achievements: [
            'Received medication orders, measuring quantities, mixing ingredients, packaging medication, and updating records',
            'Assisted in keeping physical inventory up to date',
        ],
    },
    {
        position: 'Production Manager',
        company: 'VA',
        achievements: [
            'Implemented daily production schedules to meet order demands and maintain appropriate inventory levels',
            'Oversaw the production and delivery of daily shipments, as well as the receiving, inspection, and inventory of all supplies',
        ],
    },
    {
        position: 'Production Support',
        company: 'NE',
        achievements: [
            'Built new refund request process for taxpayers on the portal',
            'Implemented software service packs, reconciling new functionality with existing code and performing regression testing',
        ],
    },
    {
        position: 'Production Support Lead',
        company: 'MY',
        achievements: [
            'Responsible for building modernized e-File back-end processing each tax season',
            'Developed a fraud detection module, saving the District millions of dollars each year',
            'Corrected and enhanced live processes in a high-pressure environment with a direct and immediate impact on the District\'s taxpayers',
            'Programmed using VB.NET, SQL, and HTML',
        ],
    },
    {
        position: 'Professional Tutor',
        company: 'RE',
        achievements: [
            'Delivered high-quality, individualized instruction in test preparation, high school math, and languages (German, Latin, Chinese)',
            'Coordinated scheduling with numerous clients and provided regular feedback and updates on student progress',
        ],
    },
    {
        position: 'Project Manager',
        company: 'SI',
        achievements: [
            'Managed teams of front-end and back-end developers to create and maintain custom content management systems for our clients',
            'Trained and led internal and freelance teams on content entry and content management system use for all assessment-related projects',
            'Negotiated business terms and pricing with clients',
        ],
    },
    {
        position: 'Research Engineer',
        company: 'ST',
        achievements: [
            'Researcher and lead designer on successful Oculus Rift research study evaluating potential applications of Virtual Reality Technology within Industrial Psychology',
            'Utilized Unreal Engine 4 as development platform for the creation of virtual environments participants experienced and were tested on',
            'Programmed using C++ and javascript to implement environment mechanics and log user actions',
        ],
    },
    {
        position: 'Resident Hall Council Vice President',
        company: 'TH',
        achievements: [
            'Coordinated all events for student and Resident Assistant organizations, providing funding, approving events and programming proposed by students and RAs',
            'Maintained the university budget for student and Resident Assistant events',
        ],
    },
    {
        position: 'Software Engineer',
        company: 'KU',
        achievements: [
            'Developed and deployed C# .NET integrations with embedded factory systems. SQL-heavy development and cutting edge front-end frameworks supported workers in time-sensitive operations',
            'Maintained private NPM and NuGet registries for internal packages to encourage code reuse',
            'Constantly reiterated with project owners, QA, and designers to deliver software exceeding customer expectations within tight deadlines',
        ],
    },
    {
        position: 'Software Engineer',
        company: 'TH',
        achievements: [
            'Set-up and configure Concourse CI/CD pipeline for continuous automation testings on B2C sites to catch functional defects',
            'Design and optimize browser test report data structure to enable flexible use of nesting test suites for Selenium/Webdriver.io and Mocha browser tests',
            'Implement GraphQL with Apollo and Express server for internal tool\'s Graphical User Interface backend',
        ],
    },
    {
        position: 'Teaching Assistant',
        company: 'UN',
        achievements: [
            'Lectured, graded, and tutored for undergraduate level mechanical engineering classes',
            'Developed strong communication and teamwork skills',
        ],
    },
    {
        position: 'Team Lead',
        company: 'RI',
        achievements: [
            'Demonstrates the use of HTML, CSS and JavaScript. Firebase persistence',
            'AJAX/API calls from Google Maps and OpenData Crime API',
            'Github and Trello for project management',
        ],
    },
    {
        position: 'Tech Lead',
        company: 'CO',
        achievements: [
            'Wrote HTML templates, configured domains, and set up API integrations for mass emails',
            'Created lead collection and polling plugins for the company\'s WordPress websites',
            'Created WordPress themes',
            'Contributed to an advanced Node-based mailing management tool',
            'Created a GoLang application to manage push notifications to mobile devices',
            'Created React-based user interfaces',
            'Collaborated with outside vendors and occasionally supervised other employees',
        ],
    },
    {
        position: 'Technical Support Manager',
        company: 'AL',
        achievements: [
            'Oversaw technical support team and software training resources',
            'Helped facilitate communications with dev and qa teams to make sure critical issues were handled appropriately',
        ],
    },
    {
        position: 'Technical Staff Assistant',
        company: 'AP',
        achievements: [
            'Managed the design, documentation, assembly and implementation of multi-million dollar Navy defense projects',
            'Primary successes in problem resolution, staff development and relationship management',
            'Recipient of the Excellence Award for 2012, an annual peer nominated award for outstanding support',
            'Increased output 50% by evaluating and implementing assembly process improvements',
            'Decreased manufacturing errors 85% by developing an effective training program for technical staff',
        ],
    },
    {
        position: 'Technical Staff Associate',
        company: 'AP',
        achievements: [
            'Served as technical lead for three multi-million dollar Navy defense projects',
            'Supervised team of up to eight technicians',
            'Influenced system design increasing ease of operation, maintainability and supportability',
        ],
    },
    {
        position: 'Undergraduate Research Assistant',
        company: 'TE',
        achievements: [
            'Worked under a graduate student in an internationally diverse group',
            'Aided in research on thin-film, thermoelectric nanocomposites',
        ],
    },
    {
        position: 'Web Application Developer',
        company: 'RI',
        achievements: [
            'Responsible for all of the business\'s public-facing web sites',
            'Created employee-facing projects, including a "charity auction" and "send a card" web apps',
        ],
    },
    {
        position: 'Web Developer',
        company: 'AG',
        achievements: [
            'Built B2B web-based marketing tools using Python, Django, jQuery, JS, HTML, CSS, MySQL, Apache, and Bootstrap',
            'Developed Django-based CMS system for internal sales team including salesforce API',
            'Created interactive wireframes, mockups, and executable prototypes in a fast-paced environment',
        ],
    },
    {
        position: 'Web/Mobile Developer',
        company: 'LU',
        achievements: [
            'Developed both web & mobile application front-ends using React & React Native',
            'Implemented chat feature & CRUD operations using Firebase',
        ],
    },
    {
        position: 'Website Management Intern',
        company: 'TH',
        achievements: [
            'Researched effective screen readers and pitched a cost-benefit analysis for issues found on the website',
            'Conducted a clean layouts audit for mobile devices, applying over 50 layout fixes to the website',
            'Identified common user roles to analyze motive and journey to find key information',
            'Led weekly, virtual meetings with the team to track project progress using JIRA',
        ],
    },
];