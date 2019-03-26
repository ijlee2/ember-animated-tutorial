import createSkills from './skill';

export default function(server) {
    createSkills(server);

    // Create students
    server.createList('student', 30);
}