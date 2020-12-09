import axios from 'axios'
import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'

import * as faker from 'faker'
import CompanyCardList from '../components/CompanyCardList'
import { Company } from '../models/Company.model'
import SearchForm from '../components/SearchForm'

const LocationMap = dynamic(() => import('../components/Map'), {
  ssr: false,
})

const CompaniesPage = ({
  companies,
}: {
  companies: Company[]
}): JSX.Element => {
  const [selected, setSelected] = useState<number>(0)

  const handleItemClick = (id: number) => {
    setSelected(id)
  }

  return (
    <div>
      <SearchForm />
      <div className="flex h-content">
        <div className="w-full h-full overflow-auto">
          <CompanyCardList
            companies={companies}
            onItemClick={handleItemClick}
          />
        </div>
        <div className="w-full h-full px-4 custom-scroll">
          <LocationMap companies={companies} selected={selected} />
        </div>
      </div>
    </div>
  )
}
export default CompaniesPage

export const getServerSideProps: GetServerSideProps<{
  companies: Company[]
}> = async () => {
  const res = await axios.get(`${process.env.BASE_API_URL}/companies`)
  const companies = (await res.data).map((c: Company) => {
    return {
      ...c,
      logo: `${faker.image.business(48, 48)}`,
    }
  })

  return {
    props: {
      companies,
    },
  }
}
