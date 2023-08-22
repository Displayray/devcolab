<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()

const props = defineProps({
    accountPopup: Boolean,
})

const logout = async () => {
    const { error } = supabase.auth.signOut()

    user.value = null
    try {
        await $fetch("/api/_supabase/session", {
            method: "POST",
            body: { event: "SIGNED_OUT", session: null }
        })
    } catch (error) {
        console.log(error)
    }


    navigateTo("/user/login")

    if (error) {
        console.log(error)
    }

    location.reload()
}


function changeWindow(w) {
    let windowNames = ["dashboard", "messanger", "myTeam", "myProfile", "portfolio", "settings", "accountSettings"]

    windowNames.forEach((element) => {
        if (element == w) {
            document.querySelector(`#${w}`).style.display = "inherit"
        } else {
            document.querySelector(`#${element}`).style.display = "none"
        }
    })
}
</script>

<style>
#messanger,
#myTeam,
#myProfile,
#portfolio,
#settings,
#accountSettings {
    display: none;
}
</style>

<template>
    <div class="flex">
        <aside class="flex flex-col px-4 h-[calc(100vh-72px)] w-[300px]">
            <img src="~/assets/brand/logo.svg" alt="Logo" class="w-10 my-6 hidden">
            <div class="flex flex-col gap-1">
                <button @click="changeWindow('dashboard')"
                    class="flex items-end rounded-md transition-300 hover:bg-[#00b16a] px-4 py-2 w-full font-medium">
                    <i class="fa-solid fa-house text-xl mr-4"></i>
                    Dashboard
                </button>

                <button @click="changeWindow('messanger')"
                    class="flex items-end rounded-md transition-300 hover:bg-[#00b16a] px-4 py-2 w-full font-medium">
                    <i class="fa-solid fa-messages text-xl mr-4"></i>
                    Messanger
                </button>

                <button @click="changeWindow('myTeam')"
                    class="flex items-end rounded-md transition-300 hover:bg-[#00b16a] px-4 py-2 w-full font-medium">
                    <i class="fa-solid fa-users text-xl mr-4"></i>
                    My Team
                </button>

                <button @click="changeWindow('myProfile')"
                    class="flex items-end rounded-md transition-300 hover:bg-[#00b16a] px-4 py-2 w-full font-medium">
                    <i class="fa-solid fa-user text-xl mr-4"></i>
                    My Profile
                </button>

                <button @click="changeWindow('portfolio')"
                    class="flex items-end rounded-md transition-300 hover:bg-[#00b16a] px-4 py-2 w-full font-medium">
                    <i class="fa-solid fa-address-card text-xl mr-4"></i>
                    Portfolio
                </button>

                <button @click="changeWindow('settings')"
                    class="flex items-end rounded-md transition-300 hover:bg-[#00b16a] px-4 py-2 w-full font-medium">
                    <i class="fa-solid fa-gear text-xl mr-4"></i>
                    Settings
                </button>
            </div>
            <button @click="accountPopup = !accountPopup"
                class="mt-auto relative flex items-center mb-6 rounded-md border-2 border-[#00b16a] px-2 py-1">
                <span class="rounded-full overflow-hidden mr-4">
                    <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        class="w-10 h-auto aspect-square object-cover" alt="Avatar">
                </span>
                <p class="font-medium mb-0">{{ user.user_metadata.username }}</p>

                <div :class="!accountPopup ? 'hidden' : 'flex'"
                    class="absolute bottom-[130%] flex-col rounded-md bg-[var(--color-bg-layer)] px-4 py-2 w-[calc(100%-1rem)] text-sec">
                    <span @click="logout" class="flex justify-start items-center">
                        <i class="fa-solid fa-right-from-bracket text-sec mr-2"></i>
                        Log out
                    </span>
                    <hr class="my-2">
                    <span @click="changeWindow('accountSettings')" class="flex justify-start items-center">
                        <i class="fa-solid fa-gear text-sec mr-2"></i>
                        Settings
                    </span>
                </div>
            </button>
        </aside>
        <main class="flex flex-col px-4 py-8 w-full border-[var(--color-bg-layer)] border-l-2">

            <div id="dashboard" class="flex flex-col">
                <h2 class="h2 text-center w-full mb-10">Welcome back, <span class="text-[var(--color-primary)]">{{
                    user.user_metadata.username }}</span> 👋
                </h2>
                {{ dashboard }}
            </div>

            <div id="messanger" class="flex flex-col">
                <h2 class="h2 text-center w-full mb-10">Messanger</h2>
            </div>
            <div id="myTeam" class="flex flex-col items-center">
                <!--<AccountMyteam />-->
            </div>
            <div id="myProfile" class="flex flex-col">
                <h2 class="h2 text-center w-full mb-10">My Profile</h2>
            </div>
            <div id="portfolio" class="flex flex-col">
                <h2 class="h2 text-center w-full mb-10">Portfolio</h2>
            </div>
            <div id="settings" class="flex flex-col">
                <h2 class="h2 text-center w-full mb-10">Settings</h2>
            </div>
            <div id="accountSettings" class="flex flex-col">
                <h2 class="h2 text-center w-full mb-10">Account</h2>
            </div>

        </main>
    </div>
</template>