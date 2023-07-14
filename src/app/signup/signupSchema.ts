import { z } from 'zod'

export const userSchema = z.object({

 username: z.string()
 .nonempty('Digite o username')
 .min(3, 'Username deve ter no mínimo 3 dígitos')
 .max(10, 'Username deve ter até 10 dígitos'),

 email: z.string()
 .nonempty('Digite o email')
 .email('Digite um email válido'),

 password: z.string()
 .nonempty('Digite a senha')
 .min(6, 'Senha deve ter no mínimo 6 dígitos')
 .max(12, 'Senha deve ter até 10 dígitos')

})

type schemaType = z.infer<typeof userSchema>