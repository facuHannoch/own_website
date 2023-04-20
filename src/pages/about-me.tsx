import { A, P2, Title, TitleH1, TitleH2, CustomLink } from "@/components/titles";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useRouter } from "next/router";

const AboutMePageContent = {
    "en": {
        homePage: "Home Page",
        contactInfoTitle: "About Me",
        aboutMeDescription: "Hello, I am Facundo Hannoch, web and mobile developer. The languages I have most experience with are Dart, JavaScript and PHP, but have also used Java, Python and C++, and if it's needed I have no problem in developing the skill necessary to accomplish a job. When I'm not studying or coding, you can find me reading about the latest tech trends and exploring new programming techniques. I developed this website as a way to showcase my skills, share my knowledge with others, and connect with like-minded individuals in the tech community.",
        contactInfo: "Contact Information:"
    },
    "es": {
        homePage: "Inicio",
        contactInfoTitle: "Sobre Mí",
        aboutMeDescription: "Hola, soy Facundo Hannoch, desarrollador web y móvil. Los lenguajes en los que tengo más experiencia son Dart, JavaScript y PHP, pero también he utilizado Java, Python y C++. Si es necesario, no tengo problema en desarrollar las habilidades necesarias para llevar a cabo un trabajo. Cuando no estoy estudiando o programando, puedes encontrarme leyendo sobre las últimas tendencias tecnológicas y explorando nuevas técnicas de programación. Desarrollé este sitio web como una forma de mostrar mis habilidades, compartir mi conocimiento con otros y conectarme con personas afines en la comunidad tecnológica.",
        contactInfo: "Información de contacto:"
    },
}

export default function AboutMe() {
    const { locale, locales, defaultLocale, asPath } = useRouter();
    type locale = keyof typeof AboutMePageContent
    const loc: locale = (locale || defaultLocale || "en") as locale
    const content = AboutMePageContent[loc]

    return <main>
        <Header />
        <section className="flex min-h-screen flex-col 2xl:flex-col items-start p-8 py-24 sm:p-32 sm:pr-12 ">
            <CustomLink href="/" >{content.homePage}</CustomLink>
            <Title title={content.contactInfoTitle} extraStyles="my-1" />
            {/* <TitleH1 title={"Elevate your digital presence with our expert web and mobile development services"} /> */}
            <P2 text={content.aboutMeDescription} extraStyles="sm:text-3xl" />
            <br />
            <TitleH1 title={content.contactInfo} extraStyles="my-1" />
            <A href="https://www.linkedin.com/in/facundo-hannoch-059543256/" >Linkedin</A>
        </section>
        <Footer />
    </main>
}