'use client'
import { userSchema } from './signupSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProps, useForm } from 'react-hook-form'
import Input from '@/components/Input/Input'
import Button from '@/components/Button/Button'

type FormData = {
  username: string,
  email: string,
  password: string
}

const Form = () => {
  const { 
   register, 
   handleSubmit, 
   formState: { errors } } 
   = useForm<FormData>({
    mode: 'all',
    resolver: zodResolver(userSchema)
  })

  const handleSignUp = (data: FormData) => {
   try {
    const result = userSchema.parse(data)
    console.log(result)
   }catch (err) {
    console.log(err)
  }

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <Input 
       placeholder='Username' 
       {...register("username")}
       error={!!errors.username?.message} 
      />

      <Input 
      placeholder='E-mail' 
      {...register("email")} 
      error={!!errors.email?.message}/>
     
      <Input 
       placeholder='Senha' 
       {...register("password")} 
       error={!!errors.password?.message}
      />

      <Button 
       name='btn' 
       value='Cadastrar'
      />
    </form>
  )
}
}

export default Form