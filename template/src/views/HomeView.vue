<template>
    <div class="home-view">
        <h1>{{ $t('home.hello') }}</h1>
        <span>{{ $t('home.environment', { environment: environmentType }) }}</span>
        <LocaleSelector />
        <a class="github-link" href="https://github.com/osamucadev/vuedosam" target="_blank"><span class="star-icon">⭐</span>on Github.</a>
    </div>
</template>

<script setup lang="ts">
import LocaleSelector from '@/components/LocaleSelector.vue';

const environmentType = import.meta.env.VITE_ENVIRONMENT_TYPE;
</script>

<style scoped>
.home-view {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.github-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 2rem;
    padding: 0.75rem 1.5rem;
    background-color: #f5f5f5;
    color: #333;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.3s ease;
    border: 1px solid #e0e0e0;
}

.github-link:hover {
    background-color: #42b983;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #42b983;
}

.star-icon {
    font-size: 1.2rem;
}
</style>