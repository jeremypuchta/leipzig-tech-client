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

  const sectorOptions = companies.map((c) => ({
    value: c.sector.toLowerCase(),
    label: c.sector,
  }))
  const districtOptions = [
    { value: 'mitte', label: 'Mitte' },
    { value: 'zentrum', label: 'Zentrum' },
    { value: 'zentrum-ost', label: 'Zentrum-Ost' },
    { value: 'zentrum-suedost', label: 'Zentrum-Südost' },
    { value: 'zentrum-sued', label: 'Zentrum-Süd' },
    { value: 'zentrum-nordwest', label: 'Zentrum-Nordwest' },
    { value: 'zentrum-west', label: 'Zentrum-West' },
    { value: 'zentrum-nord', label: 'Zentrum-Nord' },
    { value: 'schoenefeld-abtnaundorf', label: 'Schönefeld-Abtnaundorf' },
    { value: 'schoenefeld-ost', label: 'Schönefeld-Ost' },
    { value: 'mockau-sued', label: 'Mockau-Süd' },
    { value: 'mockau-nord', label: 'Mockau-Nord' },
    { value: 'thekla', label: 'Thekla' },
    { value: 'plaussig-portitz', label: 'Plaußig-Portitz' },
    { value: 'neustadt-neuschoenefeld', label: 'Neustadt-Neuschönefeld' },
    { value: 'volkmarsdorf', label: 'Volkmarsdorf' },
    { value: 'anger-crottendorf', label: 'Anger-Crottendorf' },
    { value: 'sellerhausen-stuenz', label: 'Sellerhausen-Stünz' },
    { value: 'paunsdorf', label: 'Paunsdorf' },
    { value: 'heiterblick', label: 'Heiterblick' },
    { value: 'moelkau', label: 'Mölkau' },
    { value: 'engelsdorf', label: 'Engelsdorf' },
    { value: 'baalsdorf', label: 'Baalsdorf' },
    { value: 'althen-Kleinpoesna', label: 'Althen-Kleinpösna' },
    { value: 'suedost', label: 'Südost' },
    { value: 'reudnitz-thonberg', label: 'Reudnitz-Thonberg' },
    { value: 'stoetteritz', label: 'Stötteritz' },
    { value: 'probstheida', label: 'Probstheida' },
    { value: 'meusdorf', label: 'Meusdorf' },
    { value: 'liebertwolkwitz', label: 'Liebertwolkwitz' },
    { value: 'holzhausen', label: 'Holzhausen' },
    { value: 'suedvorstadt', label: 'Südvorstadt' },
    { value: 'connewitz', label: 'Connewitz' },
    { value: 'marienbrunn', label: 'Marienbrunn' },
    { value: 'loessnig', label: 'Lößnig' },
    { value: 'doelitz-doesen', label: 'Dölitz-Dösen' },
    { value: 'schleussig', label: 'Schleußig' },
    { value: 'plagwitz', label: 'Plagwitz' },
    { value: 'kleinzschocher', label: 'Kleinzschocher' },
    { value: 'grosszschocher', label: 'Großzschocher' },
    { value: 'knautkleeberg-knauthain', label: 'Knautkleeberg-Knauthain' },
    {
      value: 'hartmannsdorf-knautnaundorf',
      label: 'Hartmannsdorf-Knautnaundorf',
    },
    { value: 'west-schoenau', label: 'West-Schönau' },
    { value: 'gruenau-ost', label: 'Grünau-Ost' },
    { value: 'gruenau-mitte', label: 'Grünau-Mitte' },
    { value: 'gruenau-siedlung', label: 'Grünau-Siedlung' },
    { value: 'lausen-gruenau', label: 'Lausen-Grünau' },
    { value: 'gruenau-nord', label: 'Grünau-Nord' },
    { value: 'miltitz', label: 'Miltitz' },
    { value: 'alt-west', label: 'Alt-West' },
    { value: 'lindenau', label: 'Lindenau' },
    { value: 'altlindenau', label: 'Altlindenau' },
    { value: 'neulindenau', label: 'Neulindenau' },
    { value: 'leutzsch', label: 'Leutzsch' },
    { value: 'boehlitz-ehrenberg', label: 'Böhlitz-Ehrenberg' },
    { value: 'burghausen-rueckmarsdorf', label: 'Burghausen-Rückmarsdorf' },
    { value: 'nordwest', label: 'Nordwest' },
    { value: 'moeckern', label: 'Möckern' },
    { value: 'wahren', label: 'Wahren' },
    { value: 'luetzschena-stahmeln', label: 'Lützschena-Stahmeln' },
    { value: 'lindenthal', label: 'Lindenthal' },
    { value: 'gohlis-sued', label: 'Gohlis-Süd' },
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
        initialValues={{ name: '', sectors: [], districts: [], case: false }}
        onSubmit={async (values) => {
          const res = await axios.get(`${process.env.BASE_API_URL}/companies`, {
            params: {
              name: values.name ? values.name : undefined,
              sectors:
                values.sectors.length > 0 ? `${values.sectors}` : undefined,
              districts:
                values.districts.length > 0 ? `${values.districts}` : undefined,
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
            <div className="w-11/12 p-2 rounded border border-blue-400">
              <input
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
              name="sectors"
              options={sectorOptions}
              iid="sector-select"
              isMulti
              placeholder="Search for sectors..."
            />
            <SelectField
              className="w-full mr-2 rounded border border-blue-400"
              name="districts"
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
