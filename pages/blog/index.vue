<template>
  <section class="px-98 mb-16">
    <h2 class="text-dark-gray font-bold text-4xl lh-77 ls--128 mb-2">
      Exquisite Escape Blog
    </h2>
    <p class="text-lg lh-31 ls--048">Explore our travel-focused articles</p>
    <div class="flex items-center gap-2 mt-4">
      <div class="input-field">
        <input
          type="text"
          class="inp-field w-full"
          v-model="emailAddress"
          placeholder="Enter Email Address"
          required
        />
      </div>
      <base-button variant="primary" style="height: fit-content">
        <div class="flex">
          <span>Subscribe</span>
          <img
            src="@/assets/images/icons/email.svg"
            alt="mail"
            class="ml-2"
            width="18"
          />
        </div>
      </base-button>
    </div>

    <section class="my-16">
      <div class="flex flex-wrap gap-4">
        <base-button
          :variant="
            blogObject.travelTopicFlag === 'travelNews' ? 'primary' : 'neutral'
          "
          size="small"
          class="rounded-lg"
          @click="travelTopicHandler('travelNews')"
          >Travel news</base-button
        >
        <base-button
          :variant="
            blogObject.travelTopicFlag === 'travelPackage'
              ? 'primary'
              : 'neutral'
          "
          size="small"
          class="rounded-lg"
          @click="travelTopicHandler('travelPackage')"
          >Travel package</base-button
        >
        <base-button
          :variant="
            blogObject.travelTopicFlag === 'travelTips' ? 'primary' : 'neutral'
          "
          size="small"
          class="rounded-lg"
          @click="travelTopicHandler('travelTips')"
          >Travel tips</base-button
        >
        <base-button
          :variant="
            blogObject.travelTopicFlag === 'topDestinations'
              ? 'primary'
              : 'neutral'
          "
          size="small"
          class="rounded-lg"
          @click="travelTopicHandler('topDestinations')"
          >Top destinations</base-button
        >
        <base-button
          :variant="
            blogObject.travelTopicFlag === 'placesToVisit'
              ? 'primary'
              : 'neutral'
          "
          size="small"
          class="rounded-lg"
          @click="travelTopicHandler('placesToVisit')"
          >Places to visit</base-button
        >
      </div>
    </section>
    <section>
      <BlogTopicParentComponent />
    </section>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import BlogTopicParentComponent from "@/components/blog/BlogTopicParentComponent.vue";
export default defineComponent({
  components: {
    BlogTopicParentComponent,
  },
  setup() {
    const blogObject = ref({
      emailAddress: "",
      travelTopicFlag: "travelNews",
    });
    // methods

    const travelTopicHandler = (flag: string) => {
      blogObject.value.travelTopicFlag = flag;
    };
    return {
      blogObject,
      travelTopicHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base/variables.scss";

.input-field {
  margin: 0;
  width: 300px;
}
input.inp-field {
  border-radius: 10px;
  border: 1px solid $primary;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  height: 58px;
  padding: 0 16px;
  box-sizing: border-box;
  color: white;
  //   margin-bottom: 20px;
  background: transparent;
}
</style>
