const Header = () => {
    return (
        <div className="w=4/5 flex justify-between md:justify-center items-center py-4 mx-9">
            <div className="md:flex-[0.5] flex-initial justify-center items-center" >
                <div className="px-10 py-1"><img className="w-32 cursor-pointer" src="logo.png" alt="logo" /></div>
                
            </div>
            <ul className="md:flex-[0.5] text-white md:flex hidden list-none justify-between items-center flex-initial mx-10">
                <li className="mx-2 cursor-pointer">Market</li>
                <li className="mx-2 cursor-pointer">Artist</li>
                <li className="mx-2 cursor-pointer">Generate</li>
                <li className="mx-2 cursor-pointer">Community</li>
            </ul>

            <button className="shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2 rounded-full">
                connect wallet
            </button>
        </div>
    )
}
export default Header;