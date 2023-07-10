<script setup>
/*let animationDuratuin = 30000;
let frameDuration = 1000 / 60;
let totalFrames = Math.round(animationDuratuin / frameDuration)
let easeOutQuad = t => t * (2 - t);

function animateCountUp(el) {
    let frame = 0;
    let countTo = parseInt(el.innerHTML, 10)

    let counter = setInterval(() => {
        frame++
        let progress = easeOutQuad(frame / totalFrames)
        let currentCount = Math.round(countTo * progress)

        if (parseInt(el.innerHTML, 10) !== currentCount) {
            el.innerHTML = currentCount
        }

        if (frame === totalFrames) {
            clearInterval(counter)
        }
    }, frameDuration)
}

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

let statistics = document.querySelector("#section-statistics")
console.log(statistics)

document.addEventListener("scroll", () => {
    console.log(isInViewport(statistics))
})*/
</script>

<template>
    <section class="page-width" id="section-statistics" data-aos="fade-up" data-aos-duration="1000" ref="statSection">
        <span
            class="flex flex-row-reverse items-center font-semibold text-[var(--color-font-gray)] whitespace-nowrap">Statistic
            <div class="w-full h-1 mr-4 rounded bg-[var(--color-font-gray)] block"></div>
        </span>

        <h3 class="h3 mt-16 mb-8">What We've Accomplished<!--The Impact We've Made--></h3>
        <div class="flex flex-col lg:flex-row gap-1 text-center">
            <div
                class="overflow-hidden relative flex py-10 px-2 w-full lg:w-[33.33%] flex-col items-center justfiy-center bg-[var(--color-bg-layer)] rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none">
                <span class="text-3xl font-semibold">12.000+</span>
                <p class="font-medium z-[1]">Users have found teams with our platform</p>
                <i
                    class="fa-solid fa-user-plus absolute -left-10 top-[50%] translate-y-[-50%] text-9xl text-[var(--color-primary)] opacity-100"></i>

            </div>
            <div
                class="overflow-hidden relative flex py-10 px-2 w-full lg:w-[33.33%] flex-col items-center justfiy-center bg-[var(--color-bg-layer)]">
                <span class="text-3xl font-semibold">40.000+</span>
                <p class="font-medium z-[1]">Users using our Platform</p>

                <i
                    class="fa-solid fa-user absolute -left-10 top-[50%] translate-y-[-50%] text-9xl text-[var(--color-primary)] opacity-100"></i>
            </div>
            <div
                class="overflow-hidden relative flex py-10 px-2 w-full lg:w-[33.33%] flex-col items-center justfiy-center bg-[var(--color-bg-layer)] rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl">
                <span class="text-3xl font-semibold">5.000+</span>
                <p class="font-medium z-[1]">Teams building their Teams with DevCoLab</p>

                <i
                    class="fa-solid fa-users absolute -left-10 top-[50%] translate-y-[-50%] text-9xl text-[var(--color-primary)] opacity-100 "></i>
            </div>
        </div>
    </section>
</template>