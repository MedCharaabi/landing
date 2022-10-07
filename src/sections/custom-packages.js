import { FormattedMessage } from "react-intl";
import Offer from "../components/offer/offer";


const offersData = [{
    id: 1,
    title: "AIMOOV SOLO",
    // price: 0,
    off: '98',
    lifetime: 1,

    badge: 1,
    price: ['181', '297', '35'],
    item: 1,

    features: [
        "1x Aimoov camera",
        "1x Aimoov app",
        "1x Lifetime free subscription",
    ]
},

{
    id: 2,
    title: "AIMOOV DUO",
    // price: 0,
    off: '212',
    lifetime: 2,

    badge: 2,
    price: ['346', '594', '38'],
    item: 1,

    features: [
        "2x Aimoov camera",
        "2x Aimoov app",
        "2x Lifetime free subscription",
    ]
},


{
    id: 3,
    title: "AIMOOV TEAM",
    // price: 0,
    off: '572',
    lifetime: 5,

    badge: 5,
    price: ['837', '1485', '40'],
    item: 1,

    features: [
        "5x Aimoov camera",
        "5x Aimoov app",
        "5x Lifetime free subscription",
    ]
},


{
    id: 4,
    title: "AIMOOV TEAM",
    // price: 0,
    off: '558',
    lifetime: 10,

    badge: 10,
    price: ['1535', '2970', '45'],
    item: 1,

    features: [
        "10x Aimoov camera",
        "10x Aimoov app",
        "10x Lifetime free subscription",
    ]
},

    // {
    //     id: 1,
    //     title: "AIMOOV DUO",
    //     price: 23,
    //     features: [
    //         "5 lorem ipusm",
    //         "lorem ipusm lorem ipusm",
    //         "120+ lorem ipusm",
    //         "lorem ipusm lorem ipusm",
    //         "lorem ipsum",
    //     ]
    // },


    // {
    //     id: 1,
    //     title: "AIMOOV TEAM",
    //     price: 23,
    //     features: [
    //         "5 lorem ipusm",
    //         "lorem ipusm lorem ipusm",
    //         "120+ lorem ipusm",
    //         "lorem ipusm lorem ipusm",
    //         "lorem ipsum",
    //     ]
    // },

    // {
    //     id: 1,
    //     title: "AIMOOV ENTREPRISE",
    //     price: 49,
    //     features: [
    //         "5 lorem ipusm",
    //         "lorem ipusm lorem ipusm",
    //         "120+ lorem ipusm",
    //         "lorem ipusm lorem ipusm",
    //         "lorem ipsum",
    //     ]
    // },

]


export default function CustomPackages({ showModal, onSelectPackage, formData }) {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto/ max-w-7xl/ sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Tarifs & Forfaits</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600"><FormattedMessage id="page.book.book-now-and-get" /></p>
                </div>

                <div className="grid max-w-md/  grid-cols-1 bg-red-400/ gap-6 mx-3 mt-8 text-center lg:max-w-full lg:mt-16 md:grid-cols-2 lg:grid-cols-4">


                    {
                        offersData.map((offer) => {

                            return (<Offer key={offer.id} data={offer} showModal={showModal} onSelect={onSelectPackage} formData={formData} />)
                        })
                    }

                </div>
            </div>
        </section>

    )
}