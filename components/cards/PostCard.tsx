import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Post } from '../../services/types';
import { SxProps, Theme } from '@mui/material';
import moment from 'moment';

type Card = {
  post: Post;
  wide?: boolean;
  sx?: SxProps<Theme> | undefined;
};

export default function PostCard({ post, wide = false, sx }: Card) {
  const formattedDate = moment(post.createdAt).format('MMMM Do YYYY');

  return (
    <Grid item xs={12} md={!wide && 6} sx={sx}>
      <CardActionArea component="a" href={`/posts/${post.slug}`}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {formattedDate}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.excerpt}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.featuredImage.url}
            alt={post.title}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
