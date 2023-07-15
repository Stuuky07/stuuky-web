'use client'

import Link from 'next/link'
import Image from 'next/image'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import './Form.scss'
import { signUpUserFormSchema } from '../utils/signupSchema'
import Input from '@/components/Input/Input'
import Button from '@/components/Button/Button'
import linkArrowImage from '@/assets/icons/small-arrow.svg'

type FormData = {
  username: string,
  email: string,
  password: string
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    mode: 'all',
    resolver: zodResolver(signUpUserFormSchema)
  })

  const handleSignUp = (data: FormData) => {
    try {
      const result = signUpUserFormSchema.parse(data)
      console.log(result)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <div className='input-container'>
        <Input
          placeholder='Username'
          {...register("username")}
          error={!!errors.username?.message}
        />

        <Input
          placeholder='E-mail'
          {...register("email")}
          error={!!errors.email?.message} />

        <Input
          placeholder='Senha'
          {...register("password")}
          error={!!errors.password?.message}
        />
      </div>

      <span className='burocratic-info'>Ao criar uma conta, você concorda com a <span>Política de Privacidade</span> e
        com os <span>Termos de Uso</span> da Stuuky.</span>

      <div className='submit-div'>
        <Button name='submit' value='Próximo' />
      </div>
      <h6 className='login-link'>Já é usuário?
        <Link href="/login">Fazer Login
          <Image src={linkArrowImage} width={12} height={7} alt='Login Arrow' />
        </Link>
      </h6>
    </form>
  )
}

export default Form;