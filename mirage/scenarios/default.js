import createExperiences from './experience';
import createSkills from './skill';

export default function(server) {
    createExperiences(server);
    createSkills(server);

    // Create students
    server.createList('student', 30);
}