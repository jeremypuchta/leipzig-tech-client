import { LatLngExpression } from 'leaflet'

export interface Company {
  id: string
  name: string
  department: string
  logo?: string
  description?: string
  address?: string
  latlng: LatLngExpression
}
