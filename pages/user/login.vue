<script setup>
const props = defineProps({
    loginWin: Boolean,
    showPass: Boolean
})

const errorMessage = ref("")
const successMessage = ref("")

const signUpName = ref("")
const signUpFirst = ref("")
const signUpLast = ref("")
const signUpMail = ref("")
const signUpPW = ref("")

const signInMail = ref("")
const signInPW = ref("")

const user = useSupabaseUser();
const supabase = useSupabaseClient()

if (user.value) navigateTo("/user")

/*let loginGoogle = () => {
    supabase.auth.signInWithOAuth({
        provider: "google"
    })
}*/

let signUp = async () => {
    if (signUpMail.value == "" || signUpPW.value == "") {
        return errorMessage.value = "Enter email adress and password!"
    }

    if (signUpPW.value.length < 6) {
        return errorMessage.value = "Passwords needs atleast 6 characters!"
    }

    if (!signUpMail.value.includes("@")) {
        return errorMessage.value = "Invalid email adress!"
    }

    if (signUpName.value == "") {
        return errorMessage.value = "Enter username!"
    }

    errorMessage.value = ""

    const { data, error } = await supabase.auth.signUp({
        email: signUpMail.value,
        password: signUpPW.value,
        options: {
            data: {
                first_name: signUpFirst.value,
                last_name: signUpLast.value,
                username: signUpName.value,
            }
        }
    })

    if (error) {
        return errorMessage.value = error.message
    }

    successMessage.value = "Please verify your email adress!"

    //navigateTo("/user")
}

let signIn = async () => {
    if (signInPW.value == "" || signInMail.value == "") {
        return errorMessage.value = "Enter email/password!"
    }

    errorMessage.value = ""

    const { data, error } = await supabase.auth.signInWithPassword({
        email: signInMail.value,
        password: signInPW.value,
    })

    if (error) {
        return errorMessage.value = error.message
    }

    navigateTo("/user")
}
</script>

<template>
    <Navbar />
    <section class="page-width flex justify-center">
        <div
            class="flex flex-col w-[600px] max-w-full bg-slate-200 rounded-lg text-[var(--color-font-switch)] px-6 py-8 transition-300">
            <h1 class="h2 mb-4">User Login</h1>
            <div class="overflow-x-hidden">
                <div class="flex items-start transition ease duration-300" :class="loginWin ? '' : '-translate-x-[100%]'">
                    <div class="w-[100%] shrink-0 grid grid-cols-6 gap-x-2 gap-y-2">
                        <div class="col-span-full">
                            <label for="username" class="font-semibold text-sec">Username</label>
                            <div class="flex bg bg-white rounded-lg">
                                <span class="flex justify-center items-center aspect-square h-10 border-r-2">
                                    <i class="fa-solid fa-user"></i>
                                </span>
                                <input type="text" name="username" v-model="signUpName"
                                    class="!bg-transparent outline-none px-2 w-full">
                            </div>
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="firstname" class="font-semibold text-sec">First Name</label>
                            <div class="flex bg bg-white rounded-lg">
                                <span class="flex justify-center items-center aspect-square h-10 border-r-2">
                                    <i class="fa-solid fa-user"></i>
                                </span>
                                <input type="text" name="firstname" v-model="signUpFirst"
                                    class="!bg-transparent outline-none px-2 w-full">
                            </div>
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="lastname" class="font-semibold text-sec">Last Name</label>
                            <div class="flex bg bg-white rounded-lg">
                                <span class="flex justify-center items-center aspect-square h-10 border-r-2">
                                    <i class="fa-solid fa-user"></i>
                                </span>
                                <input type="text" name="lastname" v-model="signUpLast"
                                    class="!bg-transparent outline-none px-2 w-full">
                            </div>
                        </div>
                        <div class="col-span-full">
                            <label for="email" class="font-semibold text-sec">Email adress</label>
                            <div class="flex bg bg-white rounded-lg">
                                <span class="flex justify-center items-center aspect-square h-10 border-r-2">
                                    <i class="fa-solid fa-at"></i>
                                </span>
                                <input type="email" name="email" v-model="signUpMail"
                                    class="!bg-transparent outline-none px-2 w-full">
                            </div>
                        </div>
                        <div class="col-span-full">
                            <label for="pass" class="font-semibold text-sec">Password</label>
                            <div class="flex bg bg-white rounded-lg">
                                <span class="flex justify-center items-center aspect-square h-10 border-r-2">
                                    <i class="fa-solid fa-lock"></i>
                                </span>
                                <input :type="!showPass ? 'password' : 'text'" name="pass" v-model="signUpPW"
                                    class="!bg-transparent outline-none px-2 w-full">
                                <span @click="showPass = !showPass"
                                    class="flex justify-center items-center aspect-square h-10 border-l-2 cursor-pointer">
                                    <i :class="showPass ? 'fa-solid fa-eye-low-vision' : 'fa-solid fa-eye'"></i>
                                </span>
                            </div>
                        </div>

                        <button @click="signUp"
                            class="button flex text-[var(--color-font)] whitespace-nowrap col-span-6 sm:col-span-3 justify-center items-center mt-2">
                            <i class="fa-solid fa-user-plus mr-2"></i>Create Account
                        </button>

                        <p class="col-span-6 text-blue-500 text-sm underline cursor-pointer" @click="loginWin = !loginWin">
                            Already
                            have an account?</p>
                    </div>
                    <div class="w-[100%] shrink-0 grid grid-cols-6 gap-x-2 gap-y-2 items-start">
                        <div class="col-span-full">
                            <label for="email" class="font-semibold text-sec">Email adress</label>
                            <div class="flex bg bg-white rounded-lg">
                                <span class="flex justify-center items-center aspect-square h-10 border-r-2">
                                    <i class="fa-solid fa-at"></i>
                                </span>
                                <input type="email" name="email" v-model="signInMail"
                                    class="!bg-transparent outline-none px-2 w-full">
                            </div>
                        </div>
                        <div class="col-span-full">
                            <label for="pass" class="font-semibold text-sec">Password</label>
                            <div class="flex bg bg-white rounded-lg">
                                <span class="flex justify-center items-center aspect-square h-10 border-r-2">
                                    <i class="fa-solid fa-lock"></i>
                                </span>
                                <input :type="!showPass ? 'password' : 'text'" name="pass" v-model="signInPW"
                                    class="!bg-transparent outline-none px-2 w-full">
                                <span @click="showPass = !showPass"
                                    class="flex justify-center items-center aspect-square h-10 border-l-2 cursor-pointer">
                                    <i :class="showPass ? 'fa-solid fa-eye-low-vision' : 'fa-solid fa-eye'"></i>
                                </span>
                            </div>
                        </div>

                        <button @click="signIn"
                            class="button flex text-[var(--color-font)] whitespace-nowrap col-span-3 justify-center items-center mt-2">
                            <i class="fa-solid fa-user-unlock mr-2"></i>Login
                        </button>

                        <p class="col-span-6 text-blue-500 text-sm underline cursor-pointer" @click="loginWin = !loginWin">
                            Create
                            account</p>
                    </div>
                </div>
            </div>
            <!--<div class="flex justify-center my-4">
                <button @click="loginGoogle">
                    <img class="w-48" src="/assets/img/google_signin_dark.png" alt="Google Sign in">
                </button>
            </div>-->
            <p v-if="errorMessage" data-aos="zoom-in"
                class="w-full rounded py-2 px-4 text-sec font-semibold bg-red-600 text-white transition-300">* {{
                    errorMessage }}</p>
            <span v-if="successMessage" data-aos="zoom-in"
                class="w-full rounded py-2 px-4 text-sec font-semibold bg-blue-500 text-white transition-300">{{
                    successMessage
                }}</span>
        </div>
    </section>
    <HomeFooter />
</template>