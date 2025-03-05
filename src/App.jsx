import { useState } from "react"

function App() {

  const [isOpen, QIsOpen] = useState(false)

  const handleIsOpen = () => {
      if(isOpen === false){
        QIsOpen(true)
      }
      else{
        QIsOpen(false)
      }
  }

  return <>
    <div className="flex justify-between sm:px-10 px-4 py-3">
      <h1 className="text-4xl font-semibold text-slate-900">Logo</h1>

      <i onClick={handleIsOpen} className="fa-solid fa-bars text-4xl sm:hidden"></i>

      <ul className="sm:flex hidden gap-20 text-4xl text-slate-900 font-medium pt-1">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="sm:flex hidden">
        <button className="bg-slate-900 px-12 py-3 rounded-2xl text-white ml-10">Login</button>
        <button className="bg-transparent border-2 border-slate-900 px-12 py-3 rounded-2xl text-slate-900 font-lugrasimo ml-10">Login</button>
      </div>
    </div>

    {/* responsive menu */}

    <div style={{display: isOpen === true ? "block" : ""}} className="hidden">
      <ul className=" text-4xl space-y-10 mb-10 text-center text-slate-900 font-medium pt-1">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="">
        <button className="bg-slate-900 px-12 py-3 rounded-2xl text-white ml-10">Login</button>
        <button className="bg-transparent border-2 border-slate-900 px-12 py-3 rounded-2xl text-slate-900 font-lugrasimo ml-10">Login</button>
      </div>
    </div>

  </>
}

export default App