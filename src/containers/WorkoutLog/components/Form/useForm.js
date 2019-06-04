import { useState, useEffect } from 'react'

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
    setValues(_values => ({ ..._values, [event.target.name]: event.target.value }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
}

export default useForm
