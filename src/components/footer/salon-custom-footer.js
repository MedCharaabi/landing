
import Image from "next/image"
import { useState } from 'react';

import { useForm } from 'react-hook-form';
import axios from 'axios';

import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import { QRCodeCanvas } from 'qrcode.react';



const socialdata = [
    'https://www.facebook.com/AIMOOV-103242335740853',
    'https://www.instagram.com/ai_moov/',
]

const socialDataLinks = [
    {
        'link':
            "https://www.linkedin.com/company/ai-bright/",
        'label': 'LinkedIn',
    },
    {
        'link':

            "https://www.instagram.com/ai_moov/?hl=fr",
        'label': 'Instagram',
    },
    {
        'link':
            "https://www.facebook.com/AIMOOV-103242335740853",
        'label': 'Facebook',
    }
]


export default function SalonCustomFooter() {

    const { locales } = useRouter();

    const intl = useIntl();




    return (

        <section className="py-10 bg-gray-900 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div
                    className="flex gap-11"
                // className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12"
                >
                    <div>

                        <ul className=" flex  flex-col/ items-center">
                            <li>
                                <Image alt="logo" src={"/images/logo.png"} height={"200"} width={"200"} />
                            </li>

                            <li>

                                <div className='flex justify-center items-center lg:gap-10'>
                                    {
                                        socialDataLinks.map((item, index) => {
                                            return (<div key={index} className='flex flex-col justify-start gap-3 items-center bg-cBlue p-4 rounded-2xl shadow-2xl' >

                                                <QRCodeCanvas value={item.link} bgColor='white' fgColor={"black"} size={120} />

                                                <p className='text-center text-white text-xl font-normal '>{item.label}</p>
                                            </div>);
                                        })

                                    }
                                </div>
                            </li>

                        </ul>
                    </div>




                    <div>
                        <p className="text-base text-gray-500">Contact</p>

                        <ul className="mt-8 space-y-4">
                            <li>
                                <span href="#" title="" className="text-base font-semibold text-white transition-all duration-200 "> Adress: </span>
                                <span href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> 137 Rue Anatole France, 92300, Levallois-Perret, France </span>
                            </li>

                            <li>
                                <span href="#" title="" className="text-base font-semibold text-white transition-all duration-200 "> Email: </span>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> contact@ai-bright.com </a>
                            </li>


                            <li>
                                <span href="#" title="" className="text-base font-semibold text-white transition-all duration-200 "> Phone: </span>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> +33 (0)9 53 14 79 38 </a>
                            </li>

                        </ul>
                    </div>


                </div>

                <hr className="mt-16 mb-10 border-gray-800" />


            </div>
        </section>
    )
}