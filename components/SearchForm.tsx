import React, { SyntheticEvent, useState } from 'react'
import { useFormik } from 'formik'

export default function SearchForm(setFilteredCompanies: any): JSX.Element {
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex shadow p-4 m-4 justify-between items-center"
    >
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        placeholder="Company Name"
        className="w-11/12 p-2 rounded border border-blue-400 focus:border-2"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded shadow text-black hover:bg-blue-800 hover:text-white"
      >
        Submit
      </button>
    </form>
  )
}
