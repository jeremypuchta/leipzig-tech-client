export interface CompanyStatistic {
  number: number
  numberBySector: { [sector: string]: number }
  numberByDistrict: { [district: string]: number }
  joinedSince7: number
  joinedSince30: number
}
