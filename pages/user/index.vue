<script setup>
definePageMeta({
    middleware: ["auth"],
})
const user = useSupabaseUser()
const supabase = useSupabaseClient()


</script>

<template>
    <Navbar />
    <!--<AccountDashboard />-->

    <HomeFooter />
</template>