<template>
  <div>
    <section class="px-98 bg-light-gray header pt-12 pb-20 mb-20">
      <div class="w-7/12">
        <p class="text-dark-gray text-32 lh-42 ls--064">Careers</p>
        <p class="text-primary lh-77 text-64 font-bold ls--128">
          To us, it is more than just travel, let's transform travel together
        </p>
        <p class="mt-4 lh-26 w-2/3">
          Join our exceptional team and be part of the travel revolution, where
          we strive to make travel seamless and effortless for travelers
          worldwide. We are dedicated to simplifying and creating unforgettable
          travel experiences for today and tomorrow.
        </p>
        <base-button variant="primary" class="mt-10"
          ><div class="flex">
            <span>See job openings</span>
            <img
              src="@/assets/images/icons/arrow-right.svg"
              alt="mail"
              class="ml-2"
              width="18"
            /></div
        ></base-button>
      </div>
    </section>
    <section class="flex justify-between px-98 my-24">
      <div class="w-1/2">
        <img
          src="@/assets/images/header-images/counselling.png"
          alt="counselling"
        />
      </div>
      <div class="w-1/2">
        <p class="font-bold lh-52 ls--08 text-4xl mb-8">
          Exquisite Escape Culture + Values
        </p>
        <div>
          <a-collapse v-model:activeKey="activeKey" :bordered="false" accordion>
            <template #expandIcon="{ isActive }">
              <div v-if="isActive" class="collapse-active" />
            </template>
            <a-collapse-panel key="1" header="Client-Centered Excellence">
              <p>
                Our unwavering commitment to placing our clients' needs at the
                forefront ensures that every travel experience we craft is a
                masterpiece of personalized service and meticulous attention to
                detail.
              </p>
            </a-collapse-panel>
            <a-collapse-panel key="2" header="Boundless Creativity">
              <p>
                Our unwavering commitment to placing our clients' needs at the
                forefront ensures that every travel experience we craft is a
                masterpiece of personalized service and meticulous attention to
                detail.
              </p>
            </a-collapse-panel>
            <a-collapse-panel
              key="3"
              header="Passion for Exceptional Adventures"
            >
              <p>
                Our unwavering commitment to placing our clients' needs at the
                forefront ensures that every travel experience we craft is a
                masterpiece of personalized service and meticulous attention to
                detail.
              </p>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </div>
    </section>
    <section class="flex justify-between px-98">
      <div class="w-1/3">
        <p class="text-xl text-dark-gray mb-3">At Exquisite escape, we...</p>
        <p class="text-primary font-bold text-4xl lh-52 ls--048">
          we work on important problems
        </p>
      </div>
      <div class="w-1/2">
        <p class="text-xl">
          Our fundamental mission revolves around enhancing efficiency within
          the realm of travel and addressing the various challenges that
          travelers often encounter. We're here to streamline the travel
          experience, making it more convenient, less complicated, and
          ultimately, problem-free.
        </p>
        <br />
        <p class="text-xl">
          Whether it's simplifying the booking process, providing real-time
          updates, or offering solutions to common travel issues, our goal is to
          ensure that your journey is as seamless and stress-free as possible.
        </p>
        <base-button variant="primary" class="mt-10"
          ><div class="flex">
            <span>Read our Story</span>
            <img
              src="@/assets/images/icons/arrow-right.svg"
              alt="mail"
              class="ml-2"
              width="18"
            /></div
        ></base-button>
      </div>
    </section>
    <section></section>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const activeKey = ref(["1"]);
    return {
      activeKey,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base/variables";
.header {
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    background-image: url("@/assets/images/illustrations/one-footprint.svg");
    background-size: cover;
    background-position: bottom;
    background-position-x: right;
    background-repeat: no-repeat;
    width: 50%;
    height: 64%;
  }
}
.ant-collapse-borderless {
  background: transparent !important;
}
.collapse-active {
  width: 50px;
  height: 4px;
  //   stroke-width: 4px;
  background: $primary;
}
.ant-collapse-header-text {
  font-size: 32px !important;
  line-height: 42px; /* 131.25% */
  letter-spacing: -0.64px;
  color: $dark-gray;
}
</style>
