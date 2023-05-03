module.exports = `
    type Teams implements Node {
        id: ID!
        name: String!
        slug: String!
        logo: Image
        description: String
        playsGame: String
        wins: String
        loses: String
        draws: String
        teamPlayer: [TeamPlayer]
        socials: [Social]
    }
    type TeamPlayer {
        id: ID!
    }
`;
