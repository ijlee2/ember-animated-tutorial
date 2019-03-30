# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)
require 'faker'


# Create students
students = []

50.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name

    area_code = Faker::Number.leading_zero_number(3)
    number1 = Faker::Number.leading_zero_number(3)
    number2 = Faker::Number.leading_zero_number(4)

    # Create an image 80% of the time
    image_url = rand() >= 0.2 ? Faker::Avatar.image : ''

    students << Student.create!(
        first_name: first_name,
        last_name: last_name,
        email: Faker::Internet.email("#{first_name} #{last_name}", '_'),
        phone: "(#{area_code}) #{number1}-#{number2}",
        image_url: image_url
    )
end


# Assign a resume to each student
resumes = []

students.each do |student|
    resumes << Resume.create!(
        student_id: student.id
    )
end


# Create contents for each resume
def get_random_number(pdf)
    randomValue = rand()
    sum = 0

    for i in 0...pdf.size do
        sum += pdf[i][:probability]

        if (randomValue < sum)
            return pdf[i][:value]
        end
    end
end

allDegrees = [
    {
        name: 'BA, Advertising'
    },
    {
        name: 'BA, American Studies'
    },
    {
        name: 'BA, Anthropology'
    },
    {
        name: 'BA, Architecture'
    },
    {
        name: 'BA, Art'
    },
    {
        name: 'BA, Art History'
    },
    {
        name: 'BA, Asian Studies'
    },
    {
        name: 'BA, Business'
    },
    {
        name: 'BA, Chinese'
    },
    {
        name: 'BA, Communication'
    },
    {
        name: 'BA, Computer Science'
    },
    {
        name: 'BA, English'
    },
    {
        name: 'BA, European Studies'
    },
    {
        name: 'BA, French'
    },
    {
        name: 'BA, German'
    },
    {
        name: 'BA, Government'
    },
    {
        name: 'BA, History'
    },
    {
        name: 'BA, Humanities'
    },
    {
        name: 'BA, International Business'
    },
    {
        name: 'BA, Journalism'
    },
    {
        name: 'BA, Latin American Studies'
    },
    {
        name: 'BA, Linguistics'
    },
    {
        name: 'BA, Management'
    },
    {
        name: 'BA, Marketing'
    },
    {
        name: 'BA, Mathematics'
    },
    {
        name: 'BA, Music'
    },
    {
        name: 'BA, Nursing'
    },
    {
        name: 'BA, Philosophy'
    },
    {
        name: 'BA, Photography'
    },
    {
        name: 'BA, Physics'
    },
    {
        name: 'BA, Political Science'
    },
    {
        name: 'BA, Psychology'
    },
    {
        name: 'BA, Public Relations'
    },
    {
        name: 'BA, Sociology'
    },
    {
        name: 'BA, Social Work'
    },
    {
        name: 'BA, Theatre Studies'
    },
    {
        name: 'BS, Accounting'
    },
    {
        name: 'BS, Aerospace Engineering'
    },
    {
        name: 'BS, Architectural Engineering'
    },
    {
        name: 'BS, Astronomy'
    },
    {
        name: 'BS, Biochemistry'
    },
    {
        name: 'BS, Biology'
    },
    {
        name: 'BS, Biomedical Engineering'
    },
    {
        name: 'BS, Chemical Engineering'
    },
    {
        name: 'BS, Chemistry'
    },
    {
        name: 'BS, Civil Engineering'
    },
    {
        name: 'BS, Computer Science'
    },
    {
        name: 'BS, Economics'
    },
    {
        name: 'BS, Electrical and Computer Engineering'
    },
    {
        name: 'BS, Geological Sciences'
    },
    {
        name: 'BS, Human Development and Family Services'
    },
    {
        name: 'BS, Finance'
    },
    {
        name: 'BS, Information and Computer Science'
    },
    {
        name: 'BS, Kinesiology'
    },
    {
        name: 'BS, Mathematics'
    },
    {
        name: 'BS, Mechanical Engineering'
    },
    {
        name: 'BS, Neuroscience'
    },
    {
        name: 'BS, Petroleum Engineering'
    },
    {
        name: 'BS, Physics'
    },
    {
        name: 'BS, Pre-Pharmacy'
    },
    {
        name: 'BS, Statistics'
    },
    {
        name: 'BS, Supply Chain Management'
    },
    {
        name: 'Certificate, Full Stack Web Development'
    },
    {
        name: 'Certificate, Project Management Professional'
    },
    {
        name: 'MA, Architecture'
    },
    {
        name: 'MA, Educational Psychology'
    },
    {
        name: 'MA, German'
    },
    {
        name: 'MA, Psychology'
    },
    {
        name: 'MA, Public Affairs'
    },
    {
        name: 'MS, Accounting'
    },
    {
        name: 'MS, Aerospace Engineering'
    },
    {
        name: 'MS, Business Administration'
    },
    {
        name: 'MS, Civil Engineering'
    },
    {
        name: 'MS, Finance'
    },
    {
        name: 'MS, Information Studies'
    },
    {
        name: 'MS, Mathematics'
    },
    {
        name: 'MS, Mechanical Engineering'
    },
    {
        name: 'MS, Statistics'
    },
    {
        name: 'PhD, Computer Science'
    },
    {
        name: 'PhD, Mathematics'
    }
]

allExperiences = [
    {
        title: 'Adjunct Professor',
        company: 'KA',
        achievements: [
            'Developed lessons and led at least one class each semester',
        ]
    },
    {
        title: 'Application Developer',
        company: 'ST',
        achievements: [
            'Builds enterprise software to improve manufacturing processes',
            'Debugs existing enterprise-level desktop, web, and mobile applications',
            'Analyzes data to come up with solutions for problems by using C# and Microsoft SQL Server',
        ]
    },
    {
        title: 'Application Engineer',
        company: '3D',
        achievements: [
            'Provided on-site and offsite training in object oriented programming, Python, and Geomagic API for clients and partners',
            'Provided technical demonstrations and proof of concepts with live customer data often gathered on-site',
        ]
    },
    {
        title: 'Assistant Manager',
        company: 'GA',
        achievements: [
            'Ensured successful completion of events, including birthdays, corporate events and festivals',
            'Coordinated events to meet the unique demands of the customers',
            'Communicated face-to-face with customers to book events and resolve issues',
        ]
    },
    {
        title: 'Associate Instructor',
        company: 'IN',
        achievements: [
            'Designed, revised, and implemented innovative proficiency-oriented curriculua for German language classes',
            'Coordinated scheduling with numerous clients and provided regular feedback and updates on students\' progress',
            'Observed team members and provided written feedback on classroom practice and performance',
        ]
    },
    {
        title: 'Associate Software Engineer',
        company: 'NE',
        achievements: [
            'Developed software tools in Python to process raw transit data for ingestion into the prediction system',
            'Developed internal and external web tools in Java and JavaScript used by passengers and QA analysts to visualize transit vehicle positions',
        ]
    },
    {
        title: 'Backend Developer',
        company: 'CH',
        achievements: [
            'Engineered the database through Sequelize, the database was configured to update on user login',
            'Utilized the New York Times API to create the news scroller with relevant drug information',
            'Utilized the Google Maps API to display nearby pharmacies',
        ]
    },
    {
        title: 'Backend Developer',
        company: 'CO',
        achievements: [
            'Employed Google Web APIs to retrieve election information, verify addresses, and provide map to polling location',
            'Implemented Firebase user authentication',
        ]
    },
    {
        title: 'Backend Developer',
        company: 'JU',
        achievements: [
            'Created a database that handles users and authenticates them through login information and secure http-only cookies',
        ]
    },
    {
        title: 'Backend Developer',
        company: 'ST',
        achievements: [
            'Used Swing and AWT in Java to create a program capable of telling robust stories through story scripts',
        ]
    },
    {
        title: 'CAD Drafter',
        company: 'AD',
        achievements: [
            'Mastered v8i Spatial, spatialNET, AutoCAD, and Microstation to design HFC/Broadband networks',
            'Delivered completed projects in a production based environment',
        ]
    },
    {
        title: 'Court and Calendar Researcher',
        company: 'PA',
        achievements: [
            'Manages workflow for litigation across 11 domestic offices ensuring deadlines are always met, preventing malpractice',
            'Spearheads the implementation and oversight of new projects resulting in increased workflow efficiencies',
            'Principal team member to troubleshoot and problem solve issues providing superior customer service to internal team members',
            'Train and mentor junior staff to create a highly skilled team',
        ]
    },
    {
        title: 'Customer Relations Specialist',
        company: 'SI',
        achievements: [
            'Helped customers use our app, tracked money, and reported bugs that anyone might run into',
        ]
    },
    {
        title: 'Customer Support Engineer',
        company: 'CI',
        achievements: [
            'Resolved complex problems daily and complete root cause analyses for a variety of Data Center issues',
            'Engaged in crisis management while handling network outages and other high business impact scenarios',
            'Wrote internal documentation to disseminate subject matter expertise and facilitate knowledge transfer',
            'Created Python scripts to quickly identify known defects and gather relevant data',
        ]
    },
    {
        title: 'Developer',
        company: 'AR',
        achievements: [
            'Worked as one of the key developers on a blockchain project',
            'Rewrote functionality and made substantial UI overhauls to match designs and objectives from UX designers. (C++)',
            'Built from scratch and managed a full CICD pipeline for compile, testing, and deployment using Docker, Codefresh.io, Kubernetes, and Google Cloud Services, providing binaries/executables on cloud storage, build reports, and automated service deployment. Complex pod compositions were required to link blockchain services with traditional web services. (mostly bash and yaml)',
            'Built a perfomant, rubust, and responsive full blockchain navigation site (SPA) with React, Node, Mongo, Webpack, and ChainCoin. Built to adhere to designs and objectives from UX designers. (javascript)',
        ]
    },
    {
        title: 'Developer',
        company: 'DA',
        achievements: [
            'I actively work to maintain, update, and enhance our web app to fulfill business needs and to acommodate our clientele',
        ]
    },
    {
        title: 'Development Intern',
        company: 'UN',
        achievements: [
            'Worked on a full-stack JavaScript app for quick video captioning (React, Sass, Node, and Express)',
            'Built an IoT room schedule display with the Google Calendar API (MicroPython and Flask)',
            'Developed an interactive office map optimized for a touch TV',
        ]
    },
    {
        title: 'Digital Media Developer',
        company: 'AM',
        achievements: [
            'Developed a variety of web, disk-based, and mobile content, with a focus on mini-sites that supplemented textbooks',
        ]
    },
    {
        title: 'Ember Developer',
        company: 'SO',
        achievements: [
            'Worked primarily with Ember.js with a remote team',
            'Styled web pages from designs/mock-ups using Sass',
            'Create Acceptance/Integration test for app using QUnit',
            'Used Jira for ticket management and followed a Kanban style workflow',
        ]
    },
    {
        title: 'EMR Specialist',
        company: 'AU',
        achievements: [
            'Provides support through monthly rounding and check-ins with 7 clinics',
            'Trains and counsels new hires',
        ]
    },
    {
        title: 'Engineering Technician',
        company: 'SA',
        achievements: [
            'Process technician in a fast-paced manufacturing atmosphere',
            'Verification of equipment processes',
            'Performed planned and unplanned manufacturing equipment repairs',
        ]
    },
    {
        title: 'Fine Wine Specialist',
        company: 'GA',
        achievements: [
            'Coordinated entire wine inventory',
            'Managed all wine receiving, transfers and display',
            'Facilitated high end fine wine retail sales both to individual customers and restaurant services',
        ]
    },
    {
        title: 'Freelancer',
        company: 'FR',
        achievements: [
            'Worked on projects as diverse as animated videos, city websites, brochures, and wedding photoshoots',
            'Used Adobe CS to design ads on tight deadlines for daily print publication',
        ]
    },
    {
        title: 'Freelance Web Developer',
        company: 'FR',
        achievements: [
            'Creating an application with React and Authorization that will store events and email reminders specifically for those who compete in rodeos across the country',
        ]
    },
    {
        title: 'Freelance Web Developer',
        company: 'FR',
        achievements: [
            'Created a single page outdoor activities website using HTML, CSS, Bootstrap, Vanilla',
            'JavaScript that allows users to view adventurous tours, book tours, and leave the contacts',
        ]
    },
    {
        title: 'Frontend Developer',
        company: 'GR',
        achievements: [
            'Developed front-end page using Materialize & integrated Google Maps API to interact with Firebase',
        ]
    },
    {
        title: 'Frontend Developer',
        company: 'GR',
        achievements: [
            'Codeveloped front-end of project using Handlebars.js and Semantic-UI to connect to MySQL',
            'Provide a platform for users to add items to a central list based on authorizations',
            'Allows users to add items to a list that is updated for each viewer via socket.io',
        ]
    },
    {
        title: 'Frontend Developer',
        company: 'JA',
        achievements: [
            'Collaborate with two front-end developers on developing an application for the National Science Foundation using Ember.js, Sass, and Bootstrap',
            'Provide automated test coverage by writing unit, integration, and acceptance tests with QUnit. Translate designs and style guides provided by the UI/UX team into functional user interfaces, ensuring cross browser compatibility and performance using Bootstrap and Sass',
            'Use Mirage to mock user data for quicker development in non-production environments',
            'Participate in the Agile development process by updating the team on my progress during daily scrum calls and sprint planning',
        ]
    },
    {
        title: 'Frontend Developer',
        company: 'MO',
        achievements: [
            'Lead developer for all custom WordPress site development',
            'Conduct code reviews and training sessions with junior developers',
            'Develop dynamic and static websites using HTML, CSS, JS (ES6), PHP, and various web APIs',
            'Assist in QA efforts for all company-developed sites',
        ]
    },
    {
        title: 'Frontend Developer Manager',
        company: 'CL',
        achievements: [
            'Developed DNN, WordPress, and static websites using HTML, CSS, JavaScript/jQuery, and SQL',
            'Conducted one-on-one on reviews with front-end development team members',
            'Performed QA on managed projects',
            'Organized and lead training sessions for the front-end development team',
        ]
    },
    {
        title: 'Frontend Interactive Developer',
        company: 'SA',
        achievements: [
            'Develop emails and landing pages from Sketch, Photoshop, or Invision files with pixel perfect accuracy',
            'Code pages with jQuery and Ampscript, and leverage automation, dynamic content, data‑driven segmentation to execute highly dynamic, data‑driven campaigns',
            'Test functional and rendering quality for new solutions using Litmus and Browserstack',
        ]
    },
    {
        title: 'Frontend Software Engineer',
        company: 'PA',
        achievements: [
            'Build up a robust, scalable front-end infrastructure that supports our developers and enhances our product for customers',
            'Work closely with UX Design, being passionate about supporting a design system and component guide that allow our developers and UX designers to build a consistent and beautiful interface',
        ]
    },
    {
        title: 'Full Stack Developer',
        company: 'CA',
        achievements: [
            'Build and connect various Swagger API\'s to an Angular application',
            'Building additional Angular components and services to create a seamless, interactive user experience',
        ]
    },
    {
        title: 'Full Stack Developer',
        company: 'IN',
        achievements: [
            'Utilizing a variety of tools and technologies to develop and expand web operations including Django, Python, C++, React, JS, Foundation, jQuery, AJAX, Apache, CentOS, MySQL, PostgreSQL, and AWS',
            'Leading projects including computational research web platforms, task automation, micro-services, internal tooling, and content management systems',
            'Implementation of REST API’s for piping data to micro-services',
            'Promoting continuous integration via deployment of servers and virtual machines while designing for scale',
            'Responsible for internal and external product documentation and tutorial sessions',
        ]
    },
    {
        title: 'Full Stack Developer',
        company: 'KH',
        achievements: [
            'Transitioned the product from a vanilla server-rendered Ruby on Rails app to an Ember front-end served by a Rails API',
            'Collaborated with the development and product teams on product direction, user experience and interface design within the context of an iterative, agile process',
        ]
    },
    {
        title: 'Full Stack Developer',
        company: 'NO',
        achievements: [
            'Demonstrates MERN full stack application: React Frontend. Node / Express Backend. MongoDB',
            'GitHub Flow with Issues tied to Projects Kanban board',
            'Hosted on Heroku with Circle CI integration. Testing with Enzyme/Jest',
            'Conversion from Angular 7 version off the app',
        ]
    },
    {
        title: 'Full Stack Developer',
        company: 'RE',
        achievements: [
            'Engineered the database through MongoDB, the database was configured to store a user session',
            'Helped to create multiple components (sign-in, search, conteact pages) as well as suggestions for the UI',
        ]
    },
    {
        title: 'Full Stack Developer',
        company: 'ST',
        achievements: [
            'Responsible for large swaths of the product ranging from database work, routing, and web page management',
        ]
    },
    {
        title: 'Full Stack Developer',
        company: 'TH',
        achievements: [
            'Building amazing scalable applications in Ruby, Rails, JavaScript, HTML, CSS and Pixie Dust',
        ]
    },
    {
        title: 'Full Stack Web Developer',
        company: 'PS',
        achievements: [
            'Collaborated with product owners and designers to create a cohesive online magazine experience',
            'Extended WordPress with custom plugins, enabling editors to deploy responsive auto­updating pages',
            'Developed custom WordPress theme using HTML5, CSS3, JavaScript, PHP',
            'Utilized Node.js and Bower for package management and Gulp minification to deploy updates',
        ]
    },
    {
        title: 'HR Specialist',
        company: 'TA',
        achievements: [
            'Assisted Head of People Operations with HR projects',
            'Built out custom Performance Review forms for 100+ employees',
            'Planned company events by working with budgets, vendors, and coordinating logistics',
            'Supported recruiter with interview scheduling, posting jobs, and candidate communications',
        ]
    },
    {
        title: 'Implementation Consultant',
        company: 'FA',
        achievements: [
            'Team lead of the site\'s nine-person Production Support team',
            'Lead developer responsible for using VB.NET and SQL to program modules to receive individual income tax returns/payments and to track associated financial transactions',
            'Used SQL to create reports of system and financial activity',
            'Taught training sessions to impart technical expertise to other developers',
            'Lead project\'s converted data testing and comprehensive end-to-end testing runs',
        ]
    },
    {
        title: 'Independent Research',
        company: 'TE',
        achievements: [
            'Self-guided research and development of a novel technology',
            'Presented findings to peers and professionals through a poster presentation and research paper',
        ]
    },
    {
        title: 'IT Consultant',
        company: 'FC',
        achievements: [
            'Managed various servers\' hardware & OS including installation, maintenance and backup',
            'Provided quotes for clients\' workstation or server needs within budget; built, tested and deployed the machince once quotes were approved',
            'Created and revised documentation for clients',
        ]
    },
    {
        title: 'IT Manager',
        company: 'VA',
        achievements: [
            'Installed and maintained all hardware and software for internal departments',
            'Troubleshooting and system updates for Windows OS',
            'Managed network administration and security protocols',
        ]
    },
    {
        title: 'IT Support Technician',
        company: 'UN',
        achievements: [
            'Provided IT support to staff and students in an academic setting',
            'Worked as a member of team to deliver solutions to complex technology needs',
        ]
    },
    {
        title: 'Java Application Support',
        company: 'AC',
        achievements: [
            'Helped produce 100% accurate tax reports for the IRS and the New York Stock Exchange',
            'Saved the client millions in costs by resolving technical issues',
        ]
    },
    {
        title: 'Java Developer',
        company: 'HE',
        achievements: [
            'Expanded Social Sign On functionality to enable customers to sign in using Facebook, Twitter, Google, Yahoo, or LinkedIn credentials and to support multiple countries and languages',
            'Reduced account registration time by 25% and reduced password reset requests by 10%',
            'Managed the authorization and authentication process to ensure secure sign on',
        ]
    },
    {
        title: 'Junior Full Stack Web Developer',
        company: 'TH',
        achievements: [
            'Developed full-stack web applications for clients in the real estate and legal services industries, using Sailsjs, a Nodejs framework',
            'Develops integrations with 3rd party APIs, such Quickbooks (accounting), and zipLogix (real estate)',
            'Provided support in the open-source community for Sailsjs framework and Waterline ORM',
        ]
    },
    {
        title: 'Junior QA Engineer',
        company: 'SK',
        achievements: [
            'Write acceptance, unit, and integration tests in Ember.js',
            'Light development in Ember.js and Ruby on Rails',
            'Automate web UI test scripts using Selenium, Nightwatch, Python and Node.js',
            'Conduct manual testing including regression, acceptance, new feature, and end to end testing',
        ]
    },
    {
        title: 'Member Order Specialist',
        company: 'SA',
        achievements: [
            'Streamlined processes necessary to fill business\'s order demands on a daily basis',
            'Collaborated with multiple departments in advance to meet order\'s needs when due',
        ]
    },
    {
        title: 'Network & Systems Administrator',
        company: 'BO',
        achievements: [
            'Completed a technological overhaul of Texas\' largest independent bookstore',
            'Everything from server maintenance (AIX, Linux, Windows) to workstation customization (Linus, Windows, Mac) from corporate requirements (OpenVPN, in-store and remote POS, RAID file repositories) to customer wants (guest WAPs, secure kiosks, Drupal and WordPress websites)',
        ]
    },
    {
        title: 'Orientation Advisor',
        company: 'TH',
        achievements: [
            'Guided incoming freshman college students through orientation procedures and events',
            'Arranged and facilitated guided tours of the university campus',
        ]
    },
    {
        title: 'Pharmacy Technician',
        company: 'WA',
        achievements: [
            'Received medication orders, measuring quantities, mixing ingredients, packaging medication, and updating records',
            'Assisted in keeping physical inventory up to date',
        ]
    },
    {
        title: 'Production Manager',
        company: 'VA',
        achievements: [
            'Implemented daily production schedules to meet order demands and maintain appropriate inventory levels',
            'Oversaw the production and delivery of daily shipments, as well as the receiving, inspection, and inventory of all supplies',
        ]
    },
    {
        title: 'Production Support',
        company: 'NE',
        achievements: [
            'Built new refund request process for taxpayers on the portal',
            'Implemented software service packs, reconciling new functionality with existing code and performing regression testing',
        ]
    },
    {
        title: 'Production Support Lead',
        company: 'MY',
        achievements: [
            'Responsible for building modernized e-File back-end processing each tax season',
            'Developed a fraud detection module, saving the District millions of dollars each year',
            'Corrected and enhanced live processes in a high-pressure environment with a direct and immediate impact on the District\'s taxpayers',
            'Programmed using VB.NET, SQL, and HTML',
        ]
    },
    {
        title: 'Professional Tutor',
        company: 'RE',
        achievements: [
            'Delivered high-quality, individualized instruction in test preparation, high school math, and languages (German, Latin, Chinese)',
            'Coordinated scheduling with numerous clients and provided regular feedback and updates on student progress',
        ]
    },
    {
        title: 'Project Manager',
        company: 'SI',
        achievements: [
            'Managed teams of front-end and back-end developers to create and maintain custom content management systems for our clients',
            'Trained and led internal and freelance teams on content entry and content management system use for all assessment-related projects',
            'Negotiated business terms and pricing with clients',
        ]
    },
    {
        title: 'Research Engineer',
        company: 'ST',
        achievements: [
            'Researcher and lead designer on successful Oculus Rift research study evaluating potential applications of Virtual Reality Technology within Industrial Psychology',
            'Utilized Unreal Engine 4 as development platform for the creation of virtual environments participants experienced and were tested on',
            'Programmed using C++ and javascript to implement environment mechanics and log user actions',
        ]
    },
    {
        title: 'Resident Hall Council Vice President',
        company: 'TH',
        achievements: [
            'Coordinated all events for student and Resident Assistant organizations, providing funding, approving events and programming proposed by students and RAs',
            'Maintained the university budget for student and Resident Assistant events',
        ]
    },
    {
        title: 'Senior Frontend Engineer',
        company: 'KH',
        achievements: [
            'Focus mainly on client side development using EmberJS and working with our UX Designer to implement the new web UI based on Google\'s Material Design Spec',
            'Responsible for revamping the SASS architecture of the codebase, setting up a SASS style guide and aligning the dev team around SASS development best practices',
        ]
    },
    {
        title: 'Senior Product Development Engineer',
        company: 'AD',
        achievements: [
            'Drove unit test development and enhancements to reduce software defect rates',
            'Worked on a global development team and communicated with overseas engineering teams to solve problems',
            'Trained and mentored new team members and co-ops',
            'Worked in an Agile development model and led development sprints as Scrum Master',
        ]
    },
    {
        title: 'Senior Software Engineer',
        company: 'SK',
        achievements: [
            'Full-stack web development using Rails, React/Redux, and Ember',
        ]
    },
    {
        title: 'Software Developer',
        company: 'KH',
        achievements: [
            'Worked with a small team of developers to build a rich single page application using Ember, D3, Rails, and Postgres',
        ]
    },
    {
        title: 'Software Developer',
        company: 'IN',
        achievements: [
            'Worked with Rails and Ember to deliver new experiences for students and teachers in the education tech space',
        ]
    },
    {
        title: 'Software Engineer',
        company: 'KU',
        achievements: [
            'Developed and deployed C# .NET integrations with embedded factory systems. SQL-heavy development and cutting edge front-end frameworks supported workers in time-sensitive operations',
            'Maintained private NPM and NuGet registries for internal packages to encourage code reuse',
            'Constantly reiterated with project owners, QA, and designers to deliver software exceeding customer expectations within tight deadlines',
        ]
    },
    {
        title: 'Software Engineer',
        company: 'TH',
        achievements: [
            'Worked with clients and coworkers to deliver excellent UX in Ember.js, train teams on continuous delivery with Ember, and host Ember applications in production',
        ]
    },
    {
        title: 'Software Engineer',
        company: 'TH',
        achievements: [
            'Set-up and configure Concourse CI/CD pipeline for continuous automation testings on B2C sites to catch functional defects',
            'Design and optimize browser test report data structure to enable flexible use of nesting test suites for Selenium/Webdriver.io and Mocha browser tests',
            'Implement GraphQL with Apollo and Express server for internal tool\'s Graphical User Interface backend',
        ]
    },
    {
        title: 'Teaching Assistant',
        company: 'UN',
        achievements: [
            'Lectured, graded, and tutored for undergraduate level mechanical engineering classes',
            'Developed strong communication and teamwork skills',
        ]
    },
    {
        title: 'Team Lead',
        company: 'RI',
        achievements: [
            'Demonstrates the use of HTML, CSS and JavaScript. Firebase persistence',
            'AJAX/API calls from Google Maps and OpenData Crime API',
            'Github and Trello for project management',
        ]
    },
    {
        title: 'Tech Lead',
        company: 'CO',
        achievements: [
            'Wrote HTML templates, configured domains, and set up API integrations for mass emails',
            'Created lead collection and polling plugins for the company\'s WordPress websites',
            'Created WordPress themes',
            'Contributed to an advanced Node-based mailing management tool',
            'Created a GoLang application to manage push notifications to mobile devices',
            'Created React-based user interfaces',
            'Collaborated with outside vendors and occasionally supervised other employees',
        ]
    },
    {
        title: 'Technical Support Manager',
        company: 'AL',
        achievements: [
            'Oversaw technical support team and software training resources',
            'Helped facilitate communications with dev and qa teams to make sure critical issues were handled appropriately',
        ]
    },
    {
        title: 'Technical Staff Assistant',
        company: 'AP',
        achievements: [
            'Managed the design, documentation, assembly and implementation of multi-million dollar Navy defense projects',
            'Primary successes in problem resolution, staff development and relationship management',
            'Recipient of the Excellence Award for 2012, an annual peer nominated award for outstanding support',
            'Increased output 50% by evaluating and implementing assembly process improvements',
            'Decreased manufacturing errors 85% by developing an effective training program for technical staff',
        ]
    },
    {
        title: 'Technical Staff Associate',
        company: 'AP',
        achievements: [
            'Served as technical lead for three multi-million dollar Navy defense projects',
            'Supervised team of up to eight technicians',
            'Influenced system design increasing ease of operation, maintainability and supportability',
        ]
    },
    {
        title: 'Undergraduate Research Assistant',
        company: 'TE',
        achievements: [
            'Worked under a graduate student in an internationally diverse group',
            'Aided in research on thin-film, thermoelectric nanocomposites',
        ]
    },
    {
        title: 'Web Application Developer',
        company: 'RI',
        achievements: [
            'Responsible for all of the business\'s public-facing web sites',
            'Created employee-facing projects, including a "charity auction" and "send a card" web apps',
        ]
    },
    {
        title: 'Web Developer',
        company: 'AG',
        achievements: [
            'Built B2B web-based marketing tools using Python, Django, jQuery, JS, HTML, CSS, MySQL, Apache, and Bootstrap',
            'Developed Django-based CMS system for internal sales team including salesforce API',
            'Created interactive wireframes, mockups, and executable prototypes in a fast-paced environment',
        ]
    },
    {
        title: 'Web/Mobile Developer',
        company: 'LU',
        achievements: [
            'Developed both web & mobile application front-ends using React & React Native',
            'Implemented chat feature & CRUD operations using Firebase',
        ]
    },
    {
        title: 'Website Management Intern',
        company: 'TH',
        achievements: [
            'Researched effective screen readers and pitched a cost-benefit analysis for issues found on the website',
            'Conducted a clean layouts audit for mobile devices, applying over 50 layout fixes to the website',
            'Identified common user roles to analyze motive and journey to find key information',
            'Led weekly, virtual meetings with the team to track project progress using JIRA',
        ]
    }
]

allSkills = [
    {
        name: 'ActionScript',
        category: 'miscellaneous'
    },
    {
        name: 'Adobe Creative Suite',
        category: 'miscellaneous'
    },
    {
        name: 'Agile',
        category: 'miscellaneous'
    },
    {
        name: 'AJAX',
        category: 'backend'
    },
    {
        name: 'Angular',
        category: 'frontend',
        synonyms: ['Angular2', 'Angular3', 'Angular4', 'Angular5', 'Angular6', 'Angular7', 'JavaScript', 'MEAN']
    },
    {
        name: 'AngularJS',
        category: 'frontend',
        synonyms: ['JavaScript']
    },
    {
        name: 'AI',
        category: 'miscellaneous',
        synonyms: ['A.I.', 'Artificial Intelligence']
    },
    {
        name: 'ASP.NET',
        category: 'backend',
        synonyms: ['ASP']
    },
    {
        name: 'Aurelia',
        category: 'frontend'
    },
    {
        name: 'Authentication',
        category: 'backend',
        synonyms: ['Authorization', 'User Authentication', 'User Authorization']
    },
    {
        name: 'AutoCAD',
        category: 'miscellaneous'
    },
    {
        name: 'AWS',
        category: 'backend',
        synonyms: ['Amazon Web Services']
    },
    {
        name: 'Axios',
        category: 'frontend'
    },
    {
        name: 'Azure',
        category: 'backend',
        synonyms: ['Microsoft Azure']
    },
    {
        name: 'Backbone',
        category: 'frontend',
        synonyms: ['Backbone.js', 'JavaScript']
    },
    {
        name: 'Backend',
        category: 'backend',
        synonyms: ['Back End']
    },
    {
        name: 'BASIC',
        category: 'backend'
    },
    {
        name: 'Big Data',
        category: 'miscellaneous'
    },
    {
        name: 'Blockchain',
        category: 'miscellaneous'
    },
    {
        name: 'Bootstrap',
        category: 'frontend',
        synonyms: ['Bootstrap3', 'Bootstrap4']
    },
    {
        name: 'Broccoli',
        category: 'miscellaneous'
    },
    {
        name: 'Bulma',
        category: 'frontend'
    },
    {
        name: 'C',
        category: 'backend'
    },
    {
        name: 'Chai',
        category: 'miscellaneous'
    },
    {
        name: 'Cheerio',
        category: 'frontend'
    },
    {
        name: 'CI/CD',
        category: 'backend',
        synonyms: ['CICD', 'Continuous Integration', 'Continuous Deployment']
    },
    {
        name: 'Communication',
        category: 'miscellaneous'
    },
    {
        name: 'CSS',
        category: 'frontend',
        synonyms: ['CSS3', 'CSS Flexbox', 'CSS Grid', 'Flexbox', 'Grid']
    },
    {
        name: 'C#',
        category: 'backend'
    },
    {
        name: 'C++',
        category: 'backend'
    },
    {
        name: 'Data Analysis',
        category: 'miscellaneous',
        synonyms: ['Analytics', 'Data Analytics', 'Data Processing']
    },
    {
        name: 'Data Mining',
        category: 'miscellaneous'
    },
    {
        name: 'Data Visualization',
        category: 'miscellaneous'
    },
    {
        name: 'Database Design',
        category: 'backend',
        synonyms: ['Databases']
    },
    {
        name: 'Django',
        category: 'frontend'
    },
    {
        name: 'Docker',
        category: 'backend'
    },
    {
        name: 'D3',
        category: 'frontend',
        synonyms: ['D3.js', 'JavaScript']
    },
    {
        name: 'Elixir',
        category: 'backend'
    },
    {
        name: 'Ember',
        category: 'frontend',
        synonyms: ['Ember.js', 'Ember Octane', 'JavaScript']
    },
    {
        name: 'Enzyme',
        category: 'miscellaneous'
    },
    {
        name: 'Express',
        category: 'backend',
        synonyms: ['Express.js', 'MEAN', 'MERN']
    },
    {
        name: 'FEA',
        category: 'miscellaneous',
        synonyms: ['Finite Element Analysis']
    },
    {
        name: 'Firebase',
        category: 'backend'
    },
    {
        name: 'Flask',
        category: 'frontend'
    },
    {
        name: 'Fortran',
        category: 'backend'
    },
    {
        name: 'Foundation',
        category: 'frontend',
        synonyms: ['Foundation6']
    },
    {
        name: 'Frontend',
        category: 'frontend',
        synonyms: ['Front End']
    },
    {
        name: 'Full Stack',
        category: 'miscellaneous'
    },
    {
        name: 'Git',
        category: 'miscellaneous',
        synonyms: ['GitHub']
    },
    {
        name: 'Glimmer',
        category: 'frontend',
        synonyms: ['Glimmer.js', 'JavaScript']
    },
    {
        name: 'Go',
        category: 'backend',
        synonyms: ['Golang']
    },
    {
        name: 'Google Cloud Services',
        category: 'backend'
    },
    {
        name: 'Google Office Suite',
        category: 'miscellaneous'
    },
    {
        name: 'GraphQL',
        category: 'backend'
    },
    {
        name: 'Handlebars',
        category: 'frontend',
        synonyms: ['Handlebars.js']
    },
    {
        name: 'Haskell',
        category: 'miscellaneous'
    },
    {
        name: 'Heroku',
        category: 'miscellaneous'
    },
    {
        name: 'HTML',
        category: 'frontend',
        synonyms: ['HTML5']
    },
    {
        name: 'Java',
        category: 'backend'
    },
    {
        name: 'JavaScript',
        category: 'frontend',
        synonyms: ['ES6', 'ES7', 'ES8', 'ES2017', 'ES2018', 'ES2019']
    },
    {
        name: 'Jest',
        category: 'miscellaneous'
    },
    {
        name: 'Jira',
        category: 'miscellaneous'
    },
    {
        name: 'JSP',
        category: 'backend'
    },
    {
        name: 'jQuery',
        category: 'frontend'
    },
    {
        name: 'JSON:API',
        category: 'backend',
        synonyms: ['JSON API']
    },
    {
        name: 'JWT',
        category: 'backend',
        synonyms: ['JSON Web Token']
    },
    {
        name: 'Kubernetes',
        category: 'backend',
        synonyms: ['K8']
    },
    {
        name: 'Laravel',
        category: 'frontend'
    },
    {
        name: 'LaTeX',
        category: 'miscellaneous',
        synonyms: ['TeX']
    },
    {
        name: 'Leadership',
        category: 'miscellaneous'
    },
    {
        name: 'Less',
        category: 'frontend',
        synonyms: ['CSS']
    },
    {
        name: 'Linux',
        category: 'miscellaneous',
        synonyms: ['Linux OS']
    },
    {
        name: 'Lisp',
        category: 'miscellaneous'
    },
    {
        name: 'Mac',
        category: 'miscellaneous',
        synonyms: ['Mac OS']
    },
    {
        name: 'Management',
        category: 'miscellaneous'
    },
    {
        name: 'Markdown',
        category: 'miscellaneous'
    },
    {
        name: 'Materialize',
        category: 'frontend',
        synonyms: ['MaterialCSS', 'Material UI']
    },
    {
        name: 'Matlab',
        category: 'backend'
    },
    {
        name: 'Microsoft Suite',
        category: 'miscellaneous',
        synonyms: ['Microsoft Excel', 'Microsoft Outlook', 'Microsoft PowerPoint', 'Microsoft Word']
    },
    {
        name: 'ML',
        category: 'miscellaneous',
        synonyms: ['Machine Learning']
    },
    {
        name: 'Mobile',
        category: 'miscellaneous'
    },
    {
        name: 'Mongo',
        category: 'backend',
        synonyms: ['MongoDB', 'MEAN', 'MERN']
    },
    {
        name: 'Mongoose',
        category: 'backend',
        synonyms: ['ORM']
    },
    {
        name: 'MySQL',
        category: 'backend',
        synonyms: ['SQL']
    },
    {
        name: 'Nearley',
        category: 'miscellaneous',
        synonyms: ['Nearley.js']
    },
    {
        name: 'Nightwatch',
        category: 'miscellaneous',
        synonyms: ['Nightwatch.js']
    },
    {
        name: 'NLG',
        category: 'miscellaneous',
        synonyms: ['Natural Language Generation']
    },
    {
        name: 'NLP',
        category: 'miscellaneous',
        synonyms: ['Natural Language Processing']
    },
    {
        name: 'Node',
        category: 'backend',
        synonyms: ['Node.js', 'MEAN', 'MERN']
    },
    {
        name: 'Objective-C',
        category: 'miscellaneous'
    },
    {
        name: 'ORM',
        category: 'backend',
        synonyms: ['Object-Relational Mapping']
    },
    {
        name: 'Perl',
        category: 'backend'
    },
    {
        name: 'PHP',
        category: 'backend'
    },
    {
        name: 'PL/SQL',
        category: 'backend',
        synonyms: ['SQL']
    },
    {
        name: 'Polymer',
        category: 'frontend',
        synonyms: ['JavaScript', 'Polymer.js']
    },
    {
        name: 'Postgres',
        category: 'backend',
        synonyms: ['PostgreSQL', 'SQL']
    },
    {
        name: 'Preact',
        category: 'frontend',
        synonyms: ['JavaScript', 'Preact.js']
    },
    {
        name: 'Python',
        category: 'backend',
        synonyms: ['Python3']
    },
    {
        name: 'Public Speaking',
        category: 'miscellaneous'
    },
    {
        name: 'QA',
        category: 'miscellaneous',
        synonyms: ['Quality Assurance']
    },
    {
        name: 'QUnit',
        category: 'miscellaneous'
    },
    {
        name: 'R',
        category: 'backend'
    },
    {
        name: 'Rails',
        category: 'backend',
        synonyms: ['Ruby on Rails']
    },
    {
        name: 'React',
        category: 'frontend',
        synonyms: ['JavaScript', 'React.js', 'MERN']
    },
    {
        name: 'React Native',
        category: 'frontend'
    },
    {
        name: 'Redux',
        category: 'frontend'
    },
    {
        name: 'Responsive Design',
        category: 'frontend',
        synonyms: ['Responsive Web Design']
    },
    {
        name: 'REST',
        category: 'frontend'
    },
    {
        name: 'Rhinoceros',
        category: 'miscellaneous',
        synonyms: ['Rhino', 'Rhino 3D', 'Rhinoceros 3D']
    },
    {
        name: 'Ruby',
        category: 'backend'
    },
    {
        name: 'SAS',
        category: 'backend'
    },
    {
        name: 'Sass',
        category: 'frontend',
        synonyms: ['CSS']
    },
    {
        name: 'Scala',
        category: 'miscellaneous'
    },
    {
        name: 'Selenium',
        category: 'miscellaneous'
    },
    {
        name: 'Sequelize',
        category: 'backend',
        synonyms: ['ORM']
    },
    {
        name: 'SolidWorks',
        category: 'miscellaneous'
    },
    {
        name: 'SPA',
        category: 'frontend',
        synonyms: ['Single Page Application']
    },
    {
        name: 'SproutCore',
        category: 'frontend'
    },
    {
        name: 'SQL',
        category: 'backend'
    },
    {
        name: 'SQLite',
        category: 'backend',
        synonyms: ['SQL']
    },
    {
        name: 'Squarespace',
        category: 'frontend'
    },
    {
        name: 'Svelte',
        category: 'frontend',
        synonyms: ['JavaScript']
    },
    {
        name: 'SVN',
        category: 'miscellaneous',
        synonyms: ['Subversion']
    },
    {
        name: 'Swift',
        category: 'miscellaneous'
    },
    {
        name: 'Tableau',
        category: 'miscellaneous'
    },
    {
        name: 'Teaching',
        category: 'miscellaneous',
        synonyms: ['Mentoring']
    },
    {
        name: 'Team Building',
        category: 'miscellaneous'
    },
    {
        name: 'TDD',
        category: 'miscellaneous',
        synonyms: ['Testing', 'Test Driven Development', 'Test-Driven Development']
    },
    {
        name: 'Three.js',
        category: 'frontend',
        synonyms: ['3JS', 'JavaScript']
    },
    {
        name: 'Trello',
        category: 'miscellaneous'
    },
    {
        name: 'UX',
        category: 'frontend',
        synonyms: ['UI/UX', 'User Experience']
    },
    {
        name: 'VB.NET',
        category: 'miscellaneous',
        synonyms: ['Visual Basic .NET']
    },
    {
        name: 'Vue',
        category: 'frontend',
        synonyms: ['JavaScript', 'Vue.js']
    },
    {
        name: 'Webpack',
        category: 'miscellaneous'
    },
    {
        name: 'WebGL',
        category: 'frontend'
    },
    {
        name: 'Weebly',
        category: 'frontend'
    },
    {
        name: 'Windows',
        category: 'miscellaneous',
        synonyms: ['Windows OS']
    },
    {
        name: 'Wix',
        category: 'frontend'
    },
    {
        name: 'WordPress',
        category: 'backend'
    },
    {
        name: 'XML',
        category: 'backend',
    }
]

allDegrees.each do |degree|
    Degree.create!(degree)
end

allSkills.each do |skill|
    Skill.create!(skill)
end

resumes.each do |resume|
    # Assign degrees
    numDegrees = get_random_number([
        { value: 1, probability: 0.65 },
        { value: 2, probability: 0.25 },
        { value: 3, probability: 0.10 }
    ])

    degrees = Degree.all.sample(numDegrees)

    degrees.each do |degree|
        resume.degrees << degree
    end

    # Assign experiences
    numExperiences = get_random_number([
        { value: 1, probability: 0.10 },
        { value: 2, probability: 0.20 },
        { value: 3, probability: 0.25 },
        { value: 4, probability: 0.35 },
        { value: 5, probability: 0.10 }
    ])

    experiences = allExperiences.sample(numExperiences)

    experiences.each do |experience|
        experience['resume_id'] = resume.id

        Experience.create!(experience)
    end

    # Assign skills
    numSkills = get_random_number([
        { value: 3, probability: 0.05 },
        { value: 4, probability: 0.05 },
        { value: 5, probability: 0.10 },
        { value: 6, probability: 0.15 },
        { value: 7, probability: 0.15 },
        { value: 8, probability: 0.20 },
        { value: 9, probability: 0.10 },
        { value: 10, probability: 0.10 },
        { value: 11, probability: 0.05 },
        { value: 12, probability: 0.05 }
    ])

    skills = Skill.all.sample(numSkills)

    skills.each do |skill|
        resume.skills << skill
    end
end