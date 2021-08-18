import React, {useState} from "react";

export const Input = () => {
  const [name, setName] = useState(''); //Type inference NOT explicit
  // inference - automatic type detection, explicit - tell what type is e.g string
  // const [name, setName] = useState<string>("")
  // const [name, setName] = useState<string | null>(null)
  return <input value={name} onChange={(e) => setName(e.target.value)}/>
}