import React from 'react'
import { Company } from '../models/Company.model'

const CompanyCard = ({ company }: { company: Company }): JSX.Element => {
  return (
    <div className="w-10/12 h-32 bg-gray-100 rounded shadow-xl flex items-center mb-8">
      <img
        className="h-full py-5 mx-5"
        src="/leipzig-wappen.png"
        alt="Company Logo"
      />
      <div className="content font-mono flex flex-col">
        <span className="text-4xl font-bold">{company.name}</span>
        <span className="text-xl">{company.department}</span>
      </div>
      <span className="flex-1" />
      <a
        href="/"
        className="font-mono text-2xl font-bold mr-5 py-5 w-48 bg-gray-200 shadow-2xl hover:bg-gray-300 flex justify-center items-center"
      >
        Jobs
      </a>
    </div>
  )
}

export default CompanyCard
