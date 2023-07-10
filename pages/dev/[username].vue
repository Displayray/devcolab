<script setup>
let route = useRoute();

let username = route.params.username;
</script>

<template>
    <Navbar />
    <section class="page-width flex flex-col" data-aos="fade-up" data-aos-duration="1000">
        <div class="flex items-center justify-center flex-col mb-8">
            <img src="https://images.pexels.com/photos/5952645/pexels-photo-5952645.jpeg?auto=compress&cs=tinysrgb&w=1600"
                class="w-[300px] aspect-square object-cover shrink-0 mb-8" alt="Avatar">
            <div class="text-center">
                <h1 class="h3 mb-2">{{ username }}</h1>
                <h2 class="mb-1">Full-Stack Developer</h2>
                <NuxtLink to="https://displayray.dev" class="text-blue-400 text-sec underline">displayray.dev</NuxtLink>
            </div>
        </div>
        <div class="flex justify-center gap-4 mb-8">
            <NuxtLink to="" class=""><i
                    class="fa-brands fa-instagram text-3xl transition-300 hover:text-[var(--color-primary)] cursor-pointer"></i>
            </NuxtLink>
            <NuxtLink to="" class=""> <i
                    class="fa-brands fa-tiktok text-3xl transition-300 hover:text-[var(--color-primary)] cursor-pointer"></i>
            </NuxtLink>
            <NuxtLink to="" class=""><i
                    class="fa-brands fa-twitter text-3xl transition-300 hover:text-[var(--color-primary)] cursor-pointer"></i>
            </NuxtLink>
            <NuxtLink to="" class=""><i
                    class="fa-brands fa-youtube text-3xl transition-300 hover:text-[var(--color-primary)] cursor-pointer"></i>
            </NuxtLink>
            <NuxtLink to="" class=""><i
                    class="fa-brands fa-linkedin text-3xl transition-300 hover:text-[var(--color-primary)] cursor-pointer"></i>
            </NuxtLink>
            <NuxtLink to="" class=""><i
                    class="fa-brands fa-stack-overflow text-3xl transition-300 hover:text-[var(--color-primary)] cursor-pointer"></i>
            </NuxtLink>
            <NuxtLink to="" class=""><i
                    class="fa-brands fa-dev text-3xl transition-300 hover:text-[var(--color-primary)] cursor-pointer"></i>
            </NuxtLink>
        </div>
        <div class="flex justify-center">
            <div class="card flex flex-col gap-1 w-[1000px]">
                <div
                    class="flex flex-wrap justify-center gap-6 mb-8 py-4 px-6 bg-[var(--color-bg-layer)] rounded-lg self-center">
                    <div class="aspect-square w-12">
                        <img src="/assets/skill/node.png" alt="Csharp">
                    </div>
                    <div class="aspect-square w-12">
                        <img src="/assets/skill/JS.png" alt="Csharp">
                    </div>
                    <div class="aspect-square w-12">
                        <img src="/assets/skill/cs.png" alt="Csharp">
                    </div>
                    <div class="aspect-square w-12">
                        <img src="/assets/skill/css.png" alt="Csharp">
                    </div>
                    <div class="aspect-square w-12">
                        <img src="/assets/skill/html.png" alt="Csharp">
                    </div>
                    <div class=" aspect-square w-12">
                        <img src="/assets/skill/tailwind.png" alt="Csharp">
                    </div>
                </div>
                <h3 class="h4 mb-4">About me</h3>
                <span class="flex items-center"><i class="fa-solid fa-briefcase aspect-square text-xl w-8"></i>Full-Stack
                    Developer</span>
                <span class="flex items-center"><i
                        class="fa-solid fa-location-dot aspect-square text-xl w-8"></i>Country</span>
                <span class="flex items-center"><i class="fa-regular fa-lips aspect-square text-xl w-8"></i>German
                    (Native),
                    English</span>
                <span class="flex items-center"><i class="fa-solid fa-seedling aspect-square text-xl w-8"></i>16
                    years</span>
                <span class="flex items-center"><i class="fa-solid fa-venus-mars aspect-square text-xl w-8"></i>Male</span>
                <span class="flex items-center"><i class="fa-solid fa-code aspect-square text-xl w-8"></i>Since May
                    2020</span>
                <p class="text-sec mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde a eos dolore suscipit
                    enim
                    ipsa incidunt qui tenetur quia earum, recusandae, veritatis nostrum minus natus, laborum exercitationem.
                    Incidunt quidem deleniti ipsa accusamus repudiandae neque rerum quis. Quod, accusantium. Inventore
                    minima sequi architecto distinctio modi iste est facilis. Blanditiis, veritatis harum!</p>

                <h3 class="h5 mt-12 mb-4">Message me</h3>
                <form action="POST">
                    <textarea name="message" id="message" rows="10" placeholder="Write your message..."
                        class="mb-4 p-4 border-2 border-[var(--color-bg-layer)] bg-[rgba(0,0,0,.4)] outline-none w-full"></textarea>
                    <button class="button"><i class="fa-solid fa-paper-plane mr-3"></i>Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <HomeFooter />
</template>