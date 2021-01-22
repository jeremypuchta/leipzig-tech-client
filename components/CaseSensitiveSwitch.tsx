import React, { useState } from 'react'
import { VscCaseSensitive } from 'react-icons/vsc'

export default function CaseSensitiveSwitch({ field, form }) {
  const [toggle, setToggle] = useState(false)

  function handleClick() {
    setToggle(!toggle)
    form.setFieldValue(field.name, !toggle)
  }

  return (
    <VscCaseSensitive
      className={`relative text-xl float-right top-0.5 cursor-pointer  ${
        toggle ? 'text-black' : 'text-gray-400 hover:text-blue-800'
      }`}
      onClick={handleClick}
    />
  )
}
