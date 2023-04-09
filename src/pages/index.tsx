import Image from 'next/image'
import { Inter } from 'next/font/google'
// import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import CallToAction from './last-call-to-action'

const inter = Inter({ subsets: ['latin'] })

interface Content {
  tools: {
    image: string
    name: string
    width?: number
    description: string
    lowLevel: boolean
  },
  experiences: {
    image: string
    title: string
    description: string
  }
}
const { tools, experiences } = JSON.parse(
  `{
  "tools": [
    {
      "image": "icons/flutter.svg",
      "name": "Flutter",
      "description": "Flutter is a well known framework used to build mobile applications, for both android and IOs"
    },
    {
      "image": "icons/react.svg",
      "name": "React",
      "description": "React is the most used Javascript librery for creating responsive, and fully interactive websites, providing a versatile set of tools to create robust and performant web applications."
    },
    {
      "image": "icons/firebase.svg",
      "name": "Firebase",
      "description": "Firebase is a suite of tools that helps businesses create engaging web and mobile apps quickly and easily, with features like real-time data syncing, analytics, and cloud messaging that enable better customer engagement and retention."
    },
    {
      "image": "icons/php.svg",
      "name": "PHP",
      "description": "Flutter is a well known framework used to build mobile applications, for both android and IOs"
    },
    {
      "image": "icons/mysql.svg",
      "name": "MySQL",
      "description": "MySQL is a reliable and scalable database management system that enables businesses to store and analyze large amounts of data."
    },
    {
      "image": "icons/mongodb.svg",
      "name": "MongoDB",
      "description": "MongoDB is a flexible and scalable NoSQL database that is widely used for modern web applications. With MongoDB, businesses can store, manage, and analyze unstructured data quickly and easily, while ensuring data security and performance."
    },
    {
      "image": "icons/aws.svg",
      "name": "AWS",
      "description": "Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud, offering over 200 fully featured services from data centers globally. Millions of customers—including the fastest-growing startups, largest enterprises, and leading government agencies—are using AWS to lower costs, become more agile, and innovate faster."
    },
    {
      "image": "icons/html5.svg",
      "name": "HTML5"
    },
    {
      "image": "icons/css3.svg"
    },
    {
      "image": "icons/android-original.svg"
    },
    {
      "image": "icons/javascript.svg"
    },
    {
      "image": "icons/typescript.svg"
    },
    {
      "image": "icons/nextjs.svg"
    },
    {
      "image": "icons/tailwindcss.svg"
    },
    {
      "image": "icons/nodejs.svg"
    },
    {
      "image": "icons/ios.svg"
    },
    {
      "image": "icons/typescript.svg",
      "lowLevel": true
    },
    {
      "image": "icons/mongodb.svg",
      "lowLevel": true
    },
    {
      "image": "icons/nextjs.svg",
      "lowLevel": true
    },
    {
      "image": "icons/tailwindcss.svg",
      "lowLevel": true
    },
    {
      "image": "icons/nodejs.svg",
      "lowLevel": true
    },
    {
      "image": "icons/ios.svg",
      "lowLevel": true
    }

  ],
  "experiences": [
    {
      "image": "",
      "title": "Mobile App developer in Flutter",
      "description": "Worked as a mobile developer for building and mantaining a complex application. Involved in the design of the application, and some of the technical questions.",
      "toolsUsed": ["Flutter", "Firebase"]
    },
    {
      "image": "",
      "title": "Blog from Scratch with PHP",
      "description": "Work for a client who wanted a blog built for herself, but built from the ground with PHP.I managed all the database and logic for the backend, using a MySQL database solution, and deployed the blog in a AWS Beanstalk environment.",
      "toolsUsed": ["PHP", "MySQL", "AWS"]
    },
    {
      "image": "",
      "title": "Keep demo app",
      "description": "A website as Google Keep, with the same functionality built with React, and NodeJs.",
      "toolsUsed": ["React"]
    }
  ],
  "testimonials": [
    {
      "name": "Hadrian",
      "cite": "Facundo really went the extra mile to deliver a perfect work in a very communicative way. I would highly recommend his services for any JS/PHP mission. Thanks again for your hard work !"
    },
    {
      "name": "",
      "cite": "Facundo did a good job, highly recommended."
    }
  ]
}`
)
console.log(tools)
export default function Home() {
  return (
    <main >
      <section className="flex min-h-screen flex-col sm:flex-row 2xl:flex-col items-start p-8 py-24 sm:p-32 sm:pr-12">
        <div className='flex flex-col sm:items-start items-center pb-8 2xl:mx-auto '>
          <Title title={"Facundo Hannoch"} />
          <TitleH1 title={"Fullstack Software Developer"} />
          <div className='py-4 sm:items-start items-center'>
            <TitleH2 title={"Do you need a professional website?"} />
            <TitleH2 title={"I can make it for you"} />
          </div>
          <TransitionButton text={"Get your website"} />
          {/* <TitleH1 title={"Elevate your digital presence with our expert web and mobile development services"} /> */}
        </div>


        <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-24 lg:ml-16 2xl:m-0 2xl:w-full">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 sm:flex sm:flex-col 2xl:items-center">
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to my newsletter</h2>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  I regularly send useful information for people like you, and it is totally free.
                </p>
                <div className="mt-6 flex max-w-md gap-x-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Subscribe
                  </button>
                </div>
                <p className='text-white px-4 pt-4'>Don't worry, I won't be spamming to try to sell you, and you can cancel at any time you want</p>
              </div>
              {/* <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    {/* <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" /> *}
                  </div>
                  <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
                  <dd className="mt-2 leading-7 text-gray-400">
                    Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                  </dd>
                </div>
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    {/* <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" /> }
                  </div>
                  <dt className="mt-4 font-semibold text-white">No spam</dt>
                  <dd className="mt-2 leading-7 text-gray-400">
                    Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                  </dd>
                </div>
              </dl> */}
            </div>
          </div>
          {/* <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div> */}
        </div>

      </section>

      <section id='abilities' className="flex min-h-screen flex-col items-cen p-4 sm:p-32">
        <Title title={"See my abilities"} />
        <div className='flex flex-row flex-wrap'>
          {tools.filter((e: Content["tools"]) => e.description).map((e: Content["tools"]) =>
            <div >
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
                <div style={e.width ? { width: e.width } : {}} className='shadow-md ring-1 p-14 m-4 ring-gray-900/5  sm:max-w-lg sm:rounded-lg sm:px-10'>

                  {/* relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px] */}
                  <Image
                    className=" relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mx-auto"
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
          <div>
            <TitleH2 title={"Have much experience with"} />
            <div className='flex flex-row flex-wrap'>
              {tools.filter((e: Content["tools"]) => !e.description && !e.lowLevel).map((e: Content["tools"]) =>
                <div className='p-2 '>
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
          </div>
          <div>
            <TitleH2 title={"I have also used "} />
            <div className='flex flex-row flex-wrap'>
              {tools.filter((e: Content["tools"]) => e.lowLevel).map((e: Content["tools"]) =>
                <div className='p-2 '>
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
          </div>
        </div>
      </section>

      <section id='portfolio' className="flex min-h-screen flex-col items-start p-4 sm:p-32">
        <Title title={"You're in good company"} />
        <TitleH2 title={"I've built numerous applications, both mobile and web, during my years as a full-stack developer"} />
        {experiences.map((e: any) =>
          <div className='p-4 sm:m-8 my-8 ring-1 sm:rounded-lg sm:px-10 ring-white bg-white flex w-full shadow-md hover:shadow-lg'>
            {/* sm:max-w-lg */}
            <div className='mr-5 w-full'>
              <ExperiencesTitle title={e.title} />
              <P text={e.description} />
              {false &&
                <div className='flex p-8'>
                  {getToolPaths(e.toolsUsed).map((image) =>
                    <Image src={image.image} alt={image} width={70} height={40} className='hover:p-0.5' />
                  )}
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
        )}
      </section>
      {/* <CallToAction /> */}
      <section className='flex min-h-screen flex-col items-start p-4 sm:p-32'>
        <Title title='Tetimonials' />
        <TitleH2 title='Hadrian aprovved me, so pay me you dummy' />

      </section>

      <footer id='footer' className='bg-gray-700 p-32 pb-0 flex flex-col'>
        <div className='flex flex-col w-full'>
          {/* <a className='text-1xl text-white p-2'>About</a> */}
          <div className=' p-2 sm:p-4'>
            <a href='/terms-of-service' className='text-lg text-white'>Terms of service</a>
          </div>
          <div className=' p-2 sm:p-4'>
            <a href='/terms-of-service' className='text-lg text-white'>Cookies Policy</a>
          </div>
        </div>
        <p className='text-white self-center relative bottom-1 mt-24 mb-8'>Facundo Hannoch © {new Date().getFullYear()}</p>
      </footer>
    </main >
  )
}

interface TitleInterface {
  title: string;
  centered?: boolean;
}

function Title(props: TitleInterface) {
  return <p className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-800 py-1 m">{props.title}</p>

}
function TitleH1(props: TitleInterface) {
  return <p className='text-2xl italic sm:text-2xl tracking-tight text-gray-900 my-2'>{props.title}</p>
}

function TitleH2(props: TitleInterface) {
  var p = 'text-2xl sm:text-2xl tracking-tight text-gray-800 my-2 '
  return <p className={p}>{props.title}</p>
}

function ToolsTitle(props: TitleInterface) {
  var p: string = 'text-2xl sm:text-3xl text-center tracking-tight text-gray-800 my-2 '
  p = p.concat(props.centered ? '' : 'sm:text-start')
  return <p className={p}>{props.title}</p>
}

function ExperiencesTitle(props: TitleInterface) {
  return <p className='text-2xl sm:text-3xl tracking-tight text-gray-800 my-2'>{props.title}</p>
}

interface PInterface {
  text: String
}
function P(props: PInterface) {
  return <p className='text-slate-500'>{props.text}</p>
}

interface TransitionButtonInterface {
  text: String
}

function TransitionButton(props: TransitionButtonInterface) {
  return <div className="mt-2 flex items-center justify-center gap-x-6">
    <a
      href="#"
      className="rounded-md bg-slate-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
      2xl:p-5 2xl:text-2xl"
    >
      {props.text}
    </a>
    <a href="#portfolio" className="text-sm font-semibold leading-6 text-gray-900 2xl:text-2xl">
      See my portfolio <span aria-hidden="true">→</span>
    </a>
  </div>
}

function getToolPaths(names: Array<string>): Array<any> {
  var paths: Array<string> = []
  names.forEach((name: string) => {
    var tool: string = tools.find((e: any) => e.name == name)
    if (tool) paths.push(tool)
  }
  )
  return paths
}