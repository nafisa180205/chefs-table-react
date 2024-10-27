

const Header = () => {
    return (
        <div className="md:w-10/12 w-11/12 mx-auto flex justify-between items-center my-10">
            <h1 className="font-bold text-3xl text-[#150B2B]">Chef&apos;s Table</h1>

            <ul className="flex justify-between  items-center text-[16px] text-gray-600 gap-10">
                <li>Home</li>
                <li>Recipes</li>
                <li>About</li>
                <li>Search</li>
            </ul>

            <div className="flex justify-center items-center gap-5">
                <div className="flex justify-center items-center bg-gray-300 p-3 rounded-3xl">
                    <i className="fa-solid fa-magnifying-glass text-gray-600" ></i>
                    <input type="text" placeholder="Search" className=" bg-gray-300 " />
                </div>
                <div>
                    <i className="fa-regular text-[20px] fa-circle-user p-2 bg-[#0BE58A] rounded-full"></i>
                </div>
            </div>
            
        </div>
    );
};

export default Header;