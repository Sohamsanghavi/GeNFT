import React from "react"
import Header from "./component/Header"
import Hero from "./component/Hero"
import Artworks from "./component/Artworks"
import Transactions from "./component/Transactions"
import Footer from "./component/Footer"

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
    </div>
  )
}

export default App
