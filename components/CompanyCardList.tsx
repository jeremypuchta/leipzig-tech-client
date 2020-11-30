import React from 'react'
import { Company } from '../models/Company.model'
import CompanyCard from './CompanyCard'

const CompanyCardList = ({
  companies,
  onItemClick,
}: {
  companies: Company[]
  onItemClick: (id: string) => void
}): JSX.Element => {
  return (
    <div className="p-4">
      {companies.map((c) => (
        <CompanyCard key={c.id} company={c} onClick={onItemClick} />
      ))}
    </div>
  )
}

export default CompanyCardList
