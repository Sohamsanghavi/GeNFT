import Identicon from 'react-identicons'
import { setGlobalState, useGlobalState, truncate } from '../store'
import { useState } from 'react'

const Hero = () => {
 const [connectedAccount] = useGlobalState('connectedAccount')
 const [imgBase64, setImgBase64] = useState(null)
 const [fileUrl, setFileUrl] = useState('')
 const onCreatedNFT = () => {
   setGlobalState('modal', 'scale-100')
 }
 const changeImage = async (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0])

    reader.onload = (readerEvent) => {
      const file = readerEvent.target.result
      setImgBase64(file)
      setFileUrl(e.target.files[0])
    }
  }


 return (
   <div
     className="flex flex-col md:flex-row w-4/5 justify-between
     items-center mx-auto py-10"
   >
     <div className="md:w-3/6 w-full">
       <div>
         <h1 className="text-white text-5xl font-bold">
           Buy and Sell <br /> Digital Arts, <br />
           <span className="text-gradient">NFTs</span> Collections
         </h1>


 <p className="text-gray-500 font-semibold text-sm mt-3">
           Mint and collect the hottest NFTs around.
         </p>
       </div>

       <div className="flex flex-row mt-5">
         <button
           className="shadow-xl shadow-black text-white
           bg-[#e32970] hover:bg-[#bd255f]
           rounded-full cursor-pointer p-2"
           onClick={onCreatedNFT}
         >
           Create NFT
         </button>
       </div>
     </div>

     <div
       className="shadow-xl shadow-black md:w-2/5 w-full
     mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800"
     >
         <img
         src="https://ivory-negative-crawdad-412.mypinata.cloud/ipfs/QmeeFkKNz5RC4919R7Ji4LZe7vswXkaHCpsjxR9gdBcHih?pinataGatewayToken=GyCJrN7RhbIo0GxovYv7QNInTbKA_FqcMrLWDgYgvmK47dCZ1jTz7CnT9zTPcbcS"
         alt="NFT Art"
         className="h-60 w-full object-cover"
       />

       <div className="flex justify-start items-center p-3">
         <Identicon
           string={connectedAccount ? connectedAccount : 'Connect Your Wallet'}
           size={50}
           className="h-10 w-10 object-contain rounded-full mr-3"
         />
         <div>
           <p className="text-white font-semibold">
             {connectedAccount
               ? truncate(connectedAccount, 4, 4, 11)
               : 'Connect Your Wallet'}
           </p>
           <small className="text-pink-800 font-bold">@you</small>
         </div>
       </div>
     </div>
   </div>
 )
}

export default Hero
