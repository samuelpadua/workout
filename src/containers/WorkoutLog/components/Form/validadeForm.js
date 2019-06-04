export default function validate(values) {
  const errors = {
    error: false,
    fields: {},
  }
  if (!values.timeSpent) {
    errors.fields.timeSpent = 'Coloque o tempo'
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
