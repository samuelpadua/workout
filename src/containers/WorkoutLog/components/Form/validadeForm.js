const validateTime = (value) => {
  const regexp = /([0-1][0-9]|2[0-4])\:[0-5][0-9]/

  return regexp.test(value)
}

export default function validate(values) {
  const errors = {
    error: false,
    fields: {},
  }

  if (!values.timeSpent) {
    errors.fields.timeSpent = 'Coloque o tempo'
  } else if (!validateTime(values.timeSpent)) {
    errors.fields.timeSpent = 'Formato de tempo incorreto'
  }

  if (!values.type) {
    errors.fields.type = 'Selecione um tipo'
  }

  if (!values.date) {
    errors.fields.date = 'Coloque uma data'
  }

  errors.error = (
    !!errors.fields.timeSpent
    || !!errors.fields.type
    || !!errors.fields.date
  )

  return errors
}
