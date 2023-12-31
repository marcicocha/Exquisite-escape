<template>
  <div class="px-98">
    <div id="newsletter-block">
      <div class="container">
        <div class="newsletter-text-form-wrapper flex justify-between">
          <div class="newsletter-text-side">
            <h2 class="newsletter-block-title text-primary">
              Want to get the latest travel news and deals?
            </h2>
            <p class="newsletter-block-desc text-white">
              Enter your email and we'll send them your way.
            </p>
          </div>
          <div class="newsletter-form-side">
            <form
              action="#"
              id="newsletter-form"
              @submit.prevent="subscribe"
              class="flex gap-5 items-end"
            >
              <div class="input-field-wrapper">
                <div class="grid grid-cols-2 gap-10">
                  <div class="input-field">
                    <input
                      type="text"
                      class="inp-field w-full"
                      v-model="firstName"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div class="input-field">
                    <input
                      type="text"
                      class="inp-field w-full"
                      v-model="lastName"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
                <div class="input-field">
                  <input
                    type="email"
                    class="inp-field w-full"
                    v-model="email"
                    placeholder="Your email..."
                    required
                  />
                </div>
              </div>
              <div class="submit-btn-wrapper">
                <base-button variant="primary" type="submit">
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
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ContactUs",
  components: {},
  setup() {
    const subscribeObject = ref({
      email: "",
      lastName: "",
      firstName: "",
    });
    const subscribeHandler = () => {
      console.log(`Subscribed with email: ${this.subscribeObject.value.email}`);
      this.subscribeObject.value = {
        email: "",
        lastName: "",
        firstName: "",
      };
    };
    return {
      subscribeObject,
      subscribeHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base/variables.scss";

#newsletter-block {
  margin: 90px 0;
}
.newsletter-text-form-wrapper {
  border-radius: 10px;
  background: #0a0a0a;
  padding: 50px 25px;
}
.newsletter-text-side {
  max-width: 48%;
}
h2.newsletter-block-title {
  font-size: 40px;
  margin: 0;
  line-height: 46px;
  letter-spacing: -0.8px;
  font-weight: 600;
}
p.newsletter-block-desc {
  font-size: 24px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: -0.48px;
  margin-top: 5px;
}
.newsletter-form-side {
  max-width: 50%;
}
form#newsletter-form .input-field {
  margin: 0;
}
form#newsletter-form input.inp-field {
  border-radius: 10px;
  border: 1px solid $primary;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  height: 58px;
  padding: 0 16px;
  box-sizing: border-box;
  color: white;
  margin-bottom: 20px;
  background: transparent;
}
form#newsletter-form button.submit-btn {
  border-radius: 10px;
  border: 1px solid $primary;
  background: $primary;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  height: 58px;
  width: 155px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 15px;
  font-size: 16px;
}

@media (min-width: 993px) {
  .newsletter-text-form-wrapper {
    padding: 100px 60px;
  }
  form#newsletter-form .input-field-wrapper > .input-field input.inp-field {
    margin-bottom: 0;
  }
}

@media (max-width: 992px) {
  .newsletter-text-form-wrapper {
    flex-direction: column;
    align-items: flex-start;
    gap: 35px;
  }
  .newsletter-form-side {
    max-width: none;
  }
  form#newsletter-form button.submit-btn {
    margin-bottom: 20px;
  }
}

@media (max-width: 600px) {
  form#newsletter-form {
    flex-direction: column;
  }
  form#newsletter-form .submit-btn-wrapper,
  form#newsletter-form .submit-btn-wrapper > button {
    width: 100%;
  }
}
</style>
