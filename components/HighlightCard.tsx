import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Company } from '../models/Company.model'

export default function HighlightCard({
  company,
}: {
  company: Company
}): JSX.Element {
  return (
    <Link href="/">
      <a>
        <div className="flex p-4 my-4 shadow-md rounded-md transform hover:scale-105 duration-300">
          <div className="flex items-center">
            <Image
              src={`${company.logo}`}
              alt="company logo"
              width={48}
              height={48}
            />
          </div>
          <div className="ml-4">
            <p className="text-lg text-gray-900 font-semibold leading-tight">
              {company.name}
            </p>
            <p className="text-gray-500 text-sm">{company.address}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}
