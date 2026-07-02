<script setup>
import SiteHeader from './components/layout/SiteHeader.vue'
import SiteFooter from './components/layout/SiteFooter.vue';
import HeroSection from './components/sections/HeroSection.vue';
import AboutSection from './components/sections/AboutSection.vue';
import CatalogSection from './components/sections/CatalogSection.vue';
import MemorySection from './components/sections/MemorySection.vue';
import PurchaseSection from './components/sections/PurchaseSection.vue';
import SocialSection from './components/sections/SocialSection.vue';
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <AboutSection />
    <CatalogSection />
    <MemorySection />
    <PurchaseSection />
    <SocialSection />
  </main>
    <SiteFooter />
</template>