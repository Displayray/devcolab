<script setup>
</script>

<template>
    <div
        style="background-image: url('/assets/img/ldp.png'); background-position: center; background-size: cover; background-repeat: no-repeat;">
        <Navbar />

        <section class="page-width flex flex-col-reverse gap-y-10 lg:flex-row lg:items-start items-center">
            <div class="max-w-full lg:max-w-[50%] flex flex-col items-start justify-center">
                <span
                    class="text-sm px-3 py-1 border-2 mx-auto lg:mx-0 border-[var(--color-font-gray)] rounded-full">DevCoLab
                    is
                    Launching
                    on
                    XX/XX/XXXX
                    <NuxtLink class="text-blue-400 font-[600] cursor-pointer">
                        Notify Me
                    </NuxtLink>
                </span>
                <h2 class="h1 mt-8 mb-4">Connect with <span class="text-[var(--color-font-color)]">DevCoLab</span></h2>
                <p class="text mb-10">DevCoLab links Freelance-Developers, builds dynamic Teams and unlocks business
                    potential by
                    connecting top talents.
                </p>
                <div class="flex gap-sm">
                    <NuxtLink to="/search/developer" class="button">
                        Connect Now
                    </NuxtLink>
                    <NuxtLink to="/search/team" class="button !bg-transparent">
                        Teams <i class="fa-regular fa-arrow-right w-4 ml-2"></i>
                    </NuxtLink>
                </div>
            </div>
            <div class="max-w-[50%] flex items-center justify-center">
                <img src="/assets/img/ldp-art.svg" alt="Art" class="max-w-[80%]">
            </div>
        </section>
    </div>
</template>