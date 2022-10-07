import { freeze } from "@reduxjs/toolkit";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

export default function Offer({ data, showModal,
    onSelect,
    formData, }) {
    return (

        <div className="relative">
            {/* <h1 className={`absolute ${data.badge <= 9 ? "-top-6 -right-6" : "-top-10 -right-12 "}   -rotate-45 text-7xl bg-red/-400 text-cBlue rounded-full  `}>
                X{data.badge}
            </h1> */}
            <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md hover:shadow-lg ">
                <div className="p-8 xl:px-3">
                    <h3 className="text-5xl font-semibold text-cBlue">{data.title}</h3>
                    <h3 className="text-3xl font-semibold text-black">{data.off} € OFF</h3>

                    <div className="w-full flex justify-between   p-4 ">
                        <Image alt="offer" src={"/images/avatars.png"} height="100" width={"80"} />
                        <Image alt="offer" src={"/images/camera.png"} height="100" width={"100"} />
                        <Image alt="offer" src={"/images/phone_app.png"} height="100" width={"70"} />
                        <h1 className={`     ${data.badge <= 9 ? "-top-6 -right-6" : "-top-10 -right-12 "}   -rotate-12 text-7xl bg-red/-400 text-cBlue rounded-full  `}>
                            <span className="text-4xl">
                                X
                            </span>

                            {data.badge}
                        </h1>

                    </div>


                    <div className="flex items-center justify-around">

                        <span className="text-5xl font-bold text-black mt-7">€{data.price[0]}</span>
                        <span className="text-2xl font- text-gray-500 line-through mt-7">€{data.price[1]}</span>
                        <span className="text-xl font-bold text-black mt-7">({data.price[2]}%)</span>
                    </div>
                    {/* <p className="mt-3 text-base text-gray-600">{data.lifetime} Life time free subscription</p> */}

                    <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">

                        {
                            data.features.map((feature) => {
                                return (

                                    <li key={feature} className="inline-flex items-center space-x-2">
                                        <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-base font-medium text-gray-900"> {feature} </span>
                                    </li>
                                )

                            })
                        }



                    </ul>

                    <button className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-blue-600 to-cBlue to/-blue-600 hover:opacity-80 focus:opacity-80 hover:scale-110" role="button"
                        onClick={() => {
                            showModal(true),
                                onSelect({ ...formData, booking_name: data.title, booking_price: data.price })
                        }
                        }
                    > <FormattedMessage id="page.book.book" /> </button>
                    <p className="mt-4 text-sm text-gray-500">

                        <FormattedMessage id="page.book.money-grantee" />
                    </p>
                </div>
            </div>

        </div>


    );
}