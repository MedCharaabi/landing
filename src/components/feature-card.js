// /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Image, Box, Heading, Text } from 'theme-ui';
import { FormattedMessage, useIntl } from "react-intl";

export default function FeatureCard({
  src,
  altText = 'default alt text',
  title,
  text,
}) {
  const intl = useIntl();



  return (
    <Box sx={styles.card}>
      <Image src={src} alt={altText} sx={styles.img} />

      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title} className="whitespace-pre-line" ><FormattedMessage id={title} /></Heading>
        <Text sx={styles.wrapper.subTitle} className="whitespace-pre-line text-justify
"> <FormattedMessage id={text} /></Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
  },

  img: {
    width: ['60px', null, null, null, '55px', '70px', null, '80px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, 4, null, null, 3, 4, null, 5],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, null, null, null, 4],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, null, 3],
      mt: '2px',
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
      color: 'black',
    },
  },
};
