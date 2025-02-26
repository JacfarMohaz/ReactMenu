import { useState } from "react"

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => {
    setIsOpen(true)
  }

  const handleIsCLose = () => {
    setIsOpen(false)
  }

  return <div className="flex justify-between sm:px-10 px-5 sm:py-4 py-2 bg-blue-500 sm:text-white">
    <h1 className="text-4xl font-semibold text-white">Logo</h1>

    <i style={{display: isOpen === true ? "none" : "block"}} onClick={handleIsOpen} className="fa-solid text-4xl text-white sm:hidden fa-bars"></i>
    <i style={{display: isOpen === true ? "block" : "none"}} onClick={handleIsCLose} className="fa-solid text-4xl text-white hidden fa-x"></i>

    <div id="menu" style={{display: isOpen === true ? "block" : "none"}} className="absolute top-20 sm:top-2 sm:flex hidden sm:gap-56  sm:left-[25%] ">

      <ul className="flex sm:flex-row text-center flex-col sm:gap-20 gap-10 text-2xl font-semibold pt-2">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="mt-10 sm:mt-0">
        <button className="bg-yellow-500 px-10 py-3 rounlg text-white rounded-lg ml-10">Login</button>
        <button className="bg-transparent border-2 border-yellow-500 px-10 py-3 rounlg text-yellow-500 sm:text-white rounded-lg ml-10">Login</button>
      </div>
    </div>
  </div>
}

export default App
