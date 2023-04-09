import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface Content {
  tools: {
    image: string
    name: string
    width?: number
    description: string
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
      "description": "Flutter is both android and IOs"
    },
    {
      "image": "icons/firebase.svg",
      "name": "Firebase",
      "description": "Flutter is a IOs"
    },
    {
      "image": "icons/html5.svg",
      "name": "HTML5",
      "description": "",
      "width": 200
    },
    {
      "image": "icons/css3.svg",
      "name": "CSS3",
      "description": "",
      "width": 200
    },
    {
      "image": "icons/php.svg",
      "name": "PHP",
      "description": "Flutter is a well known framework used to build mobile applications, for both android and IOs"
    },
    {
      "image": "icons/mysql.svg",
      "name": "MySQL",
      "description": "Flutter is a well known framework used to build mobile applications, for both android and IOs"
    },
    {
      "image": "icons/aws.svg",
      "name": "AWS",
      "description": "Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud, offering over 200 fully featured services from data centers globally. Millions of customers—including the fastest-growing startups, largest enterprises, and leading government agencies—are using AWS to lower costs, become more agile, and innovate faster."
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
      "toolsUsed": []
    }
  ]
}`
)

export default function Home() {
  return (
    <main >
      <section className="flex min-h-screen flex-col items-start p-4 sm:p-32">

        <Title title={"Facundo Hannoch"} />
        <div className='py-4'>
          <TitleH2 title={"Do you need a professional website?"} />
          <TitleH2 title={"I can make it for you"} />
        </div>
        <TransitionButton text={"Take a look"} />
      </section>

      <section id='abilities' className="flex min-h-screen flex-col items-start p-4 sm:p-32">
        <Title title={"See my abilities"} />
        <div className='flex flex-row flex-wrap'>
          {tools.map((e: Content["tools"]) =>
            <div>
              <div style={e.width ? { width: e.width } : {}} className='shadow-md ring-1 p-14 m-4 ring-gray-900/5  sm:max-w-lg sm:rounded-lg sm:px-10'>

                {/* relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px] */}
                <Image
                  className=" relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src={e.image}
                  color='red'
                  alt={e.name}
                  width={70}
                  height={40}
                  priority
                />

                <ToolsTitle title={e.name} />
                {e.description && <P text={e.description} />}

              </div>
            </div>
          )}
        </div>
      </section>

      <section id='portfolio' className="flex min-h-screen flex-col items-start p-4 sm:p-32">
        <Title title={"You're in good company"} />
        <TitleH2 title={"I've built numerous applications, both mobile and web, during my years as a full-stack developer"} />
        {experiences.map((e: any) =>
          <div className='p-4 sm:m-8 my-8 ring-1 sm:rounded-lg sm:px-10 ring-white bg-white flex'>
            {/* sm:max-w-lg */}
            <div>
              <ExperiencesTitle title={e.title} />
              <P text={e.description} />
            </div>
            <div className='flex flex-col m-'>
              {e.toolsUsed.map((imageSrc: string) => {
                { var d = tools.find((e: any) => e.name == imageSrc) }
                if (d) return <Image src={d.image} alt={imageSrc} width={100} height={40} className='hover:p-0.5' />
              })}
            </div>
          </div>
        )}
        <TitleH2 title={"Stop"} />

      </section>

      <footer id='footer' className='bg-gray-700 p-32'></footer>
    </main >
  )
}

interface TitleInterface {
  title: string;
}

function Title(props: TitleInterface) {
  return <p className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 py-1 m">{props.title}</p>

}

function TitleH2(props: TitleInterface) {
  return <p className='text-2xl sm:text-2xl tracking-tight text-gray-800 my-2'>{props.title}</p>

}

function ToolsTitle(props: TitleInterface) {
  return <p className='text-2xl sm:text-3xl  tracking-tight text-gray-800 my-2'>{props.title}</p>
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
      className="rounded-md bg-slate-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {props.text}
    </a>
    <a href="#portfolio" className="text-sm font-semibold leading-6 text-gray-900">
      See my portfolio <span aria-hidden="true">→</span>
    </a>
  </div>
}