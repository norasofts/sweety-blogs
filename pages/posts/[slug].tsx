import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import ShowBlog from '../../components/ShowBlog';
import Layout from '../../layouts';
import getFromApi from '../../services';
import { getPostQuery, getPostsQuery } from '../../services/posts';
import { PostDetails, PostsData } from '../../services/types';

type PostPage = InferGetStaticPropsType<typeof getStaticProps>;

export default function Post({ post }: PostPage) {
  return (
    <Layout>
      <Head>
        <title>{post.title}: Sweety Blogs</title>
      </Head>
      <ShowBlog post={post} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<PostDetails> = async ({
  params,
}) => {
  const { post } = await getFromApi<PostDetails>(getPostQuery, {
    slug: params?.slug,
  });
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { postsConnection } = await getFromApi<PostsData>(getPostsQuery);
  const posts = postsConnection.edges;
  const paths = posts.map(({ node: { slug } }) => ({ params: { slug } }));
  return {
    paths,
    fallback: 'blocking',
  };
};
