import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import PostCard from './cards/PostCard';
import { Post, ResponseData } from '../services/types';
interface MainProps {
  posts: ResponseData<Post>;
}

export default function Main({ posts }: MainProps) {
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        From our trusts place.
      </Typography>
      <Divider />
      {posts.map((post) => (
        <PostCard
          key={post.node.slug}
          post={post.node}
          wide={true}
          sx={{
            marginTop: '30px',
          }}
        />
      ))}
    </Grid>
  );
}
