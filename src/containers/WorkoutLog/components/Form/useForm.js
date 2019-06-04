import { useState, useEffect } from 'react'

const maskTimeSpent = value => (
  value
    .toString()
    .replace(/\D/g, '')
    .replace(/\D:/g, '')
    .replace(/^(\d{2})(\d)/g, '$1:$2')
)

const useForm = (callback, validate) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({ error: false, fields: {} })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (Object.keys(errors.fields).length === 0 && isSubmitting) {
      callback()
      setIsSubmitting(false)
      setValues({})
      setErrors({ error: false, fields: {} })
    }
  }, [errors])

  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  const handleChange = (event) => {
    event.persist()
    let { value } = event.target

    if (event.target.name === 'timeSpent') {
      value = maskTimeSpent(value)
    }

    setValues(_values => ({ ..._values, [event.target.name]: value }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
}

export default useForm
