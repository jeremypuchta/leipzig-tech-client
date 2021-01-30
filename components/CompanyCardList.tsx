import React from 'react'
import { Company } from '../models/Company.model'
import CompanyCard from './CompanyCard'

const CompanyCardList = ({
  companies,
  onItemClick,
}: {
  companies: Company[]
  onItemClick: (id: number) => void
}): JSX.Element => {
  return (
    <div className="px-4">
      {companies.length > 0 ? (
        companies.map((c) => (
          <CompanyCard key={c.id} company={c} onClick={onItemClick} />
        ))
      ) : (
        <p className="py-8 text-center">No companies found.</p>
      )}
    </div>
  )
}

export default CompanyCardList
