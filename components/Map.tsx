import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

import { Company } from '../models/Company.model'
import PointsLayer from './PointsLayer'

const LocationMap = ({
  companies,
  selected,
}: {
  companies: Company[]
  selected: number
}): JSX.Element => {
  return (
    <div className="h-full">
      <MapContainer
        center={[51.343479, 12.387772]}
        zoom={12}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '100%', zIndex: 0 }}
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
