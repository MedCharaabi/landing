import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../src/contexts/app/app.provider';

import theme from '../src/theme';
import Layout from '../src/components/layout';
import Banner from '../src/sections/book-banner';
// import Package from 'sections/package';
// import Button from 'react-bootstrap/Button';
import { Modal, } from "reactstrap";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import CustomPackages from '../src/sections/custom-packages';

import { FormattedMessage, useIntl } from "react-intl";

export default function IndexPage() {


  const intl = useIntl();



  const [modalOpen, setModalOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const [formResult, setFormResult] = React.useState({});
  const { register, handleSubmit, formState: { isValid, errors }, reset } = useForm();



  // const dispatcher = useDispatch()

  // let planModal = useSelector(state => state.showModal.value)


  const submitForm = async (form_data) => {
    setIsLoading(true)

    const data = { ...form_data, ...formData }

    try {
      const response = await axios.post("https://212.227.181.69/api/booking/add", data)
      // const result = res.data;
      console.log(response)
      setFormResult(true)
      return response;
      // if(response.data == )
    } catch (error) {
      console.log("Error: " + error);
      setFormResult(false)

      return { error };
    } finally {
      setIsLoading(false)
    }


  }



  return (
    <ThemeProvider theme={theme}>
      <div style={{ position: 'relative' }} className="bg-cBlue">
        <StickyProvider>
          <Layout>
            {/* <SEO title="Startup Landing 004" /> */}
            <Banner />
            {/* <Feature /> */}
            {/* <KeyFeature /> */}
            {/* <CoreFeature /> */}
            {/* <PartnerSection /> */}
            {/* <WorkFlow /> */}
            {/* <TestimonialCard /> */}
            {/* <SecurePayment /> */}
            <CustomPackages showModal={setModalOpen} onSelectPackage={setFormData} formData={formData} />
            {/* <Package showModal={setModalOpen} onSelectPackage={setFormData} formData={formData} /> */}
            {/* <Faq /> */}
          </Layout>



        </StickyProvider>



        <div className='modal-bg' onClick={() => {
          setModalOpen(false);

          // clear form data
          setFormData({})
          setFormResult(null)
          reset()


        }} style={{ display: `${modalOpen ? "grid" : "none"}` }}>

          <Modal isOpen={modalOpen} className="modal">






            <div class="mt-6 overflow-hidden bg-white rounded-xl">
              <div class="px-6 py-12 sm:p-12">
                <h3 class="text-3xl font-semibold text-center text-gray-900">Inscription au {formData.booking_name} offre</h3>

                <form onSubmit={handleSubmit(submitForm)} class="mt-14">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <label for="" class="text-base font-medium text-gray-900"> Nom </label>
                      <div class="mt-2.5 relative">
                        <input type="text" name="" id="" placeholder={
                          intl.formatMessage({ id: "page.book.enter-your" }) + ' ' +
                          intl.formatMessage({ id: "page.book.name" })
                        } class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"

                          {...register('Nom', {
                            required: {
                              value: true,
                              message: intl.formatMessage({ id: "page.home.field_required" }),
                            },
                            // minLength: {
                            //   value: 3,
                            //   message: "Le nom doit contenir au moins 3 caractères",
                            // },
                          })}
                        />
                        <label className="form-error">
                          {errors.Nom?.type === 'required' && (
                            <span className="label-text-alt text-red-400">
                              {errors.Nom.message}
                            </span>
                          )}
                          {errors.Nom?.type === 'minLength' && (
                            <span className="label-text-alt text-red-400">
                              {errors.Nom.message}
                            </span>
                          )}
                        </label>
                      </div>
                    </div>

                    <div>
                      <label for="" class="text-base font-medium text-gray-900"> Prénom </label>
                      <div class="mt-2.5 relative">
                        <input type="text" name="" id="" placeholder={
                          intl.formatMessage({ id: "page.book.enter-your" }) + ' ' +
                          intl.formatMessage({ id: "page.book.lastname" })
                        } class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          {...register('Prenom', {
                            required: {
                              value: true,
                              message: intl.formatMessage({ id: "page.home.field_required" }),
                            },
                            // minLength: {
                            //   value: 3,
                            //   message: "Le nom doit contenir au moins 3 caractères",
                            // },
                          })}
                        />
                        <label className="form-error">
                          {errors.Prenom?.type === 'required' && (
                            <span className="label-text-alt text-red-400">
                              {errors.Prenom.message}
                            </span>
                          )}
                          {errors.Prenom?.type === 'minLength' && (
                            <span className="label-text-alt text-red-400">
                              {errors.Prenom.message}
                            </span>
                          )}
                        </label>
                      </div>
                    </div>

                    <div className='sm:col-span-2'>
                      <label for="" class="text-base font-medium text-gray-900"> addresse email </label>
                      <div class="mt-2.5 relative">
                        <input type="email" name="" id="" placeholder={
                          intl.formatMessage({ id: "page.book.enter-your" }) + ' email'

                        } class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"

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
                        <label className="form-error">
                          {errors.email?.type === 'required' && (
                            <span className="label-text-alt text-red-400">
                              {errors.email.message}
                            </span>
                          )}
                          {errors.email?.type === 'pattern' && (
                            <span className="label-text-alt text-red-400">
                              {errors.email.message}
                            </span>
                          )}
                        </label>
                      </div>
                    </div>





                    <div class="sm:col-span-2">
                      <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                        Send
                      </button>
                    </div>

                    {
                      formResult == true && <div className="sm:col-span-2 text-black text-center">

                        <FormattedMessage id="page.book.sucessmsg" />
                        Votre demande a été envoyée avec succès</div>
                    }
                    {

                      formResult == false && <div className="sm:col-span-2 text-red-500 text-center">
                        Une erreur s&apos;est produite lors du traitement de votre demande
                        <FormattedMessage id="page.book.errormsg" />

                      </div>
                    }
                  </div>
                </form>
              </div>
            </div>


          </Modal>
        </div>



      </div>


    </ThemeProvider>
  );
}




const styles = {

  sponsorTitle: {
    color: 'white',
    fontSize: [1, 2],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  form: {
    mt: "22px",
    mb: ['30px', null, null, null, null, '60px'],
    display: ['flex'],
    input: {
      borderRadius: ['4px'],
      backgroundColor: '#fff',
      width: ['240px', null, null, null, '315px', null, '375px'],
      height: ['45px', null, null, '55px', null, null, '65px'],
      padding: ['0 15px', null, null, '0 25px'],
      fontSize: [1, null, null, 2],
      border: 'none',
      outline: 'none',
      boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
    },
    button: {
      fontSize: [1, null, null, null, 2, '20px'],
      borderRadius: ['4px'],
      padding: ['0 15px'],
      ml: ['10px'],
      width: ['auto', null, null, null, '180px'],
    },
  },
  sponsorBox: {
    pt: ['35px', null, null, null, null, '45px'],
    flexDirection: ['column', null, 'row'],
    sponsor: {
      display: 'flex',
      alignItems: 'center',
      '> a': {
        mr: [5, null, null, 4, 6],
        display: 'flex',
        '&:last-of-type': {
          mr: 0,
        },
      },
    },
  },
};