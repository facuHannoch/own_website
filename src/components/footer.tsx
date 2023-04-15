import Link from 'next/link'
export default function Footer() {
    return <footer id='footer' className='bg-gray-700 p-32 pb-0 flex flex-col'>
        <div className='flex flex-col w-full'>
            {/* <a className='text-1xl text-contrast-color p-2'>About</a> */}
            <div className=' p-2 sm:p-4'>
                <Link href='/privacy-policy' className='text-lg text-contrast-color'>Privacy Policy</Link>
            </div>
            <div className=' p-2 sm:p-4'>
                <Link href='/cookies-policy' className='text-lg text-contrast-color'>Cookies Policy</Link>
            </div>
            <div className=' p-2 sm:p-4'>
                <Link href='/about-me' className='text-lg text-contrast-color'>About me</Link>
            </div>
        </div>
        <p className='text-contrast-color self-center relative bottom-1 mt-24 mb-8'>Facundo Hannoch © {new Date().getFullYear()}</p>
    </footer>
}