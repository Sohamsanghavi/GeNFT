import React from "react"
import Header from "./component/Header"
import Hero from "./component/Hero"
import Artworks from "./component/Artworks"
import Transactions from "./component/Transactions"
import Footer from "./component/Footer"
import CreateNFT from "./component/CreateNFT"
import ShowNFT from "./component/ShowNFT"
import UpdateNFT from "./component/updateNFT"

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero/>
      </div>
      <Artworks/>
      <Transactions />
      <Footer />
      <CreateNFT />
      <ShowNFT />
      <UpdateNFT />
    </div>
  )
}

export default App
