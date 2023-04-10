import { CustomLink } from "@/components/titles";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import { Title, TitleH1, TitleH2, ToolsTitle, ExperiencesTitle, P } from '../components/titles'


export default function CookiesPolicy() {
    return <main>
        <Header />
        <section className="flex min-h-screen flex-col sm:flex-row 2xl:flex-col items-start p-8 py-24 sm:p-32 sm:pr-12">
            <CustomLink href="/" text="Home Page" />
            <Title title={"Privacy Policy"} />
            <P text={"This page wants to ensure that your privacy is protected and this privacy policy relates to how you use and protect any information provided to this page when you use this website. Any information you provide will only be used in accordance with this privacy statement."} />
            <P text={"This Privacy Policy governs the way that this page collects, uses, maintains and discloses information collected from users (each, a \"User\") of the website <a href=\".\">http://www.appneft.vercel.app/> (\"Site\"). This privacy policy applies to the Site and to all products and services offered by this page."}/>
            <TitleH2 title={"Personally identifiable information"} />
            <P text={"We may collect personally identifiable information from Users in various ways, including, but not limited to, when Users visit our site, fill out a form, respond to a survey, subscribe to the newsletter, and in connection with other activities, services , features or resources that we make available on our site. Users can be requested, as appropriate:"} />
            <ul>
                <li> Name </li>
                <li> Contact information including email address </li>
            </ul>
            <P text={"Users can visit our site anonymously."} />
            <TitleH2 title={"Security"} />
            <P text={"To stop any unauthorized access or disclosure of your information, appropriate electronic, physical and managerial procedures have been put in place to protect the information we collect online and ensure its security."} />
            <P text={"We will collect personally identifiable information from Users only if they voluntarily submit such information to us. Users can always refuse to provide personally identifiable information, except that it may prevent them from engaging in certain Site-related activities."} />
            <TitleH2 title={"Non-personally identifiable information"} />
            <P text={"We may collect non-personally identifiable information about Users when they interact with our Site. Non-personally identifiable information may include the name of the browser, the type of computer and technical information about the means of connection of the Users to our Site, such as the operating system and Internet service providers used and other similar information."} />
            <TitleH2 title={"Web browser cookies"} />
            <P text={"Our site may use \"cookies\" to improve the user experience. The user's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. The user can choose to configure their web browser to reject cookies, or to alert them when cookies are being sent. If they do, be aware that some parts of the Site may not function properly. For more information on the use of cookies, please read <a target=\"_blank\" href=\"./cookies-policy\"> our Cookies policy\"} />."} />
            <TitleH2 title={"How We Use Information Collected"} />
            <P text={"This page collects and uses Users personal information for the following purposes:"} />
            <ul>
                <li> To improve customer service. Your information helps us respond more effectively to your customer service requests and support needs. </li>
                <li> To personalize the user experience. We may use information together to understand how our Users as a group use the services and resources provided on our Site. </li>
                <li> To improve our site. We continually strive to improve the offerings on our website based on the information and feedback we receive from you. </li>
            </ul>
            <P text={"The email address that Users provide for order processing will only be used to send them information and updates related to their order. It can also be used to answer your inquiries and / or other requests or questions. If the User decides to opt for our mailing list, they will receive emails that may include company news, updates, information related to products or services, etc. If at any time the User wishes to unsubscribe to receive future emails, we include unsubscribe instructions at the end of each email"} />
            <TitleH2 title={"How we protect your information"} />
            <P text={"We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site. The exchange of confidential and private data between the Site and its Users is carried out in an encrypted way and protected with digital signatures."} />
            <TitleH2 title={"Sharing of your personal information"} />
            <P text={"We do not sell, exchange or rent personal identification information of Users to third parties. We may share generic aggregate demographic information not linked to any personally identifiable information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes described above."} />
            <TitleH2 title={"Third Party Websites"} />
            <P text={"Users may find advertising or other content on our site that links to the sites and services of our partners, vendors, advertisers, sponsors, licensors, and other third parties. We do not control the content or links that appear on these sites and we are not responsible for the practices employed by websites linked to or from our Site. Furthermore, these sites or services, including their content and links, may change constantly. These sites and services may have their own privacy policies and customer service policies. Navigation and interaction on any other website, including websites that link to our Site, are subject to the terms and policies of that website."} />
            {/* <TitleH2 title={"Google AdSense </h2>
                <p> Some of the ads may be served by Google. Google's use of the DART cookie enables it to serve ads to users based on their visit to our site and other sites on the Internet. DART uses "non-personally identifiable information" and does NOT track personal information about you, such as your name, email address, physical address, etc. You can choose not to use the DART cookie by visiting Google advertising and content network privacy. policy at <a target="_blank" href="http://www.google.com/privacy_ads.html"> http://www.google.com/privacy_ads.html. </a> </p>
                <p> More information about the use of your information by google at <a href="https://policies.google.com/technologies/partner-sites"> https://policies.google.com/technologies/ partner-sites </a> </p>
                <TitleH2 title={"Compliance with the law for the protection of children's online privacy </h2>
                <p>
                    <a href=".">http://www.appneft.vercel.app</a>
                </p>
                <p>contact.appneftgmail.com</p> */}
        </section>
        <Footer />

    </main>
}