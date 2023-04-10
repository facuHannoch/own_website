export default function Footer() {
    return <footer id='footer' className='bg-gray-700 p-32 pb-0 flex flex-col'>
        <div className='flex flex-col w-full'>
            {/* <a className='text-1xl text-white p-2'>About</a> */}
            <div className=' p-2 sm:p-4'>
                <a href='/terms-of-service' className='text-lg text-white'>Terms of service</a>
            </div>
            <div className=' p-2 sm:p-4'>
                <a href='/cookies-policy' className='text-lg text-white'>Cookies Policy</a>
            </div>
            <div className=' p-2 sm:p-4'>
                <a href='/about-me' className='text-lg text-white'>About me</a>
            </div>
        </div>
        <p className='text-white self-center relative bottom-1 mt-24 mb-8'>Facundo Hannoch © {new Date().getFullYear()}</p>
    </footer>
}