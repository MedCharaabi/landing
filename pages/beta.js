import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../src/contexts/app/app.provider';

import theme from '../src/theme';
import Layout from '../src/components/layout';
import Banner from '../src/sections/book-banner';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { FormattedMessage, useIntl } from "react-intl";
import codesPostaux from 'codes-postaux';

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

    console.log(form_data);
    // setIsLoading(true)

    // const data = { ...form_data, ...formData }

    // try {
    //   const response = await axios.post("https://212.227.181.69/api/booking/add", data)
    //   // const result = res.data;
    //   console.log(response)
    //   setFormResult(true)
    //   return response;
    //   // if(response.data == )
    // } catch (error) {
    //   console.log("Error: " + error);
    //   setFormResult(false)

    //   return { error };
    // } finally {
    //   setIsLoading(false)
    // }


  }

  const postall = codesPostaux.find((code) => code.code === "AILLEVILLE")

  console.log(postall)

  return (
    <ThemeProvider theme={theme}>
      <div style={{ position: 'relative' }} className="bg-cBlue">
        <StickyProvider>
          <Layout>
            {/* <SEO title="Startup Landing 004" /> */}
            <Banner />


            <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
              <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                  <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Campagne de Tests Beta AIMOOV</h2>
                  <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">inscrivez-vous et Soyez parmi les premiers à tester notre caméra AIMOOV. Offre limitée à 100 personnes qui seront tirées au sort. </p>
                </div>

                <div className="max-w-5xl mx-auto mt-12 sm:mt-16">


                  <div className="mt-6 overflow-hidden bg-white rounded-xl">
                    <div className="px-6 py-12 sm:p-12">
                      <h3 className="text-3xl font-semibold text-center text-gray-900">Send us a message</h3>

                      <form className="mt-14" onSubmit={handleSubmit(submitForm)}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                          <div>
                            <label htmlFor="" className="text-base font-medium text-gray-900"> Nom </label>
                            <div className="mt-2.5 relative">
                              <input type="text" name="" id="" placeholder="Entrer votre nom" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"

                                {...register('nom', {
                                  required: {
                                    value: true,
                                    message: "Ce champ est requis.",
                                  },
                                  // minLength: {
                                  //   value: 3,
                                  //   message: "Le nom doit contenir au moins 3 caractères",
                                  // },
                                })}
                              />
                              <label className="form-error">
                                {errors.nom?.type === 'required' && (
                                  <span className="label-text-alt text-red-400">
                                    {errors.nom.message}
                                  </span>
                                )}

                              </label>

                            </div>
                          </div>

                          <div>
                            <label htmlFor="" className="text-base font-medium text-gray-900"> Prenom </label>
                            <div className="mt-2.5 relative">
                              <input type="text" name="" id="" placeholder="Entrer votre prenom" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                {...register('prenom', {
                                  required: {
                                    value: true,
                                    message: "Ce champ est requis.",
                                  },
                                  // minLength: {
                                  //   value: 3,
                                  //   message: "Le nom doit contenir au moins 3 caractères",
                                  // },
                                })}
                              />
                              <label className="form-error">
                                {errors.prenom?.type === 'required' && (
                                  <span className="label-text-alt text-red-400">
                                    {errors.prenom.message}
                                  </span>
                                )}

                              </label>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="" className="text-base font-medium text-gray-900"> Adresse email </label>
                            <div className="mt-2.5 relative">
                              <input type="email" name="" id="" placeholder="Entrer votre adresse email" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                {...register('email', {
                                  required: {
                                    value: true,
                                    message: "Ce champ est requis.",
                                  },
                                  pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                                    message: "Ce email est invalide.",
                                  },
                                })}
                              />

                              <label className="form-error">
                                {errors.email?.type === 'required' || errors.email?.type === 'pattern' && (
                                  <span className="label-text-alt text-red-400">
                                    {errors.email.message}
                                  </span>
                                )}

                              </label>



                            </div>
                          </div>

                          <div>
                            <label htmlFor="" className="text-base font-medium text-gray-900"> Age </label>
                            <div className="mt-2.5 relative">
                              <input type="number" name="" id="" placeholder="Entrer votre age" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                {...register('age', {
                                  required: {
                                    value: true,
                                    message: "Ce champ est requis.",
                                  },
                                  min: {
                                    value: 18,
                                    message: "Vous devez avoir au moins 18 ans",
                                  },


                                })}
                              />

                              {errors.age?.type === 'required' || errors.age?.type === 'min' && (
                                <span className="label-text-alt text-red-400">
                                  {errors.age.message}
                                </span>
                              )}
                            </div>
                          </div>


                          <div>
                            <label htmlFor="" className="text-base font-medium text-gray-900"> Adresse </label>
                            <div className="mt-2.5 relative">
                              <input type="tel" name="" id="" placeholder="Entrer votre adresse" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                {...register('adresse', {
                                  required: {
                                    value: true,
                                    message: "Ce champ est requis.",
                                  },

                                })}
                              />
                              {errors.adresse?.type === 'required' && (
                                <span className="label-text-alt text-red-400">
                                  {errors.adresse.message}
                                </span>
                              )}
                            </div>
                          </div>

                          <div>
                            <label htmlFor="" className="text-base font-medium text-gray-900"> Code postal </label>
                            <div className="mt-2.5 relative">
                              <input type="number" name="" id="" placeholder="Entrer votre adresse code postal" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                {...register('codePostal', {
                                  required: {
                                    value: true,
                                    message: "Ce champ est requis.",
                                  },
                                  minLength: {
                                    value: 5,
                                    message: "Le code postal doit être 5 number",
                                  },
                                })}
                              />

                              {errors.codePostal?.type === 'required' || errors.codePostal?.type === 'minLength' && (
                                <span className="label-text-alt text-red-400">
                                  {errors.codePostal.message}
                                </span>
                              )}
                            </div>
                          </div>


                          <div className="sm:col-span-2">
                            <label htmlFor="" className="text-base font-medium text-gray-900"> Message  </label>
                            <div className="mt-2.5 relative">
                              <textarea name="" id="" placeholder="" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600" rows="4"></textarea>
                            </div>
                          </div>

                          <div className="sm:col-span-2">
                            <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                              Send
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>


          </Layout>



        </StickyProvider>




      </div >


    </ThemeProvider >
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