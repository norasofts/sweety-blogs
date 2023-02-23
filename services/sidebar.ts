export const sidebarQuery = `
query GetSidebar {
  sidebarsConnection {
    edges {
      node {
        title
        description
        archives {
          slug
          title
        }
        socials {
          name
          url
        }
      }
    }
  }
}
`;
