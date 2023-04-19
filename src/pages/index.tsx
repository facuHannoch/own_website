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

const inter = Inter({ subsets: ['latin'] })

export type Content = {
  tool: {
    image: string
    name: string
    width?: number
    description: string
    lowLevel: boolean
  },
  experience: {
    image: string
    title: string
    description: string
  },
  testimonial: {
    name: string
    cite: string
  }
}

const Button = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  return <button
    onClick={() => theme == "dark" ? setTheme('light') : setTheme('dark')}>Toggle</button>
}

const { tools, experiences, testimonials } = JSON.parse(JSON.stringify(data));

export default function Home() {
  return (
    <main >
      <Header />
      <section className="flex min-h-screen flex-col sm:flex-row 2xl:flex-col items-start p-8 py-24 sm:p-32 sm:pr-12">
        <div className='flex flex-col sm:items-start items-center pb-8 2xl:mx-auto '>
          <Title title={"Facundo Hannoch"} />
          <TitleH1 title={"Fullstack Software Developer"} />
          {Button()}
          <div className='py-4 sm:items-start items-center'>
            <TitleH2 title={"Do you need a professional website?"} extraStyles='text-accent-color sm:text-3xl hover:text-black' />
            <TitleH2 title={"I can make it for you"} extraStyles='text-black sm:text-3xl hover:font-bold' />
          </div>
          <TransitionButton text={"Get your website"} />
          {/* <TitleH1 title={"Elevate your digital presence with our expert web and mobile development services"} /> */}
        </div>

        {/* <Newsletter /> */}

      </section>

      <section id='abilities' className="flex min-h-screen flex-col items-cen p-4 sm:p-32">
        <Title title={"Some of the technologies I'm proficient with"} />
        <Tools tools={tools} />
      </section>

      <section id='portfolio' className="flex min-h-screen flex-col items-start p-4 sm:p-32">
        <Title title={"Past proyects"} />
        <TitleH2 title={"I've built numerous applications, both mobile and web, during my years as a full-stack developer"} />
        <Experiences experiences={experiences} tools={tools} />
      </section>
      {/* <CallToAction /> */}
      <section className='flex min-h-screen flex-col items-start sm:p-32 p-4'>
        <Title title='Testimonials' />
        {/* <TitleH2 title='Hadrian aprovved me, so pay me you dummy' /> */}
        <Testimonial testimonials={testimonials} />
      </section>

      <section id="get-in-touch" className='flex min-h-screen flex-col items-center sm:items-start sm:p-32 sm:pt-2 p-4'>
        <Title title="Let's get in touch" extraStyles='mb-4' />
        <ContactForm />
      </section>
      <Footer />
    </main >
  )
}



interface TransitionButtonInterface {
  text: String
}

function TransitionButton(props: TransitionButtonInterface) {
  return <div className="mt-2 flex items-center justify-center gap-x-6">
    <CustomLink
      href="#get-in-touch"
      className="rounded-md bg-slate-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
      2xl:p-5 2xl:text-2xl hover:text-white"
    >
      {props.text}
    </CustomLink>
    <CustomLink href="#portfolio" className="text-sm font-semibold leading-6 text-gray-900 dark:text-accent-color 2xl:text-2xl">
      See my portfolio <span aria-hidden="true">→</span>
    </CustomLink>
  </div>
}

