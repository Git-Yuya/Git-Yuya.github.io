import './App.css'
import profileIcon from './assets/profile_icon.png'

function App() {
  return (
    <>
      <header className="text-gray-700 border-b border-gray-400">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="text-xl ml-3">Git-Yuya</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#home" className="mr-5 hover:text-blue-400 duration-300">
              Home
            </a>
            <a href="#about" className="mr-5 hover:text-blue-400 duration-300">
              About
            </a>
            <a href="#skills" className="mr-5 hover:text-blue-400 duration-300">
              Skills
            </a>
          </nav>
        </div>
      </header>

      <section className="text-gray-700" id="home">
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl text-gray-900 font-medium mb-4">
              Hi!
              <br />
              I'm Yuya Suda
              <br />
              Software Engineer
            </h1>
            <p className="mb-8 leading-relaxed">
              I am a software engineer with a passion for creating innovative solutions.
            </p>
          </div>
          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <img src={profileIcon} alt="Yuya Suda" className="rounded-full w-32 h-32" />
          </div>
        </div>
      </section>

      <section className="text-gray-700 border-t border-gray-400" id="about">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text2xl sm:text3xl font-medium mb-2 text-gray-900">About Me</h1>
            <p className="pb-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci pariatur nemo distinctio! Corporis itaque debitis laudantium, dolore id facilis. Quam veritatis dicta consequatur quas, eaque sed modi ab atque esse aut facilis. Aspernatur necessitatibus, suscipit repellendus illo nemo officia voluptas. Odit mollitia repudiandae voluptas ratione? Mollitia iure tenetur veritatis inventore.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, illum eaque? Laudantium et tempora maiores ad impedit mollitia distinctio accusamus, quis, cumque omnis dolore. Sunt deserunt ratione fugiat minus, amet possimus doloribus earum asperiores a saepe corrupti recusandae quibusdam voluptatem quasi, odit est delectus maiores, accusamus optio veniam. Mollitia quisquam aut, accusantium veritatis, nobis explicabo adipisci non delectus nesciunt fuga, incidunt possimus obcaecati sint placeat eligendi expedita magni perferendis? Officia, in quod quibusdam ratione provident dignissimos vitae eos unde numquam nisi porro velit, eum molestiae. Totam repellendus, sint laudantium officia quam porro quod facilis est, nobis veniam optio cum quibusdam.
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-700 border-t border-gray-400" id="skills">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text2xl sm:text3xl font-medium text-gray-900 mb-10">My Skills</h1>
            <p className="pb-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, libero.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
