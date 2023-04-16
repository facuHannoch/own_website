import { Input, Label, Textarea, TitleH1 } from "./titles";
import styles from '../styles/contact-form.module.css'

export default function ContactForm() {
    async function handleSubmit(e: any) {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        try {
            const response = await fetch('/api/contact', {
                method: 'post',
                body: new URLSearchParams(data as any),
            })
            if (!response.ok) {
                throw new Error('Invalid response')
            }
            alert('Thanks for contacting us, we will get back to you soon!')
        } catch (error) {
            console.error(error)
            alert('We can\'t submit the form at the moment, try again later')
        }
    }

    return <form onSubmit={handleSubmit}>
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