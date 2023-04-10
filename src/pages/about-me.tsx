import { A, P2, Title, TitleH1, TitleH2, CustomLink } from "@/components/titles";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function AboutMe() {
    return <main>
        <Header />
        <section className="flex min-h-screen flex-col 2xl:flex-col items-start p-8 py-24 sm:p-32 sm:pr-12">
            <CustomLink href="/" >Home Page</CustomLink>
            <Title title="About Me" extraStyles="my-1" />
            {/* <TitleH1 title={"Elevate your digital presence with our expert web and mobile development services"} /> */}
            <P2 text="Hello, I am Facundo Hannoch, web and mobile developer. The languages I have most experience with are Dart, JavaScript and PHP, but have also used Java, Python and C++, and if it's needed I have no problem in developing the skill necessary to accomplish a job. When I'm not studying or coding, you can find me reading about the latest tech trends and exploring new programming techniques. I developed this website as a way to showcase my skills, share my knowledge with others, and connect with like-minded individuals in the tech community." extraStyles="sm:text-3xl" />
            <p title="Contact Information:" />
            <p className="text-3xl py-6">Contact Information</p>
            <A href="https://www.linkedin.com/in/facundo-hannoch-059543256/" >Linkedin</A>
        </section>
        <Footer />
    </main>
}