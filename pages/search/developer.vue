<template>
    <div style="background-color: var(--color-bg); color: var(--color-font);">
        <Navbar />

        <section class="page-width">
            <h1 class="h2 mb-12">Connect with Developer</h1>

            <div class="flex gap-6 flex-col-reverse xl:flex-row">
                <SearchDevelopers />
                <SearchFilterDev />
            </div>
        </section>

        <HomeFooter />
    </div>
</template>