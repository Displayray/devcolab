<template>
    <div class="flex flex-col  xl:max-w-[450px] w-full" data-aos="fade-left" data-aos-duration="1000">
        <h3 class="h5 bg-[var(--color-primary)] w-full px-6 py-4 rounded-t-lg">Filter</h3>
        <div class="flex flex-col bg-[var(--color-bg-layer)]">
            <details open class="filter-item flex flex-col border-b-2">
                <summary class="flex items-center cursor-pointer">
                    <div class="aspect-square my-2 mx-4">
                        <i class="fa-regular fa-earth-americas text-3xl open:bg-white"></i>
                    </div>
                    <p class="text-lg font-semibold">Country</p>
                    <div class="aspect-square my-2 mr-4 ml-auto">
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                </summary>
                <div class="grid grid-cols-0 overflow-hidden px-6 py-4">
                    <div class="flex flex-wrap gap-1">
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">Germany</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">Italy</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">France</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">Greece</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">Austria</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">Australia</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">USA</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">Hungary</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">England</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">Spain</span>
                    </div>
                </div>
            </details>

            <details open class="filter-item flex flex-col border-b-2">
                <summary class="flex items-center cursor-pointer">
                    <div class="aspect-square my-2 mx-4">
                        <i class="fa-regular fa-language text-3xl"></i>
                    </div>
                    <p class="text-lg font-semibold">Language</p>
                    <div class="aspect-square my-2 mr-4 ml-auto">
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                </summary>
                <div class="grid grid-cols-0 overflow-hidden px-6 py-4">
                    <div class="flex flex-wrap gap-1">
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">German</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">Frenche</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">Greec</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">Austria-German</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">English</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">British</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">Spanish</span>
                    </div>
                </div>
            </details>

            <details open class="filter-item flex flex-col border-b-2">
                <summary class="flex items-center cursor-pointer">
                    <div class="aspect-square my-2 mx-4">
                        <i class="fa-solid fa-brain-circuit text-3xl open:bg-white"></i>
                    </div>
                    <p class="text-lg font-semibold">Skill</p>
                    <div class="aspect-square my-2 mr-4 ml-auto">
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                </summary>
                <div class="grid grid-cols-0 overflow-hidden px-6 py-4">
                    <div class="flex flex-wrap gap-1">
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">Javascript</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">NodeJS</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">C#</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">C++</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">CSS</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">Python</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">PHP</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">Ruby</span>
                    </div>
                </div>
            </details>

            <details open class="filter-item flex flex-col border-b-2">
                <summary class="flex items-center cursor-pointer">
                    <div class="aspect-square my-2 mx-4">
                        <i class="fa-solid fa-briefcase text-3xl open:bg-white"></i>
                    </div>
                    <p class="text-lg font-semibold">Role</p>
                    <div class="aspect-square my-2 mr-4 ml-auto">
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                </summary>
                <div class="grid grid-cols-0 overflow-hidden px-6 py-4">
                    <div class="flex flex-wrap gap-1">
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">Front-End</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">Back-End</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">Full-Stack</span>
                        <span class="text-sm bg-[rgba(0,0,0,.4)] px-3 py-1 rounded cursor-pointer">Software Engineer</span>
                    </div>
                </div>
            </details>

            <!--<details class="filter-item flex flex-col border-b-2">
                <summary class="flex items-center cursor-pointer">
                    <div class="aspect-square my-2 mx-4">
                        <i class="fa-solid fa-brain-circuit text-3xl open:bg-white"></i>
                    </div>
                    <p class="text-lg font-semibold">Skill</p>
                    <div class="aspect-square my-2 mr-4 ml-auto">
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                </summary>
                <div class="grid grid-cols-0 overflow-hidden px-6 py-4">
                    <div class="flex flex-col">
                        <div class="flex justify-between h-10 px-4 items-center">
                            <p class="">Javascript</p>
                            <span class="px-3 py-0.5 text-sm bg-[rgba(0,0,0,.4)] rounded-md self-center">306</span>
                        </div>
                        <div class="flex justify-between h-10 px-4 items-center bg-[var(--color-bg-layer)]">
                            <p class="">NodeJS</p>
                            <span class="px-3 py-0.5 text-sm bg-[rgba(0,0,0,.4)] rounded-md self-center">256</span>
                        </div>
                        <div class="flex justify-between h-10 px-4 items-center">
                            <p class="">C#</p>
                            <span class="px-3 py-0.5 text-sm bg-[rgba(0,0,0,.4)] rounded-md self-center">264</span>
                        </div>
                        <div class="flex justify-between h-10 px-4 items-center bg-[var(--color-bg-layer)]">
                            <p class="">C++</p>
                            <span class="px-3 py-0.5 text-sm bg-[rgba(0,0,0,.4)] rounded-md self-center">120</span>
                        </div>
                        <div class="flex justify-between h-10 px-4 items-center">
                            <p class="">CSS</p>
                            <span class="px-3 py-0.5 text-sm bg-[rgba(0,0,0,.4)] rounded-md self-center">390</span>
                        </div>
                        <div class="flex justify-between h-10 px-4 items-center bg-[var(--color-bg-layer)]">
                            <p class="">Python</p>
                            <span class="px-3 py-0.5 text-sm bg-[rgba(0,0,0,.4)] rounded-md self-center">455</span>
                        </div>
                        <div class="flex justify-between h-10 px-4 items-center">
                            <p class="">PHP</p>
                            <span class="px-3 py-0.5 text-sm bg-[rgba(0,0,0,.4)] rounded-md self-center">11</span>
                        </div>
                        <div class="flex justify-between h-10 px-4 items-center bg-[var(--color-bg-layer)]">
                            <p class="">Ruby</p>
                            <span class="px-3 py-0.5 text-sm bg-[rgba(0,0,0,.4)] rounded-md self-center">144</span>
                        </div>
                    </div>
                </div>
            </details>-->
        </div>
    </div>
</template>