<template>
    <section class="page-width" data-aos="fade-up" data-aos-duration="1000">
        <span class="flex items-center font-semibold text-[var(--color-font-gray)] whitespace-nowrap">CTA
            <div class="w-full h-1 ml-4 rounded bg-[var(--color-font-gray)] block"></div>
        </span>

        <div class="text-center flex flex-col items-center">
            <h3 class="h3 mt-16 mb-8">Be a part of DevCoLab</h3>
            <p class="mb-10 max-w-[520px]">Join now to connect with developers, collaborate, find teams, and discover job
                opportunities!
            </p>
            <div class="flex gap-sm">
                <NuxtLink to="/user" class="button">
                    Get Started
                </NuxtLink>
                <!--<NuxtLink to="/account" class="button !bg-transparent">
                    Already a member? <i class="fa-regular fa-arrow-right w-4 ml-2"></i>
                </NuxtLink>-->
            </div>
        </div>
    </section>
</template>