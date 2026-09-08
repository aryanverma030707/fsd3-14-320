let teams = [
    {id:1,
        Tname:"Rusty",
        tl:'Aryaveer Singh',
        email:"aryanveer@gmail.com",
        members: 6,
    },

    {id:2,
        Tname:"OBSIDIANS",
        tl:'Aryan Verma',
        email:"aryanverma@gmail.com",
        members: 6,
    },
];

let nextId =3;

export const getAllTeams = () => {
    return teams;
};

export const getTeamById = (id) => teams.find((team) => team.id === id);

export const addTeam = (team) => {
    team.id = nextId++;
    teams.push(team);
    return team;
};

export const updateTeam = (id, updatedTeam) => {
    const team =getTeamById(id);
    if (!team) return null;
    Object.assign(team, updatedTeam);
    return team;
};

export const deleteTeam = (id) => {
    const index = teams.findIndex((team) => team.id === id);
    if (index === -1) return null;
    const deletedTeam = teams.splice(index, 1)[0];
    return deletedTeam;
}