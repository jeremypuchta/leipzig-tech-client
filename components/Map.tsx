import React from 'react'
import { GeoJSON, MapContainer, TileLayer } from 'react-leaflet'

import { Company } from '../models/Company.model'
import jsonData from '../public/ot.json'
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
          url="https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=kx4t8g88j04e7aXL6BZnYkAQW193L09J15EYmCEUxEJ0NM2EhQcvYcuyFR4LqAyC"
          attribution='<a href="https://www.jawg.io" target="_blank">&copy; Jawg</a> - <a href="https://www.openstreetmap.org" target="_blank">&copy; OpenStreetMap</a>&nbsp;contributors'
        />
        <PointsLayer selectedId={selected} companies={companies} />
        <GeoJSON
          key={+new Date()}
          data={jsonData as any}
          style={{
            fillColor: 'blue',
            weight: 2,
            opacity: 1,
            color: 'yellow',
            fillOpacity: 0.25,
          }}
          eventHandlers={{
            click: (e) => {},
          }}
        />
      </MapContainer>
    </div>
  )
}

export default LocationMap
