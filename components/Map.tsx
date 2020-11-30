import { latLngBounds } from 'leaflet'
import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

import { Company } from '../models/Company.model'
import PointsLayer from './PointsLayer'

const LocationMap = ({
  companies,
  selected,
}: {
  companies: Company[]
  selected: string
}): JSX.Element => {
  const bounds = latLngBounds([])
  companies.forEach((c) => {
    if (c.latlng) {
      bounds.extend(c.latlng)
    }
  })

  return (
    <div>
      <MapContainer
        bounds={bounds}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '500px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <PointsLayer selectedId={selected} companies={companies} />
      </MapContainer>
    </div>
  )
}

export default LocationMap
