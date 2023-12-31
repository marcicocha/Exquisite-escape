<template>
  <footer class="px-98">
    <div class="footer-grid">
      <div class="footer-block">
        <div class="footer-block-title">Support</div>
        <ul class="footer-block-links">
          <li>
            <router-link to="/help-center" class="footer-link"
              >Help Center</router-link
            >
          </li>
          <li>
            <router-link to="/#" class="footer-link"
              >Cancel your flight</router-link
            >
          </li>
          <li>
            <router-link to="/#" class="footer-link"
              >Contact customer care</router-link
            >
          </li>
          <li>
            <router-link to="/#" class="footer-link"
              >Cancel your transfer booking
            </router-link>
          </li>
          <li>
            <router-link to="/#" class="footer-link"
              >Cancel your hotel booking</router-link
            >
          </li>
          <li>
            <router-link to="/#" class="footer-link"
              >Refund timeline and polices & process</router-link
            >
          </li>
        </ul>
      </div>

      <div class="footer-block">
        <div class="footer-block-title">Exquisite Escape</div>
        <ul class="footer-block-links">
          <li>
            <router-link to="/about" class="footer-link">About us</router-link>
          </li>
          <li>
            <router-link to="/blog" class="footer-link">Blog</router-link>
          </li>
          <li>
            <router-link to="/career" class="footer-link">Jobs</router-link>
          </li>
          <li>
            <router-link to="/#" class="footer-link">Contact us </router-link>
          </li>
          <li>
            <router-link to="/#" class="footer-link">Press</router-link>
          </li>
          <li>
            <router-link to="/#" class="footer-link">Feedback</router-link>
          </li>
        </ul>
      </div>

      <div class="footer-block">
        <div class="footer-block-title">Explore</div>
        <ul class="footer-block-links">
          <li>
            <router-link to="/#" class="footer-link">Hotels</router-link>
          </li>
          <li>
            <router-link to="/#" class="footer-link">Flights</router-link>
          </li>
          <li>
            <router-link to="/#" class="footer-link">Tours</router-link>
          </li>
          <li>
            <router-link to="/#" class="footer-link">Transfers</router-link>
          </li>
          <li>
            <router-link to="/#" class="footer-link">Packages</router-link>
          </li>
        </ul>
      </div>

      <div class="footer-block">
        <div class="footer-block-title">Account</div>
        <ul class="footer-block-links">
          <li>
            <router-link to="/auth" class="footer-link">My account</router-link>
          </li>
          <li>
            <router-link to="/#" class="footer-link"
              >Become an affliiate</router-link
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-note-wrapper flex justify-between items-center">
      <div class="footer-copyright-side">
        © 2023 Exquisite Escape an Applause Global Services Company ·
        <a href="#">Terms</a> · <a href="#">Sitemap</a> ·
        <a href="#">Privacy</a>
      </div>

      <div class="footer-social-side flex items-center gap-20">
        <div class="flex items-center gap-10 font-bold">
          <img src="@/assets/images/icons/globe.svg" alt="globe" class="globe-icon" />
          <span class="ls--036">English (US)</span>
        </div>
        <div class="font-bold ls--036">$ USD</div>
        <ul class="footer-social-links flex items-center gap-10">
          <li>
            <a
              href="http://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="@/assets/images/icons/x.svg"
                alt="twitter"
                class="social-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="@/assets/images/icons/fb.svg"
                alt="facebook"
                class="social-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="http://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="@/assets/images/icons/ig.svg"
                alt="instagram"
                class="social-icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  setup() {},
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base/variables.scss";

footer {
  padding: 74px 0 45px;
  background: $light-gray;
  font-size: 18px;
}
.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1fr;
  justify-content: space-between;
}
.footer-note-wrapper {
  padding-top: 25px;
  border-top: 1px solid $grey;
  margin-top: 100px;
  font-size: 18px;
}
.footer-block-title {
  font-size: 24px;
  margin-bottom: 20px;
}
ul.footer-block-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
ul.footer-block-links li {
  // margin: 0 8px;
}
ul.footer-block-links li a {
  color: $grey;
  font-size: 18px;
}

.footer-note-wrapper a {
  color: $grey;
  text-decoration: underline;
}

@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  .footer-note-wrapper {
    padding-top: 35px;
    margin-top: 60px;
    flex-direction: column;
    gap: 20px;
  }
}

@media (max-width: 600px) {
}
</style>
