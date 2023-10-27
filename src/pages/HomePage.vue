<template>
  <main>
    <section class="hero">
      <div class="background-image">
        <div class="wrapper">
          <div class="container">
            <h1>The game engine you've been waiting&nbsp; for.</h1>
            <p>
              The Godot Engine is a free, all-in-one, cross-platform game engine
              that makes it easy for you to create 2D and 3D games.
            </p>
            <div
              class="download d-flex justify-content-sm-center justify-content-lg-start flex-wrap"
            >
              <div
                class="left d-flex justify-content-sm-center flex-wrap flex-md-column"
              >
                <DownloadButton hint="4.1.1">Download Latest</DownloadButton>
                <DownloadButton hint="3.5.3" :default-color="false"
                  >Download LTS
                </DownloadButton>
              </div>
              <div class="right">
                <DefaultButton>Learn More</DefaultButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 英雄页 -->
    <section class="section container padded">
      <h2>Latest news</h2>
      <div class="news row row-cols-lg-2">
        <div class="news-left">
          <NewsCard
            img=""
            title="Maintenance release: Godot 4.1.2"
            desc="As Godot 4.2 enters feature freeze this week, a new Godot 4.1 maintenance relea"
            :responsive="false"
          ></NewsCard>
        </div>
        <div class="newslist row rows-lg-3 gap-3">
          <NewsCard
            title="Dev snapshot: Godot 4.2 dev 6"
            desc="Final 4.2 dev snapshot before we enter the beta phase, and it's absolutely feature-packed!"
          ></NewsCard>
          <NewsCard
            title="Release candidate: Godot 4.1.2"
            desc="With all planned major and minor features implemented, Godot 4.2 is ready for "
          ></NewsCard>
          <NewsCard
            title="Release candidate: Godot 4.1.2 RC 1"
            desc="It's long overdue for the second Godot 4.1 patch release! This release candidate contains a number o..."
          ></NewsCard>
          <div class="d-flex justify-content-md-end justify-content-sm-start">
            <DefaultButton
              bg-color="white"
              text-color="#546b99"
              class="w-sm-75 w-md-25 h-75"
              >More News</DefaultButton
            >
          </div>
        </div>
      </div>
    </section>
    <!-- 新闻 -->
    <section class="container section padded">
      <h2>A different way to make games</h2>
      <div class="featureList">
        <FeatureCard
          v-for="item in featureList"
          :title="item.title"
          :desc="item.desc"
          :img="item.img"
        ></FeatureCard>
      </div>
      <div class="container d-flex justify-content-center mt-3">
        <DefaultButton class="w-md-50 w-sm-75"
          >Learn more about using Godot</DefaultButton
        >
      </div>
    </section>
    <!-- 特性 -->
    <section class="container section padded">
      <h2>Get involved</h2>
      <p>
        Join the community and help create a game engine that belongs to
        everybody.
      </p>

      <div class="involve">
        <InvolvedCard
          class="col"
          v-for="item in involvedList"
          :title="item.title"
          :desc="item.desc"
          :img="item.img"
        ></InvolvedCard>
      </div>
    </section>
    <!-- 参与 -->
    <section id="donations" class="container-fluid padded">
      <div class="d-flex flex-column align-items-center">
        <img src="/home/godot-foundation-logo-dark.svg" alt="" />
        <p>
          You don't need to be an engine developer to help Godot. Join the
          <u>development fund</u> and help us make the Godot Engine even more
          awesome!
        </p>
        <DefaultButton>Donate</DefaultButton>
      </div>
    </section>
    <!-- 捐赠 -->
    <section class="container section padded">
      <h2>Godot is sponsored by:</h2>
      <h3>Patron</h3>

      <div class="patron spomsor-sm">
        <img class="sponsor" src="/home/ossc-logo.svg" alt="" />
        <img class="sponsor" src="/home/re-logic.png" alt="" />
      </div>

      <h3>Sponsor Platinum</h3>

      <div class="platinum spomsor-sm">
        <img class="sponsor" src="/home/spiffcode.png" alt="" />
        <img class="sponsor" src="/home/heroiclabs.png" alt="" />
        <img class="sponsor" src="/home/w4.png" alt="" />
        <img class="sponsor" src="/home/ramatak.png" alt="" />
      </div>
      <h3>Sponsor Gold</h3>
      <div class="gold spomsor-sm">
        <img class="sponsor" src="/home/pt.png" alt="" />
        <img class="sponsor" src="/home/robot-gentleman.png" alt="" />
      </div>
      <h3>Sponsor Silver</h3>
      <div class="silver spomsor-sm">
        <img class="sponsor" src="/home/affray-interactive.png" alt="" />
        <img class="sponsor" src="/home/playful-studios.png" alt="" />
        <img class="sponsor" src="/home/gamblify.png" alt="" />
        <img class="sponsor" src="/home/orbital-knight.png" alt="" />
        <img class="sponsor" src="/home/broken-rules.svg" alt="" />
        <img class="sponsor" src="/home/chasing-carrots.webp" alt="" />
      </div>
      <p style="margin: 20px 0 10px">
        If you want to sponsor the project, please write to
        <u>contact@godot.foundation</u>.
      </p>
    </section>
    <!-- 赞助 -->
  </main>
</template>

<script setup>
import DownloadButton from "../components/DownloadButton.vue";
import DefaultButton from "../components/DefaultButton.vue";
import NewsCard from "../components/NewsCard.vue";
import FeatureCard from "../components/FeatureCard.vue";
import InvolvedCard from "../components/InvolvedCard.vue";
const featureList = [
  {
    title: "Innovative design",
    desc: "Godot's Node and Scene system gives you both power and flexibility to create anything.",
    img: "home/innovative.webp",
  },
  {
    title: "Use the right language for the job",
    desc: "Keep your code modular with an object-oriented API using Godot's own GDScript, C#, C++, or bring your own using GDExtension.",
    img: "home/language.webp",
  },
  {
    title: "Dedicated 2D engine",
    desc: "Make crisp and performant 2D games with Godot's dedicated 2D rendering engine with real 2D pixel coordinates and 2D nodes.",
    img: "home/2d.webp",
  },
  {
    title: "Simple and powerful 3D",
    desc: "Godot's 3D nodes give you everything you need to build, animate, and render your 3D worlds and characters.",
    img: "home/3d.webp",
  },
  {
    title: "Release on all platforms",
    desc: "Deploy your game on desktop, mobile, and the web in seconds. Godot even supports consoles through third party publishers.",
    img: "home/cross-platform.svg",
  },
  {
    title: "Open Source",
    desc: "Truly open development: anyone who contributes to Godot benefits equally from others’ contributions.",
    img: "home/oss.svg",
  },
];
const involvedList = [
  {
    title: "Code",
    desc: "If you know how to code, you can help by fixing bugs and working with engine contributors towards the implementation of new features.",
    img: "home/code.svg",
  },
  {
    title: "Document",
    desc: "Documentation quality is essential in a game engine; help make it better by updating the API reference, writing new guides or submitting corrections.",
    img: "home/document.svg",
  },
  {
    title: "Report",
    desc: "Found a problem with the engine? Don't forget to report it so that developers can track it down.",
    img: "home/report.svg",
  },
];
</script>

<style lang="scss">
// 每个页面都有的样式
.section {
  max-width: 1200px;
}
#donations {
  p {
    max-width: 500px;
    color: lightsteelblue;
    u {
      color: #3689c9;
    }
  }
}
// 赞助
.sponsor {
  mix-blend-mode: multiply;
  width: 100%;
  height: 100%;
  max-height: 100px;
  background-color: rgb(209, 219, 227);
  border-radius: 8px;
  padding: 17px;
  object-fit: contain;
  &:hover {
    filter: brightness(117.5%);
  }
}
.patron {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.platinum {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
.gold {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  .sponsor {
    background-color: rgb(224, 223, 213);
  }
}
.silver {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  .sponsor {
    background-color: rgb(227, 227, 227);
  }
}
// 功能列表
.featureList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
}
//  上下间距
.padded {
  padding-top: 64px;
  padding-bottom: 64px;
}
//
main {
  position: relative;
  .hero {
    z-index: 1;
    width: 100%;
    max-height: 800px;
    height: 800px;
    .background-image {
      width: 100%;
      height: 100%;
      background-image: url("../assets/images/primal-light-1.png");
      background-attachment: fixed;
      // 视差
      background-size: cover;
      background-position: center center;
      background-blend-mode: darken;
      // background-color: rgb(51, 63, 103, 0.4);
    }

    .wrapper {
      max-width: 1200px;
      margin: 0 auto;
      height: 100%;
      padding: 200px 20px 120px;

      h1 {
        max-width: 670px;
        font-size: 60px;
        text-shadow: 0 0 28px #00000080;
        margin-bottom: 20px;
        color: white;
        font-weight: bold;
      }
      p {
        max-width: 600px;
        font-size: 20px;
        line-height: 1.5;
        margin-bottom: 20px;

        text-shadow: 0 0 28px #00000080;
        color: white;
      }
      .download {
        margin-top: 48px;
        gap: 48px;
        .left {
          gap: 24px;
        }
      }
    }
  }

  #donations {
    background-color: #263256;
    p {
      text-align: center;
      color: #4a5365;
    }
    u {
      color: hsl(206, 58%, 50%);
    }
    img {
      width: 400px;
    }
  }
}
.involve {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
// 参与
@media (max-width: 1200px) {
  .hero {
    h1 {
      font-size: 40px !important;
    }
  }
}
// 英雄页
@media (max-width: 992px) {
  .featureList {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .involve {
    grid-template-columns: 1fr;
  }
}
// 特性
@media (max-width: 768px) {
  .spomsor-sm {
    grid-template-columns: 1fr !important;
  }

  .newslist {
    article {
      grid-template-columns: 80px 1fr !important;
      grid-column-gap: 10px;
      .left {
        width: 80px;
      }
      p {
        display: none;
      }
    }
  }
  // 新闻
}
// 移动端
</style>
