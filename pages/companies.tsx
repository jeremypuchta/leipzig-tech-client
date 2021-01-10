import axios from 'axios'
import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'

import * as faker from 'faker'
import { Formik } from 'formik'
import CompanyCardList from '../components/CompanyCardList'
import { Company } from '../models/Company.model'

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
      <Formik
        initialValues={{ name: '' }}
        onSubmit={async (values) => {
          const res = await axios.get(`${process.env.BASE_API_URL}/companies`, {
            params: {
              name: values.name,
            },
          })

          {
            /*
           TODO: Calling the API works and the response is correct as well (see Network Tab in Browser). How to update the list of companies?
           */
          }
        }}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form
            onSubmit={handleSubmit}
            className="flex shadow p-4 m-4 justify-between items-center"
          >
            <input
              id="name"
              name="name"
              type="text"
              onChange={handleChange}
              value={values.name}
              placeholder="Company Name"
              className="w-11/12 p-2 rounded border border-blue-400 focus:border-2"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded shadow text-black hover:bg-blue-800 hover:text-white"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
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
