import React, { useEffect, useState } from 'react'
import faker from 'faker/locale/de'
import CompanyCardList from '../components/CompanyCardList'
import { Company } from '../models/Company.model'

export default function Index(): JSX.Element {
  const [companies, setCompanies] = useState<Company[]>([])

  useEffect(() => {
    setCompanies(
      Array.from({ length: 10 }, (_, i) => ({
        id: `${i}`,
        name: `${faker.company.companyName()} ${faker.company.companySuffix()}`,
        department: `${faker.commerce.department()}`,
      }))
    )
  }, [])

  return (
    <div>
      <CompanyCardList companies={companies} />
    </div>
  )
}
