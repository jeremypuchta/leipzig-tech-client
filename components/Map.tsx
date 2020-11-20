import { latLngBounds } from 'leaflet'
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import { Company } from '../models/Company.model'

const LocationMap = ({ companies }: { companies: Company[] }): JSX.Element => {
  const getMarker = (company: Company) => {
    if (company.latlng) {
      return (
        <Marker key={company.id} position={company.latlng}>
          <Popup>{company.name}</Popup>
        </Marker>
      )
    }
    return null
  }

  const bounds = latLngBounds([])
  companies.forEach((c) => {
    if (c.latlng) {
      bounds.extend(c.latlng)
    }
  })

  return (
    <MapContainer
      bounds={bounds}
      scrollWheelZoom={false}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {companies.map((company) => getMarker(company))}
    </MapContainer>
  )
}

export default LocationMap
