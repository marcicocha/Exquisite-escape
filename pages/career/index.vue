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
        <img src="@/assets/images/header-images/counselling.png" alt="counselling"/>
      </div>
      <div class="w-1/2">
        <p class="font-bold lh-52 ls--08 text-3xl">
          Exquisite Escape Culture + Values
        </p>
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
  </div>
</template>
<style lang="scss" scoped>
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
</style>
