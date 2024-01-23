
<template>
    <div>
        <header class="shadow-sm flex justify-center p-5" >
            <div class="flex justify-between w-full container items-center px-5">
                <nav class="flex gap-x-6">
                    <NuxtLink to="/" > 
                        <AssetsAccentio   />
                    </NuxtLink>
                    <ul class="flex gap-x-6 text-[#ccdae7] text-sm items-center font-medium">
                        <li class="px-5 cursor-pointer"><p>Servicios</p></li>
                        <li class="px-5 cursor-pointer"><p>Acerca de nosotros</p></li>
                        <li class="px-5 cursor-pointer"><p>Blog</p></li>
                    </ul>
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
        
    }
</script>

<style scoped>

</style>