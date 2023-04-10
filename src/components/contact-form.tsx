import { Input, Label, Textarea, TitleH1 } from "./titles";
import styles from '../styles/contact-form.module.css'

export default function ContactForm() {
    return <form>
        {/* <TitleH1 title="Get in touch" /> */}
        <div className={`${styles.email} ${styles.block}`}>
            <Label htmlFor="frm-email" className="" >Email</Label>
            <Input
                id="frm-email"
                type="email"
                name="email"
                autoComplete="email"
                required
            />
        </div>
        <div className={`${styles.block} ${styles.phone}`}>
            <Label htmlFor="frm-phone">Phone</Label>
            <Input
                id="frm-phone"
                type="text"
                name="phone"
                autoComplete="tel"
                required
            />
        </div>
        <div className={`${styles.name} ${styles.block}`}>
            <div>
                <Label htmlFor="frm-first">First Name</Label>
                <Input
                    id="frm-first"
                    type="text"
                    name="first"
                    autoComplete="given-name"
                    required
                />
            </div>
            <div>
                <Label htmlFor="frm-last">Last Name</Label>
                <Input
                    id="frm-last"
                    type="text"
                    name="last"
                    autoComplete="family-name"
                    required
                />
            </div>
        </div>
        <div className={`${styles.message} ${styles.block}`}>
            <Label htmlFor="frm-message">Message</Label>
            <Textarea />
            {/* <Textarea id="frm-message" rows={6} name="message"></Textarea> */}
        </div>
        <div className={`${styles.button}`}>
            <button className="ring-1 ring-accent-color p-4 m-2 center mx-auto rounded-md transition ease-linear hover:scale-110 hover:text-white hover:bg-accent-color" type="submit">Submit</button>
        </div>
    </form >
}