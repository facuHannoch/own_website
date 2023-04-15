import { Content } from "../pages";
import { ToolsTitle, P, TitleH2 } from "./titles";
import Image from 'next/image'

export default function Tools({ tools }: { tools: Array<Content["tool"]> }) {
  return <div className='flex flex-row flex-wrap'>
    {tools.filter((e: Content["tool"]) => e.description).map((e: Content["tool"], index: number) =>
      <div key={index}>
        {!e.description ?
          <div className='p-2'>
            <Image
              className=" relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mx-auto"
              src={e.image}
              color='red'
              alt={e.name}
              width={55}
              height={40}
              priority
            />
          </div>
          : 
          <div style={e.width ? { width: e.width } : {}} className='dark:bg-gray-800 shadow-md ring-1 p-14 m-4 ring-gray-900/5  sm:max-w-lg sm:rounded-lg sm:px-10'>

            {/* relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px] */}
            <Image
              className="relative (dark:bg-white/25 dark:p-0.5 dark:rounded-lg) mx-auto"
              src={e.image}
              color='red'
              alt={e.name}
              width={70}
              height={40}
              priority
            />

            <ToolsTitle title={e.name} centered={e.description == ""} />
            {e.description && <P text={e.description} />}
            {/* {getToolPaths(e.toolsUsed).map((image) =>
                    <Image src={image.image} alt={image} width={70} height={40} className='hover:p-0.5' />
                  )} */}
          </div>
        }
      </div>
    )}
    {false &&
      <div>
        <TitleH2 title={""} />
        <div className='flex flex-row flex-wrap'>
          {tools.filter((e: Content["tool"]) => !e.description && !e.lowLevel).map((e: Content["tool"], index:number) =>
            <div key={index} className='p-2 '>
              <Image
                className=" relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mx-auto"
                src={e.image}
                color='red'
                alt={e.name}
                width={55}
                height={40}
                priority
              />
            </div>
          )}
        </div>
      </div>}
    {false &&
      <div>
        <TitleH2 title={"I have also used "} />
        <div className='flex flex-row flex-wrap'>
          {tools.filter((e: Content["tool"]) => e.lowLevel).map((e: Content["tool"], index:number) =>
            <div key={index} className='p-2 '>
              <Image
                className=" relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mx-auto"
                src={e.image}
                color='red'
                alt={e.name}
                width={55}
                height={40}
                priority
              />
            </div>
          )}
        </div>
      </div>}
  </div>
}