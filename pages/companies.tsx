import axios from 'axios'
import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'

import * as faker from 'faker'
import { Formik, Field } from 'formik'

import CompanyCardList from '../components/CompanyCardList'
import { Company } from '../models/Company.model'
import SelectField from '../components/SelectField'
import CaseSensitiveSwitch from '../components/CaseSensitiveSwitch'

const LocationMap = dynamic(() => import('../components/Map'), {
  ssr: false,
})

const CompaniesPage = ({
  companies,
}: {
  companies: Company[]
}): JSX.Element => {
  const [companyList, setCompanyList] = useState<Company[]>(companies)
  const [selected, setSelected] = useState<number>(0)

  const sectorOptions = companies
    .map((c) => c.sector)
    .filter((v, i, a) => a.findIndex((t) => t === v) === i)
    .sort()
    .map((c) => ({
      value: c.toLowerCase(),
      label: c,
    }))
  const districtOptions = [
    { value: 'mitte', label: 'Mitte' },
    { value: 'zentrum', label: 'Zentrum' },
    { value: 'zentrum-ost', label: 'Zentrum-Ost' },
    { value: 'zentrum-südost', label: 'Zentrum-Südost' },
    { value: 'zentrum-süd', label: 'Zentrum-Süd' },
    { value: 'zentrum-nordwest', label: 'Zentrum-Nordwest' },
    { value: 'zentrum-west', label: 'Zentrum-West' },
    { value: 'zentrum-nord', label: 'Zentrum-Nord' },
    { value: 'schönefeld-abtnaundorf', label: 'Schönefeld-Abtnaundorf' },
    { value: 'schönefeld-ost', label: 'Schönefeld-Ost' },
    { value: 'mockau-süd', label: 'Mockau-Süd' },
    { value: 'mockau-nord', label: 'Mockau-Nord' },
    { value: 'thekla', label: 'Thekla' },
    { value: 'plaußig-portitz', label: 'Plaußig-Portitz' },
    { value: 'neustadt-neuschönefeld', label: 'Neustadt-Neuschönefeld' },
    { value: 'volkmarsdorf', label: 'Volkmarsdorf' },
    { value: 'anger-crottendorf', label: 'Anger-Crottendorf' },
    { value: 'sellerhausen-stünz', label: 'Sellerhausen-Stünz' },
    { value: 'paunsdorf', label: 'Paunsdorf' },
    { value: 'heiterblick', label: 'Heiterblick' },
    { value: 'mölkau', label: 'Mölkau' },
    { value: 'engelsdorf', label: 'Engelsdorf' },
    { value: 'baalsdorf', label: 'Baalsdorf' },
    { value: 'althen-Kleinpösna', label: 'Althen-Kleinpösna' },
    { value: 'südost', label: 'Südost' },
    { value: 'reudnitz-thonberg', label: 'Reudnitz-Thonberg' },
    { value: 'stötteritz', label: 'Stötteritz' },
    { value: 'probstheida', label: 'Probstheida' },
    { value: 'meusdorf', label: 'Meusdorf' },
    { value: 'liebertwolkwitz', label: 'Liebertwolkwitz' },
    { value: 'holzhausen', label: 'Holzhausen' },
    { value: 'südvorstadt', label: 'Südvorstadt' },
    { value: 'connewitz', label: 'Connewitz' },
    { value: 'marienbrunn', label: 'Marienbrunn' },
    { value: 'lößnig', label: 'Lößnig' },
    { value: 'dölitz-dösen', label: 'Dölitz-Dösen' },
    { value: 'schleußig', label: 'Schleußig' },
    { value: 'plagwitz', label: 'Plagwitz' },
    { value: 'kleinzschocher', label: 'Kleinzschocher' },
    { value: 'großzschocher', label: 'Großzschocher' },
    { value: 'knautkleeberg-knauthain', label: 'Knautkleeberg-Knauthain' },
    {
      value: 'hartmannsdorf-knautnaundorf',
      label: 'Hartmannsdorf-Knautnaundorf',
    },
    { value: 'west-schönau', label: 'West-Schönau' },
    { value: 'grünau-ost', label: 'Grünau-Ost' },
    { value: 'grünau-mitte', label: 'Grünau-Mitte' },
    { value: 'grünau-siedlung', label: 'Grünau-Siedlung' },
    { value: 'lausen-grünau', label: 'Lausen-Grünau' },
    { value: 'grünau-nord', label: 'Grünau-Nord' },
    { value: 'miltitz', label: 'Miltitz' },
    { value: 'alt-west', label: 'Alt-West' },
    { value: 'lindenau', label: 'Lindenau' },
    { value: 'altlindenau', label: 'Altlindenau' },
    { value: 'neulindenau', label: 'Neulindenau' },
    { value: 'leutzsch', label: 'Leutzsch' },
    { value: 'böhlitz-ehrenberg', label: 'Böhlitz-Ehrenberg' },
    { value: 'burghausen-rückmarsdorf', label: 'Burghausen-Rückmarsdorf' },
    { value: 'nordwest', label: 'Nordwest' },
    { value: 'möckern', label: 'Möckern' },
    { value: 'wahren', label: 'Wahren' },
    { value: 'lützschena-stahmeln', label: 'Lützschena-Stahmeln' },
    { value: 'lindenthal', label: 'Lindenthal' },
    { value: 'gohlis-süd', label: 'Gohlis-Süd' },
    { value: 'gohlis-mitte', label: 'Gohlis-Mitte' },
    { value: 'gohlis-nord', label: 'Gohlis-Nord' },
    { value: 'eutritzsch', label: 'Eutritzsch' },
    { value: 'seehausen', label: 'Seehausen' },
    { value: 'wiederitzsch', label: 'Wiederitzsch' },
  ]

  const handleItemClick = (id: number) => {
    setSelected(id)
  }

  return (
    <div>
      <Formik
        initialValues={{ name: '', sector: [], district: [], case: false }}
        onSubmit={async (values) => {
          const res = await axios.get(`${process.env.BASE_API_URL}/companies`, {
            params: {
              name: values.name ? values.name : undefined,
              sector: values.sector.length > 0 ? `${values.sector}` : undefined,
              district:
                values.district.length > 0 ? `${values.district}` : undefined,
              case: values.case ? `${values.case}` : undefined,
            },
          })
          setCompanyList(
            res.data.map((c: Company) => {
              return {
                ...c,
                logo: `${faker.image.business(48, 48)}`,
              }
            })
          )
        }}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form
            onSubmit={handleSubmit}
            className="flex shadow p-4 m-4 justify-between items-center"
          >
            <div className="w-11/12 p-2 rounded border border-blue-400 flex">
              <input
                className="flex-1 mr-2"
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={values.name}
                placeholder="Company Name"
              />
              <Field
                onChange={handleChange}
                component={CaseSensitiveSwitch}
                name="case"
              />
            </div>
            <SelectField
              className="w-full mx-2 rounded border border-blue-400"
              name="sector"
              options={sectorOptions}
              iid="sector-select"
              isMulti
              placeholder="Search for sectors..."
            />
            <SelectField
              className="w-full mr-2 rounded border border-blue-400"
              name="district"
              options={districtOptions}
              iid="district-select"
              isMulti
              placeholder="Search for districts..."
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
            companies={companyList}
            onItemClick={handleItemClick}
          />
        </div>
        <div className="w-full h-full px-4 custom-scroll">
          <LocationMap companies={companyList} selected={selected} />
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
