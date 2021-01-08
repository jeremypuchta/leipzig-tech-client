import React, { SyntheticEvent, useState } from 'react'

interface District {
  value: string
  label: string
}
export default function SearchForm(setFilteredCompanies: any): JSX.Element {
  const [name, setName] = useState<string>('')
  const [selectedDistricts, setSelectedDistricts] = useState<District[]>([])

  const handleCompanyNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setName(event.target.value)
  }

  const handleDistrictSelectionChange = (
    value: ValueType<District, boolean>
  ) => {
    setSelectedDistricts(value as District[])
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
  }

  const options: District[] = [
    { value: 'suedvorstadt', label: 'Südvorstadt' },
    { value: 'connewitz', label: 'Connewitz' },
    { value: 'plagwitz', label: 'Plagwitz' },
    { value: 'lindenau', label: 'Lindenau' },
    { value: 'zentrum-west', label: 'Zentrum West' },
    { value: 'zentrum-sued', label: 'Zentrum Süd' },
  ]

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      borderRadius: '0.5rem',
      borderColor: state.selectProps.borderColor,
    }),
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex max-w-5xl rounded shadow p-4 mb-8 mx-auto justify-between">
        <input
          className="w-full border rounded-lg pl-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-900"
          type="text"
          value={name}
          onChange={handleCompanyNameChange}
          name="name"
          placeholder="Company Name"
        />
        <button
          type="submit"
          className="py-2 px-4 rounded-lg shadow-lg bg-blue-800 text-white"
        >
          Search
        </button>
      </div>
    </form>
  )
}
