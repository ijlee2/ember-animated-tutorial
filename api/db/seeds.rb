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

30.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name

    area_code = Faker::Number.leading_zero_number(3)
    number1 = Faker::Number.leading_zero_number(3)
    number2 = Faker::Number.leading_zero_number(4)

    students << Student.create!(
        first_name: first_name,
        last_name: last_name,
        email: Faker::Internet.email("#{first_name} #{last_name}", '_'),
        phone: "(#{area_code}) #{number1}-#{number2}",
        image_url: Faker::Avatar.image
    )
end


# Create a resume for each student
resumes = []

students.each do |student|
    resumes << Resume.create!(
        student_id: student.id
    )
end


# Create a degree for each resume
allDegrees = [
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
    'PhD, Mathematics'
]

resumes.each do |resume|
    Degree.create!(
        name: allDegrees.sample,
        resume_id: resume.id
    )
end


# Create skills
=begin
Skill.create!(
    name: 'ActionScript',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'Adobe Creative Suite',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'Agile',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'AJAX',
    category: 'backend'
)

Skill.create!(
    name: 'Angular',
    category: 'frontend',
    synonyms: ['Angular2', 'Angular3', 'Angular4', 'Angular5', 'Angular6', 'Angular7', 'MEAN']
)

Skill.create!(
    name: 'AngularJS',
    category: 'frontend'
)

Skill.create!(
    name: 'AI',
    category: 'miscellaneous',
    synonyms: ['A.I.', 'Artificial Intelligence']
)

Skill.create!(
    name: 'ASP.NET',
    category: 'backend',
    synonyms: ['ASP']
)

Skill.create!(
    name: 'Aurelia',
    category: 'frontend'
)

Skill.create!(
    name: 'Authentication',
    category: 'backend',
    synonyms: ['Authorization', 'User Authentication', 'User Authorization']
)

Skill.create!(
    name: 'AutoCAD',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'AWS',
    category: 'backend',
    synonyms: ['Amazon Web Services']
)

Skill.create!(
    name: 'Axios',
    category: 'frontend'
)

Skill.create!(
    name: 'Backbone',
    category: 'frontend',
    synonyms: ['Backbone.js']
)

Skill.create!(
    name: 'Backend',
    category: 'backend',
    synonyms: ['Back End']
)

Skill.create!(
    name: 'BASIC',
    category: 'backend'
)

Skill.create!(
    name: 'Big Data',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'Blockchain',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'Bootstrap',
    category: 'frontend',
    synonyms: ['Bootstrap3', 'Bootstrap4']
)

Skill.create!(
    name: 'Broccoli',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'Bulma',
    category: 'frontend'
)

Skill.create!(
    name: 'C',
    category: 'backend'
)

Skill.create!(
    name: 'Chai',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'Cheerio',
    category: 'frontend'
)

Skill.create!(
    name: 'CI/CD',
    category: 'backend',
    synonyms: ['CICD', 'Continuous Integration', 'Continuous Deployment']
)

Skill.create!(
    name: 'Communication',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'CSS',
    category: 'frontend',
    synonyms: ['CSS3', 'CSS Flexbox', 'CSS Grid', 'Flexbox', 'Grid']
)

Skill.create!(
    name: 'C#',
    category: 'backend'
)

Skill.create!(
    name: 'C++',
    category: 'backend'
)

Skill.create!(
    name: 'Data Analysis',
    category: 'miscellaneous',
    synonyms: ['Analytics', 'Data Analytics', 'Data Processing']
)

Skill.create!(
    name: 'Data Mining',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'Data Visualization',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'Database Design',
    category: 'backend',
    synonyms: ['Databases']
)

Skill.create!(
    name: 'Django',
    category: 'frontend'
)

Skill.create!(
    name: 'Docker',
    category: 'backend'
)

Skill.create!(
    name: 'D3',
    category: 'frontend',
    synonyms: ['D3.js']
)

Skill.create!(
    name: 'Elixir',
    category: 'backend'
)

Skill.create!(
    name: 'Ember',
    category: 'frontend',
    synonyms: ['Ember.js', 'Ember Octane']
)

Skill.create!(
    name: 'Enzyme',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'Express',
    category: 'backend',
    synonyms: ['Express.js', 'MEAN', 'MERN']
)

Skill.create!(
    name: 'FEA',
    category: 'miscellaneous',
    synonyms: ['Finite Element Analysis']
)

Skill.create!(
    name: 'Firebase',
    category: 'backend'
)

Skill.create!(
    name: 'Flask',
    category: 'frontend'
)

Skill.create!(
    name: 'Fortran',
    category: 'backend'
)

Skill.create!(
    name: 'Foundation',
    category: 'frontend',
    synonyms: ['Foundation6']
)

Skill.create!(
    name: 'Frontend',
    category: 'frontend',
    synonyms: ['Front End']
)

Skill.create!(
    name: 'Full Stack',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'Git',
    category: 'miscellaneous',
    synonyms: ['GitHub']
)

Skill.create!(
    name: 'Glimmer',
    category: 'frontend',
    synonyms: ['Glimmer.js']
)

Skill.create!(
    name: 'Go',
    category: 'backend',
    synonyms: ['Golang']
)

Skill.create!(
    name: 'Google Cloud Services',
    category: 'backend'
)

Skill.create!(
    name: 'Google Office Suite',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'GraphQL',
    category: 'backend'
)

Skill.create!(
    name: 'Handlebars',
    category: 'frontend',
    synonyms: ['Handlebars.js']
)

Skill.create!(
    name: 'Haskell',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'Heroku',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'HTML',
    category: 'frontend',
    synonyms: ['HTML5']
)

Skill.create!(
    name: 'Java',
    category: 'backend'
)

Skill.create!(
    name: 'JavaScript',
    category: 'frontend',
    synonyms: ['ES6', 'ES7', 'ES8', 'ES2017', 'ES2018', 'ES2019']
)

Skill.create!(
    name: 'Jest',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'Jira',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'JSP',
    category: 'backend'
)

Skill.create!(
    name: 'jQuery',
    category: 'frontend'
)

Skill.create!(
    name: 'JSON:API',
    category: 'backend',
    synonyms: ['JSON API']
)

Skill.create!(
    name: 'JWT',
    category: 'backend',
    synonyms: ['JSON Web Token']
)

Skill.create!(
    name: 'Kubernetes',
    category: 'backend',
    synonyms: ['K8']
)

Skill.create!(
    name: 'Laravel',
    category: 'frontend'
)

Skill.create!(
    name: 'LaTeX',
    category: 'miscellaneous',
    synonyms: ['TeX']
)

Skill.create!(
    name: 'Leadership',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'Less',
    category: 'frontend'
)

Skill.create!(
    name: 'Linux',
    category: 'miscellaneous',
    synonyms: ['Linux OS']
)

Skill.create!(
    name: 'Lisp',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'Mac',
    category: 'miscellaneous',
    synonyms: ['Mac OS']
)

Skill.create!(
    name: 'Markdown',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'Materialize',
    category: 'frontend',
    synonyms: ['Material UI']
)

Skill.create!(
    name: 'Matlab',
    category: 'backend'
)

Skill.create!(
    name: 'Microsoft Suite',
    category: 'miscellaneous',
    synonyms: ['Microsoft Excel', 'Microsoft Outlook', 'Microsoft PowerPoint', 'Microsoft Word']
)

Skill.create!(
    name: 'ML',
    category: 'miscellaneous',
    synonyms: ['Machine Learning']
)

Skill.create!(
    name: 'Mobile',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'Mongo',
    category: 'backend',
    synonyms: ['MongoDB', 'MEAN', 'MERN']
)

Skill.create!(
    name: 'Mongoose',
    category: 'backend'
)

Skill.create!(
    name: 'MySQL',
    category: 'backend'
)

Skill.create!(
    name: 'Nightwatch',
    category: 'miscellaneous',
    synonyms: ['Nightwatch.js']
)

Skill.create!(
    name: 'NLG',
    category: 'miscellaneous',
    synonyms: ['Natural Language Generation']
)

Skill.create!(
    name: 'NLP',
    category: 'miscellaneous',
    synonyms: ['Natural Language Processing']
)

Skill.create!(
    name: 'Node',
    category: 'backend',
    synonyms: ['Node.js', 'MEAN', 'MERN']
)

Skill.create!(
    name: 'Objective-C',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'Perl',
    category: 'backend'
)

Skill.create!(
    name: 'PHP',
    category: 'backend'
)

Skill.create!(
    name: 'PL/SQL',
    category: 'backend'
)

Skill.create!(
    name: 'Polymer',
    category: 'frontend',
    synonyms: ['Polymer.js']
)

Skill.create!(
    name: 'Postgres',
    category: 'backend',
    synonyms: ['PostgreSQL']
)

Skill.create!(
    name: 'Preact',
    category: 'frontend',
    synonyms: ['Preact.js']
)

Skill.create!(
    name: 'Python',
    category: 'backend',
    synonyms: ['Python3']
)

Skill.create!(
    name: 'Public Speaking',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'QA',
    category: 'miscellaneous',
    synonyms: ['Quality Assurance']
)

Skill.create!(
    name: 'QUnit',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'R',
    category: 'backend'
)

Skill.create!(
    name: 'Rails',
    category: 'backend',
    synonyms: ['Ruby on Rails']
)

Skill.create!(
    name: 'React',
    category: 'frontend',
    synonyms: ['React.js', 'MERN']
)

Skill.create!(
    name: 'React Native',
    category: 'frontend'
)

Skill.create!(
    name: 'Redux',
    category: 'frontend'
)

Skill.create!(
    name: 'Responsive Design',
    category: 'frontend',
    synonyms: ['Responsive Web Design']
)

Skill.create!(
    name: 'REST',
    category: 'frontend'
)

Skill.create!(
    name: 'Rhinoceros',
    category: 'miscellaneous',
    synonyms: ['Rhino', 'Rhino 3D', 'Rhinoceros 3D']
)

Skill.create!(
    name: 'Ruby',
    category: 'backend'
)

Skill.create!(
    name: 'SAS',
    category: 'backend'
)

Skill.create!(
    name: 'Sass',
    category: 'frontend'
)

Skill.create!(
    name: 'Scala',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'Selenium',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'Sequelize',
    category: 'backend'
)

Skill.create!(
    name: 'SolidWorks',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'SPA',
    category: 'frontend',
    synonyms: ['Single Page Application']
)

Skill.create!(
    name: 'SproutCore',
    category: 'frontend'
)

Skill.create!(
    name: 'SQL',
    category: 'backend'
)

Skill.create!(
    name: 'SQLite',
    category: 'backend'
)

Skill.create!(
    name: 'Squarespace',
    category: 'frontend'
)

Skill.create!(
    name: 'Svelte',
    category: 'frontend'
)

Skill.create!(
    name: 'SVN',
    category: 'miscellaneous',
    synonyms: ['Subversion']
)

Skill.create!(
    name: 'Swift',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'Tableau',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'Teaching',
    category: 'miscellaneous',
    synonyms: ['Mentoring']
)

Skill.create!(
    name: 'Team Building',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'Three.js',
    category: 'frontend',
    synonyms: ['3JS']
)

Skill.create!(
    name: 'Trello',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'UX',
    category: 'frontend',
    synonyms: ['UI/UX', 'User Experience']
)

Skill.create!(
    name: 'VB.NET',
    category: 'miscellaneous',
    synonyms: ['Visual Basic .NET']
)

Skill.create!(
    name: 'Vue',
    category: 'frontend',
    synonyms: ['Vue.js']
)

Skill.create!(
    name: 'Webpack',
    category: 'miscellaneous'
)

Skill.create!(
    name: 'WebGL',
    category: 'frontend'
)

Skill.create!(
    name: 'Weebly',
    category: 'frontend'
)

Skill.create!(
    name: 'Windows',
    category: 'miscellaneous',
    synonyms: ['Windows OS']
)

Skill.create!(
    name: 'Wix',
    category: 'frontend'
)

Skill.create!(
    name: 'WordPress',
    category: 'backend'
)

Skill.create!(
    name: 'XML',
    category: 'backend'
)


=end