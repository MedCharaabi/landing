import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";


export default function SectionHeader({ title, slogan, isWhite }) {
  const intl = useIntl();
  return (
    <Box sx={{ variant: 'sectionHeader' }}>
      <Text
        as="p"
        sx={{
          variant: 'sectionHeader.subTitle',
          color: isWhite ? 'white' : 'heading',
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan}
      </Text>
      <Heading
        as="h2"
        sx={{
          variant: 'sectionHeader.title',
          color: isWhite ? 'white' : 'heading_secondary',
        }}
      >


        {title}
      </Heading>
    </Box>
  );
}
