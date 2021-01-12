import React, { useEffect, useRef } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'

import { Company } from '../models/Company.model'

const CompanyMarker = ({
  company,
  openPopup,
}: {
  company: Company
  openPopup: boolean
}): JSX.Element => {
  const mapRef = useMap()
  const markerRef = useRef<any>(null)
  useEffect(() => {
    if (markerRef && markerRef.current && openPopup) {
      mapRef.setView([company.latitude, company.longitude], 25)
      markerRef.current.openPopup()
    }
  }, [openPopup])

  const getPopupContent = () => {
    return (
      <>
        {company.name ? (
          <div className="flex items-center w-full mb-2">
            <div className="w-full font-bold">{company.name}</div>
          </div>
        ) : (
          <></>
        )}
        {company.address ? (
          <div className="flex items-center w-full mb-2">
            <img className="w-5 mr-2" src="icons/home.svg" alt="" />
            <a
              href={`https://maps.google.com/?q=${company.latitude},${company.longitude}`}
              target="_blank"
              rel="noreferrer"
            >
              {company.plz} {company.city}, {company.address}
            </a>
          </div>
        ) : (
          <></>
        )}
        {company.phonenumber ? (
          <div className="flex items-center w-full mb-2">
            <img className="w-5 mr-2" src="icons/smartphone-6.svg" alt="" />
            <div>{company.phonenumber}</div>
          </div>
        ) : (
          <></>
        )}
        {company.email ? (
          <div className="flex items-center w-full mb-2">
            <img className="w-5 mr-2" src="icons/home.svg" alt="" />
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </div>
        ) : (
          <></>
        )}
        {company.sector ? (
          <div className="flex items-center w-full mb-2">
            <img className="w-5 mr-2" src="icons/notebook-5.svg" alt="" />
            <div>{company.sector}</div>
          </div>
        ) : (
          <></>
        )}
        {company.website ? (
          <div className="flex items-center w-full mb-2">
            <img className="w-5 mr-2" src="icons/internet.svg" alt="" />
            <a href={company.website} target="_blank" rel="noreferrer">
              {company.website}
            </a>
          </div>
        ) : (
          <></>
        )}
      </>
    )
  }

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
      <Popup>{getPopupContent()}</Popup>
    </Marker>
  )
}

export default CompanyMarker
