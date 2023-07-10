<template>
    <div style="background-color: var(--color-bg); color: var(--color-font);">
        <Navbar />

        <section class="page-width">
            <h1 class="h2 mb-12">Get paid</h1>

            <div class="flex gap-6 flex-col-reverse xl:flex-row">
                <SearchTeams />
                <SearchFilterJob />
            </div>
        </section>

        <HomeFooter />
    </div>
</template>