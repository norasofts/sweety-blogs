export const getAllCats = `
query getCats {
  categoriesConnection {
    edges {
      node {
        name
        slug
      }
    }
  }
}
`;
