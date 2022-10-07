import { FormattedMessage, useIntl } from "react-intl";


export default function About() {

    const intl = useIntl();
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center hover:shadow-xl p-7 delay-200">
                    {/* <img className="object-cover w-32 h-32 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/4/avatar.jpg" alt="" /> */}
                    <p className="mt-6 text-lg font-semibold text-black"><FormattedMessage id="page.home.about-ai-bright" /></p>
                    <blockquote className="max-w-xl mx-auto mt-7">
                        <p className="text-xl leading-relaxed text-black"><FormattedMessage id="page.home.about-ai-bright-desc" /></p>
                    </blockquote>
                </div>
            </div>
        </section>

    );
}