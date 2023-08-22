<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()

if (!user.value) navigateTo("/user/login")
</script>

<template>
    <Navbar />
    <!--<AccountDashboard />-->

    <HomeFooter />
</template>