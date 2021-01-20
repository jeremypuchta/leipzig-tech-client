import { useField, FieldProps } from 'formik'
import Select, { Option, ReactSelectProps } from 'react-select'

interface PropsType {
  [x: string]: any

  name: string
}

const SelectField: React.FC<ReactSelectProps & FieldProps> = ({
  ...props
}: PropsType) => {
  const [field, meta, helpers] = useField(props.name)

  const { options } = props
  const { touched, error, value } = meta
  const { setValue } = helpers

  return (
    <Select
      isMulti
      options={props.options}
      name={field.name}
      onChange={(option: Option) =>
        setValue(option ? option.map((s) => s.value) : [])
      }
      instanceId={props.iid}
    />
  )
}

export default SelectField
