<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="flex items-center justify-center h-screen px-4.5">
    <div class="flex items-center flex-col">
      <h1 class="font-bold text-5xl mb-4">Central de atendimento</h1>
      <p class="mb-6 text-2xl text-gray-400">Seja bem-vindo a central de atendimento.</p>

      <nav>
        <ul class="flex justify-center flex-wrap gap-4">
          <li class="w-[48%] lg:w-1/4">
            <RouterLink
              class="bg-gray-100 border-gray-200 rounded-lg flex items-center justify-center flex-col text-gray-700 min-h-[128px] p-4 text-center gap-2 hover:bg-green-600 hover:text-white transition-all hover:scale-105"
              to="/account"
            >
              <i class="fi fi-sr-user text-2xl leading-0" aria-hidden="true"></i>
              <span class="text-sm">Meus Dados</span>
            </RouterLink>
          </li>
          <li class="w-[48%] lg:w-1/4">
            <RouterLink
              class="bg-gray-100 border-gray-200 rounded-lg flex items-center justify-center flex-col text-gray-700 min-h-[128px] p-4 text-center gap-2 hover:bg-green-600 hover:text-white transition-all hover:scale-105"
              to="/account/documents"
            >
              <i class="fi fi-sr-memo-circle-check text-2xl leading-0" aria-hidden="true"></i>
              <span class="text-sm">Documentos</span>
            </RouterLink>
          </li>
          <li class="w-[48%] lg:w-1/4">
            <RouterLink
              class="bg-gray-100 border-gray-200 rounded-lg flex items-center justify-center flex-col text-gray-700 min-h-[128px] p-4 text-center gap-2 hover:bg-green-600 hover:text-white transition-all hover:scale-105"
              to="/services"
            >
              <i class="fi fi-sr-box-circle-check text-2xl leading-0" aria-hidden="true"></i>
              <span class="text-sm">Serviços contratados</span>
            </RouterLink>
          </li>
          <li class="w-[48%] lg:w-1/4">
            <RouterLink
              class="bg-gray-100 border-gray-200 rounded-lg flex items-center justify-center flex-col text-gray-700 min-h-[128px] p-4 text-center gap-2 hover:bg-green-600 hover:text-white transition-all hover:scale-105"
              to="/billing"
            >
              <i class="fi fi-rr-point-of-sale-bill text-2xl leading-0" aria-hidden="true"></i>
              <span class="text-sm">Faturas</span>
            </RouterLink>
          </li>
          <li class="w-[48%] lg:w-1/4">
            <RouterLink
              class="bg-gray-100 border-gray-200 rounded-lg flex items-center justify-center flex-col text-gray-700 min-h-[128px] p-4 text-center gap-2 hover:bg-green-600 hover:text-white transition-all hover:scale-105"
              to="/connexion"
            >
              <i class="fi fi-rr-global-research text-2xl leading-0" aria-hidden="true"></i>
              <span class="text-sm">Detalhes de conexão</span>
            </RouterLink>
          </li>
          <li class="w-[48%] lg:w-1/4">
            <RouterLink
              class="bg-gray-100 border-gray-200 rounded-lg flex items-center justify-center flex-col text-gray-700 min-h-[128px] p-4 text-center gap-2 hover:bg-green-600 hover:text-white transition-all hover:scale-105"
              to="/support"
            >
              <i class="fi fi-sr-user-headset text-2xl leading-0" aria-hidden="true"></i>
              <span class="text-sm">Atendimento ao suporte</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>
