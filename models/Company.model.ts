export interface Company {
  id: number
  ref: string
  source: string
  name: string
  sector: string
  address: string
  plz: string
  city: string
  phonenumber: string
  website: string
  email: string
  create_at: Date
  updated_at: Date
  logo?: string
  latitude: number
  longitude: number
}
