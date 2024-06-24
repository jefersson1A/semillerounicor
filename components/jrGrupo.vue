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
                <p v-for="semillero in grupo.semilleros">
                    <p>Semillero {{ semillero.nombre }} </p>
                    <p>Integrantes {{ semillero.cantIntegrantes }} </p>
                    <p>Proyectos {{ semillero.cantProyectos }} </p>
                    <Divider />
                </p>
            </template>
            <template #footer>
      
            </template>
        </Card>
    </template>

</template>