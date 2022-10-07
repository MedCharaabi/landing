// /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import { Image, } from 'theme-ui';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

// import Image from 'next/image';


import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";


export default function Banner() {

  const { locales } = useRouter();

  const intl = useIntl();



  // **********  email send  **********
  const { register, handleSubmit, formState: { isValid, errors } } = useForm();

  const [sendEmailResult, setSendEmailResult] = useState(null)

  const sendEmail = async (formData) => {


    try {

      // const response = await axios.get("http://212.227.181.69/mail?email=" + email)
      const response = await axios.post("http://localhost:3400/api/whishlist", { email: formData.email, lang: intl.locale })
      // const result = res.data;
      console.log(response)
      setSendEmailResult(true)
      return response;
      // if(response.data == )
    } catch (error) {
      console.log("Error: " + error);
      setSendEmailResult(false)
      return { error };
    }

  }




  return (
    <div
      className=' bg-black w-screen flex flex-col lg:flex-row  justify-between items-center md:items-stretch md:p-7 '
    >
      <div className=' h-full/  w-screen md:w-full lg:w-2/5   flex flex-col justify-between items-stretch md:items-start '>
        {/* logo */}
        <div className='flex flex-col justify-center items-center w-full   md:mx-0 md:pl-9'>

          <Image alt='logo' src={"/images/logo.png"} className='pl-3/ w-52 h-48 md:w-72 md:h-64' />
          {/* text */}
          <h2 className='text-4xl text-white  w- h-full font-normal  md:text-start px-7 md:px-0 text-justify'>
            {/* STAY HEALTHY */}
            <FormattedMessage id="page.home.STAY_HEALTHY" />
          </h2>

        </div>

        <div style={{ height: "45px", width: "50px" }} />

        <div className='flex justify-center text-white items-center mx-7 md:mx-0 md:pl-9'>


          <p className='py-7 font-normal text-justify'>
            <FormattedMessage id="page.home.description" />

          </p>
        </div>

        <div style={{ height: "45px", width: "50px" }}>

        </div>

        <form className=' md:w-4/5 lg:w-full flex flex-col  md:flex-row  lg:flex-col xl:flex-row  items-top md:items-center   gap-5 2xl:gap-9 mx-7 md:mx-0  md:pl-9'
          onSubmit={handleSubmit(sendEmail)}

        >

          <div className=' w-full flex  justify-start
           flex-col gap-1'>

            {/* rounded input with wihte text */}
            <input
              className='email-input rounded-full w-full  sm:w-4/5  md:w-full  lg:w-full xl:w-60  xl/:w-80 h-16 md:h-10 px-7 ld:px-5 bg-cGray text-black placeholder:text-white'
              type='email'
              placeholder='Email'
              onChange={(e) => setEmail(e.currentTarget.value)}
              {...register('email', {
                required: {
                  value: true,
                  message: intl.formatMessage({ id: "page.home.email_required" }),
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  message: intl.formatMessage({ id: "page.home.email_invalid" }),
                },
              })}
            />

            <label className="w-full font-bold ml-3 mx-7 md:hidden lg:block xl:hidden">
              {errors.email?.type === 'required' && (
                <span className="label-text-alt text-white">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === 'pattern' && (
                <span className="label-text-alt text-white">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>


          {/* rounded button */}
          <button
            type='submit'
            className='rounded-full  sm:w-full md:w-44 lg:w-full xl:w-44 md//:w-44  h-16 md:h-10 bg-cBlue px-5 text-white'

          // onClick={() =>
          //   sendEmail(email)}
          >

            <FormattedMessage id="page.home.notifyme" />

          </button>


        </form>
        <label className="w-full font-bold ml-3 mx-7 md:mx-0 md:pl-9 hidden md:block lg:hidden xl:block">
          {errors.email?.type === 'required' && (
            <span className="label-text-alt text-white">
              {errors.email.message}
            </span>
          )}
          {errors.email?.type === 'pattern' && (
            <span className="label-text-alt text-white">
              {errors.email.message}
            </span>
          )}
        </label>
        {/* send email result */}
        {
          sendEmailResult == true ?
            <div className='flex justify-center items-center mx-7 md:mx-0 md:pl-9'>

              <p className='py-7 font-normal text-white'>
                <FormattedMessage id="page.home.email_submit_sucess" />

              </p>
            </div>
            : sendEmailResult == false ?
              <div className='flex justify-center items-center mx-7 md:mx-0 md:pl-9'>

                <p className='py-7 font-normal text-white'>
                  <FormattedMessage id="page.home.email_submit_fail" />

                </p>
              </div>

              : null
        }




      </div>

      <div className='full-width  flex'>
        <Image alt="Vercel logo" src={"/images/right_image.png"} />

      </div>


    </div>

  )
}

