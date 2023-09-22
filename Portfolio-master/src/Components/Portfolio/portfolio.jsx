
export default function Portfolio(){
    return(
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">I will update my work here </p>
                </div>
                <div name="projectDiv" className="-mt-[40px]">
                    <div className="flex flex-col font-bold">
                        <div className="justify-self-center ">
                            <h2 className="text-xl text-sky-400 "><h1 className="inline text-2xl">1.</h1>Daily Quotes</h2>
                            <button className="ml-[50px] bg-blue-500 hover:bg-blue-700 ext-white my-[10px]
                            font-bold py-2 px-4 rounded-md">
                                <a href="https://quotespage-c844a.web.app" target="__blank">Click Me</a>
                            </button>
                        </div>
                        <div className="justify-self-center">
                            <h2 className="text-xl text-sky-400 "><h1 className="inline text-2xl">2.</h1>Daily Eats  </h2>
                            <button className="ml-[50px] bg-blue-500 hover:bg-blue-700 ext-white my-[10px]
                            font-bold py-2 px-4 rounded-md">
                                <a href="https://dailyeats-7afe0.web.app" target="__blank">
                                    Click Me
                                </a>
                            </button>
                        </div>
                        <div className="justify-self-center">
                            <h2 className="text-xl text-sky-400 "><h1 className="inline text-2xl">3.</h1>WeatherApp</h2>
                            <button className="ml-[50px] bg-blue-500 hover:bg-blue-700 ext-white my-[10px]
                            font-bold py-2 px-4 rounded-md">
                                <a href="https://ankur9670.github.io/WEATHER_APP/"
                                   target="__blank">
                                    Click Me
                                </a>
                            </button>
                        </div>
                    </div>
                    <h1 className="mt-[5px]">As I make more project, I will update it here</h1>
                </div>
            </div>
        </div>
    );
}