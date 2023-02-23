import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  styled,
  Box,
} from '@mui/material';
import { PostWithContent } from '../services/types';
// @ts-ignore
import { RichText } from '@graphcms/rich-text-react-renderer';
import { Grid } from '@mui/material';
import moment from 'moment';

const Root = styled(Card)({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Media = styled(CardMedia)({
  height: 400,
  width: '100%',
});

const Content = styled(CardContent)({
  paddingTop: 40,
  paddingBottom: 40,
  width: '100%',
});

const ContentParent = styled(Box)({
  marginTop: 40,
});

type Props = {
  post: PostWithContent;
};

const ShowBlog = ({ post }: Props) => {
  const formattedDate = moment(post.createdAt).format('MMMM Do YYYY');
  return (
    <Grid item xs={12} md={8}>
      <Root>
        <Media image={post.featuredImage.url} title={post.title} />
        <Content>
          <Typography variant="h2" component="h1" align="center">
            {post.title}
          </Typography>
          <Typography variant="h6" align="center">
            By {post.author.name} on {formattedDate}
          </Typography>
          <ContentParent>
            <RichText
              content={post.content.raw.children as any}
              renderers={{
                img: ({ src, width, height }) => (
                  <img src={src} style={{ width: '100%', height: 'auto' }} />
                ),
              }}
            />
          </ContentParent>
        </Content>
      </Root>
    </Grid>
  );
};

export default ShowBlog;
