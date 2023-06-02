'use client'
import PropTypes from 'prop-types'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './SchemaLogin'
import styles from './page.module.css'

export default function Login({ searchParams }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async data => {
    try {
      await signIn('credentials', {
        redirect: true,
        email: data.email,
        password: data.password,
        callbackUrl: searchParams.callbackUrl ? searchParams.callbackUrl : '/',
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className={styles.section}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>Sign in</h1>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" {...register('email')} />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register('password')}
          />
          {errors.password && (
            <span className={styles.error}>{errors.password.message}</span>
          )}
        </div>

        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>

      <div>
        <h5>Try</h5>
        <p>Email: eve.holt@reqres.in</p>
        <p>Pass cityslicka</p>
      </div>
    </section>
  )
}

Login.propTypes = {
  searchParams: PropTypes.object,
}
