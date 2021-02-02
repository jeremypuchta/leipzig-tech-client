import axios from 'axios'
import { Formik } from 'formik'
import { useKeycloak } from '@react-keycloak/ssr'
import React, { useState } from 'react'

const NewCompanyPage = (): JSX.Element => {
  const { keycloak, initialized } = useKeycloak()
  return (
    <div>
      <Formik
        initialValues={{
          ref: 'test',
          name: '',
          sector: '',
          address: '',
          plz: '',
          city: '',
          phonenumber: '',
          website: '',
          email: '',
          source: 'self'
        }}
        onSubmit={async (values) => {
          const headers = {
            'Authorization' : keycloak.token
          }
          const res = await axios.post(
            `${process.env.BASE_API_URL}/auth/companies`,
            values, {headers}
          )
        }}
      >
        {({ values, handleSubmit, handleChange, setFieldValue }) => (
          <form onSubmit={handleSubmit} className="flex flex-col p-4 m-4">
            <div className="w-2/3 mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 bg-green-200 rounded-full flex flex-shrink-0 justify-center items-center text-green-500 text-2xl font-mono">
                  +
                </div>
                <div className="block pl-2 font-semibold text-xl self-center text-gray-700">
                  <h2 className="leading-relaxed">Register your company</h2>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    <label className="leading-loose">Company Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      onChange={handleChange}
                      value={values.name}
                      placeholder="Company Name"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Sector</label>
                    <input
                      id="sector"
                      name="sector"
                      type="text"
                      onChange={handleChange}
                      value={values.sector}
                      placeholder="Sector"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Address</label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      onChange={handleChange}
                      value={values.address}
                      placeholder="Address"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Postcode</label>
                    <input
                      id="plz"
                      name="plz"
                      type="text"
                      onChange={handleChange}
                      value={values.plz}
                      placeholder="Postcode"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">City</label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      onChange={handleChange}
                      value={values.city}
                      placeholder="City"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Phonenumber</label>
                    <input
                      id="phonenumber"
                      name="phonenumber"
                      type="text"
                      onChange={handleChange}
                      value={values.phonenumber}
                      placeholder="Phonenumber"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      onChange={handleChange}
                      value={values.website}
                      placeholder="Website"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">E-Mail</label>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      onChange={handleChange}
                      value={values.email}
                      placeholder="E-Mail"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    />
                  </div>
                </div>
                <div className="pt-4 flex items-center space-x-4">
                  <button
                    type="submit"
                    className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default NewCompanyPage
