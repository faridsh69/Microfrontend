// @ts-nocheck
import { useCallback } from 'react'
import { Controller } from 'react-hook-form'
import moment from 'moment'
import { FormControl, FormHelperText } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

import { toBool, toFormalCase } from 'src/helpers/common'
import { SERVER_DATE_FORMAT } from 'src/configs/constants'

export const DateController = (props: { control: any; name: string; label: string }) => {
  const { control, name, label, ...rest } = props

  const inputLabel = label || toFormalCase(name)

  const changeToDatePickerFormat = useCallback(
    (value: string) => (value ? moment(value) : null),
    [],
  )

  const changeToServerDateFormat = useCallback((date, onChange) => {
    onChange(date?.format(SERVER_DATE_FORMAT) || null)
  }, [])

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <FormControl error={toBool(error)} sx={{ width: '300px', mb: 2 }}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                label={inputLabel}
                value={changeToDatePickerFormat(value)}
                onChange={date => changeToServerDateFormat(date, onChange)}
                {...rest}
              />
              {<FormHelperText>{toFormalCase(error?.message)}</FormHelperText>}
            </LocalizationProvider>
          </FormControl>
        )
      }}
    />
  )
}
