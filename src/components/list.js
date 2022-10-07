import React from 'react';
import { Flex, Box, IconButton } from 'theme-ui';

export default function List({ items = [], parentStyle, childStyle }) {
  return (
    <Box
      as="ul"
      sx={{
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        ...parentStyle,
      }}
    >
      {items.map(({ icon, text, isAvailable }, i) => (

        // <div className=" w-full flex justify-between items-center ">


        // </div>


        <Flex
          className={isAvailable ? 'open' : 'closed'}
          as="li"
          sx={{ ...childStyle }}
          key={i}
        //   <span className="font-normal text-sm text-black">""</span>
        //   <span className="font-normal text-xl text-cBlue">77 €</span>
        //   <span className="font-normal text-xs text-black line-through">33€/month</span>
        //   <span className="font-normal text-base text-black">(33%)</span>
        >
          <IconButton sx={styles.listIcon} aria-label="list icon">
            {icon}
          </IconButton>
          {text}
        </Flex>
      ))}
    </Box>
  );
}
const styles = {
  listIcon: {
    width: [25, '35px'],
    height: 'auto',
    color: 'secondary',
    padding: 0,
    fontSize: [2, 5],
    marginLeft: '-1px',
    flexShrink: 0,
    justifyContent: 'flex-start',
    marginTop: [1, '2px'],
  },
};
