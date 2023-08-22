<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()

if (!user.value) navigateTo("/user/login")

//gapi.auth2.init()
</script>

<template>
    <Navbar />
    <AccountDashboard />

    <HomeFooter />
</template>