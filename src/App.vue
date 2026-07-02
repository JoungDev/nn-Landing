<script setup>
import SiteHeader from './components/layout/SiteHeader.vue'
import HeroSection from './components/sections/HeroSection.vue';
import AboutSection from './components/sections/AboutSection.vue';
import CatalogSection from './components/sections/CatalogSection.vue';
import MemorySection from './components/sections/MemorySection.vue';
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <AboutSection />
    <CatalogSection />
    <MemorySection />
  </main>
</template>