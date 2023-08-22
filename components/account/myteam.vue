<script setup>
import { uid } from 'uid';
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const props = defineProps({
    searchStart: { type: Boolean, default: true }
})
let teamTags = []
let name = ref("")
let location = ref("")
let size = ref("")
let skills = getSkills()
let tags = ref("")
let give = ref("")
let get = ref("")

const errorMessage = ref("")

function selectSkill() {
    let el = event.target

    let parent = el.parentNode
    let input = parent.querySelector("input")
    let totalChecked = 0

    if (!input.checked) {
        let inputHolder = document.querySelector("#select-skill")
        let allCheckbox = inputHolder.querySelectorAll("input")

        allCheckbox.forEach((cb) => {
            if (cb.checked) totalChecked++
        })
    }


    if (input.checked) {
        el.style.border = "none"
        el.style.borderRadius = "none"
    } else {
        if (totalChecked >= 6) return
        el.style.border = "2px solid #3b82f6"
        el.style.borderRadius = "5px"
    }

    if (totalChecked >= 6) return
    input.checked = !input.checked
}

function getSkills() {
    let inputHolder = document.querySelector("#select-skill")
    let allCheckbox = inputHolder.querySelectorAll("input")
    let checked = []

    allCheckbox.forEach((cb) => {
        if (cb.checked) {
            checked.push(cb.getAttribute("name"))
        }
    })

    return checked;

}

function changeWindow(w) {
    let allWindows = ['teamStart', 'editTeam', 'editSearch']

    allWindows.forEach((el) => {
        if (el == w) {
            switch (el) {
                case "teamStart":
                    document.querySelector(`#${el}`).style.display = "flex"
                    break;

                case "editTeam":
                    document.querySelector(`#${el}`).style.display = "grid"
                    break;

                case "editSearch":
                    document.querySelector(`#${el}`).style.display = "grid"
                    break;

                default:
                    break;
            }
        } else {
            document.querySelector(`#${el}`).style.display = "none"
        }
    })
}

function setTags() {
    let input = document.getElementById("tag-input")
    let holder = document.getElementById("tag-holder")

    if (event.keyCode == 13) {
        holder.innerHTML = holder.innerHTML + `<span class="flex items-center whitespace-nowrap rounded-full text-black bg-[var(--color-bg-layer-al)] text-sec pl-3">${input.value}<i onclick="deleteTag()" class="fa-solid fa-xmark-large text-[10px] ml-2 rounded-full p-2 bg-[var(--color-bg-layer-al)] cursor-pointer"></i></span>`
        teamTags.push(input.value)
        input.value = ""
    }
}

function createSearch() {

}

async function saveTeam() {
    const { data, error } = await supabase.from("Teams").select('leader_id').eq('leader_id', `${user.value.id}`)

    console.log(name)


    if (data === null) {
        let timestamp = Date.now()
        let team_id = uid()
        //const { error } = await supabase.from("Teams").insert({})
    }
}
</script>

<style>
#editTeam,
#editSearch {
    display: none;
}
</style>

<template>
    <h2 class="h2 text-center w-full mb-10">My Team</h2>

    <div id="teamStart" class="max-w-[1200px] w-full flex gap-y-4 gap-x-8">
        <div @click="changeWindow('editTeam')"
            class="card cursor-pointer transition-300 hover:shadow-[#00b16a]/50 hover:shadow-lg hover:scale-105 w-full text-center relative text-xl font-semibold shadow-xl overflow-hidden">
            Edit Team
            <i
                class="fa-kit fa-solid-users-pen absolute -left-6 transition-300 top-[50%] translate-y-[-50%] text-8xl text-[var(--color-primary)]"></i>
        </div>

        <div @click="changeWindow('editSearch')"
            class="card cursor-pointer transition-300 hover:shadow-[#00b16a]/50 hover:shadow-lg hover:scale-105 w-full text-center relative text-xl font-semibold shadow-xl overflow-hidden">
            Edit Search
            <i
                class="fa-solid fa-magnifying-glass absolute -left-6 transition-300 top-[50%] translate-y-[-50%] text-8xl text-[var(--color-primary)]"></i>
        </div>
    </div>

    <div id="editSearch" class="icons-black shrink-0 grid grid-cols-6 gap-x-2 gap-y-4 max-w-[1200px] w-full relative">
        <button @click="changeWindow('teamStart')"
            class="flex absolute -top-20 border-b-2 py-2 px-4 text-[var(--color-font)] whitespace-nowrap col-span-1 justify-center items-center mt-2">
            <i class="fa-solid fa-left-long-to-line mr-4 !text-white"></i>Go Back
        </button>

        <div v-if="searchStart" class="shrink-0 grid grid-cols-6 gap-x-2 gap-y-4 col-span-6">
            <div @click="searchStart = !searchStart"
                class="col-span-2 card-team flex items-center justify-center text-xl font-semibold cursor-pointer">
                <i class="fa-regular fa-circle-plus !text-white text-4xl mr-6"></i>
                Create new Search
            </div>

            <div
                class="col-span-2 card-team flex items-center justify-center text-xl font-semibold cursor-pointer relative overflow-hidden">
                <i
                    class="fa-solid fa-magnifying-glass absolute -left-6 transition-300 top-[50%] translate-y-[-50%] text-8xl !text-[var(--color-primary)]"></i>
                <div class="flex flex-col">
                    <p class="mb-3">Fron-End Devloper</p>
                    <div>
                        <button class="rounded bg-red-500 px-4 py-1 text-sec">Delete</button>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="shrink-0 grid grid-cols-6 gap-x-2 gap-y-4 col-span-6">

            <div class="col-span-6">
                <label for="jobrole" class="font-semibold text-sec">Job Role</label>
                <div class="flex bg bg-white rounded-lg">
                    <span class="flex justify-center items-center aspect-square h-10 border-r-2">
                        <i class="fa-solid fa-briefcase"></i>
                    </span>
                    <input type="text" name="jobrole" v-model="jobrole" class="!bg-transparent outline-none px-2 w-full">
                </div>
            </div>

            <button @click="createSearch()"
                class="button flex text-[var(--color-font)] whitespace-nowrap col-span-2 justify-center items-center mt-2">
                <i class="fa-solid fa-user-magnifying-glass mr-2 !text-white"></i>Create Search
            </button>

            <button @click="searchStart = !searchStart"
                class="button !bg-red-500 flex text-[var(--color-font)] whitespace-nowrap col-span-2 justify-center items-center mt-2">
                <i class="fa-solid fa-cancel mr-2 !text-white"></i>Cancel
            </button>

        </div>


    </div>

    <div id="editTeam" class="icons-black shrink-0 grid grid-cols-6 gap-x-2 gap-y-4 max-w-[1200px] w-full relative">
        <button @click="changeWindow('teamStart')"
            class="flex absolute -top-20 border-b-2 py-2 px-4 text-[var(--color-font)] whitespace-nowrap col-span-1 justify-center items-center mt-2">
            <i class="fa-solid fa-left-long-to-line mr-4 !text-white"></i>Go Back
        </button>

        <div class="col-span-6">
            <label for="name" class="font-semibold text-sec">Team Name</label>
            <div class="flex bg bg-white rounded-lg">
                <span class="flex justify-center items-center aspect-square h-10 border-r-2">
                    <i class="fa-solid fa-users"></i>
                </span>
                <input type="text" name="name" v-model="name" class="!bg-transparent outline-none px-2 w-full">
            </div>
        </div>

        <div class="col-span-6 sm:col-span-3">
            <label for="location" class="font-semibold text-sec">Country</label>
            <div class="flex bg bg-white rounded-lg">
                <span class="flex justify-center items-center aspect-square h-10 border-r-2">
                    <i class="fa-solid fa-location-dot"></i>
                </span>
                <input type="text" name="location" v-model="location" class="!bg-transparent outline-none px-2 w-full">
            </div>
        </div>

        <div class="col-span-6 sm:col-span-3">
            <label for="size" class="font-semibold text-sec">Team Size</label>
            <div class="flex bg bg-white rounded-lg">
                <span class="flex justify-center items-center aspect-square h-10 border-r-2">
                    <i class="fa-solid fa-arrow-up-9-1"></i>
                </span>
                <input type="number" name="size" v-model="size" class="!bg-transparent outline-none px-2 w-full">
            </div>
        </div>

        <div class="col-span-6" id="select-skill">
            <label for="skills" class="font-semibold text-sec">Your Skills (max. 6)</label>
            <br>

            <label for="skills" class="font-semibold text-sm mt-2 mb-2 inline-block">Programming languages</label>
            <div class="flex gap-2 bg rounded-lg">
                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/JS.png" alt="javascript" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="javascript">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/typescript.svg" alt="typescript"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="typescript">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/c.svg" alt="c" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="c">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/cs.png" alt="cs" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="cs">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/cplusplus.svg" alt="cplusplus"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="cplusplus">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/go.svg" alt="go" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="go">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/java.svg" alt="java" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="java">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/php.svg" alt="php" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="php">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/python.svg" alt="python" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="python">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/swift.svg" alt="swift" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="swift">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/rust.svg" alt="rust" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="rust">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square bg-white" src="/assets/skill/perl.svg" alt="perl" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="perl">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/ruby.svg" alt="ruby" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="ruby">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/scala.svg" alt="scala" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="scala">
                </div>
            </div>

            <label for="skills" class="font-semibold text-sm mt-4 mb-2 inline-block">Frontend</label>
            <div class="flex gap-2 bg rounded-lg">
                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/vue.png" alt="vue" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="vue">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/react.svg" alt="React" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="react">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/angular.svg" alt="angular" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="angular">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/svelte.svg" alt="svelte" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="svelte">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/backbonejs.svg" alt="backbone"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="backbone">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/bootstrap.svg" alt="bootsrap" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="bootstrap">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/tailwind.png" alt="tailwindcss"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="tailwindcss">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/html.png" alt="html" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="html">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/css.png" alt="css" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="css">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/sass.svg" alt="sass" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="sass">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/webpack.svg" alt="webpack" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="webpack">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/materialize.svg" alt="materialize"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="materialize">
                </div>
            </div>

            <label for="skills" class="font-semibold text-sm mt-4 mb-2 inline-block">Backend</label>
            <div class="flex gap-2 bg rounded-lg">
                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/node.png" alt="node" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="node">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square bg-white" src="/assets/skill/express.svg" alt="express"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="express">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/spring.svg" alt="spring" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="spring">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/nestjs.svg" alt="nestjs" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="nestjs">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/dot-net.svg" alt="dotnet" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="dotnet">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/rails.svg" alt="rails" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="rails">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/django.svg" alt="django" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="django">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/laravel.svg" alt="laravel" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="laravel">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square bg-white" src="/assets/skill/flask.svg" alt="flask"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="flask">
                </div>
            </div>

            <label for="skills" class="font-semibold text-sm mt-4 mb-2 inline-block">Mobile</label>
            <div class="flex gap-2 bg rounded-lg">
                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain" src="/assets/skill/android_robot.png" alt="android"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="android">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/flutterio.svg" alt="flutter" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="flutter">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/dartlang.svg" alt="dart" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="dart">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/kotlinlang.svg" alt="kotlin" @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="kotlin">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square" src="/assets/skill/reactnative.svg" alt="reactnative"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="reactnative">
                </div>
            </div>

            <label for="skills" class="font-semibold text-sm mt-4 mb-2 inline-block">Database</label>
            <div class="flex gap-2 bg rounded-lg">
                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain" src="/assets/skill/mongo2.png" alt="mongodb"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="mongodb">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain" src="/assets/skill/mysql.svg" alt="mysql"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="mysql">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain" src="/assets/skill/postgresql.svg" alt="postgresql"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="postgresql">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain" src="/assets/skill/redis.svg" alt="redis"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="redis">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain" src="/assets/skill/cassandra.svg" alt="cassandra"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="cassandra">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain" src="/assets/skill/mariadb.svg" alt="mariadb"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="mariadb">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain" src="/assets/skill/sqlite.svg" alt="sqlite"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="sqlite">
                </div>
            </div>

            <label for="skills" class="font-semibold text-sm mt-4 mb-2 inline-block">Devops</label>
            <div class="flex gap-2 bg rounded-lg">
                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain" src="/assets/skill/aws.svg" alt="aws"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="aws">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain" src="/assets/skill/docker.svg" alt="docker"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="docker">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain" src="/assets/skill/google_cloud.svg" alt="gcloud"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="gcloud">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain" src="/assets/skill/kubernetes.svg" alt="kubernetes"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="kubernetes">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain bg-white" src="/assets/skill/bash.svg" alt="bash"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="bash">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain" src="/assets/skill/azure.svg" alt="azure"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="azure">
                </div>
            </div>

            <label for="skills" class="font-semibold text-sm mt-4 mb-2 inline-block">Static Site Generators</label>
            <div class="flex gap-2 bg rounded-lg">
                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain bg-white" src="/assets/skill/nextjs.svg" alt="nextjs"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="nextjs">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain" src="/assets/skill/nuxt.png" alt="nuxtjs"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="nuxtjs">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain" src="/assets/skill/gatsbyjs.svg" alt="gatsby"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="gatsby">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain" src="/assets/skill/gridsome.svg" alt="gridsome"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="gridsome">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain" src="/assets/skill/hugo.svg" alt="hugo"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="hugo">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain" src="/assets/skill/jekyll.svg" alt="jekyll"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="jekyll">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain" src="/assets/skill/11ty.svg" alt="11ty"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="eleventy">
                </div>
            </div>

            <label for="skills" class="font-semibold text-sm mt-4 mb-2 inline-block">Game Engines</label>
            <div class="flex gap-2 bg rounded-lg">
                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain" src="/assets/skill/unity3d.svg" alt="unity"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="unity">
                </div>

                <div class="cursor-pointer">
                    <img class="w-10 aspect-square object-contain" src="/assets/skill/unreal-engine.svg" alt="unreal engine"
                        @click="selectSkill()">
                    <input class="hidden" type="checkbox" name="unrealengine">
                </div>
            </div>
        </div>

        <div class="col-span-6">
            <label for="tags" class="font-semibold text-sec">Add Tags (trim with ",")</label>
            <div class="flex bg bg-white rounded-lg">
                <span class="flex justify-center items-center aspect-square h-10 border-r-2">
                    <i class="fa-solid fa-tags"></i>
                </span>
                <span class="flex items-center gap-2" id="tag-holder">
                </span>
                <input type="text" name="tags" v-model="tags" id="tag-input"
                    class="!bg-transparent outline-none px-2 w-full">
            </div>
        </div>

        <div class="col-span-6">
            <label for="give" class="font-semibold text-sec">What you're searching for</label>
            <div class="flex bg bg-white rounded-lg">
                <span class="flex justify-center items-center w-10 border-r-2">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <textarea rows="4" name="give" v-model="give" class="!bg-transparent outline-none px-2 py-2 w-full" />
            </div>
        </div>

        <div class="col-span-6">
            <label for="get" class="font-semibold text-sec">What you offer</label>
            <div class="flex bg bg-white rounded-lg">
                <span class="flex justify-center items-center w-10 border-r-2">
                    <i class="fa-solid fa-hand-holding-seedling"></i>
                </span>
                <textarea rows="4" name="get" v-model="get" class="!bg-transparent outline-none px-2 py-2 w-full" />
            </div>
        </div>
        <button @click="saveTeam()"
            class="button flex text-[var(--color-font)] whitespace-nowrap col-span-2 justify-center items-center mt-2">
            <i class="fa-solid fa-floppy-disk mr-2 !text-white"></i>Save Team
        </button>
        <p v-if="errorMessage" data-aos="zoom-in"
            class="w-full rounded py-2 px-4 text-sec font-semibold bg-red-600 text-white transition-300 col-span-2">* {{
                errorMessage }}</p>
    </div>
</template>

