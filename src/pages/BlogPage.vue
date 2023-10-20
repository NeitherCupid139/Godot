<template>
  <div style="padding-top: 64px;" class="container-eff1f5">
    <div style="background-color: hsl(206, 58%, 52%);">
      <div class="container flex eqsize responsive">
        <div class="main">
          <h1>Blog</h1>
          <form class="search-bar" action="get">
            <input type="hidden">
            <input type="text" name="q" maxlength="300" placeholder="Search articles">
            <button class="btn search-bar-btn" type="submit">
              <img width="24" height="24" src="../assets/images/search.svg" alt="search" title="search">
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="tags">
        <h3>Categories</h3>
        <a href="/blog" title="Show all categories">
          <div class="tag tag--default active">All</div>
        </a>
        <a href="/blog/news" title="General news that don't fit in other categories.">
          <div class="tag tag--">News</div>
        </a>
        <a href="/blog/progress-report" title="Progress report about a specific engine subsystem in Godot.">
          <div class="tag tag--">Progress Report</div>
        </a>
        <a href="/blog/events" title="Physical and online Godot-related event announcements.">
          <div class="tag tag--">Events</div>
        </a>
        <a href="/blog/release" title="Godot stable release announcements.See Pre-release category for alphas, betas and release candidates.">
          <div class="tag tag--">Release</div>
        </a>
        <a href="/blog/pre-release" title="Godot pre-release announcement (alpha, beta or release candidate.)">
          <div class="tag tag--">Pre-release</div>
        </a>
        <a href="/blog/showcase" title="Showreel video postings and showcase interviews.Showreel-related announcements are in the News category.">
          <div class="tag tag--">Showcase</div>
        </a>
      </div>
      <div class="flex pagination">
        <a class="active" title="Godot Engine - Blog" href="https://godotengine.org/blog/">1</a>
        <a title="Godot Enginee - Blog -Page 2" href="https://godotengine.org/blog/2/">2</a>
        <a title="Godot Enginee - Blog -Page 3" href="https://godotengine.org/blog/3/">3</a>
        <a title="Godot Enginee - Blog -Page 4" href="https://godotengine.org/blog/4/">4</a>
        <a title="Godot Enginee - Blog -Page 5" href="https://godotengine.org/blog/5/">5</a>
        <a class="pagination-next" href="https://godotengine.org/blog/2/">Next →</a>
      </div>
      <div class="posts">
        <a href="https://godotengine.org/article/dev-snapshot-godot-4-2-beta-1/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/dev-snapshot-godot-4-2-beta-1.webp');" href="https://godotengine.org/article/dev-snapshot-godot-4-2-beta-1/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/yuri.jpeg" alt="Yuri Sizov" loading="lazy">
                
                <span class="by">Yuri Sizov </span>
                <span class="date">&nbsp;-&nbsp;12 October 2023</span>
              </div>
              <h3>Dev snapshot: Godot 4.2 beta 1</h3>
              <p class="excerpt">With all planned major and minor features implemented, Godot 4.2 is ready for beta testing!</p>
            </div>
          </article>
        </a>

        <a href="https://godotengine.org/article/maintenance-release-godot-4-1-2/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/maintenance-release-godot-4-1-2.webp');" href="https://godotengine.org/article/maintenance-release-godot-4-1-2/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/yuri.jpeg" alt="Yuri Sizov" loading="lazy">
                
                <span class="by">Yuri Sizov </span>
                <span class="date">&nbsp;-&nbsp; 4 October 2023</span>
              </div>
              <h3>Maintenance release: Godot 4.1.2</h3>
              <p class="excerpt">As Godot 4.2 enters feature freeze this week, a new Godot 4.1 maintenance release arrives with a handful of improvements to stability and performance!</p>
            </div>
          </article>
        </a>
        
        <a href="https://godotengine.org/article/dev-snapshot-godot-4-2-dev-6/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/dev-snapshot-godot-4-2-dev-6.webp');" href="https://godotengine.org/article/dev-snapshot-godot-4-2-dev-6/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/akien.jpg" alt="Rémi Verschelde" loading="lazy">
                
                <span class="by">Rémi Verschelde </span>
                <span class="date">&nbsp;-&nbsp; 3 October 2023</span>
              </div>
              <h3>Dev snapshot: Godot 4.2 dev 6</h3>
              <p class="excerpt">Final 4.2 dev snapshot before we enter the beta phase, and it's absolutely feature-packed!</p>
            </div>
          </article>
        </a>

        <a href="https://godotengine.org/article/maintenance-release-godot-3-5-3/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/maintenance-release-godot-3-5-3.webp');" href="https://godotengine.org/article/maintenance-release-godot-3-5-3/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/akien.jpg" alt="Rémi Verschelde" loading="lazy">
                
                <span class="by">Rémi Verschelde </span>
                <span class="date">&nbsp;-&nbsp;25 September 2023</span>
              </div>
              <h3>Maintenance release: Godot 3.5.3</h3>
              <p class="excerpt">It's been way too long since our previous 3.5 maintenance release! This new Godot 3.5.3 fixes a number of important issues and adjusts to changing platform requirements.</p>
            </div>
          </article>
        </a>

        <a href="/article/release-candidate-godot-4-1-2-rc-1/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/release-candidate-godot-4-1-2-rc-1.webp');" href="/article/release-candidate-godot-4-1-2-rc-1/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/yuri.jpeg" alt="Yuri Sizov" loading="lazy">
                
                <span class="by">Yuri Sizov </span>
                <span class="date">&nbsp;-&nbsp;22 September 2023</span>
              </div>
              <h3>Release candidate: Godot 4.1.2 RC 1</h3>
              <p class="excerpt">It's long overdue for the second Godot 4.1 patch release! This release candidate contains a number of important fixes, including performance and stability improvements, so let's give it a good test.</p>
            </div>
          </article>
        </a>
        
        <a href="/article/dev-snapshot-godot-4-2-dev-5/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/dev-snapshot-godot-4-2-dev-5.webp');" href="/article/dev-snapshot-godot-4-2-dev-5/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/yuri.jpeg" alt="Yuri Sizov" loading="lazy">
                
                <span class="by">Yuri Sizov </span>
                <span class="date">&nbsp;-&nbsp;19 September 2023</span>
              </div>
              <h3>Dev snapshot: Godot 4.2 dev 5</h3>
              <p class="excerpt">Penultimate 4.2 dev snapshot brings improvements to Android plugin API, the Tilemap editor, and, well, practically everything else — making it ready for beta testing next month.</p>
            </div>
          </article>
        </a>

        <a href="/article/godot-developer-fund/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/developer-fund.jpg');" href="/article/godot-developer-fund/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/emi.png" alt="Emi" loading="lazy">
                
                <span class="by">Emi </span>
                <span class="date">&nbsp;-&nbsp;12 September 2023</span>
              </div>
              <h3>Introducing the new Godot Development Fund</h3>
              <p class="excerpt">We are excited to introduce a major improvement in terms of funding the development efforts of the Godot Engine.</p>
            </div>
          </article>
        </a>
        
        <a href="/article/godot-xr-update-sep-2023/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/godot-xr-update-sep-2023.webp');" href="/article/godot-xr-update-sep-2023/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/bastiaan.jpg" alt="Bastiaan Olij" loading="lazy">
                
                <span class="by">Bastiaan Olij </span>
                <span class="date">&nbsp;-&nbsp;11 September 2023</span>
              </div>
              <h3>Godot XR update - September 2023</h3>
              <p class="excerpt">Updates on various things XR in Godot, a new version of the OpenXR plugin, a new version of the tools library and an update on Godot 4 support.</p>
            </div>
          </article>
        </a>
        
        <a href="/article/release-candidate-godot-3-5-3-rc-1/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/release-candidate-godot-3-5-3-rc-1.webp');" href="/article/release-candidate-godot-3-5-3-rc-1/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/akien.jpg" alt="Rémi Verschelde" loading="lazy">
                
                <span class="by">Rémi Verschelde </span>
                <span class="date">&nbsp;-&nbsp; 8 September 2023</span>
              </div>
              <h3>Release candidate: Godot 3.5.3 RC 1</h3>
              <p class="excerpt">A new maintenance update is in the works for the 3.5 stable branch, to update Android templates to target Android 13, and fix a number of other platform porting bugs.</p>
            </div>
          </article>
        </a>
        
        <a href="/article/dev-snapshot-godot-4-2-dev-4/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/dev-snapshot-godot-4-2-dev-4.webp');" href="/article/dev-snapshot-godot-4-2-dev-4/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/akien.jpg" alt="Rémi Verschelde" loading="lazy">
                
                <span class="by">Rémi Verschelde </span>
                <span class="date">&nbsp;-&nbsp; 5 September 2023</span>
              </div>
              <h3>Dev snapshot: Godot 4.2 dev 4</h3>
              <p class="excerpt">Progressing steadily towards the beta stage, the fourth dev snapshot brings a lot of improvements all around.</p>
            </div>
          </article>
        </a>
        
        <a href="/article/godot-showcase-usagi-shima/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/usagi-shima.webp');" href="/article/godot-showcase-usagi-shima/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/emi.png" alt="Emi" loading="lazy">
                
                <span class="by">Emi </span>
                <span class="date">&nbsp;-&nbsp; 1 September 2023</span>
              </div>
              <h3>Godot Showcase - Usagi Shima</h3>
              <p class="excerpt">A relaxing, idle bunny collecting game made by Jess, a solo indie developer</p>
            </div>
          </article>
        </a>
        
        <a href="/article/godot-at-gamescom-2023/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/gamescom-cover.webp');" href="/article/godot-at-gamescom-2023/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/emi.png" alt="Emi" loading="lazy">
                
                <span class="by">Emi </span>
                <span class="date">&nbsp;-&nbsp;17 August 2023</span>
              </div>
              <h3>gamescom, here we go!</h3>
              <p class="excerpt">Join us next week at the Godot booth during gamescom in Cologne from Wednesday the 23rd, to Friday the 25th. Don't miss the chance to say hello to the Godot team!</p>
            </div>
          </article>
        </a>
        
        <a href="/article/dev-snapshot-godot-3-6-beta-3/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/dev-snapshot-godot-3-6-beta-3.webp');" href="/article/dev-snapshot-godot-3-6-beta-3/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/akien.jpg" alt="Rémi Verschelde" loading="lazy">
                
                <span class="by">Rémi Verschelde </span>
                <span class="date">&nbsp;-&nbsp;16 August 2023</span>
              </div>
              <h3>Dev snapshot: Godot 3.6 beta 3</h3>
              <p class="excerpt">Slowly but surely, Godot 3.6 is shaping up to be a great release. This third snapshot adds long awaited 2D physics interpolation, and another great optimization with 2D hierarchical culling.</p>
            </div>
          </article>
        </a>
        
        <a href="/article/dev-snapshot-godot-4-2-dev-3/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/dev-snapshot-godot-4-2-dev-3.webp');" href="/article/dev-snapshot-godot-4-2-dev-3/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/akien.jpg" alt="Rémi Verschelde" loading="lazy">
                
                <span class="by">Rémi Verschelde </span>
                <span class="date">&nbsp;-&nbsp;11 August 2023</span>
              </div>
              <h3>Dev snapshot: Godot 4.2 dev 3</h3>
              <p class="excerpt">One month into the release cycle for Godot 4.2, things are well under way. This third dev snapshot features a lot of improvements to C# and rendering.</p>
            </div>
          </article>
        </a>
        
        <a href="/article/godotcon-2023-call-participation/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/godotcon-2023-we-need-you.webp');" href="/article/godotcon-2023-call-participation/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/julian.jpg" alt="Julian Murgia" loading="lazy">
                
                <span class="by">Julian Murgia </span>
                <span class="date">&nbsp;-&nbsp;10 August 2023</span>
              </div>
              <h3>Godot Conference 2023: Call for Participations</h3>
              <p class="excerpt">Looking to share your expertise through a talk or workshop? Join us and make this an event to remember!</p>
            </div>
          </article>
        </a>
        
        <a href="/article/rendering-priorities-july-2023/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/rendering-priorities-july-2023.webp');" href="/article/rendering-priorities-july-2023/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/clayjohn.jpg" alt="Clay John" loading="lazy">
                
                <span class="by">Clay John </span>
                <span class="date">&nbsp;-&nbsp; 9 August 2023</span>
              </div>
              <h3>Godot Rendering Priorities: July 2023</h3>
              <p class="excerpt">The Godot rendering team continues to focus on stability, performance and usability</p>
            </div>
          </article>
        </a>
        
        <a href="/article/maintenance-release-godot-4-0-4/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/maintenance-release-godot-4-0-4.webp');" href="/article/maintenance-release-godot-4-0-4/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/yuri.jpeg" alt="Yuri Sizov" loading="lazy">
                
                <span class="by">Yuri Sizov </span>
                <span class="date">&nbsp;-&nbsp; 3 August 2023</span>
              </div>
              <h3>Maintenance release: Godot 4.0.4</h3>
              <p class="excerpt">A fresh pack of stability and documentation improvements for teams still using Godot 4.0 is officially out!</p>
            </div>
          </article>
        </a>
        
        <a href="/article/dev-snapshot-godot-4-2-dev-2/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/dev-snapshot-godot-4-2-dev-2.webp');" href="/article/dev-snapshot-godot-4-2-dev-2/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/yuri.jpeg" alt="Yuri Sizov" loading="lazy">
                
                <span class="by">Yuri Sizov </span>
                <span class="date">&nbsp;-&nbsp;28 July 2023</span>
              </div>
              <h3>Dev snapshot: Godot 4.2 dev 2</h3>
              <p class="excerpt">Closing the first month of development of Godot 4.2, the second development snapshot includes both smaller improvements and bigger features.</p>
            </div>
          </article>
        </a>
        
        <a href="/article/release-candidate-godot-4-0-4-rc-1/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/release-candidate-godot-4-0-4-rc-1.webp');" href="/article/release-candidate-godot-4-0-4-rc-1/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/yuri.jpeg" alt="Yuri Sizov" loading="lazy">
                
                <span class="by">Yuri Sizov </span>
                <span class="date">&nbsp;-&nbsp;21 July 2023</span>
              </div>
              <h3>Release candidate: Godot 4.0.4 RC 1</h3>
              <p class="excerpt">A new batch of backported fixes for Godot 4.0 is ready for testing! Even if you aren't able to move to Godot 4.1 just yet, we can't leave you without support and improvements.</p>
            </div>
          </article>
        </a>
        
        <a href="/article/dev-snapshot-godot-4-2-dev-1/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/dev-snapshot-godot-4-2-dev-1.webp');" href="/article/dev-snapshot-godot-4-2-dev-1/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/yuri.jpeg" alt="Yuri Sizov" loading="lazy">
                
                <span class="by">Yuri Sizov </span>
                <span class="date">&nbsp;-&nbsp;19 July 2023</span>
              </div>
              <h3>Dev snapshot: Godot 4.2 dev 1</h3>
              <p class="excerpt">We are ready to share the first batch of improvements coming to Godot 4.2 later this year with the release of the first dev snapshot!</p>
            </div>
          </article>
        </a>
        
        <a href="/article/godotcon-2023/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/godotcon-2023.webp');" href="/article/godotcon-2023/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/emi.png" alt="Emi" loading="lazy">
                
                <span class="by">Emi </span>
                <span class="date">&nbsp;-&nbsp;18 July 2023</span>
              </div>
              <h3>Join us at the Godot Conference 2023!</h3>
              <p class="excerpt">We are happy to announce that we are going to be hosting the 2023 GodotCon in Munich, Germany. </p>
            </div>
          </article>
        </a>
        
        <a href="/article/maintenance-release-godot-4-1-1/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/maintenance-release-godot-4-1-1.webp');" href="/article/maintenance-release-godot-4-1-1/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/yuri.jpeg" alt="Yuri Sizov" loading="lazy">
                
                <span class="by">Yuri Sizov </span>
                <span class="date">&nbsp;-&nbsp;17 July 2023</span>
              </div>
              <h3>Maintenance release: Godot 4.1.1</h3>
              <p class="excerpt">Hot on the heels of its parent release, here's Godot 4.1.1 — the first maintenance release of the 4.1 branch, with more stability and workflow improvements.</p>
            </div>
          </article>
        </a>
        
        <a href="/article/release-candidate-godot-4-1-1-rc-1/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/release-candidate-godot-4-1-1-rc-1.webp');" href="/article/release-candidate-godot-4-1-1-rc-1/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/yuri.jpeg" alt="Yuri Sizov" loading="lazy">
                
                <span class="by">Yuri Sizov </span>
                <span class="date">&nbsp;-&nbsp;12 July 2023</span>
              </div>
              <h3>Release candidate: Godot 4.1.1 RC 1</h3>
              <p class="excerpt">The first round of bugfixes and usability improvements for Godot 4.1 is ready for your consideration!</p>
            </div>
          </article>
        </a>
        
        <a href="/article/funding-breakdown-and-hiring-process/" style="text-decoration: none">
          <article class="article-card">
            <div class="thumbnail" style="background-image: url('blog/funding-breakdown-and-hiring-process.webp');" href="/article/funding-breakdown-and-hiring-process/"></div>
            <div class="content">
              <div class="info">
                
                
                  <img class="avatar" width="25" height="25" src="../assets/images/foundation.png" alt="Godot Foundation" loading="lazy">
                
                <span class="by">Godot Foundation </span>
                <span class="date">&nbsp;-&nbsp;11 July 2023</span>
              </div>
              <h3>Godot Funding Breakdown & Hiring Process</h3>
              <p class="excerpt">This article aims to shed light on the current status of Godot's funding, hiring, and our plans for sustainable funding long term.</p>
            </div>
          </article>
        </a>
      </div>
      <div class="flex pagination">
        <a class="active" title="Godot Engine - Blog" href="https://godotengine.org/blog/">1</a>
        <a title="Godot Enginee - Blog -Page 2" href="https://godotengine.org/blog/2/">2</a>
        <a title="Godot Enginee - Blog -Page 3" href="https://godotengine.org/blog/3/">3</a>
        <a title="Godot Enginee - Blog -Page 4" href="https://godotengine.org/blog/4/">4</a>
        <a title="Godot Enginee - Blog -Page 5" href="https://godotengine.org/blog/5/">5</a>
        <a class="pagination-next" href="https://godotengine.org/blog/2/">Next →</a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
body{
  font-size: 18px;
  background-color: #EFF1F5;
  color: #4a5365;
}
.container-eff1f5{
  font-size: 18px;
  background-color: #EFF1F5;
  color: #4a5365;
}
  .container{
    // max-height: 64px;
    // min-height: 60px;
    padding: 0;
    max-width: 1200px;
  }
  // .flex{
  //   display: flex;
  // }
  .flex .responsive{
    flex-direction: column;
  }
  .flex .eqsize .responsive{
    flex-direction: column;
  }
  .flex .eqsize > *{
    flex:1;
  }
  .main{
    // background-color: hsl(206, 58%, 52%);
    color: #d4edff;
    // max-width: 1200px;
    height: 120px;
    margin-bottom: 32px;
    display: grid;
    gap: 30px;
    padding: 0;
    // padding: 20px 0 39px;
    align-content: center;
    grid-template-columns: 1fr 1fr;

  }
  h1{
    font-size: 42px;
    // font-family: "Montserrat", sans-serif;
    font-weight: 800;

    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

  }
  .main h1{
    color: white;
  }
 .main > :last-child, .main > :first-child{
    margin: 0;
  }
  .main .search-bar{
    margin-top: 6px;
    justify-self: end;
  }
  .search-bar{
    display: flex;
    height: 40px;
    margin-bottom: 2rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 18px;
    overflow: hidden;
    min-width: 65%;
  }
  input[type="hidden" i]{
    appearance: none;
    cursor: default;
    display: none !important;
    border-radius: initial;
  }
  .search-bar input{
    flex-grow: 1;
    padding: 0.5rem 1rem;
    line-height: 2;
    font-size: 18px;
    border: none;
    border-right: 1px solid rgba(51, 63, 103, 0.4);
    background-color: #eeeeee;
    color: #4a5365;
  }

  .search-bar input:placeholder{
    color: #7a87a2;
  }

  .search-bar .search-bar-btn{
    cursor: pointer;
    border: none;
    width: 3rem;
    padding: 0;
    margin: 0;
    background-color: #284786;
    color: white;
  }

  .btn{
    background-color: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    font-size: 18px;
    padding: 16px 32px 16px 32px;
    display: inline-block;
    text-decoration: none;
    font-weight: bold;
  }

  .search-bar .search-bar-btn img{
    margin: 8px;
    filter: invert(100%);
  }
  .btn:hover {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
  .tags > a{
    border-radius: 1000px;
    display: inline-block;
  }
  body a, .btn .flat, .search-bar-btn:hover{
    filter: brightness(100%);
  }
  body a{
    outline: none;
    color: hsl(206, 58%, 50%);
    text-decoration: underline;
    text-decoration-color: hsla(206, 58%, 50%, 0.3);
    text-decoration-thickness: 0.125rem;
    transition: 0.1s filter;
  }
  .tags h3{
    margin-top: 1rem;
    display: inline-block;
    margin: 0;
    font-size: 19px;
    font-weight: 800;
    color: #546b99;
  }
  .tags{
    display: flex;
    align-items: baseline;
    gap: 10px;
    flex-wrap: wrap;
  }
  .tag{
    display: inline-block;
    background-color: #fff;
    border-radius: 1000px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    // font-family: ;
    font-size: 16px;
    padding: 0.25rem 0.75rem;
    margin: 0.1rem;
    //测试颜色
    opacity: 0.8;
  }
  .tags .active{
    filter: saturate(1);
    opacity: 1;
  }
  // .pagination{
  //   display: block;
  //   justify-content: initial;
  //   text-align: center;
  // }
  // .pagination{
  //   margin: 2rem 0;
  //   font-size: 0;
  // }
  // .pagination a:not(:last-child){
  //   border-right: 1px solid #eeeeee;
  // }
  // .pagination a.active{
  //   background-color: #284786;
  //   color: white;
  // }
  // .pagination a, .pagination-disabled{
  //   color: inherit;
  //   display: inline-block;
  //   background-color: #fff;
  //   padding: 0.7rem 0.7rem;
  //   min-width: 1.4rem;
  //   font-size: initial;
  //   font-weight: 600;
  //   text-align: center;
  //   text-decoration: none;
  //   box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  // }
  // .pagination a.pagination-previous, .pagination a.pagination-next{
  //   padding-left: 1.2rem;
  //   padding-right: 1.2rem;
  // }

  // 测试
  .pagination {
  margin: 2rem 0;
  justify-content: center;
  /* Remove spacing between list items when `display` is `block`. */
  font-size: 0;
}

.pagination a,
.pagination-disabled {
  color: inherit;
  display: inline-block;
  background-color: #fff;
  padding: 0.7rem 0.7rem;
  min-width: 1.4rem;
  font-size: initial;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

.pagination-disabled {
  opacity: 50%;
  user-select: none;
}

.pagination a.active {
  background-color: #284786;
  color: white;
}

.pagination a:not(:last-child) {
  border-right: 1px solid #eeeeee;
}

.pagination a.pagination-previous,
.pagination a.pagination-next {
  padding-left: 1.2rem;
  padding-right: 1.2rem;
}
.posts{
  grid-template-columns: 1fr 1fr 1fr;
}
.posts{
  display: grid;
  gap: 30px;
}
article.article-card{
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
article.article-card .thumbnail{
  aspect-ratio: 16 / 9;
  border-radius: 7px;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  box-shadow: 0 5px 10px -3px #00000078;
}
article .content{
  width: 100%;
}
article.article-card .info{
  display: flex;
  margin-bottom: 15px;
  position: relative;
  padding-left: 32px;
}
article.article-card .info .avatar{
  border-radius: 100%;
  position: absolute;
  top: -3px;
  left: 0px;
  width: 25px;
  height: 25px;
}
article .content img{
  background-color: white;
}
img{
  overflow-clip-margin: content-box;
  overflow: clip;
}
article.article-card .info span{
  font-size: 14px;
  color: #546b99;
}
article.article-card h3{
  font-size: 22px;
  margin-bottom: 10px;
}
h1, h2, h3, h4, nav a, .btn, a.btn, .title-font{
  // font-family: ;
  font-weight: 800;
  color: #546b99;
  margin-top: 0px;
}
h3{
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
article.article-card p.excerpt{
  color: #4a5365;
  font-size: 16px;
  opacity: 0.8;
  margin-top: 0;
}
p, ul, ol{
  text-rendering: optimizeLegibility;
  line-height: 1.5;
}
p{
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

</style>
