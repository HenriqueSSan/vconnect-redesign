<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import z, { ZodError } from 'zod'

const route = useRouter()

const signInSchema = z.object({
  email: z.email({ error: 'E-mail inválido' }).min(1, 'Campo obrigatório'),
  password: z.string({ error: 'Senha inválida' }).min(8, 'Senha inválida')
})

type Form = {
  data: { email: string; password: string }
  errors: { email?: string[]; password?: string[] }
}

type FormError = ZodError<z.infer<typeof signInSchema>>

const form = reactive<Form>({
  data: { email: '', password: '' },
  errors: { email: [], password: [] }
})

const validate = () => {
  try {
    const result = signInSchema.parse(form.data)
    return !!result
  } catch (err) {
    if (err instanceof ZodError) {
      form.errors = z.flattenError<z.infer<typeof signInSchema>>(err as FormError).fieldErrors
    }

    return false
  }
}

const signInSubmit = () => {
  form.errors = { email: [], password: [] }

  if (validate()) {
    route.push({ name: 'overview' })
  }
}
</script>

<template>
  <main class="h-screen flex items-center justify-center">
    <section
      class="lg:w-[21%] w-full lg:h-auto lg:rounded-lg p-6 text-black lg:border lg:border-gray-200"
    >
      <figure class="mb-3.5">
        <img
          class="bg-gray-800 p-1.5 pr-2 rounded-lg"
          src="/logo.extend.png"
          alt="Logotipo da VConnect"
        />
      </figure>

      <h1 class="font-bold text-3xl">Central de atendimento</h1>
      <p class="text-sm mb-4">Seja bem-vindo a central de atendimento.</p>

      <form class="space-y-2.5 mb-2" @submit.prevent="signInSubmit">
        <legend class="sr-only">
          Você está na página da central de atendimento da VConnect sua provedora de rede.
        </legend>

        <fieldset>
          <div class="space-y-1.5">
            <label class="block" for="email">E-mail</label>
            <input
              class="border border-gray-300 bg-white placeholder:text-black rounded-sm w-full h-10 px-4"
              id="email"
              name="email"
              type="text"
              v-model="form.data.email"
              placeholder="Digite seu e-mail"
            />
            <p class="text-red-500 text-sm" v-if="form.errors?.email?.[0]">
              {{ form.errors.email[0] }}
            </p>
          </div>
        </fieldset>

        <fieldset>
          <div class="space-y-1.5">
            <label class="block" for="password">Senha</label>
            <input
              class="border border-gray-300 bg-white placeholder:text-black rounded-sm w-full h-10 px-4"
              id="password"
              type="password"
              v-model="form.data.password"
              placeholder="Digite sua senha"
            />
            <p class="text-red-500 text-sm" v-if="form.errors?.password?.[0]">
              {{ form.errors.password[0] }}
            </p>
          </div>

          <a class="w-full inline-block text-end underline font-medium" href="/">
            Esqueceu sua senha?
          </a>
        </fieldset>

        <button class="bg-gray-800 text-white rounded-lg w-full py-3 px-4 font-bold" type="submit">
          Entrar
        </button>
      </form>

      <p class="text-center underline font-medium">
        <a href="/">Você não possui cadastro.</a>
      </p>
    </section>
  </main>
</template>
