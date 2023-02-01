import { Input } from 'react-daisyui'
import { useForm } from 'react-hook-form'
import { useCallback } from 'react'
import TextField from '../src/components/TextField'

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onValid = useCallback((data: unknown) => {
    console.log('asdf', data)
  }, [])

  return (
    <form
      style={{
        display: 'flex',
        flexFlow: 'column',
        gap: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
      onSubmit={handleSubmit(onValid)}
    >
      <h2>Sign up form</h2>

      <TextField
        id="email"
        label="email"
        type="text"
        inputProps={{ ...register('email', { required: 'email is required' }) }}
        error={errors.email?.message as string}
      />

      <TextField
        id="email"
        label="password"
        type="password"
        inputProps={{
          ...register('password', { required: 'password is required' }),
        }}
        error={errors.password?.message as string}
      />

      <TextField
        id="confirm password"
        label="confirm password"
        type="password"
        inputProps={{
          ...register('confirmPassword', {
            required: 'confirm password is required',
          }),
        }}
        error={errors.confirmPassword?.message as string}
      />

      <button>submit</button>
    </form>
  )
}
