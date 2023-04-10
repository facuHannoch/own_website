import { P, TitleH2 } from './titles'
import { Content } from '../pages/index'
import Image from 'next/image'
import jsonData from '../../public/data/data.json'

import { useState } from 'react'

// export default function Testimonial({ testimonials }: { testimonials: Array<Content["testimonial"]> }) {
export default function Testimonial({ testimonials }: any) {
    // testimonials as Array<Content["testimonial"]>
    const [pos, setPos] = useState(0)


    return <div className='sm:pt-20'>
        <div className='absolute sm:w-10/12'>
            {/* {testimonials.map((testimonial: Content["testimonial"], index) => */}

            <div className='flex flex-col items-center p-12 pt-24 h-full shadow-sm rounded-l '>
                <P text={testimonials[pos].cite} extraStyles={"text-center text-lg"} />
                <TitleH2 title={testimonials[pos].name} />
            </div>
            {/* // <Testimonial testimonial={testimonials} /> */}
            {/* )} */}
            <button className='absolute right-0 left-0 top-10 p-2' onClick={(event) => setPos(testimonials.length == (pos + 1) ? 0 : pos + 1)}>
                <Image className='mx-auto hover:bg-white rounded-lg transition ease-in-out hover:scale-100 hover:translate-y-0.5' src={"/icons/arrow-right.svg"} alt={"Next testimonial"} width={40} height={40} />
            </button>
        </div>

    </div>
    
}

export async function getStaticProps({ params }: any) {

    const [, , data] = JSON.parse(JSON.stringify(jsonData));
    console.log("Hello")

    console.log(data)

    return {
        props: {
            testimonials: data
        }
    }
}