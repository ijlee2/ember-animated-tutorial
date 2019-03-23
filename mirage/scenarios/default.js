import createSkills from './skill';

export default function(server) {
    // createDegrees(server);
    createSkills(server);

    // Create students
    server.createList('student', 30);
}