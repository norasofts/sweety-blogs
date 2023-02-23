import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Category, ResponseData } from '../services/types';
import NextLink from 'next/link';

interface HeaderProps {
  categories: ResponseData<Category>;
  title: string;
}

export default function Header({ categories, title }: HeaderProps) {
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <NextLink
            href="/"
            style={{
              color: 'black',
              textDecoration: 'none',
            }}
          >
            {title}
          </NextLink>
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {categories.map(({ node: { name, slug } }) => (
          <Link
            color="inherit"
            noWrap
            key={name}
            variant="body2"
            href={`/category/${slug}`}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {name}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
