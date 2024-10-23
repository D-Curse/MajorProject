const Banner = () => {
  return (
        <>
            <div className="Banner flex flex-col justify-center items-center text-left w-full bg-opacity-0">
                <p className="font-semibold text-3xl py-4 text-white w-[80%]">Technologies Used</p>
                <div className="flex bg-gradient-to-b from-white to-[#D7E3F4] bg-opacity-20 rounded-[25px] w-[80%] justify-evenly items-center h-[100px]">
                    <img className="h-[80px]" src="/images/landingPage/React.png" alt="React" />
                    <img className="h-[80px]" src="/images/landingPage/Django.png" alt="Django" />
                    <img className="h-[80px]" src="/images/landingPage/Kaggle.png" alt="Kaggle" />
                    <img className="h-[80px]" src="/images/landingPage/Python.png" alt="Python" />
                </div>
            </div>
        </>
    )
}

export default Banner