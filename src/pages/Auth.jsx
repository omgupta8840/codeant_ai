import React from 'react'
import AuthPlaceholder from '../components/AuthPlaceholder'
import AuthForm from '../components/AuthForm'

export default function Auth() {
  return (
    <section className="flex justify-center items-center">
      <AuthPlaceholder />
      <AuthForm />
    </section>
  )
}
