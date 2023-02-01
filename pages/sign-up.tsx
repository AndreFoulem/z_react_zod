import { Input } from 'react-daisyui'
import { useForm } from 'react-hook-form'
import { useCallback } from 'react'

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onValid = useCallback(() => {
    console.log('asdf')
  }, [second])

  return (
    <div
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
      <div className="form-control w-full max-w-xs">
        <label htmlFor={'email'} className="lablel">
          <span className="label-text">email</span>
        </label>

        <Input color={'ghost'} id={'email'} type={'text'} />
        <span className="label-text text-error">Error</span>
      </div>
    </div>
  )
}
