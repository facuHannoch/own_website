import { CustomLink } from "@/components/titles";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import { Title, TitleH1, TitleH2, ToolsTitle, ExperiencesTitle, P } from '../components/titles'
import ContactForm from "@/components/contact-form";



export default function CookiesPolicy() {
    return <main>
        <Header />
        <section className="flex min-h-screen flex-col sm:flex-row 2xl:flex-col items-start p-8 py-24 sm:p-32 sm:pr-12">
            <ContactForm />
        </section>
        <Footer />
    </main>
}