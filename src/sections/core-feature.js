// /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import { jsx, Container, Box, Grid, Text, Heading } from 'theme-ui';
import TextFeature from '../components/text-feature';
import Image from 'next/image';
// import Image from '../src/components/image';

// import CoreFeatureThumb from 'assets/tv-preview.png';
// import CoreFeatureThumb from 'assets/1.png';
// import CoreFeature from '../../public/images/feature-camera-avatar.png';
// import icon4 from 'images/core-feature/4.png';
// import icon5 from 'images/core-feature/5.png';
// import icon6 from 'images/core-feature/6.png';
import { FormattedMessage } from "react-intl";

const data = {
  subTitle: 'Core features',
  title: 'Votre entraîneur personnel à la demande qui vous aide à atteindre vos objectifs de santé.',
  features: [
    {
      id: 1,
      imgSrc: "/images/core-feature/5.png",
      altText: 'Amélioration des compétences',
      title: 'page.home.core-feature1_title',
      text:
        "page.home.core-feature1_description"
    },
    {
      id: 2,
      imgSrc: "/images/core-feature/6.png",
      altText: 'Une expérience utilisateur exceptionnelle',
      title: 'page.home.core-feature2_title',
      text:
        "page.home.core-feature2_description"
    },
    {
      id: 2,
      imgSrc: "/images/core-feature/4.png",
      altText: 'Une expérience utilisateur exceptionnelle',
      title: 'page.home.core-feature3_title',
      text:
        "page.home.core-feature3_description",
    },
  ],
};

export default function CoreFeature() {


  return (
    <section sx={styles.coreFeature} className='bg-white pt-20'>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={"/images/tv.png"} alt="Thumbnail" width={"540px"} height={"700px"} />
        </Box>
        <Box sx={styles.contentBox}>
          <Box sx={styles.headingTop}>
            <TextFeature subTitle={""} title={data.title} />
          </Box>

          <Grid gap="15px 0" columns={1} sx={styles.grid}>
            {data.features.map((item) => (
              <Box sx={styles.card} key={item.id}>
                <Image src={item.imgSrc} alt={item.altText} sx={styles.img} height='100px' width='100px' />

                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}> <FormattedMessage id={item.title} /></Heading>
                  <Text sx={styles.wrapper.subTitle} className="whitespace-pre-line text-justify
"> <FormattedMessage id={item.text} /></Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: ['auto', null, null, '50%'],
      bottom: ['100px', 0, null, 'auto'],
      left: 0,
      background: 'linear-gradient(-157deg, #F6FAFD, #F9FCFC, #FCFDFC)',
      height: [350, 550, '60%'],
      width: '50%',
      zIndex: -1,
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
      transform: ['translateY(0)', null, null, 'translateY(-50%)'],
    },
  },
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: ['column', null, null, 'row'],
  },
  thumbnail: {
    pl: [0, 5, 0, null, 7, 0],
    pr: [0, 5, null, null, null, 75, 0],
    order: [2, null, null, 0],
  },
  contentBox: {
    width: ['100%', 450, 550, 350, 500, 570],
    // pr: [0, null, 'auto', null, null, 80],
    pl: 'auto',
    flexShrink: 0,
  },
  headingTop: {
    pl: [0, null, null, null, '35px', null, '55px', 6],
    mb: [3, null, null, null, 1],
    textAlign: ['center', null, null, 'left'],
  },
  grid: {
    p: ['0 0px 35px', null, null, null, '0 20px 40px', null, '0 40px 40px', 0],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    p: [
      '0 17px 20px',
      null,
      null,
      '0 0 20px',
      '20px 15px 17px',
      null,
      null,
      '25px 30px 23px',
    ],
    backgroundColor: 'white',
    borderRadius: '10px',
    transition: 'all 0.3s',
    width: ['100%', '85%', null, '100%'],
    mx: 'auto',
    '&:hover': {
      boxShadow: [
        '0px 0px 0px rgba(0, 0, 0, 0)',
        null,
        null,
        null,
        '0px 8px 24px rgba(69, 88, 157, 0.07)',
      ],
    },
  },

  img: {
    width: ['50px', null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, 4],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
      color: 'black',
    },
  },
};
