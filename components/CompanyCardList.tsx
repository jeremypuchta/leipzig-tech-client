import React from 'react'
import { Company } from '../models/Company.model'
import CompanyCard from './CompanyCard'

const CompanyCardList = ({
  companies,
}: {
  companies: Company[]
}): JSX.Element => {
  return (
    <div className="p-4">
      {companies.map((c) => (
        <CompanyCard key={c.id} company={c} />
      ))}
    </div>
  )
}

export default CompanyCardList
