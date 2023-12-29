<template>
  <div>
    <h2>Legal Agreement</h2>
    <div>
      <button>Terms of service</button>
      <button>Privacy policy</button>
      <button>Terms and conditions</button>
      <button>Cookies Policy</button>
      <button>Exquisite Escape terms of service - customer</button>
      <button>Refund policy</button>
      <button>Exquisite Escape website & dashboard terms of use</button>
    </div>
    <section>
      <div>
        <privacy-policy />
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PrivacyPolicy from "~/components/legal/PrivacyPolicy.vue";
export default defineComponent({
  components: {
    PrivacyPolicy,
  },
  setup() {},
});
</script>
