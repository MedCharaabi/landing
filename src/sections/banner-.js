// /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import { Container, Flex, Box, Input, Heading, Text, Image, Button } from 'theme-ui';
import React, { useState } from 'react';
import BannerBG from 'assets/bannerBg.png';
import BannerThumb from 'assets/cropped.png';
import Logo from 'assets/logo.png';
import { useForm } from 'react-hook-form';

import client1 from 'assets/sponsor/paypal.svg';
import client2 from 'assets/sponsor/google.svg';
import client3 from 'assets/sponsor/dropbox.svg';

import axios from 'axios';
import { Label, Spinner } from 'reactstrap';
const data = [
  {
    id: 1,
    path: '#',
    image: client1,
    title: 'paypal',
  },
  {
    id: 2,
    path: '#',
    image: client2,
    title: 'google',
  },
  {
    id: 3,
    path: '#',
    image: client3,
    title: 'dropbox',
  },
];

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false);

  const [isLoading, setIsLoading] = React.useState(false);
  const [sendEmailResult, setSendEmailResult] = React.useState(null);

  const { register, handleSubmit, formState: { isValid, errors } } = useForm();
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };


  const sendEmail = async (formData) => {
    setIsLoading(true);


    try {
      const response = await axios.get("https://212.227.181.69/mail?email=" + formData.email)
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
    finally {
      setIsLoading(false);
    }

  }

  return (
    <Container
      sx={styles.banner}
      className='bg-red-500'
      id="home">
      {/* <Box sx={styles.banner.bottomImageBox}> */}
      {/* </Box> */}

      <Container
        sx={styles.banner.container}
      // sx={{
      //   display: 'flex',
      //   justifyContent: 'space-between',
      //   alignItems: 'flex-end',
      //   ml: "0px",

      // }}
      >
        <Box sx={styles.banner.contentBox}>
          <Image src={"images/logo.png"} alt="banner" width='298px' height='271px' />
          <Heading as="h1" variant="heroPrimary">
            RESTEZ EN BONNE SANTÉ
          </Heading>
          <Text as="p" variant="heroSecondary" className='text-red-600'>
            Découvrez une nouvelle expérience de sport à la maison.
            Soyez les premiers à profiter de notre offre de lancement en vous inscrivant.
            Promis, pas de spams !
          </Text>
          {/* <Flex>
            <Button variant="whiteButton" aria-label="Get Started">
              Get Started
            </Button>
            <>
              <ModalVideo
                channel="youtube"
                isOpen={videoOpen}
                videoId="ZNA9rmDsYVE"
                onClose={() => setVideoOpen(false)}
              />
              <Button
                variant="textButton"
                aria-label="Watch Video"
                onClick={handleClick}
              >
                <FaPlayCircle /> Watch Video
              </Button>
            </>
          </Flex>
          */}
          <form onSubmit={handleSubmit(sendEmail)}>
            <Box as="form" sx={styles.form}>

              <Box as="label" htmlFor="subscribe" variant="styles.srOnly">
                subscribe
              </Box>



              <input
                type="text"
                name="Email"
                id="Email"
                placeholder="Email"
                sx={styles.form.input}
                {...register('email', {
                  required: {
                    value: true,
                    message: "Ce champ est requis.",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    message: "invalid email",
                  },
                })}
              />
              <Button type="submit" onClick={handleSubmit(sendEmail)}>
                {
                  isLoading ? <Spinner color="primary" /> : "Envoyer"
                }

              </Button>

            </Box>
          </form>
          <label className="form-error">
            {errors.email?.type === 'required' && (
              <span className="label-text-alt text-white" style={{ color: "white" }}>
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === 'pattern' && (
              <span className="label-text-alt text-white" style={{ color: "white" }}>
                {errors.email.message}
              </span>
            )}


            {/* send result */}
            {sendEmailResult == false && (
              <span className="label-text-alt "
                style={{ color: "white" }}
              >
                Une erreur est produite lors du traitement de votre demande, veuillez réessayer plus tard.
              </span>
            )}

            {sendEmailResult == true && (
              <span className="label-text-alt text-white" style={{ color: "white" }}>
                Un email a été envoyé sur votre boite mail.

              </span>
            )}


          </label>


        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={"images/cropped.png"} alt="banner" />
        </Box>
      </Container>

      <Container>


        <Box sx={styles.banner.bottomImageBox}>
          <Image src={"images/cropped.png"} alt="banner" />
        </Box>
      </Container>
    </Container>
  );
}

const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundImage: `url(images/bannerBg.png)`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    // backgroundColor: "#1xdcad3",
    backgroundColor: 'primary',

    // borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ['00px', null, null, null, null, null, '00px', '00px'],
    pb: ['100px', null, null, '110px', null, 10, '150px'],
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'end',
      ml: "0px",

    },
    contentBox: {
      '@media screen and (max-width: 1220px)': {
        // display: 'none',
        // backgroundImage: `url(${BannerThumb})`,
        backgroundRepeat: `no-repeat`,
      },

      width: ['100%', null, '85%', '85%', '100%', '55%'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '20px',
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
    },
    imageBox: {

      display: ['none', null, null, 'block'],
      '@media screen and (max-width: 1220px)': {
        display: 'none',
      },
      justifyContent: 'center',
      ml: ["-100px",],
      mr: [0, null, null, '-145px', '-160px', '-180px', '-220px', '-290px'],
      mt: [0, null, null, '40px', 4, 7, 0],
      // mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
      overflow: 'hidden',
      textAlign: 'right',
      width: '100%',
    },
    bottomImageBox: {
      width: '100%',
      display: ['none',],
      '@media screen and (max-width: 1220px)': {
        display: 'flex',
      },
    },
  },
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
    // mb: ['10px', null, null, null, null, '10px'],
    display: ['flex'],
    alignItems: 'center',
    input: {
      borderRadius: ['50px'],
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
      backgroundColor: 'white',
      color: 'primary',
      fontSize: [1, null, null, null, 2, '20px'],
      borderRadius: ['50px'],
      padding: ['0 15px'],
      // boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
      // fontSize: [1, null, null, null, 2, '20px'],
      // borderRadius: ['4px'],
      padding: ['0 15px'],
      ml: ['10px'],
      width: ['auto', null, null, '180px', '180px'],
      height: ['45px', null, null, '55px', null, null, '65px'],

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
