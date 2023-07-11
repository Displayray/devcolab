<script setup>
let username = ref()
let searchError = ref(false)

let handleSearch = () => {
    if (!username.value) {
        return searchError.value = true;
    }

    navigateTo(`/dev/${username.value}`)
}
</script>

<template>
    <Navbar />
    <div style="background-image: url('/assets/img/ldp.png'); background-position: center; background-size: cover; background-repeat: no-repeat;">
        <section class="page-width flex flex-col items-center justify-center min-h-[400px]">
            <h1 class="h2 mb-6">Search user</h1>
            <div class="flex bg-slate-200 text-[var(--color-font-switch)] px-6 py-3 rounded-xl w-[400px] max-w-full" :class="searchError ? 'border-red-500 border-2' : ''">
                <input v-model="username" type="text" name="search-username" id="search-username" placeholder="Username" class="bg-transparent outline-none w-full">
                <button @click="handleSearch" class="aspect-square flex items-center justify-center">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <NuxtLink to="user" class="button !bg-transparent w-[400px] max-w-full text-sec text-blue-400 underline">
                Create an Account <i class="fa-regular fa-arrow-right w-4 ml-2"></i>
            </NuxtLink>
        </section>
    </div>
    <HomeFooter />
</template>