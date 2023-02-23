export const getFeaturedPostsQuery = `
  query getFeaturedPosts {
    postsConnection(where: {featuredPost: true}) {
      edges {
        node {
          slug
          title
          excerpt
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
          author {
            bio
            createdAt
            name
            photo {
              url
            }
          }
          createdAt
        }
      }
    }
  }
`;

export const getPostsQuery = `
query getFeaturedPosts {
  postsConnection(where: {featuredPost: false}) {
    edges {
      node {
        slug
        title
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
        author {
          bio
          createdAt
          name
          photo {
            url
          }
        }
        createdAt
      }
    }
  }
}
`;

export const getPostQuery = `
query getFeaturedPosts($slug: String!) {
  post(where: {slug: $slug}) {
    title
    slug
    excerpt
    createdAt
    content {
      raw
    }
    featuredImage {
      url
    }
    categories {
      name
      slug
    }
    author {
      name
      bio
      createdAt
      photo {
        url
      }
    }
  }
}
`;
