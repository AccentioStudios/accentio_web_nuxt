<template>
  <div>
      <header class="shadow-sm flex justify-center p-5"  >
          <div class="flex justify-between w-full container items-center p-2" >
              <nav class="flex gap-x-6" >
                  <NuxtLink to="/">
                      <AssetsAccentio @mouseenter="this.activeDropdown= null"  />
                  </NuxtLink>
                  <Dropdown :label="'Servicios'" :active="activeDropdown" @show="activeDropdown='Servicios'" @hide="activeDropdown=null" />
                  <Dropdown :label="'Acerca de Nosotros'" :active="activeDropdown" @show="activeDropdown='Acerca de Nosotros'" @hide="activeDropdown=null" />
                  <Dropdown :label="'Blog'" :active="activeDropdown" @show="activeDropdown='Blog'" @hide="activeDropdown=null" />
                  <div>
                    
                  </div>
              </nav>
              <a class="px-4 py-2 bg-[#3baae2] rounded-full text-sm font-medium cursor-pointer">
                  <p>Comenzar ahora</p>
              </a>
          </div>
      </header>
  </div>
</template>

<script>
export default {
data() {
  return {
    activeDropdown: null,
  }
},
}
</script>

<style scoped>
</style>
