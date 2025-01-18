<script setup lang="ts" generic="T extends any, O extends any">
import packageJson from "../../package.json"

const viteVersion = packageJson.devDependencies.vite

defineOptions({
  name: 'IndexPage',
})

const name = ref('')

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <div i-carbon-campsite inline-block text-4xl />
    <p>
      <a rel="noreferrer" href="https://github.com/Vincent-the-gamer/vitesse-superslim" target="_blank">
        Vitesse Superslim
      </a>
    </p>
    <p>
      <em text-sm op75>Opinionated Vite starter template, but a superslim version. (*╹▽╹*)</em>
    </p>
    <h3 op75 m-1>Vite version: {{ viteVersion }}</h3>

    <div py-4 />

    <TheInput
      v-model="name"
      placeholder="What's your name?"
      autocomplete="false"
      @keydown.enter="go"
    />

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
    </div>
  </div>
</template>
