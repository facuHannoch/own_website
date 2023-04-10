import { ExperiencesTitle, P } from "./titles"
import Image from 'next/image'
import { useState } from 'react'

export default function Experiences({ experiences, tools }: any) {
    const pos: Array<number> = []
    const setPos: Array<any/* Dispatch<SetStateAction<number>> */> = []

    experiences.forEach((e: any) => {
        var [posX, setPosX] = useState(0)
        pos.push(posX)
        setPos.push(setPosX)
    });

    console.log(experiences[2].images)

    return <div>{
        experiences.map((e: any, index: number) =>
            <div className='p-4 sm:m-8 my-8 ring-1 sm:rounded-lg sm:px-10 ring-white bg-white flex w-full shadow-md hover:shadow-lg'>
                {/* sm:max-w-lg */}
                <div className='mr-5 w-full'>
                    <ExperiencesTitle title={e.title} />
                    <P text={e.description} />
                    {e.images && e.images.length > 0 &&
                        <div className='flex pt-8'>
                            <Image src={e.images[pos[index]]} alt={e.title} width={400} height={40} className='w-4/5 2xl:w-auto bg-black' />

                            <button className='' onClick={(event) => setPos[index](e.images.length == (pos[index] + 1) ? 0 : pos[index] + 1)}>
                                <Image className='mx-auto hover:bg-white rounded-lg transition ease-in-out hover:scale-100 hover:translate-y-0.5' src={"/icons/arrow-right.svg"} alt={"Next testimonial"} width={40} height={40} />
                            </button>



                            {/* {e.images.map((image: string) => */}
                            {/* <Image src={image.replace(/image-.*\./i, `image-${pos[index]}.`)} alt={image.replace(/image-.*\./i, `image-${pos[index]}.`)} width={150} height={40} className=' bg-black' /> */}
                            {/* )} */}
                            {/* {getToolPaths(e.toolsUsed).map((image) =>
                                <Image src={image.image} alt={image} width={70} height={40} className='hover:p-0.5' />
                            )} */}
                        </div>
                    }
                </div>
                <div className='flex flex-col'>
                    {e.toolsUsed.map((imageSrc: string) => {
                        { var d = tools.find((e: any) => e.name == imageSrc) }
                        if (d) return <Image src={d.image} alt={imageSrc} width={80} height={40} className='hover:p-0.5' />
                    })}
                </div>
            </div>
        )
    }</div>

    function getToolPaths(names: Array<string>): Array<any> {
        var paths: Array<string> = []
        names.forEach((name: string) => {
            var tool: string = tools.find((e: any) => e.name == name)
            if (tool) paths.push(tool)
        }
        )
        return paths
    }
}
