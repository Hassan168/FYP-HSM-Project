module.exports = `
    type Article implements Node {
        id: ID!
        title: String!
        slug: String!
        postedAt: BlogDate!
        excerpt: String
        is_featured: Boolean
        quote_text: String
        categories: [Meta]
        tags: [Meta]
        image: Image
        excerpt: String @mdpassthrough(fieldName: "excerpt") 
        content: String @mdpassthrough(fieldName: "html")
        buttons: [Button]
    }
    type BlogDate {
        date: Date! @dateformat
        slug: String!
    }
    type Item {
        id: ID!
    }
    type Meta {
        title: String
        slug: String
    }
    
`;
