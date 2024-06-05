<script setup>

const props = defineProps(
    {
  grupo: Object
}
)

</script>
<template>

    <h1>componentes grupos</h1>

    <template>
        <Card style="width: 25rem; overflow: hidden">
            <template #header>
                <img alt="logo grupos" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" />
            </template>
            <template #title>grupo {{ grupo.nombre }}</template>
            <template #content>
                <p v-for="semillero in grupo.semilleros">Semillero {{ semillero }}</p>
            </template>
            <template #footer>
                <div class="flex gap-3 mt-1">
                    <Button label="Cancelar" severity="secondary" outlined class="w-full" />
                    <Button label="Guardar" class="w-full" />
                </div>
            </template>
        </Card>
    </template>

</template>