import { ExperiencesTitle, P } from "./titles"
import Image from 'next/image'
import { useState } from 'react'



export default function Experiences({ experiences, tools }: any) {
    const posArr: Array<number> = Array.from({ length: 10 }, () => 0)

    var [pos, setPos] = useState(posArr)

    console.log(experiences[2].images)

    function changePos(index: number, e: any) {
        var n = e.images.length == (pos[index] + 1) ? 0 : pos[index] + 1
        setPos(() => {
            const newPos = [...pos]
            newPos[index] = n
            return newPos
        })
    }

    const ExperienceImgs = (index: number, e: any) => <div style={{ position: 'relative' }} className='flex flex-col w-2/5  ring-1 sm:rounded-lg dark:bg-slate-700/50 dark:ring-slate-800/5 ring-white shadow-md hover:shadow-lg '>
        <Image fill={true} style={{ objectFit: 'contain' }} src={e.images[pos[index]]} alt={e.title} className="" />
        <button style={{ zIndex: 2 }} className='mt-auto hover:bg-white rounded-lg transition ease-in-out hover:scale-100 hover:translate-y-0.5' onClick={(event) => changePos(index, e)}>
            <Image className='mx-auto ' src={"/icons/arrow-right.svg"} alt={"Next testimonial"} width={40} height={40} />
        </button>
    </div>


    return <div>{
        experiences.map((e: any, index: number) =>
            <div className="flex sm:m-8 my-8">
                {e.images && e.images.length > 0 && (index % 2 != 0) && ExperienceImgs(index, e)}
                <div key={index} className='p-4 sm:rounded-lg sm:px-10 dark:bg-slate-700/50 dark:ring-slate-800/5 ring-white bg-white flex w-full shadow-md hover:shadow-lg'>
                    {/* sm:max-w-lg */}
                    <div className='mr-5 w-full'>
                        <ExperiencesTitle title={e.title} />
                        <P text={e.description} />
                        {e.images && e.images.length > 0 &&
                            <div className='flex pt-8'>
                                {/* <Image src={e.images[pos[index]]} alt={e.title} width={400} height={40} className='w-4/5 2xl:w-auto bg-black' />

                                <button className='' onClick={(event) => changePos(index, e)}>
                                    <Image className='mx-auto hover:bg-white rounded-lg transition ease-in-out hover:scale-100 hover:translate-y-0.5' src={"/icons/arrow-right.svg"} alt={"Next testimonial"} width={40} height={40} />
                                </button> */}
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
                {e.images && e.images.length > 0 && !(index % 2) && ExperienceImgs(index, e)}
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
