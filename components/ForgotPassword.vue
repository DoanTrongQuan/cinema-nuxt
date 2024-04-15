<script setup>
import eventBus from '~/utils/eventBus'

const isOpenForgotPassword =ref(false)

// lấy giá trị true từ login.vue
eventBus.on('show_forgot_password',(value) => {
  isOpenForgotPassword.value = value
})
</script>

<template>
  <div>
    <!-- <UButton label="Open" @click="isOpen = true" /> -->

    <UModal v-model="isOpenForgotPassword" prevent-close style="padding: 0 !important;" >
        <div class="py-2 flex justify-end px-2">
            <UButton color="gray" variant="ghost" 
            icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpenForgotPassword = false" />
        </div>
          <div class="flex justify-center">
            <img src="https://www.galaxycine.vn/_next/static/media/icon-login.fbbf1b2d.svg" alt="">

          </div>
        <Placeholder class="h-32" />

    </UModal>
  </div>
</template>