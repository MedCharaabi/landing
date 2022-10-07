// /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCard from '../components/feature-card.js';
// import heartIcon from '../../public/images/heart-icon.png';
// import techIcon from '../../public/images/tech-icon.png'
// import tainerIcon from '../../public/images/trainer-icon.png'

const data = [
  {
    id: 1,
    imgSrc: "images/heart-icon.png",
    altText: 'Une meilleur santé',
    title: 'page.home.feature1_title',
    text:
      'page.home.feature1_description',
  },
  {
    id: 2,
    imgSrc: "images/trainer-icon.png",
    altText: 'Maîtrisez vos entraînements ',
    title: 'page.home.feature2_title',
    text:
      'page.home.feature2_description',
  },
  {
    id: 3,
    imgSrc: "images/tech-icon.png",
    altText: 'Technologie de pointe',
    title: 'page.home.feature3_title',
    text:
      'page.home.feature3_description',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }} id="feature" className='bg-white pt-16'>
      <Container>
        <SectionHeader
          desc="Go Beyond unlimited features"
          title="Gardez la motivation avec votre entraîneur personnel à la demande pour atteindre l'équilibre du corps et de l'esprit."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 4],
    pb: [0, null, null, null, null, null, null, null, 6],
    gridGap: [
      '40px',
      '45px',
      '45px 30px',
      null,
      '60px 30px',
      '50px 40px',
      null,
      '75px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
