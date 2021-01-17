import axios from 'axios'
import faker from 'faker/locale/de'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import React from 'react'

import HighlightCard from '../components/HighlightCard'
import { Company } from '../models/Company.model'

const Index = ({ companies }: { companies: Company[] }): JSX.Element => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Find your place in the tech community of Leipzig.
        </h2>
        <p className="mt-3 text-lg text-gray-500">
          A central register of tech companies in Leipzig and the Leipzig area.
        </p>
        <div className="mt-5 mb-12 max-w-md mx-auto">
          <Link href="/companies">
            <a>
              <div className="rounded shadow bg-blue-800 text-white py-3 font-semibold">
                Look for companies
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="my-3 text-2xl font-bold text-center">
          Let&apos;s welcome our newest platform members!
        </h3>
        <section className="mt-4">
          {companies.map((company) => (
            <HighlightCard key={company.id} company={company} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Index

export const getServerSideProps: GetServerSideProps<{
  companies: Company[]
}> = async () => {
  const res = await axios.get(`${process.env.BASE_API_URL}/companies`)

  const companies = (await res.data).slice(0, 5).map((c: Company) => {
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
