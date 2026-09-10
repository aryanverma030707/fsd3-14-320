let teams = [
    { id: 1, name: "India", captain: "Rohit Sharma" },
    { id: 2, name: "Australia", captain: "Pat Cummins" },
    { id: 3, name: "England", captain: "Jos Buttler" }
];

export const getAllTeams = () => {
    return teams;
};

export const getTeamById = (id) => {
    return teams.find(team => team.id === id);
};

export const addTeam = (team) => {
    const newTeam = {
        id: teams.length + 1,
        ...team
    };
    teams.push(newTeam);
    return newTeam;
};