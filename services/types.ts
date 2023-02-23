export interface Author {
  name: string;
  bio: string;
  createdAt: string;
  photo: {
    url: string;
  };
}

export interface Category {
  name: string;
  slug: string;
}

export interface Post {
  author: Author;
  title: string;
  slug: string;
  excerpt: string;
  createdAt: string;
  featuredImage: {
    url: string;
  };
  categories: Category[];
}

export type PostWithContent = Post & {
  content: {
    raw: {
      children: {
        children: any;
        type: string;
      }[];
    };
  };
};

export type PostDetails = {
  post: PostWithContent;
};

export interface SidebarContent {
  title: string;
  description: string;
  archives: {
    slug: string;
    title: string;
  }[];
  socials: {
    name: string;
    url: string;
  }[];
}

export interface PostsData {
  postsConnection: {
    edges: [
      {
        node: Post;
      }
    ];
  };
}

export interface CategoriesData {
  categoriesConnection: {
    edges: [
      {
        node: Category;
      }
    ];
  };
}

export interface SidebarData {
  sidebarsConnection: {
    edges: [
      {
        node: SidebarContent;
      }
    ];
  };
}

export type ResponseData<T> = {
  node: T;
}[];
