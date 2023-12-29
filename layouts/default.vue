<template>
  <div>
    <Header />
    <slot />
    <ContactUs />
    <Footer />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Footer from "~/components/layouts/Footer.vue";
import Header from "~/components/layouts/Header.vue";
import ContactUs from "~/components/layouts/ContactUs.vue";
export default defineComponent({
  components: {
    Footer,
    ContactUs,
    Header,
  },
});
</script>
