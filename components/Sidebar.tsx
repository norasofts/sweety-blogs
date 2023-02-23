import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { SidebarContent } from '../services/types';

export default function Sidebar({
  archives,
  description,
  socials,
  title,
}: SidebarContent) {
  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link
          display="block"
          variant="body1"
          href={`posts/${archive.slug}`}
          key={archive.title}
        >
          {archive.title}
        </Link>
      ))}
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {socials.map((s) => (
        <Link
          display="block"
          variant="body1"
          href={s.url}
          key={s.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <span>{s.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}
