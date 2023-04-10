import Link from "next/link";
import { PropsWithChildren } from "react";

interface TitleInterface {
    title: string;
    extraStyles?: string
    centered?: boolean;
}

interface PInterface {
    text: string
    extraStyles?: string
}

interface AInterface {
    // text: string
    href: string
    className?: string
}

interface labelInterface {
    htmlFor: string
    className?: string
    // children: PropsWithChildren
}

interface InputInterface {
    id: string
    type: string
    name: string
    autoComplete: string
    required: boolean
    className?: string
}

export function P(props: PInterface) {
    return <p className={'text-slate-500 ' + props.extraStyles}>{props.text}</p>
}
export function P2(props: PInterface) {
    return <p className={'text-slate-800 text-2xl ' + props.extraStyles}>{props.text}</p>
}


export function Title(props: TitleInterface) {
    return <p className={"text-4xl sm:text-6xl font-bold tracking-tight text-gray-800 py-1 m " + props.extraStyles}>{props.title}</p>

}
export function TitleH1(props: TitleInterface) {
    return <p className='text-2xl italic sm:text-2xl tracking-tight text-gray-900 my-2'>{props.title}</p>
}

export function TitleH2(props: TitleInterface) {
    var p = 'text-2xl sm:text-2xl tracking-tight my-2 ' + props.extraStyles
    return <p className={p}>{props.title}</p>
}

export function ToolsTitle(props: TitleInterface) {
    var p: string = 'text-2xl sm:text-3xl text-center tracking-tight text-gray-800 my-2 '
    p = p.concat(props.centered ? '' : 'sm:text-start')
    return <p className={p}>{props.title}</p>
}

export function ExperiencesTitle(props: TitleInterface) {
    return <p className='text-2xl sm:text-3xl tracking-tight text-gray-800 my-2 text-center'>{props.title}</p>
}

export function A(props: PropsWithChildren<AInterface>) {
    return <a href={props.href} className={` text-2xl text-accent-color hover:text-black ${props.className}`}>{props.children}</a>
}
export function CustomLink(props: PropsWithChildren<AInterface>) {
    return <Link href={props.href} className={` "text-2xl text-accent-color hover:text-black ${props.className}`}>{props.children}</Link>
}

export function Label(props: PropsWithChildren<labelInterface>) {
    return <label htmlFor={props.htmlFor} className={` ${props.className}`}>{props.children}</label>
}

export function Input(props: InputInterface) {
    return <input
        className={`min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-secondary-color shadow-sm ring-1 ring-inset ring-primary-color focus:ring-2 focus:ring-inset focus:ring-accent-color sm:text-sm sm:leading-6 bg-slate-500 m-2 ${props.className}`}
        id={props.id}
        type={props.type}
        name={props.name}
        autoComplete={props.autoComplete}
        required={props.required}
    />
}

export function Textarea() {
    return <textarea
        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-primary-color focus:ring-2 focus:ring-inset focus:ring-accent-color sm:text-sm sm:leading-6 bg-slate-500 m-2"
        id="frm-message"
        rows={6}
        name="message">
    </textarea>
}


// export default { Title, TitleH1, TitleH2, ToolsTitle, ExperiencesTitle, P }

