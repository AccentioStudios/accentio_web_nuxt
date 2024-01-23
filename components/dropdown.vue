<template>
    <div class="relative inline-block text-left" @mouseenter="showDropdown">
        <button type="button"
            class="inline-flex w-full justify-center gap-x-1.5 rounded-md text-[#ccdae7] px-3 py-2 text-sm font-semibold"
            id="menu-button" aria-expanded="true" aria-haspopup="true">
            {{ label }}
        </button>
        <div v-if="dropdown"
            @mouseleave="hideDropdown"
            class="nav-cards text-[#ccdae7] absolute left-[-30px] flex z-10 mt-2 gap-x-[64px] w-56 p-8 rounded-md w-[600px]"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="flex flex-col gap-y-4" id="menu-item-0" role="menuitem">
                <div class="flex gap-x-4">
                    <AssetsCode class=" border p-1 h-10 w-[80px] flex items-center justify-center rounded-lg" />
                    <div class="">
                        <p class="text-sm font-medium">Desarrollo de aplicaciones web & mobile en Flutter</p>
                        <p class="text-xs">Popular</p>
                        <p class="text-xs font-normal">Construímos desde cero aplicaciones funcionales para Android, iOS y Web, usando </p>
                    </div>
                </div>       
                <div class="flex gap-x-4">
                    <AssetsUx class=" border p-1 h-10 w-[80px] flex items-center justify-center rounded-lg" />
                    <div >
                        <p class="text-sm font-medium">Diseño de Experiencia de Usuario</p>
                        <p class="text-xs ">Realizamos un proceso de investigación, análisis y testings para brindarle una óptima experiencia a tu usuario.</p>
                    </div>
                </div>       
            </div>
            <div id="menu-item-1"  role="menuitem">
                <div id="menu-item-0" role="menuitem">
                <div>
                    <div class="flex gap-x-4">
                        <p>IMAGEN</p>
                        <p class="text-sm font-medium">Desarrollo de aplicaciones web & mobile en Flutter</p>
                    </div>
                    <p class="text-xs">Construímos desde cero aplicaciones funcionales para Android, iOS y Web, usando </p>
                </div>       
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: 'Servicios'
        },
        active: {
            type: String,
            default: null
        }
    },
    computed: {
        dropdown() {
            return this.active === this.label;
        }
    },
    methods: {
        showDropdown() {
            this.$emit('show');
        },
        hideDropdown() {
            this.$emit('hide');
        }
    },
}
</script>

<style scoped>
.nav-cards{
    border: 1px solid rgba(137, 212, 240, .38);
    box-shadow: 0 16px 20px rgba(0, 0, 0, .1), 0 6px 30px rgba(0, 0, 0, .07), 0 8px 10px rgba(0, 0, 0, .1);
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    background-color: rgba(0, 0, 0, 0);
    background-image: linear-gradient(rgba(137, 212, 240, .15), rgba(137, 212, 240, .15)), linear-gradient(rgba(14, 11, 30, .65), rgba(14, 11, 30, .65));
}
</style>
