import Image from 'next/image'
import { Inter } from 'next/font/google'
// import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import CallToAction from '../components/last-call-to-action'
import Testimonial from '../components/testimonials'
import '../components/titles'
import { Title, TitleH1, TitleH2, ToolsTitle, ExperiencesTitle, P, CustomLink } from '../components/titles'

import data from '../../public/data/data.json'
import Header from '../components/header'
import Tools from '../components/tools'
import Newsletter from '../components/newsletter'
import Experiences from '../components/experiences'
import Footer from '@/components/footer'
import ContactForm from '@/components/contact-form'

import { useTheme } from 'next-themes'

import ReactGA from 'react-ga4'
import http from 'http'
import path from 'path'
import { useRouter } from "next/router";
import { useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })

ReactGA.initialize("G-CMVSL68BHH");

export type Content = {
  tool: {
    image: string
    name: string
    width?: number
    description: string
    descriptionES: string
    lowLevel: boolean
  },
  experience: {
    image: string
    title: string
    description: string
    descriptionES: string
  },
  testimonial: {
    name: string
    cite: string
  }
}

const landingContent = {
  "en": {
    carrer: "Fullstack Software Developer",
    toggle: "Toggle theme",
    secondTitle: "Do you need a professional website?",
    thirdTitle: "I can make it for you",
    actionButton: "Get your website",
    seePortfolio: "See my portfolio",
    techsTitle: "Some of the technologies I'm proficient with",
    projectsTitle: "Past proyects",
    projectsSubtitle: "I've built numerous applications, both mobile and web, during my years as a full-stack developer. Some of them are:",
    testimonialsTitle: "Testimonials",
    letsGetInTouchTitle: "Let's get in touch",
    callToActionTitle: "Want to discuss your project?",
    callToActionSubtitle: "",
    email: "Email",
    phone: "Phone",
    firstName: "First Name",
    lastName: "Last Name",
    msg: "Message",
    submit: "Submit",
    privacyPolicy: "Privacy Policy",
    cookiesPolicy: "Cookies Policy",
    errorContactForm: "There has been an error",
    successContactForm: "Thanks for contacting, I\'ll get back to you soon"
  },
  "es": {
    carrer: "Desarrollador full-stack",
    toggle: "Alternar tema",
    secondTitle: "¿Necesitas un sitio web profesional?",
    thirdTitle: "Puedo hacerlo por ti",
    actionButton: "Contáctame",
    seePortfolio: "Ver portfolio",
    techsTitle: "Algunas de las tecnologías con las que tengo experiencia",
    projectsTitle: "Projectos realizados",
    projectsSubtitle: "He trabajado en múltiples aplicaciones, tanto móvil como web, durante mis años como desarrolador full-stack. Algunos de ellos son:",
    testimonialsTitle: "Reseñas de clientes pasados",
    letsGetInTouchTitle: "Pongámonos en contacto",
    callToActionTitle: "¿Quieres contarme de tu proyecto?",
    callToActionSubtitle: "",
    email: "Email",
    phone: "Teléfono",
    firstName: "Nombre",
    lastName: "Apellido",
    msg: "Mensaje",
    submit: "Enviar",
    privacyPolicy: "Privacy Policy",
    cookiesPolicy: "Cookies Policy",
    errorContactForm: "Ha habido un error",
    successContactForm: "Mensaje enviado, gracias por contactarte"
  }
}

const Button = (text: string) => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  return <button className='text-lg transition-colors duration-500 hover:ease-linear hover:text-text-selected text-text-selected-inverted'
    onClick={() => theme == "dark" ? setTheme('light') : setTheme('dark')}>{text}
  </button>
}

const { tools, experiences, testimonials } = JSON.parse(JSON.stringify(data));

// interface locale {
//   locale: string
// }

export default function Home() {
  const { locale, locales, defaultLocale, asPath, query } = useRouter();
  type locale = keyof typeof landingContent
  const loc: locale = (locale || defaultLocale || "en") as locale
  const content = landingContent[loc]

  useEffect(() => {
    const { nm, c } = query
    if (nm)
      fetch('/api/nm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nm, c }),
      })
        // .then(response => response.json())
        // .then(data => console.log(data))
        .catch((error) => {
          console.error('Error:', error);
        });
  }, [query])

  return (
    <main >
      <Header />
      <section className="flex min-h-screen flex-col sm:flex-row 2xl:flex-col items-start p-8 py-24 sm:p-32 sm:pr-12">
        <div className='flex flex-col sm:items-start items-center pb-8 2xl:mx-auto '>
          <Title title={"Facundo Hannoch"} />
          <TitleH1 title={content.carrer} />
          {Button(content.toggle)}
          <div className='mt-2 ring-2 ring-primary-color p-8 rounded-lg shadow-lg dark:ring-secondary-color dark:bg-slate-800 dark:ring-0 dark:shadow-lg dark:shadow-slate-950'>
            <div className='py-4 sm:items-start items-center'>
              <TitleH2 title={content.secondTitle} extraStyles='text-accent-color sm:text-3xl hover:text-black' />
              <TitleH2 title={content.thirdTitle} extraStyles='text-black sm:text-3xl hover:font-bold' />
            </div>
            <TransitionButton actionButton={content.actionButton} seePortfolio={content.seePortfolio} />
            {/* <TitleH1 title={"Elevate your digital presence with our expert web and mobile development services"} /> */}
          </div>
        </div>

        {/* <Newsletter /> */}

      </section>

      <section id='abilities' className="flex min-h-screen flex-col items-cen p-4 sm:p-32">
        <Title title={content.techsTitle} />
        <Tools tools={tools} locale={loc} />
      </section>

      <section id='portfolio' className="flex min-h-screen flex-col items-start p-4 sm:p-32">
        <Title title={content.projectsTitle} />
        <TitleH2 title={content.projectsSubtitle} />
        <Experiences experiences={experiences} tools={tools} locale={loc} />
      </section>
      {/* <CallToAction /> */}
      <section className='flex min-h-screen flex-col items-start sm:p-32 p-4'>
        <Title title={content.testimonialsTitle} />
        {/* <TitleH2 title='Hadrian aprovved me, so pay me you dummy' /> */}
        <Testimonial testimonials={testimonials} locale={loc} />
      </section>

      <section id="get-in-touch" className='flex min-h-screen flex-col items-center sm:items-start sm:p-32 sm:pt-2 p-4'>
        <Title title={content.letsGetInTouchTitle} extraStyles='md:pb-12 mb-4' />
        <div className='flex content-between self-center'>
          <ContactForm content={content} />
          <CallToAction locale={loc} content={{ callToActionTitle: content.callToActionTitle }} />
        </div>
      </section>
      <Footer />
    </main >
  )
}




interface TransitionButtonInterface {
  actionButton: string,
  seePortfolio: string
}

function TransitionButton(props: TransitionButtonInterface) {
  return <div className="mt-2 flex items-center justify-center gap-x-6">
    <CustomLink
      href="#get-in-touch"
      className="rounded-md bg-slate-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
      2xl:p-5 2xl:text-2xl hover:text-white"
    >
      {props.actionButton}
    </CustomLink>
    <CustomLink href="#portfolio" className="text-sm font-semibold leading-6 text-gray-900 dark:text-accent-color 2xl:text-2xl">
      {props.seePortfolio} <span aria-hidden="true">→</span>
    </CustomLink>
  </div>
}

