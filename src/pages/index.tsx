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
import { useRouter } from "next/router";
import { CSSProperties, useEffect, useState } from 'react'

const food1Img = '/website-images/food.jpg'
const food2Img = '/website-images/food-hamburguer.jpg'
const landingImg3 = '/website-images/baked-page.jpg'
const restaurantShot = '/website-images/restaurant-shot.jpg'
import bannerBlur from '@/images/banner-blur.jpg'
const bannerImg = '/website-images/banner.png'
import { GlobeSvg, PaintbrushSvg, StarOutlineSvg, EnvelopeSvg, FacebookSvg } from '../new-design/svg-components'

// const inter = Inter({ subsets: ['latin'] })

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

const bgImageStyle: CSSProperties = {
  backgroundPosition: 'center', backgroundSize: 'cover'
}
const imageStyle: CSSProperties = {
  objectFit: 'cover', overflow: 'hidden'
}
const svgStyle = {
  fill: '#e87654', width: '55px'
}



export default function Home() {
  const { locale, locales, defaultLocale, asPath, query } = useRouter();
  type locale = keyof typeof landingContent
  const loc: locale = (locale || defaultLocale || "en") as locale
  const content = landingContent[loc]

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true)
    }, 120000) // 120000 milliseconds = 2 minutes
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
    <main>
      <Header />
      <div className="is-preload">


        <header id="header" className="alt">
          <a className="logo" href="index.html">WebCrafters <span>by Facundo</span></a>
          {/* <nav>
            <a href="#menu"><span className="label">Menu</span></a>
          </nav> */}
        </header>


        <nav id="menu">
          <ul className="links">
            <li><a href="index.html">Inicio</a></li>

          </ul>
        </nav>


        <div id="banner">
          <div className="wrapper style1">
            <div className="inner">
              <p>Facundo Hannoch, Software Engineer</p>
              <h2>Desarrollo de Sitios Web para Restaurantes</h2>
              <ul className="actions special">
                <li><a href="#cta" className="button large primary scrolly" onClick={() => ReactGA.event(
                  {
                    action: 'Landing Page First button',
                    category: 'clicks',
                    label: (new Date()).toString()
                  }
                )}>Quiero mi sitio web</a></li>
              </ul>
            </div>
          </div>
        </div>


        <div id="one" className="features-grid special">
          {/* <div style={{}} */}
          <div style={{ position: 'relative' }}
            className="feature bg-image">
            <Image src={food1Img} alt='Foto de un plato con pollo y arroz.' fill style={imageStyle} />
          </div>
          <div className="feature">
            <StarOutlineSvg {...svgStyle} />
            {/* <span className="icon fa-star"></span> */}
            <h4>Destaca</h4>
            <p>Tener un sitio web es un paso esencial para que tus clientes sepan quién eres</p>
          </div>
          <div style={{ position: 'relative' }}
            className="feature bg-image">
            <Image src={restaurantShot} alt='Imagen de un restaurante y el mostrador del mismo.' fill style={imageStyle} />
          </div>
          <div className="feature">
            <GlobeSvg {...svgStyle} />
            {/* <span className="icon fa-heart"></span> */}
            <h4>Impulsa tu presencia en línea</h4>
            <p>Un sitio web profesional hace que tu restaurante sea más fácil de encontrar y atrae a más clientes.</p>
          </div>
          <div style={{ position: 'relative' }}
            className="feature bg-image">
            <Image src={landingImg3} alt='Fptp de un sánguche con salsa, con buena presentación.' fill style={imageStyle} />
          </div>
          <div className="feature">
            <PaintbrushSvg {...svgStyle} />
            {/* <span className="icon fa-comment"></span> */}
            <h4>Soluciones a medida</h4>
            <p>Sitios web que reflejen la personalidad y necesidades específicas de tu restaurante.</p>
          </div>
        </div>


        <div id="two">
          <div className="wrapper special">
            <div className="inner">
              <header className="heading">
                <h2>Hosting Gratuito</h2>
                <p>Podrías pensar que un hosting gratuito sería inestable e inseguro, pero sabemos cómo puedes hacer para que puedas alojar tu sitio web de forma gratuita, estable y segura. Por lo general no se les habla a clientes de estas opciones ya que, primero, es más complejo y no todos saben usarlas; y segundo, es una buena forma de mantenerlos en un ciclo de mantenimiento, costándote mucho dinero al pasar los meses. <br /> Estoy interesado en ayudarte, es por eso que te cuento de estas opciones, por las cuales no te cobraría extra.</p>
              </header>
            </div>
          </div>
          <div style={{ ...bgImageStyle, position: 'relative' }} className="image major" data-position="center">
            <Image src={bannerBlur} alt='Imagen borrosa.' quality={50} style={{ ...imageStyle }} />

            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'absolute', top: 0, width: '100%'
            }}>
              <h2>¿Quieres ver cómo puede lucir tu sitio web?</h2>
              <h3>
                No esperes más, podrías tenerlo en menos de 2 semanas
              </h3>
              <ul className="actions special">
                <li><a href="#cta" className="button large primary scrolly" onClick={() => {
                  ReactGA.event(
                    {
                      action: '2nd button - Quiero mi sitio web',
                      category: 'clicks',
                      label: (new Date()).toString()
                    }
                  )
                }}>Quiero mi sitio web</a></li>
              </ul>

            </div>
          </div>
        </div>


        <div id="three">
          <div className="wrapper">
            <div className="inner">
              <header className="heading">
                <h2>Únete a nuestros clientes que ya poseen un sitio web</h2>
                <p>Varios clientes han confiado en que un sitio web los ayudará, y así ha sido.</p>
              </header>
              <div className="stats">
                <div>
                  <span className="num">21</span>
                  <span className="label">Clientes satisfechos</span>
                </div>
                <div>
                  <span className="num">3+</span>
                  <span className="label">Años de experiencia</span>
                </div>
                <div>
                  <span className="num">50+</span>
                  <span className="label">Aplicaciones/sitios web creados</span>
                </div>
                <div>
                  <span className="num">Menos de 2 semanas</span>
                  <span className="label">Para que tengas tu sitio web listo</span>
                </div>

              </div>
            </div>
          </div>
        </div>



        <div>
        </div>
        <div id="four">
          <div className="wrapper style2">
            <div className="inner">
              <header className="heading">
                <h2>No eres el primer cliente, pero queremos que seas el siguiente</h2>
                <p>Hemos trabajado con múltiples clientes en multitud de proyectos, y cada uno nos ha permitido aprender y mejorar más nuestro trabajo</p>
              </header>
              {
                showButton &&
                <>
                  <h3 style={{ textAlign: 'center' }}>¿Todavía no te convencimos? </h3>
                  <ul className="actions special">
                    <li><a href="mailto:webdesign@facundohannoch.com?subject=free-design&body=Si tienes una idea de cómo se debería ver tu sitio web, descríbelo aquí. Si no, ¡deja esto en blanco, y trataré de sorprenderte con un diseño que esté a la altura de tu negocio!" className="button large  scrolly" onClick={() => ReactGA.event(
                      {
                        action: '3rd button - Get free preview',
                        category: 'clicks',
                        label: (new Date()).toString()
                      }
                    )}>Obtén una vista previa de tu página GRATIS</a></li>
                  </ul>
                </>
              }

            </div>
          </div>
          <div style={{ position: 'relative', width: '100%', height: '400px' }}>
            <Image src={bannerImg} alt='Projects' style={{ ...imageStyle }} fill />
          </div>
        </div>


        <div id="cta">
          <div className="wrapper style1">
            <div className="inner">
              <header className="heading small">
                <h2>Obtén una consulta gratuita</h2>
                <p>Discutamos tus necesidades. Sin compromiso.</p>
              </header>
              <ContactForm content={content} />
            </div>
          </div>
        </div>


        <div id="footer">
          <div className="wrapper">
            <div className="inner">
              <ul className="icons">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100092835039159"
                    className="" target='_blank' onClick={() => ReactGA.event(
                      {
                        action: 'facebook icon',
                        category: 'clicks',
                        label: (new Date()).toString()
                      }
                    )}>
                    <FacebookSvg {...svgStyle} />
                  </a></li>

                <li><a href="mailto:webdesign@facundohannoch.com?subject=Pongámonos en contacto&body=Cuéntame un poco acerca de tu negocio y tus necesidades, o deja esto en blanco y charlaremos juntos cómo dar el siguiente paso para lograr que tu negocio tenga una presencia online mucho mayor." className="" onClick={() => ReactGA.event(
                  {
                    action: 'email icon',
                    category: 'clicks',
                    label: (new Date()).toString()
                  }
                )}><EnvelopeSvg className='label' {...svgStyle} />
                </a></li>
              </ul>
              <div className="copyright">
                &copy; WebCrafters. All rights reserved.
              </div>
            </div>
          </div>
        </div>


        {/* <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/jquery.scrollex.min.js"></script>
        <script src="assets/js/jquery.scrolly.min.js"></script>
        <script src="assets/js/browser.min.js"></script>
        <script src="assets/js/breakpoints.min.js"></script>
        <script src="assets/js/util.js"></script>
        <script src="assets/js/main.js"></script> */}

      </div>

    </main >
  );

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

