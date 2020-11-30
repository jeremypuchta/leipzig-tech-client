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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markerRef = useRef<any>(null)
  useEffect(() => {
    if (markerRef && markerRef.current && openPopup) {
      markerRef.current.openPopup()
    }
  }, [openPopup])
  return (
    <Marker ref={markerRef} key={company.id} position={company.latlng}>
      <Popup>{company.name}</Popup>
    </Marker>
  )
}

export default CompanyMarker
