import { ThemeProvider } from '@emotion/react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { CssBaseline, Container, Grid } from '@mui/material';
import { ReactNode, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Sidebar from '../components/Sidebar';
import getFromApi from '../services';
import { getAllCats } from '../services/categories';
import { sidebarQuery } from '../services/sidebar';
import {
  CategoriesData,
  Category,
  ResponseData,
  SidebarContent,
  SidebarData,
} from '../services/types';
import theme from './theme';

type LayoutComponent = {
  children?: ReactNode;
  beforeSidebar?: EmotionJSX.Element;
};

const Layout = ({ children, beforeSidebar }: LayoutComponent) => {
  const [categories, setCategories] = useState<ResponseData<Category>>([]);
  const [sidebar, setSidebar] = useState<ResponseData<SidebarContent>>([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const categories = (await getFromApi<CategoriesData>(getAllCats))
      .categoriesConnection.edges;
    const s = (await getFromApi<SidebarData>(sidebarQuery)).sidebarsConnection
      .edges;
    setCategories(categories);
    setSidebar(s);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container maxWidth="lg">
      {!loading && (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="lg">
            <Header title="Sweety Blogs" categories={categories} />
            <main>
              {beforeSidebar}
              <Grid container spacing={5} sx={{ mt: 3 }}>
                {children}
                <Sidebar
                  title={sidebar[0].node.title}
                  description={sidebar[0].node.description}
                  archives={sidebar[0].node.archives}
                  socials={sidebar[0].node.socials}
                />
              </Grid>
            </main>
          </Container>
          <Footer
            title="Footer"
            description="Something here to give the footer a purpose!"
          />
        </ThemeProvider>
      )}
    </Container>
  );
};

export default Layout;
