import './Banner.css'

const Banner = () => {
    return (
        <div className="md:w-10/12 w-11/12 mx-auto">
            <div className="w-full h-full banner-container bg-cover bg-no-repeat text-center rounded-3xl py-16 space-y-5 " >
                <h1 className='text-[52px] font-bold text-white w-4/5 mx-auto '>Discover an exceptional cooking class tailored for you!</h1>
                <p className='text-[18px]  text-white w-10/12 mx-auto '>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>

                <div className='flex justify-center items-center gap-5'>
                    <button className='px-7 py-3 text-[18px]  text-black bg-emerald-500 rounded-3xl '>Explore Now</button>
                    <button className='px-7 py-3 text-[18px]  text-white border border-white rounded-3xl'>Our Feedback</button>
                </div>

            </div>
            {/* https://ibb.co.com/rGT4nSt */}
            {/* https://i.ibb.co.com/7bCf4zy/pexels-elevate-1267320.jpg
                https://i.ibb.co.com/1K353Sb/pexels-jess-vide-6390688.jpg
                https://i.ibb.co.com/sRB13Y8/pexels-catscoming-674574.jpg
                https://i.ibb.co.com/ggyXxRh/pexels-sandy-rojas-3514689-5433540.jpg
                https://i.ibb.co.com/gVGK2bp/pexels-bulbfish-1143754.jpg
                https://i.ibb.co.com/tmhmxjv/pexels-polina-tankilevitch-4518840.jpg
                https://i.ibb.co.com/TLCTwVw/pexels-rene-roa-1882128-12261093.jpg */}
            
        </div>
    );
};

export default Banner;