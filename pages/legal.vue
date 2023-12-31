<template>
  <div class="px-98">
    <h2
      class="text-dark-gray font-bold text-4xl lh-77 text-center ls--128 mb-3"
    >
      Legal Agreement
    </h2>
    <div class="text-center flex flex-wrap justify-center gap-4">
      <base-button
        :variant="
          termsObject.termsFlag === 'termsServiced' ? 'primary' : 'neutral'
        "
        class="rounded-lg"
        @click="termsHandler('termsServiced')"
        >Terms of service</base-button
      >
      <base-button
        :variant="
          termsObject.termsFlag === 'privacyPolicy' ? 'primary' : 'neutral'
        "
        class="rounded-lg"
        @click="termsHandler('privacyPolicy')"
        >Privacy policy</base-button
      >
      <base-button
        :variant="
          termsObject.termsFlag === 'termsCondition' ? 'primary' : 'neutral'
        "
        class="rounded-lg"
        @click="termsHandler('termsCondition')"
        >Terms and conditions</base-button
      >
      <base-button
        :variant="
          termsObject.termsFlag === 'cookiesPolicy' ? 'primary' : 'neutral'
        "
        class="rounded-lg"
        @click="termsHandler('cookiesPolicy')"
        >Cookies Policy</base-button
      >
      <base-button
        :variant="
          termsObject.termsFlag === 'exquisiteEscapeTermsService'
            ? 'primary'
            : 'neutral'
        "
        class="rounded-lg"
        @click="termsHandler('exquisiteEscapeTermsService')"
        >Exquisite Escape terms of service - customer</base-button
      >
      <base-button
        :variant="
          termsObject.termsFlag === 'refundPolicy' ? 'primary' : 'neutral'
        "
        class="rounded-lg"
        @click="termsHandler('refundPolicy')"
        >Refund policy</base-button
      >
      <base-button
        :variant="
          termsObject.termsFlag === 'exquisiteEscapeWebsite'
            ? 'primary'
            : 'neutral'
        "
        class="rounded-lg"
        @click="termsHandler('exquisiteEscapeWebsite')"
        >Exquisite Escape website & dashboard terms of use</base-button
      >
    </div>
    <section>
      <div class="bg-cyan py-16 px-10 mt-6">
        <privacy-policy />
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import PrivacyPolicy from "~/components/legal/PrivacyPolicy.vue";
export default defineComponent({
  components: {
    PrivacyPolicy,
  },
  setup() {
    const termsObject = ref({
      termsFlag: "privacyPolicy",
      isLoading: false,
    });
    const termsHandler = (flag: string) => {
      termsObject.value.termsFlag = flag;
    };
    return {
      termsObject,
      termsHandler,
    };
  },
});
</script>
