import { CustomLink } from "@/components/titles";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import { Title, TitleH1, TitleH2, ToolsTitle, ExperiencesTitle, P } from '../components/titles'


export default function CookiesPolicy() {
    return <main>
        <Header />
        <section className="flex min-h-screen flex-col sm:flex-row 2xl:flex-col items-start p-8 py-24 sm:p-32 sm:pr-12">
            <CustomLink href="/">Home Page</CustomLink>
            <Title title={"Use of Cookies"} />
            <P text={" This page uses cookies to provide you with a better experience in it."} />
            <TitleH2 title={"What are Cookies?"} />
            <P text={" A cookie is a small text file that a website saves on your computer or mobile device when you visit our website. This file allows the website to remember your actions and preferences, font size and other display preferences to avoid having to re-enter them each visit to the website or when navigating from one page to another."} />
            <TitleH2 title={"How do we use these Cookies?"} />
            <P text={" The pages of our website use cookies to remember:"} />
            <ul>
                <li> Your display preferences </li>
                <li> Whether or not you have already responded to a survey popup that asks if the content was useful or not so that you will not be asked again and again </li>
                <li> To collect information about which parts of our site you visit most often, and how long you stay on them </li>
            </ul>
            <P text={" Additionally, some videos embedded in our pages use cookies to collect anonymous statistics on how they got there and which videos you watched. While enabling these cookies is not strictly necessary for the website to function, it will provide you with a better browsing experience. Cookies can be deleted or blocked, but some features on this site may not work as intended if you do. Cookie-related information is not used to personally identify you and pattern data is completely under our control. The cookies on this website are not used for any purpose other than that described here."} />
            <TitleH2 title={"How to configure the use of Cookies?"} />
            <P text={" You can block and / or delete cookies as you wish using your browser settings. You can delete all cookies that are already on your computer and you can configure your browser to prevent them from being placed. By doing this, you may need to manually adjust some preferences each time you visit our website and some services and functionalities may not work."} />
        </section>
        <Footer />

    </main>
}