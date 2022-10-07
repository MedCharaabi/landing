// /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import { Container, Flex, Box, Input, Heading, Text, Image, Button } from 'theme-ui';

import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";


export default function Banner() {

  const { locales } = useRouter();

  const intl = useIntl();



  return (
    <div
      className=' bg-black w-screen flex flex-col lg:flex-row  justify-between items-center md:items-stretch md:p-7 '
    >
      <div className=' h-full  w-screen md:w-full lg:w-1/3   flex flex-col justify-between items-stretch md:items-start '>
        {/* logo */}
        <div className='flex flex-col justify-center w-full items-center  md:mx-0 md:pl-9 '>

          <Image alt='logo' src={"/images/logo.png"} className='pl-3/ w-52 h-48 md:w-72 md:h-64' />
          {/* text */}
          <h2 className='text-4xl text-white  w- h-full font-normal text-center md:text-start '>
            {/* STAY HEALTHY */}
            <FormattedMessage id="page.home.STAY_HEALTHY" />
          </h2>

        </div>


        <div style={{ height: "45px", width: "50px" }} />

        <div className='flex justify-center text-white items-center mx-7 md:mx-0 md:pl-9'>


          <p className='py-7 font-normal'>
            <FormattedMessage id="page.home.description" />

          </p>
        </div>

        <div style={{ height: "45px", width: "50px" }}>

        </div>


      </div>

      <div className='full-width '>
        <Image alt="camera, phone, avatar" src={"/images/right_image.png"} />

      </div>


    </div>

  )
}

