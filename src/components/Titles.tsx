import Link from "next/link";

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
    text: string
    href: string
    extraStyles?: string
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

export function A(props: AInterface) {
    return <a href={props.href} className="text-2xl text-accent-color hover:text-black">{props.text}</a>
}
export function CustomLink(props: AInterface) {
    return <Link href={props.href} className="text-2xl text-accent-color hover:text-black">{props.text}</Link>
}

export default { Title, TitleH1, TitleH2, ToolsTitle, ExperiencesTitle, P }

