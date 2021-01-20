import React from 'react'
import { useField, FieldProps } from 'formik'
import Select, { Option, ReactSelectProps } from 'react-select'

interface PropsType {
  [x: string]: any
  name: string
  placeholder: string
}

const SelectField: React.FC<ReactSelectProps & FieldProps> = ({
  ...props
}: PropsType) => {
  const [field, meta, helpers] = useField(props.name)
  const { className, options, placeholder, iid } = props
  const { setValue } = helpers

  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: 'none',
    }),
  }

  return (
    <Select
      className={className}
      isMulti
      options={props.options}
      name={field.name}
      onChange={(option: Option) =>
        setValue(option ? option.map((s) => s.value) : [])
      }
      instanceId={iid}
      placeholder={placeholder}
      styles={style}
    />
  )
}

export default SelectField
