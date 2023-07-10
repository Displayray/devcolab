<script setup>
const error = useError()
</script>

<template>
    <div style="background-color: var(--color-bg); color: var(--color-font);">
        <section class="page-width flex w-screen min-h-screen items-center flex-col text-center">
            <img src="/assets/img/eroor_banner.svg" alt="Error Banner" class="w-[500px] mb-16">
            <h1 class="h1 mb-6">{{ error.statusCode }}</h1>
            <h2 class="h4 mb-4">Something went wrong</h2>
            <p>{{ error.statusMessage }}</p>
            <NuxtLink to="/" class="button mt-6 !bg-transparent !border-2 !border-[var(--color-primary)]">
                <i class="fa-solid fa-home w-4 mr-2"></i> Go back home
            </NuxtLink>
        </section>
    </div>
</template>