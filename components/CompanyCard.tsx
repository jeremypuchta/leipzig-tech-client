import React from 'react'
import Image from 'next/image'
import { Company } from '../models/Company.model'

const CompanyCard = ({
  company,
  onClick,
}: {
  company: Company
  onClick: (id: number) => void
}): JSX.Element => {
  return (
    <div
      className="flex rounded-md shadow-md items-center p-4 my-4"
      onClick={() => onClick(company.id)}
      role="button"
      tabIndex={0}
    >
      <Image
        src={`${company.logo}`}
        alt="company logo"
        width={48}
        height={48}
      />
      <div className="ml-4">
        <h2 className="font-semibold sm:text-lg lg:text-2xl">{company.name}</h2>
        <p className="text-gray-500 italic">{company.sector}</p>
      </div>
    </div>
  )
}

export default CompanyCard
