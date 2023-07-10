<template>
    <section class="page-width" data-aos="fade-up" data-aos-duration="1000">
        <span
            class="flex flex-row-reverse items-center font-semibold text-[var(--color-font-gray)] whitespace-nowrap">Projects
            <div class="w-full h-1 mr-4 rounded bg-[var(--color-font-gray)] block"></div>
        </span>

        <div class="flex items-center gap-x-24 gap-y-12 my-16 flex-col lg:flex-row">
            <div class="w-full lg:w-[50%]">
                <h3 class="h3 mt-16 mb-8">Projects created through DevCoLab</h3>
                <p class="mb-10">DevCoLab helps building powerful Teams which create Awesome Projects. We support what we
                    help to
                    build!
                    Take a look at successfull projects created by our community</p>

                <NuxtLink class="button !py-4">
                    View Projects <i class="fa-regular fa-arrow-right w-4 ml-2"></i>
                </NuxtLink>
            </div>

            <div class="grid grid-rows-2 grid-cols-2 gap-6 w-full lg:w-[50%]">
                <div
                    class="aspect-[5/2] grid-span-1 flex justify-center items-center bg-slate-200 rounded-md p-4 transition-300 hover:bg-[var(--color-primary)]">
                    <img src="/assets/img/logoipsum.svg" alt="Company" />
                </div>
                <div
                    class="aspect-[5/2] grid-span-1 flex justify-center items-center bg-slate-200 rounded-md p-4 transition-300 hover:bg-[var(--color-primary)]">
                    <img src="/assets/img/logoipsum.svg" alt="Company" />
                </div>
                <div
                    class="aspect-[5/2] grid-span-1 flex justify-center items-center bg-slate-200 rounded-md p-4 transition-300 hover:bg-[var(--color-primary)]">
                    <img src="/assets/img/logoipsum.svg" alt="Company" />
                </div>
                <div
                    class="aspect-[5/2] grid-span-1 flex justify-center items-center bg-slate-200 rounded-md p-4 transition-300 hover:bg-[var(--color-primary)]">
                    <img src="/assets/img/logoipsum.svg" alt="Company" />
                </div>
            </div>

        </div>
    </section>
</template>