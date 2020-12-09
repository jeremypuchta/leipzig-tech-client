import React from 'react'
import MarkerClusterGroup from 'react-leaflet-markercluster'

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
    // @ts-ignore
    <MarkerClusterGroup
      spiderfyDistanceMultiplier={1}
      showCoverageOnHover={false}
    >
      {companies.map((item) => (
        <CompanyMarker
          key={item.id}
          company={item}
          openPopup={selectedId === item.id}
        />
      ))}
    </MarkerClusterGroup>
  )
}

export default PointsLayer
