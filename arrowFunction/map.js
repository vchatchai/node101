const team = { 
    members:['Jane', 'Bill'],
    teamName: 'Super Squad',
    temaSummary: function() { 
        return this.members.map((member) => { 
            return `${member} is on team ${this.teamName}`;
        })
    }
};

const profile = {
    name: 'Alex',
    getName: function() {
        return this.name
    }
};

console.log(team.temaSummary())
console.log(profile.getName())