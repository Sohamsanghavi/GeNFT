import Identicon from "react-identicons"

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row w-4/5 justify-between
        items-center mx-auto py-10">
            <div className="md:w-3/6 w-full">
                <div>
                    <h1 className="text-white text-5xl font-bold">Buy,Sell & Generate <br />Digital Arts, <br />
                        <span className="text-gradient">NFTs</span> Collection</h1>
                    <p className="text-gray-500 font-semibold text-sm mt-3">Mint and collect the hottest NFT's around.</p>
                </div>
                <div className="flex mt-5">
                    <button className="shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] p-2 rounded-full">
                        Create NFTs
                    </button>
                    {/* <button className="shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] p-2 rounded-full">
                        Generate NFTs
                    </button> */}
                </div>
            </div>
            <div className="shadow-xl shadow-black md:4/5 w-2/5
            mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800">
                <img className="h-60 w-full object-cover" src="1st nft.png" alt="" />
                <div className="flex justify-start items-center p-3">
                    <Identicon className="h-10 w-10 object-contain rounded-full mr-3" string={'0x21....786a'} size={50}/>
                    <div>
                        <p className="text-white font-semibont">0x21...786a</p>
                        <small className="text-pink-800 font-bold">@you</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;