<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()

if (!user.value) navigateTo("/user/login")

const logout = async () => {
    const { error } = supabase.auth.signOut()

    user.value = null
    try {
        /*await $fetch("/api/_supabase/session", {
            method: "POST",
            body: { event: "SIGNED_OUT", session: null }
        })*/
    } catch (error) {
        console.log(error)
    }


    navigateTo("/user/login")

    if (error) {
        console.log(error)
    }

    location.reload()
}
</script>

<template>
    <Navbar />
    User
    <HomeFooter />
</template>