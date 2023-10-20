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
            <div class="download d-flex align-items-start">
              <div class="left d-flex flex-column">
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
    <section class="section">
      <h2>Latest news</h2>
      <div class="news d-flex">
        <div class="news-left">
          <NewsCard
            img=""
            title="Maintenance release: Godot 4.1.2"
            desc="As Godot 4.2 enters feature freeze this week, a new Godot 4.1 maintenance release arrives with a handful of improvements to stability and performance!"
            :responsive="false"
          ></NewsCard>
        </div>
        <div class="newslist">
          <NewsCard
            title="Dev snapshot: Godot 4.2 dev 6"
            desc="Final 4.2 dev snapshot before we enter the beta phase, and it's absolutely feature-packed!"
          ></NewsCard>
          <NewsCard
            title="Release candidate: Godot 4.1.2 RC 1"
            desc="It's long overdue for the second Godot 4.1 patch release! This release candidate contains a number o..."
          ></NewsCard>
          <NewsCard
            title="Release candidate: Godot 4.1.2 RC 1"
            desc="It's long overdue for the second Godot 4.1 patch release! This release candidate contains a number o..."
          ></NewsCard>
          <div class="btnContainer">
            <DefaultButton>More News</DefaultButton>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <h2>A different way to make games</h2>
      <div class="row row-cols-md-3 row-cols-sm-1">
        <FeatureCard
          v-for="item in featureList"
          :title="item.title"
          :desc="item.desc"
          :img="item.img"
        ></FeatureCard>
      </div>
    </section>
    <section>
      <div class="btn">
        <DefaultButton>Learn more about using Godot</DefaultButton>
      </div>
    </section>
    <section class="container">
      <h2>Get involved</h2>
      <p>
        Join the community and help create a game engine that belongs to
        everybody.
      </p>
      
        <div class=" row row-cols-md-3 row-cols-sm-1">
        <InvolvedCard
          v-for="item in involvedList"
          :title="item.title"
          :desc="item.desc"
          :img="item.img"
        ></InvolvedCard>
     
      </div>
    </section>
    <section id="donations" class="container">
      <div class="row row-cols-md-1 d-flex justify-content-center flex-wrap">
        <img
          style="width: 400px; display: block"
          src="/home/godot-foundation-logo-dark.svg"
          alt=""
        />
        <p style="display: block">
          You don't need to be an engine developer to help Godot. Join the
          development fund and help us make the Godot Engine even more awesome!
        </p>
        <DefaultButton>Donate</DefaultButton>
      </div>
    </section>
    <section class="container">
      <h2>Godot is sponsored by:</h2>
      <h3>Patron</h3>
      
        <div class="row row-cols-md-2 row-cols-sm-1">
          <img class="col" src="/home/ossc-logo.svg" alt="" />
          <img class="col" src="/home/re-logic.png" alt="" />
        
      </div>

      <h3>Sponsor Platinum</h3>
      <div class="container">
        <div class="row row-cols-md-3 row-cols-sm-1">
          <img class="col" src="/home/spiffcode.png" alt="" />
          <img class="col" src="/home/heroiclabs.png" alt="" />
          <img class="col" src="/home/w4.png" alt="" />
          <img class="col" src="/home/ramatak.png" alt="" />
        </div>
      </div>
      <h3>Sponsor Gold</h3>
      <h3>Sponsor Silver</h3>
    </section>
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

<style lang="scss" scoped>
p {
  color: white;
}
.padded {
  padding-top: 64px;
  padding-bottom: 64px;
}
main {
  position: relative;
  section {
    background-color: #25282b;
  }
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
      background-size: cover;
      background-position: center center;
      background-blend-mode: darken;
    }
    .wrapper {
      max-width: 1200px;
      margin: 0 auto;
      height: 100%;
      padding: 200px 20px 120px;

      
        h1 {
          font-size: 60px;
          text-shadow: 0 0 28px #00000080;
          margin-bottom: 20px;
          color: white;
          font-weight: bold;
        }
        p {
          font-size: 20px;
          line-height: 1.5;
          margin-bottom: 20px;
          max-width: 550px;
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
  .section {
    gap: 30px;
    padding-top: 64px;
    padding-bottom: 64px;
    width: 1200px;
    max-width: 1200px;
    margin: auto;
    overflow: visible;
  }
  .news {
    // background-color: aqua;
    gap: 30px;
    .news-left {
      flex: 1;
    }
    .newslist {
      flex: 1;
      // background-color: red;
      display: grid;
      gap: 18px;
      .btnContainer {
        // background-color: aquamarine;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
  }
  .involved {
    display: flex;
  }
  #donations {
    background-color: #263256;
  }
}
</style>
