<template>
    <div class="bg-[var(--color-primary)]">
        <section class="page-width flex flex-col">
            <h2 class="h3 mb-2">The Place to Connect Freelance-Developer</h2>
            <hr>

            <div class="flex flex-wrap gap-6 justify-between mt-6">
                <div class="flex flex-wrap gap-x-36 gap-y-6">
                    <ul class="list-none pl-0">
                        <p class="font-semibold mb-2">About Us</p>
                        <li class="text-sec tracking-wide">
                            <NuxtLink>Imprint</NuxtLink>
                        </li>
                        <li class="text-sec tracking-wide">
                            <NuxtLink>Privacy</NuxtLink>
                        </li>
                        <li class="text-sec tracking-wide">
                            <NuxtLink>ANB & AGB</NuxtLink>
                        </li>
                        <li class="text-sec tracking-wide">
                            <NuxtLink>Contact</NuxtLink>
                        </li>
                    </ul>
                    <ul class="list-none pl-0">
                        <p class="font-semibold mb-2">Connect</p>
                        <li class="text-sec tracking-wide">
                            <NuxtLink>Developer</NuxtLink>
                        </li>
                        <li class="text-sec tracking-wide">
                            <NuxtLink>Teams</NuxtLink>
                        </li>
                        <li class="text-sec tracking-wide">
                            <NuxtLink>Job</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col">
                    <p class="font-semibold mb-2">DevCoLab.com</p>
                    <p class="text-sm">International place to connect Freelance-Developers. EST. 2023</p>
                    <div class="flex mt-2 gap-2">
                        <NuxtLink
                            class="border-[1px] border-[var(--color-font)] aspect-square w-10 rounded-full flex items-center justify-center">
                            <i class="fa-brands fa-instagram text-2xl"></i>
                        </NuxtLink>
                        <NuxtLink
                            class="border-[1px] border-[var(--color-font)] aspect-square w-10 rounded-full flex items-center justify-center">
                            <i class="fa-brands fa-twitter text-2xl"></i>
                        </NuxtLink>
                        <NuxtLink
                            class="border-[1px] border-[var(--color-font)] aspect-square w-10 rounded-full flex items-center justify-center">
                            <i class="fa-sharp fa-light fa-globe text-2xl"></i>
                        </NuxtLink>
                        <NuxtLink
                            class="border-[1px] border-[var(--color-font)] aspect-square w-10 rounded-full flex items-center justify-center">
                            <i class="fa-solid fa-at text-2xl"></i>
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <hr class="mt-12 mb-6">
            <span class="text-sm">Copyright © 2023 DevCoLab | Made with ❤️ by <NuxtLink to="https://www.displayray.dev"
                    class="underline">Displayray</NuxtLink></span>
        </section>
    </div>
</template>