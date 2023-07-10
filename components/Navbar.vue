<script setup>
const props = defineProps({
    mobileNav: Boolean,
})
</script>

<template>
    <nav class="">
        <div class="page-width py-4 flex justify-between hidden md:flex">
            <div class="flex items-center">
                <img src="~/assets/brand/logo.svg" alt="Logo" class="w-10 mr-6">
                <div class="font-medium">
                    <NuxtLink to="/"
                        class="inline-block mr-2 py-2 px-6 rounded text-center hover:bg-[var(--color-bg-layer)]">
                        Home
                    </NuxtLink>
                    <NuxtLink to="/search/developer"
                        class="inline-block mr-2 py-2 px-6 rounded text-center hover:bg-[var(--color-bg-layer)]">
                        Developers
                    </NuxtLink>
                    <NuxtLink to="/search/team"
                        class="inline-block mr-2 py-2 px-6 rounded text-center hover:bg-[var(--color-bg-layer)]">
                        Teams
                    </NuxtLink>
                    <NuxtLink to="/search/job"
                        class="inline-block mr-2 py-2 px-6 rounded text-center hover:bg-[var(--color-bg-layer)]">
                        Jobs
                    </NuxtLink>
                </div>
            </div>
            <div class="flex items-center">
                <NuxtLink to="/account/login" class="button">
                    Account
                </NuxtLink>
            </div>
        </div>

        <!-- Mobile Nav -->
        <div class="page-width py-4 md:hidden relative">
            <div class="py-4 justify-between flex">
                <div class="flex items-center">
                    <img src="~/assets/brand/logo.svg" alt="Logo" class="w-10 mr-6">
                </div>
                <div class="flex items-center">
                    <i class="fa-regular fa-bars-staggered w-10 text-3xl cursor-pointer"
                        @click="mobileNav = !mobileNav"></i>
                </div>
            </div>

            <div :class="!mobileNav ? 'translate-x-[110%]' : 'translate-x-0'"
                class="transition-300 font-medium flex flex-col items-start h-screen fixed px-6 top-[104px] left-0 bg-[var(--color-bg)] w-full">
                <NuxtLink to="/"
                    class="inline-block mr-2 py-2 px-6 rounded text-left w-full hover:bg-[var(--color-bg-layer)]">
                    Home
                </NuxtLink>
                <NuxtLink to="/search/developer"
                    class="inline-block mr-2 py-2 px-6 rounded text-left w-full hover:bg-[var(--color-bg-layer)]">
                    Developers
                </NuxtLink>
                <NuxtLink to="/search/team"
                    class="inline-block mr-2 py-2 px-6 rounded text-left w-full hover:bg-[var(--color-bg-layer)]">
                    Teams
                </NuxtLink>
                <NuxtLink to="/search/job"
                    class="inline-block mr-2 py-2 px-6 rounded text-left w-full hover:bg-[var(--color-bg-layer)]">
                    Jobs
                </NuxtLink>
                <NuxtLink to="/account/login" class="button w-full text-center mt-12">
                    Account
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>