import L from 'leaflet'
import React, { useEffect, useRef } from 'react'
import { useLeaflet } from 'react-leaflet'
import shp from 'shpjs'

const ShapeMap = (): JSX.Element => {
  const { map } = useLeaflet()

  useEffect(() => {
    const geo = L.geoJSON(
      { type: undefined },
      {
        onEachFeature: function popUp(f, l) {
          var out = []
          if (f.properties) {
            for (var key in f.properties) {
              out.push(key + ': ' + f.properties[key])
            }
            l.bindPopup(out.join('<br />'))
          }
        },
      }
    ).addTo(map)

    shp(
      'https://www.leipzig.de/fileadmin/mediendatenbank/leipzig-de/Stadt/02.1_Dez1_Allgemeine_Verwaltung/12_Statistik_und_Wahlen/Geodaten/Leipzig_Ortsteile_UTM33N.zip'
    ).then(function (data) {
      geo.addData(data)
    })
  }, [])

  return null
}

export default ShapeMap
