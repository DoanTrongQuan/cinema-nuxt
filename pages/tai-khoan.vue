<template>
<div>
  <div class = "grid-cols-1 md:grid-cols-4 
  lg:grid-cols-3 my-0 mx-auto screen1390:max-w-screen-xl xl:max-w-screen-screen1200 lg:max-w-5xl md:py-10 
  py-5 md:gap-[30px] xl:gap-16 px-4 md:px-[45px] xl:px-0 xl:grid">
    <div class = "md:col-span-2 lg:col-span-1">
      <div class = "bg-white px-6 md:p-4 xl:px-6 xl:py-4  xl:shadow-2xl rounded mb-8">

      </div>
    </div>
    <div class = "md:col-span-2 lg:col-span-2 col-span-2">
      <UTabs :items="items" class="w-full">
        <template #item="{ item }">
          <div v-if = "item.key === 'history'" class="space-y-3">
            <h1>đây là his</h1>

          </div>
          <div v-else-if="item.key === 'account'" class="space-y-3">
            <UForm>
              <div>
                
              </div>
            </UForm>

          </div>
        </template>
      </UTabs>
    </div>
  </div>
</div>
</template>

<script setup>
const items = [{
  key: 'history',
  label: 'Lịch sử',
}, {
  key: 'account',
  label: 'Thông tin cá nhân',
}]

</script>