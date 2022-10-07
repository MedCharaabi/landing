/** @jsxImportSource @emotion/react */

import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../src/contexts/app/app.provider';
import theme from '../src/theme';
import SEO from '../src/components/seo';
import Layout from '../src/components/layout';
import Banner from '../src/sections/banner-head';
import CoreFeature from '../src/sections/core-feature';
import Feature from '../src/sections/feature-';
import About from '../src/sections/about';



export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="AiMoov" />
          <Banner />
          <Feature />
          <CoreFeature />
          <About />


        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
