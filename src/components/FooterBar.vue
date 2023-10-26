<template>
  <footer>
    <div class="bottom">
      <div class="copyright">
        <p>
          © 2007-2023 Juan Linietsky, Ariel Manzur and <u>contributors</u> .
          Hosted by the <u>Godot Foundation</u>. Website <u>source code</u> on
          GitHub.
        </p>
      </div>
      <div class="second">
        <div>
          <b>Get Godot</b>
          <u>Download</u>
          <u>Web</u>
          <u>Editor</u>
          <b>Public Relations</b>
          <u>Blog</u>
          <u>Communities</u>
          <u>Press Kit</u>
        </div>
        <div>
          <b>About Godot</b>
          <u>Features</u>
          <u>Showcase</u>
          <u>Education</u>
          <u>License</u>
          <u>Code of Conduct</u>
          <u>Privacy Policy</u>
          <u>Donate</u>
        </div>
        <div>
          <b>Project Team</b>
          <u>Governance Teams</u>
          <b>Extra Resources</b>
          <u>Asset Library</u>
        </div>
      </div>
      <div class="icon">
        <p><u>Contact us</u></p>
        <div>
          <img src="/footer/github_logo.svg" alt="" />
          <img src="/footer/mastodon_logo.svg" alt="" />
          <img src="/footer/feed_logo.svg" alt="" />
          <img src="/footer/facebook_logo.svg" alt="" />
          <img src="/footer/reddit_logo.svg" alt="" />
          <img src="/footer/twitter_logo.svg" alt="" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
footer {
  padding-top: 20px;
  background-color: #414d69;
  color: rgb(175, 180, 220);

  .bottom {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    justify-items: center;
    .copyright {
      text-align: left;
    }
    .second {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 10px;
      div {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
    .icon {
      line-height: 0;
      text-align: right;
      font-size: 20px;
      font-weight: bold;
      div {
        margin-top: 20px;
      }
    }
  }
}
@media (min-width: 1200px) {
  footer {
    padding: 50px 100px;
    .copyright {
      max-width: 368px;
    }
  }
}
@media (max-width: 1200px) {
  footer {
    .bottom {
      .copyright {
        text-align: center;
      }
      grid-template-columns: 1fr;
      .second {
        grid-template-columns: 1fr 1fr 1fr;
      }
      .icon {
        text-align: center;
      }
    }
  }
}
@media (max-width: 768px) {
  footer {
    padding-bottom: 30px;
    .bottom {
      .second {
        grid-template-columns: 1fr;
        text-align: center;
      }
      .icon {
        text-align: center;
      }
    }
  }
}
</style>
