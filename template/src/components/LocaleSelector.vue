<template>
    <div class="locale-selector">
        <div class="language-buttons">
            <button @click="changeLanguage('en')" :class="{ active: currentLocale === 'en' }">
                {{ $t('home.english') }}
            </button>
            <button @click="changeLanguage('pt-BR')" :class="{ active: currentLocale === 'pt-BR' }">
                {{ $t('home.portuguese') }}
            </button>
            <button @click="changeLanguage('es')" :class="{ active: currentLocale === 'es' }">
                {{ $t('home.spanish') }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLocale = locale

const changeLanguage = (lang: string) => {
    locale.value = lang
    localStorage.setItem('locale', lang)
}
</script>

<style scoped>
.locale-selector {
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
}

.language-buttons {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
}

.locale-selector button {
    margin: 0;
    padding: 0.25rem 0.5rem;
    background: none;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    width: 80px;
}

.locale-selector button.active {
    background-color: #42b983;
    color: white;
    border-color: #42b983;
}
</style>