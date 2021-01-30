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
        scrollWheelZoom
        style={{ width: '100%', height: '100%', zIndex: 0 }}
      >
        <TileLayer
          url={`https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=${process.env.JAWG_TOKEN}`}
          attribution='<a href="https://www.jawg.io" target="_blank">&copy; Jawg</a> - <a href="https://www.openstreetmap.org" target="_blank">&copy; OpenStreetMap</a>&nbsp;contributors'
        />
        <PointsLayer selectedId={selected} companies={companies} />
      </MapContainer>
    </div>
  )
}

export default LocationMap
