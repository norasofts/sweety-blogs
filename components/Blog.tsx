import Grid from '@mui/material/Grid';
import MainFeaturedPost from './cards/MainFeaturedPost';
import FeaturedPost from './cards/PostCard';
import { HomeResponse } from '../pages';

type BlogProps = HomeResponse;

export default function Blog({ featuredPosts, posts }: BlogProps) {
  const mfp = featuredPosts[featuredPosts.length - 1]?.node;

  const fPosts = featuredPosts.filter((f) => f.node.slug !== mfp.slug);

  return (
    <>
      <MainFeaturedPost post={mfp} />
      <Grid container spacing={4}>
        {fPosts.map((post) => (
          <FeaturedPost key={post.node.slug} post={post.node} />
        ))}
      </Grid>
    </>
  );
}
