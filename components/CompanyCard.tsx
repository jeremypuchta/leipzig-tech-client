import React from 'react'
import { Company } from '../models/Company.model'

const CompanyCard = ({
  company,
  onClick,
}: {
  company: Company
  onClick: (id: string) => void
}): JSX.Element => {
  return (
    <div
      className="bg-gray-100 rounded shadow-xl flex items-center mb-8"
      onClick={() => onClick(company.id)}
      role="button"
      tabIndex={0}
    >
      <img className="h-20 m-5" src="/leipzig-wappen.png" alt="Company Logo" />
      <div className="">
        <h2 className="text-md font-semibold sm:text-lg lg:text-2xl">
          {company.name}
        </h2>
        <p className="text-md">{company.department}</p>
      </div>
    </div>
  )
}

export default CompanyCard
