import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from '@rebass/grid'
import Input from '../../../../components/Input'
import Select from '../../../../components/Select'
import Button from '../../../../components/Button'
import useForm from './useForm'
import validate from './validadeForm'


function Form(props) {
  const {
    add,
  } = props

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(handleAddWorkout, validate)

  function handleAddWorkout() {
    add(values)
  }

  const selectOptions = [
    {
      value: 'run',
      text: 'Corrida',
    },
    {
      value: 'swimming',
      text: 'Natação',
    },
    {
      value: 'bike',
      text: 'Bicicleta',
    },
  ]

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Flex pb={20}>
        <Box width={[1]} px={2}>
          <Input
            name="timeSpent"
            label="Tempo"
            value={values.timeSpent || ''}
            error={!!errors.fields.timeSpent}
            errorMessage={errors.fields.timeSpent}
            type="text"
            maxLength="5"
            onChange={handleChange}
          />
        </Box>
        <Box width={[1]} px={2}>
          <Select
            name="type"
            label="Tipo"
            value={values.type || ''}
            error={!!errors.fields.type}
            errorMessage={errors.fields.type}
            options={selectOptions}
            onChange={handleChange}
          />
        </Box>
        <Box width={[1]} px={2}>
          <Input
            name="date"
            label="Data"
            value={values.date || ''}
            error={!!errors.fields.date}
            errorMessage={errors.fields.date}
            type="date"
            onChange={handleChange}
          />
        </Box>
        <Flex width={[1]} px={2} alignItems={errors.error ? 'center' : 'flex-end'}>
          <Button
            full
            type="submit"
          >
            Adicionar
          </Button>
        </Flex>
      </Flex>
    </form>
  )
}

Form.propTypes = {
  add: PropTypes.func.isRequired,
}

export default Form
