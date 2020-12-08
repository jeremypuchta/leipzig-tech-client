import React from 'react'

import { Company } from '../models/Company.model'
import CompanyMarker from './CompanyMarker'

const PointsLayer = ({
  companies,
  selectedId,
}: {
  companies: Company[]
  selectedId: number
}): JSX.Element => {
  return (
    <>
      {companies.map((item) => (
        <CompanyMarker
          key={item.id}
          company={item}
          openPopup={selectedId === item.id}
        />
      ))}
    </>
  )
}

export default PointsLayer
