import { Input, Label, Textarea, TitleH1 } from "./titles";
import styles from '../styles/contact-form.module.css'
import { toast, ToastContainer } from 'react-toastify'
import { debuglog } from "util";
import { useState } from 'react'

export default function ContactForm({ content }: { content: any }) {
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: any) {
        setLoading(true)
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        try {
            debuglog("awdw")
            const response = await fetch('/api/contact', {
                method: 'post',
                body: new URLSearchParams(data as any),
            })
            if (!response.ok) {
                throw new Error('Invalid response')
            }
            if (response.status == 200) {
                toast(content.successContactForm, { hideProgressBar: true, autoClose: 2000, type: 'success', position: 'bottom-right' })
                setLoading(false)
            }
        } catch (error) {
            console.error(error)
            toast(content.errorContactForm, { hideProgressBar: true, autoClose: 2000, type: 'error', position: 'bottom-right' })
            setLoading(false)
        }
    }

    return <form onSubmit={handleSubmit} className="flex flex-col content-center">
        {/* <TitleH1 title="Get in touch" /> */}
        <div className={`${styles.email} ${styles.block} ${styles.container}`}>
            <Label htmlFor="frm-email" className="" >{content.email} *</Label>
            <Input
                id="frm-email"
                type="email"
                name="email"
                autoComplete="email"
                required
            />
        </div>
        <div className={`${styles.block} ${styles.phone} ${styles.container}`}>
            <Label htmlFor="frm-phone">{content.phone}</Label>
            <Input
                id="frm-phone"
                type="text"
                name="phone"
                autoComplete="tel"
            />
        </div>
        <div className={`${styles.name} ${styles.block} name`}>
            <div className={styles.container}>
                <Label htmlFor="frm-first">{content.firstName}</Label>
                <Input
                    id="frm-first"
                    type="text"
                    name="first"
                    autoComplete="given-name"
                />
            </div>
            <div className={styles.container}>
                <Label htmlFor="frm-last">{content.lastName}</Label>
                <Input
                    id="frm-last"
                    type="text"
                    name="last"
                    autoComplete="family-name"
                />
            </div>
        </div>
        <div className={`${styles.message} ${styles.block} ${styles.container}`}>
            <Label htmlFor="frm-message">{content.msg}</Label>
            <Textarea />
            {/* <Textarea id="frm-message" rows={6} name="message"></Textarea> */}
        </div>
        <div className={`${styles.button}`}>
            <button disabled={loading} className="ring-1 ring-accent-color dark: text-accent-color p-4 m-2 center mx-auto rounded-md transition ease-linear hover:scale-110 hover:text-white hover:bg-accent-color" type="submit">
                {!loading ? content.submit :
                    <div className={styles.loadingSpinner}></div>}
            </button>
            <div className="spinner-container">
            </div>
        </div>
    </form >
}