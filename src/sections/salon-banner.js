// /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import { Container, Flex, Box, Input, Heading, Text, Image, Button } from 'theme-ui';

import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import { QRCodeCanvas } from 'qrcode.react';


export default function SalonBanner() {

  const { locales } = useRouter();

  const intl = useIntl();



  return (
    <div
      className=' bg-white w-screen flex flex-col lg:flex-row  justify-between items-center md:items-stretch md:p-7 '
    >
      <div className=' h-full  w-screen md:w-full lg:w-1/3   flex flex-col justify-between items-stretch md:items-start '>
        {/* logo */}
        <div className='flex flex-col justify-center w-full items-center  md:mx-0 md:pl-9 '>

          <Image alt='logo' src={"/images/logo.png"} className='pl-3/ w-52 h-48 md:w-72 md:h-64' />
          {/* text */}
          <h2 className='text-4xl text-black  w-full h-full font-normal text-center md:text-start '>
            {/* STAY HEALTHY */}
            {/* <FormattedMessage id="page.home.STAY_HEALTHY" /> */}
            Réservez votre caméra maintenant et économisez 300€.

          </h2>

        </div>




      </div>

      <div className='w-1/2 flex justify-center '>

        <div className=' flex flex-col items-center bg-cBlue p-5 rounded-2xl  hover:scale-125 duration-700 shadow-2xl'>

          <QRCodeCanvas value="https://212.227.181.69/booking/book" bgColor='white' fgColor={"black"} size={208} />

          <h2 className='text-5xl text-white   w- h-full font-bold text-center md:text-center p-7 '>
            Scan me
          </h2>
        </div>


      </div>


    </div>

  )
}

