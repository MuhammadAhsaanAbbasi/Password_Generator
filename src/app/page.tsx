'use client'
import { useCallback, useEffect, useRef, useState } from "react"

const Page = () => {
  let [length, setLength] = useState(0)
  let [numberAllow, setnumberAllow] = useState(false)
  let [charAllow, setcharAllow] = useState(false)
  let [password, setPassword] = useState("")

  const inputRef = useRef<HTMLInputElement>(null);

  const copyPasswordToClipboard = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.select();
      // Assuming 'password' is defined somewhere
      window.navigator.clipboard.writeText(password);
    }
  }, [password]);

  const PasswordGenerator = useCallback(()=>{
    let pass=''
    let str=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow) str += "0123456789"
    if(charAllow) str += "!@#$%^&*()-_+=`~"
    for(let i=0; i<length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllow,charAllow,setPassword])

  useEffect(()=>{
    PasswordGenerator()
  },[length,numberAllow,charAllow,PasswordGenerator])

  return (
    <>
    <div className="h-screen w-full duration-500 bg-black">
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <div className="bg-purple-300 w-full py-4">
      <div className="flex items-center justify-center gap-x-3">
        <input type="text"
        value={password}
        className="px-2 py-2 text-xl bg-slate-300 rounded-lg"
        placeholder="Password"
        readOnly
        ref={inputRef}
        />
        <button className="bg-orange-800 px-3 py-3 rounded-lg"
        onClick={()=>PasswordGenerator()}>
          Generate
        </button>
        <button
        className="bg-blue-400 px-3 py-3 rounded-lg"
        onClick={copyPasswordToClipboard}
        >
          Copy</button>
      </div>
      <div className="flex text-sm gap-x-2 justify-center">
        <div className="flex items-center gap-x-1">
          <input type="range" 
          min={7}
          max={30}
          value={length}
          className="outline-none bg-orange-400"
          onChange={(e) => {
            setLength(parseInt(e.target.value, 10));
          }}
          />
          <label className="text-orange-400">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          defaultChecked={numberAllow}
          id="numberInput"
          onChange={()=>{
            setnumberAllow((prev)=>!prev)
          }}
          />
          <label htmlFor="numberInput" className="text-orange-400">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          defaultChecked={charAllow}
          id="CharacterInput"
          onChange={()=>{
            setcharAllow((prev)=>!prev)
          }}
          />
          <label htmlFor="CharacterInput" className="text-orange-400">Special Characters</label>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}


export default Page
