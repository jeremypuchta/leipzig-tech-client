import React, { useEffect, useRef } from 'react'
import { Marker, Popup } from 'react-leaflet'

import { Company } from '../models/Company.model'

const CompanyMarker = ({
  company,
  openPopup,
}: {
  company: Company
  openPopup: boolean
}): JSX.Element => {
  const markerRef = useRef<any>(null)
  useEffect(() => {
    if (markerRef && markerRef.current && openPopup) {
      markerRef.current.openPopup()
    }
  }, [openPopup])

  // possibility to customize the icon
  // const icon = L.divIcon({
  //   className: 'company-icon',
  //   html: `<div style="height: 20px; width: 100px; background-color: red; text-align: center; transform: translateX(-50%)">${company.name}</div>`,
  // })

  return (
    <Marker
      ref={markerRef}
      key={company.id}
      position={[company.latitude, company.longitude]}
    >
      <Popup>{company.name}</Popup>
    </Marker>
  )
}

export default CompanyMarker
