import React from 'react'
import { Company } from '../models/Company.model'
import CompanyCard from './CompanyCard'

const CompanyCardList = ({
  companies,
}: {
  companies: Company[]
}): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col items-center mt-16">
      {companies.map((c) => (
        <CompanyCard key={c.id} company={c} />
      ))}
    </div>
  )
}

export default CompanyCardList
