import Image from "./image";

import { FormattedMessage } from "react-intl";

export const Banner = () => {


    return (
        <div
            className=' bg-black w-screen flex flex-col lg:flex-row  justify-between items-center md:items-stretch md:p-7 '
        >
            <div className=' h-full  w-screen md:w-full lg:w-1/3   flex flex-col justify-between items-stretch md:items-start '>
                {/* logo */}
                <div className='flex justify-center align-middle '>

                    <Image alt='logo' src={logo} className='pl-3 w-52 h-48 md:w-72 md:h-64' />
                </div>

                {/* text */}
                <div className='pl-7 md:pl-9 px-24 w-full'>
                    <h2 className='text-5xl text-white  w- h-full font-normal text-start '>
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

                <form className=' md:w-4/5 lg:w-auto flex flex-col  md:flex-row  lg:flex-col xl:flex-row  items-top  gap-5 2xl:gap-9 mx-7 md:mx-0  md:pl-9'
                    onSubmit={handleSubmit(sendEmail)}

                >

                    <div className=' w-full flex  flex-col gap-1'>

                        {/* rounded input with wihte text */}
                        <input
                            className='rounded-full w-full  sm:w-4/5  md:w-full  lg:w-60  xlg:w-80 h-20 md:h-10 px-7 ld:px-5 bg-cGray text-black placeholder:text-white'
                            type='text'
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

                        <label className="w-full font-bold ml-3">
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
                        className='rounded-full  full-width  sm:w-4/5 md:w-full w-full md//:w-44  h-20 md:h-10 bg-cBlue px-5 text-white'
                    // onClick={() =>
                    //   sendEmail(email)}
                    >

                        <FormattedMessage id="page.home.notifyme" />

                    </button>


                </form>
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

            <div className='full-width '>
                <Image alt="Vercel logo" src={right_image} />

            </div>


        </div>

    );

}