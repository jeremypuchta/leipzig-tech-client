import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import faker from 'faker/locale/de'
import HighlightCard from '../components/HighlightCard'

import { Company } from '../models/Company.model'

export default function Index(): JSX.Element {
  const [companies, setCompanies] = useState<Company[]>([])

  useEffect(() => {
    setCompanies(
      Array.from({ length: 5 }, (_, i) => ({
        id: `${i}`,
        name: `${faker.company.companyName()} ${faker.company.companySuffix()}`,
        department: `${faker.commerce.department()}`,
        logo: `${faker.image.business(48, 48)}`,
        address: `${faker.address.streetAddress(true)}`,
        latlng: { lat: 0, lng: 0 },
      }))
    )
  }, [])

  return (
    <div>
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
