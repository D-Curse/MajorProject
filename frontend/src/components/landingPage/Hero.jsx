import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
        <section className="pt-12 text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-8xl text-3xl mb-4 font-bold text-white">DEEPFAKE
                    <br className="hidden lg:inline-block" />DETECTION
                </h1>
                <p className="mb-8 w-[60%] text-white text-lg font-semibold leading-relaxed">
                    Harness the power of cutting-edge technology to detect and safeguard against synthetic media.
                </p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-4 px-16 focus:outline-none hover:bg-indigo-600 rounded-full font-semibold text-lg ">
                        <Link to="/Dashboard">
                            Try Now
                        </Link>
                    </button>
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" alt="hero" src="/images/landingPage/Hero.png" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero