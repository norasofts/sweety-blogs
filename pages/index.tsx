import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Blog from '../components/Blog';
import Main from '../components/Main';
import Layout from '../layouts';
import getFromApi from '../services';
import { getFeaturedPostsQuery, getPostsQuery } from '../services/posts';
import { Post, PostsData, ResponseData } from '../services/types';

type HomePage = InferGetStaticPropsType<typeof getStaticProps>;

export type HomeResponse = {
  posts: ResponseData<Post>;
  featuredPosts: ResponseData<Post>;
};

export default function Home({ posts, featuredPosts }: HomePage) {
  return (
    <Layout
      beforeSidebar={<Blog featuredPosts={featuredPosts} posts={posts} />}
    >
      <Head>
        <title>Sweety Blogs: Home</title>
      </Head>
      <Main posts={posts} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeResponse> = async () => {
  const posts = (await getFromApi<PostsData>(getPostsQuery)).postsConnection
    .edges;
  const featuredPosts = (await getFromApi<PostsData>(getFeaturedPostsQuery))
    .postsConnection.edges;

  return {
    props: {
      posts,
      featuredPosts,
    },
  };
};
