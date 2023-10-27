<template>
  <div class="features-why container-fluid">
    <h2>Why Godot is right for you</h2>
    <div class="features-showcase">
      <p>A picture is worth a thousand words, and these developers have chosen Godot for their projects:</p>
      <div id="features-carousel" class="carousel slide showcase-carousel">
        <img src="../../public/features/editor-frame.png" alt="" class="showcase-frame">
        <div class="carousel-inner showcase-items" id="showcase-items">
          <div class="showcase-item carousel-item active">
            <img src="../../public/features/carousel_01.png" alt="">
            <div class="showcase-credits">
              <a href="">
                <span class="showcase-title">Ex Zodiac </span>
                <span class="showcase-author">- Ben Hickling</span>
              </a>
            </div>
          </div>

          <div class="showcase-item carousel-item ">
            <img src="../../public/features/carousel_02.webp" alt="">
            <div class="showcase-credits">
              <a href="">
                <span class="showcase-title">Usagi Shima </span>
                <span class="showcase-author">- pank0</span>
              </a>
            </div>
          </div>

          <div class="showcase-item carousel-item ">
            <img src="../../public/features/carousel_03.jpg" alt="">
            <div class="showcase-credits">
              <a href="">
                <span class="showcase-title">TailQuest Denfense </span>
                <span class="showcase-author">- Kivano Games</span>
              </a>
            </div>
          </div>

          <div class="showcase-item carousel-item ">
            <img src="../../public/features/carousel_04.webp" alt="">
            <div class="showcase-credits">
              <a href="">
                <span class="showcase-title">Cassette Beasts </span>
                <span class="showcase-author">- Bytten Studio</span>
              </a>
            </div>
          </div>

          <div class="showcase-item carousel-item ">
            <img src="../../public/features/carousel_05.jpg" alt="">
            <div class="showcase-credits">
              <a href="">
                <span class="showcase-title">Fist of the Forgotten </span>
                <span class="showcase-author">- Lone Wulf Studio</span>
              </a>
            </div>
          </div>

          <div class="showcase-item carousel-item ">
            <img src="../../public/features/carousel_06.jpg" alt="">
            <div class="showcase-credits">
              <a href="">
                <span class="showcase-title">Dome Keeper </span>
                <span class="showcase-author">- Bippinbits</span>
              </a>
            </div>
          </div>


          <div class="showcase-item carousel-item ">
            <img src="../../public/features/carousel_07.jpg" alt="">
            <div class="showcase-credits">
              <a href="">
                <span class="showcase-title">Resolutiion </span>
                <span class="showcase-author">- Monolith of Minds</span>
              </a>
            </div>
          </div>

          <div class="showcase-item carousel-item ">
            <img src="../../public/features/carousel_08.jpg" alt="">
            <div class="showcase-credits">
              <a href="">
                <span class="showcase-title">A Most Extraodinary Gnome </span>
                <span class="showcase-author">- Save Sloth Studios</span>
              </a>
            </div>
          </div>

          <div class="showcase-item carousel-item ">
            <img src="../../public/features/carousel_09.jpg" alt="">
            <div class="showcase-credits">
              <a href="">
                <span class="showcase-title">Halls of Torment </span>
                <span class="showcase-author">- Chasing Carrots</span>
              </a>
            </div>
          </div>


          <button class="carousel-control-prev arrow-left" type="button" data-bs-target="#features-carousel"
            data-bs-slide="prev"></button>
          <button class="carousel-control-next arrow-right" type="button" data-bs-target="#features-carousel"
            data-bs-slide="next"></button>
        </div>

      </div>

    </div>
    <a href="#" class="features-see-more">
      See more projects made with Godot
    </a>
  </div>

  <main>
    <div class="container">
      <h2>Main features</h2>
      <h3>Intuitive scene-driven design</h3>
    </div>
    <div class="features-wrapper">
      <div id="design" class="feature-container">
        <div class="card feature-card ">
          <h4>Build your game from simple blocks</h4>
          <p>Use building blocks called nodes to create more complex and reusable scenes. Add scripts to your scenes and
            customize built-in behavior to implement your unique game mechanics. Rely on composition and node hierarchy to
            make game logic clear at a glance.</p>
        </div>
        <div class="card feature-card ">
          <h4>Extend beyond features provided by th engine</h4>
          <p>Make your scenes into full-featured components, with tools for your designers to tweak and adjust the look
            and function. Share your components with the community of like-minded developers as addons and templates.</p>
        </div>
        <div class="card feature-card ">
          <h4>Create data-driven elements with custom resources</h4>
          <p>
            <strong>New in 4.0:</strong>
            Define scriptable objects called resources to describe characters, entities, and data structures in your game.
            Use your custom objects directly in the editor by assigning them to nodes. Resources come with a high-level
            API to store and read them, and they support every Godot type, including other resources.
          </p>
        </div>
      </div>
    </div>




    <div class="container">
      <h3>Coding tools that fit your needs</h3>
    </div>
    <div class="features-wrapper">
      <div id="coding" class="feature-container feature-container-2x">
        <div class="card feature-card">
          <h4>Write code without hurdles with a high-level scripting language</h4>
          <p>Get things done quickly with Godot's built-in scripting language GDScript. Inspired by Python and other
            languages, it is easy to pick up even if you are a beginner. Tight engine integration allows it to express
            game logic in a clear and natural form.</p>
          <p>
            <strong>New in 4.0:</strong>
            GDScript offers optional static typing support, boosting your coding efficiency and runtime performance.
            Powerful language features and first-class functions allow for expressive yet concise code.
          </p>
        </div>
        <div class="card feature-card">
          <h4>Leverage your C# experience to feel right at home</h4>
          <p>If you're an experienced C# user, Godot offers you first-class support for the .NET platform. Power your game
            with familiar libraries and give them performance boost, while still benefiting from close engine integration.
          </p>
          <p>
            <strong>Note:</strong>
            .NET support is provided as a dedicated engine executable. C# support is currently only available for desktop
            platforms in Godot 4. Use
            <a href="https://godotengine.org/download/3.x/" class="codinglink">Godot 3</a>
            to run C# on Android, iOS and Web.
          </p>
        </div>
        <div class="card feature-card">
          <h4>Pick from a variety of community-supported languages</h4>
          <p>Godot is built to be extended, and that means you can choose a programming language not provided by the Godot
            team itself. Thanks to our community there are many language bindings for popular tools like Rust, Nim,
            Python, and JavaScript.</p>
          <p>
            <strong>New in 4.0:</strong>
            C++ supports comes officially in the form of GDExtension API, which gives you a way to script and program your
            game components for maximum performance without having to recompile the engine.
          </p>
        </div>
        <div class="card feature-card">
          <h4>Modify the engine itself and integrate with 3rd party libraries</h4>
          <p>Thanks to the modular structure and a straightforward build process of Godot you can create your own engine
            modules. Gain every last drop of performance or integrate with many 3rd party libraries with low-level C++
            code.</p>
        </div>
      </div>
    </div>



    <div class="container">
      <h3>Simple yet powerful 3D engine</h3>
    </div>
    <div class="features-wrapper">
      <div id="engine" class="feature-container">
        <div class="card feature-card">
          <h4>Support both high and low-end devices</h4>
          <p>Make beautiful 3D games for a range of devices, starting from desktop computers and ending with mid-range
            Android phones. Powered by OpenGL, Godot allows your projects to run on most modern GPUs, including integrated
            graphics.</p>
          <p>
            <strong>New in 4.0:</strong>
            With the new Vulkan renderer and a set of modern graphical features, bring your worlds to life and harvest the
            power of gaming GPUs for your benefit.
          </p>
        </div>
        <div class="card feature-card">
          <h4>Seamlessly integrate with your asset pipeline</h4>
          <p> Import Blender files directly for fast iterations or keep using familiar glTF and FBX formats.</p>
          <p>
            <strong>New in 4.0:</strong>
            Import Blender files directly for fast iterations or keep using familiar glTF and FBX formats.
          </p>
        </div>
        <div class="card feature-card">
          <h4>Create animated videos and prerendered cutscenes in engine</h4>
          <p>
            <strong>New in 4.0:</strong>
            With the new movie maker mode you can record gameplay and scripted scenes from your project at a stable
            framerate and guaranteed simulation speed. Together with Godot's animation capabilities, make the most out of
            the engine's visuals.
          </p>
        </div>
      </div>
    </div>




    <div class="container">
      <h3>Specialized 2D workflow for games and apps</h3>
    </div>
    <div class="features-wrapper">
      <div id="apps" class="feature-container">
        <div class="card feature-card">
          <h4>Support both high and low-end devices</h4>
          <p>Thanks to a dedicated 2D pipeline you can forget about Z axis, and simplify your game logic. Think in pixels
            and screen coordinates, while the engine does the rest.</p>
        </div>
        <div class="card feature-card">
          <h4>Support both high and low-end devices</h4>
          <p>Whether you want procedural generation or a meticulously hand-crafted level, with Godot's built-in tile map
            editor you can achieve every goal. Import a sprite and convert it into a database of building blocks for your
            2D worlds.</p>
        </div>
        <div class="card feature-card">
          <h4>Support both high and low-end devices</h4>
          <p>Build scalable and adaptive user interfaces with Godot's unique GUI system. Created specifically to power
            layouts common to games, it is also capable of handling complex UI applications and tools.</p>
          <em>For an example of what Godot's UI system is capable of see the Godot editor itself!</em>
        </div>
      </div>
    </div>








    <div class="features-choice">
      <div class="container">
        <h3>Choice of many developers</h3>
        <p>Watch our annual showreel videos to see more examples of projects using Godot!</p>
      </div>

      <div class="choice-img feature-container">
        <img src="../../public/features/desktop-showcase.jpg" alt="">
        <img src="../../public/features/mobile-showcase.jpg" alt="">
        <img src="../../public/features/apps-showcase.jpg" alt="">
      </div>
    </div>







    <div class="container">
      <h3>Cross-platform support with one project</h3>
    </div>
    <div class="features-wrapper">
      <div id="cross" class="feature-container">
        <div class="card feature-card ">
          <h4>Deliver your game to desktop and mobile</h4>
          <p>Develop and publish your project on any modern desktop platform. Let everyone play your game by deploying to
            web and mobile. Make your game handle various forms of inputs and share the same project between every
            release.</p>
        </div>
        <div class="card feature-card ">
          <h4>Test directly on your target device</h4>
          <strong>New in 4.0:</strong>
          <p>Iterate on real hardware, or with an emulator by deploying your game directly to the target device over SSH.
            Run any project on a mobile device, on another desktop, or on your favorite Linux-based handheld with full
            debug and inspect capabilities.</p>
        </div>
        <div class="card feature-card ">
          <h4>Partner with a publisher to target consoles</h4>
          <p>If you want to release to a console, you can find several 3rd party publishers which specialize on that.
            Godot games can run on any modern hardware, all you need to worry about is your performance and controls.</p>
        </div>
      </div>
    </div>




    <div class="container">
      <h3>Completely open and free</h3>
    </div>
    <div class="features-wrapper">
      <div id="free" class="feature-container feature-container-2x">
        <div class="card feature-card">
          <h4>Download and create with no contracts or hidden fees</h4>
          <p>Godot is free under the MIT license. This means you don't owe us anything (other than a friendly mention),
            and can do with your project or even the engine itself whatever you want. Build your game or build your own
            engine on top of it — it's all in your hands.</p>
        </div>
        <div class="card feature-card">
          <h4>Find the logic behind any system in an open source codebase</h4>
          <p>No need to wait for a support team to respond when you can read the source code. Godot is an open book, and
            you can figure out everything that is not yet documented after a single
            <code>git checkout.</code>
            If you find and fix an issue, we will appreciate a PR upstream too.
          </p>
        </div>
      </div>
    </div>




    <div class="features-complete">
      <a href="https://docs.godotengine.org/en/stable/about/list_of_features.html" class="btn-view">View a complete list
        of features</a>
    </div>



    <div class="feature-ready">
      <h2>Ready to start?</h2>
      <p>Download the <strong> latest version of Godot 4 </strong>right now and begin your creative journey!</p>
      <div class="download">
        <a href="https://godotengine.org/download/windows/">
          <DownloadButton hint="4.1.2">Download Latest</DownloadButton>
        </a>
      </div>
      <p>Want to stick to the <strong>true and trusted Godot 3</strong> ? Download the long-term support version!</p>
      <div class="download">
        <a href="https://godotengine.org/download/windows/">
          <DownloadButton hint="3.5.3" :default-color="false">&nbsp;&nbsp;Download LTS&nbsp;&nbsp;</DownloadButton>
        </a>
      </div>
    </div>
  </main>















  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/images/carousel_01.png" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../assets/images/carousel_03.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../assets/images/carousel_06.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span> -->
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span> -->
    </button>
  </div>
</template>

<script setup>
import DownloadButton from "../components/DownloadButton.vue";
</script>

<style lang="scss" scoped>
.container-fluid {
  background: radial-gradient(ellipse closest-side at 50% 45%, #6469ac, #364b7c, #12122b);
}

.features-why,
.features-showcase {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.features-why {
  color: #4A5365;
  // margin-bottom: 24px;
  padding-top: 60px;
  background: radial-gradient(ellipse closest-side at 50% 45%, #6469ac, #364b7c, #12122b);
}

@media (max-width: 900px) {
  .features-why {
    padding-left: 16px;
    padding-right: 16px;
  }
}

.showcase-frame {
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: 16/8;
  transform: scale(1.7) translate(10px, 12px);
  filter: brightness(0.85) saturate(0.75);
}

.features-showcase {
  overflow: hidden;
  width: 100%;
}

.showcase-carousel {
  width: 100%;
  max-width: 720px;
  position: relative;
  margin: 100px 0 60px 0;
  aspect-ratio: 16/9;
}

.showcase-items {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/9;
}

.showcase-item {
  position: absolute;
  width: 100%;
  height: 100%;
}

.showcase-item img {
  width: 100%;
  height: 100%;
}

.features-why h2 {
  color: #FFFFFF;
  font: 40px "Montserrat sans-serif";
  font-weight: 900;
  margin: 36px 54px 8px 54px;
}

.features-showcase p {
  font: 18px "-apple-system";
  color: #D4E3F6;
  margin: 18px 0px;
  line-height: 1.5;
}

.showcase-credits {
  position: absolute;
  bottom: 12px;
  right: 16px;
  border-radius: 8px;
  padding: 2px 10px;
  background-color: #1A1A1A7A;
  cursor: pointer;
}

.showcase-title,
.showcase-author {
  color: #b3c1df;
  font-size: 95%;
  opacity: 0.9;
}

.showcase-title {
  color: white;
}

.showcase-credits a {
  text-decoration: none;
}

.features-see-more {
  color: #FFFFFFF2;
  text-decoration: none;
  margin: 16px 32px;
  padding: 16px 32px;
  font: 18px "Montserrat sans-serif";
  font-weight: 800;
  background-color: rgb(111 111 111 / 27%);
}

.features-see-more:hover {
  filter: brightness(117.5%);
}

.arrow-left,
.arrow-right {
  top: 50%;
  left: 12px;
  width: 20px;
  height: 36px;
  position: absolute;
  background-image: url(../../public/features/arrow-flip.svg);
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  z-index: 5;
}

.arrow-left {
  transform: translateY(-50%) scaleX(-1.0);
}

.arrow-right {
  // left: auto;
  // right: 12px;
  top: 46%;
  left: auto;
  right: 12px;
}




.container {
  width: 1200px;
  max-width: 1200px;
  padding: 0;
  overflow: visible;
}

.container h2,
.container h3 {
  color: #546B99;
  font: 24px "Montserrat sans-serif";
}

.container h2 {
  font-size: 36px;
  font-weight: 900;
  padding-top: 24px;
}

.container h3 {
  font-size: 22px;
  font-weight: 900;
  margin-bottom: 30px;
}

@media (max-width: 1250px) {
  .container {
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }
}

main {
  background-color: #eff1f5;
}

.features-wrapper h4 {
  color: #2D76AD;
}

.features-wrapper p {
  color: #4A5365;
}

.features-wrapper strong {
  color: #E53E3E;
}

.feature-container {
  display: grid;
  justify-content: center;
  column-gap: 28px;
  row-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin: auto;
  margin-bottom: 42px;
  width: 1200px;
  max-width: 1200px;
}

.feature-container {
  grid-template-columns: 1fr 1fr 1fr;
}

@media (max-width: 1250px) {
  .feature-container {
    width: auto;
    padding-left: 16px;
    padding-right: 16px;
  }
}

@media (max-width: 1020px) {
  .feature-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 900px) {
  .feature-container {
    width: auto;
    overflow: auto;
    flex-direction: column;
  }
}

@media (max-width: 800px) {
  .feature-container {
    grid-template-columns: 1fr;
  }
}


.card {
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
}

.feature-card {
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 20px;
  transition: 0.1s filter;
}

.feature-card p {
  font-size: 95%;
  margin-top: 24px;
  margin-bottom: 12px;
}

.feature-card:hover {
  filter: brightness(112.5%);
}

.card:hover {
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2), 0 0 2px rgba(0, 0, 0, 0.1);
}

.codinglink {
  outline: none;
  color: hsl(206, 58%, 50%);
  ;
  text-decoration: underline;
  text-decoration-color: hsla(206, 58%, 50%, 0.3);
  ;
  text-decoration-thickness: 0.125rem;
  transition: 0.1s filter;
}

em {
  color: rgb(74, 83, 101);
  font-family: 'Segoe UI';
}




.feature-container-2x {
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 1020px) {
  .feature-container-2x {
    grid-template-columns: 1fr;
  }
}





.features-choice {
  margin: 0 0 36px;
  padding: 24px 32px 8px;
  background-color: rgb(51, 63, 103);
}

.features-choice p {
  color: #D4E3F6;
}

.choice-img img {
  max-width: 100%;
  background-color: hsla(206, 58%, 50%, 0.3);
  box-shadow: 0 5px 10px -3px #00000078;
  border-radius: 7px;
  display: block;
}

.choice-img img:hover {
  filter: brightness(117.5%);
}

@media (max-width: 1040px) {
  .choice-img {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 712px) {
  .feature-container {
    grid-template-columns: 1fr;
  }
}


.feature-card code {
  background-color: #0f172e36;
  border-radius: 3px;
  padding: 1px 4px;
  font-family: monospace;
}



.features-complete {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
}

.features-complete a {
  color: #546b99;
  font-size: 20px;
  font-weight: 900;
}

.btn-view {
  margin: 16px 32px;
  padding: 16px 32px;
  background-color: #ccced1;
}

.btn-view:hover {
  background-color: #dddddd;
}




.feature-ready {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 26px;
  background-color: #364b7c;
  min-width: 310px;
  padding: 24px;
  padding-bottom: 60px;
}

.feature-ready h2 {
  margin-bottom: 10px;
}

.feature-ready p {
  color: #BDC4DE;
  font-size: 18px;
}





.download {
  display: grid;
  min-width: 310px;
  gap: 24px;

  .left {
    gap: 24px;
  }
}</style>