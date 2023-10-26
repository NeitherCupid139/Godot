<template>
  <div class="body">
    <p>
      This pages provides an overview of the various teams working on Godot
      Engine. If you want to know who works on what, who to get in contact with
      on a topic, which people should review a particular Pull Request or
      similar - this is a good first stop.
    </p>
    <p>
      Engine teams are listed by engine area, with a few keywords describing
      what belongs to that area and a link to the teams chat channel, followed
      by a list of the members of that team (names and GitHub handles). For some
      larger areas, subteams exist for parts of that area. Names in bold with a
      ⭐ emoji are the main contributors in charge of a given area, who
      typically lead the team work and can merge Pull Requests in their area of
      expertise.
    </p>
    <p>
      If you want to get in touch, use the link to each team's chat
      <a href="#">channel</a> on the Godot Engine Contributors chat after the
      team's names (<a href="#">see Community</a>).
    </p>
    <p>
      For general development discussions which may not fit a specific team
      channel, use the general purpose <a href="#">#devel channel</a>.
    </p>
    <p>
      For general enquiries, private or security related matters, have a look at
      the Contact page.
    </p>
    <h2 class="hh">General areas</h2>
    <p>
      Categorizing the engine development in discrete teams is not easy! This
      section includes some broad areas which have an influence on all engine
      subsystems, and where many contributors are active without necessarily
      being responsible for all the features that their team encompasses.
    </p>
    <p>
      Some more specialized teams are then listed in the
      <a href="#">Systems section</a>.
    </p>
    <div class="bodo" style="margin-top: 20px">
      <h3 class="hh1" style="margin-left: 10px">
        Core • <a href="#">#core</a>
      </h3>
      <p style="margin-left: 10px">
        Low-level Core API: Object, Variant, templates, base nodes like Node,
        Viewport, etc. (everything under core and scene/main).
      </p>
      <p style="margin-left: 10px">
        ⭐Juan Linietsky (<a href="#">@reduz</a>), George Marques (<a href="#"
          >@vnen</a
        >), HP van Braam (<a href="#">@hpvb</a>), Pedro J. Estébanez (<a
          href="#"
          >@RandomShaper</a
        >)
      </p>
      <div class="ttaab">
        <div class="X"></div>
        <table class="tab">
          <tr>
            <th
              style="
                width: 30%;
                height: 50px;
                text-align: left;
                padding: 8px;
                border-bottom: 1px dashed black;
                border-right: 1px dashed black;
              "
            >
              Data Structures
            </th>
            <td
              style="width: 70%; border-bottom: 1px dashed black; padding: 8px"
            >
              Juan Linietsky (<a href="#">@reduz</a>), @lawnjelly
            </td>
          </tr>
          <tr>
            <th
              style="
                height: 50px;
                text-align: left;
                padding: 8px;
                border-bottom: 1px dashed black;
                border-right: 1px dashed black;
              "
            >
              Threading
            </th>
            <td style="border-bottom: 1px dashed black; padding: 8px">
              Pedro J. Estébanez (<a href="#">@RandomShaper</a>)
            </td>
          </tr>
          <tr>
            <th
              style="
                height: 80px;
                text-align: left;
                padding: 8px;
                border-right: 1px dashed black;
              "
            >
              Input
            </th>
            <td style="padding: 8px">
              Eric M (<a href="#">@EricEzaM</a>), Gilles Roudière (<a href="#"
                >@groud</a
              >), Pedro J. Estébanez (RandomShaper), Rémi Verschelde (<a
                href="#"
                >@akien-mga</a
              >)
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="bodo" style="height: 450px">
      <h3 class="hh1" style="margin-left: 10px">GUI Nodes • #gui</h3>
      <p style="margin-left: 10px">
        Everything that inherits Control (everything under scene/gui) and can be
        used to build Graphical User Interfaces (both game UI and editor tools).
      </p>
      <p style="margin-left: 10px">
        Gilles Roudière (<a href="#">@groud</a>), Hendrik Brucker (<a href="#"
          >@Geometror</a
        >), Michael Alexsander (<a href="#">@YeldhamDev</a>), Pāvels Nadtočajevs
        (<a href="#">@bruvzg</a>), Tomasz Chabora (<a href="#">@KoBeWi</a>),
        Yuri Sizov (<a href="#">@YuriSizov</a>)
      </p>
      <div class="ttaab" style="height: 100px">
        <div class="X"></div>
        <table class="tab" style="height: 80">
          <tr>
            <th
              style="
                width: 30%;
                height: 50px;
                text-align: left;
                padding: 8px;
                border-right: 1px dashed black;
              "
            >
              Text
            </th>
            <td style="width: 70%; padding: 8px">
              Paul Batty (<a href="#">@Paulb23</a>), Pāvels Nadtočajevs (<a
                href="#"
                >@bruvzg</a
              >)
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="bodo">
      <h3 class="hh1" style="margin-left: 10px">Editor • #editor</h3>
      <p style="margin-left: 10px">
        All things related to the editor, both tools and usability (editor).
      </p>
      <p style="margin-left: 10px">
        Gilles Roudière (<a href="#">@groud</a>), Hendrik Brucker (<a href="#"
          >@Geometror</a
        >), Hugo Locurcio (<a href="#">@Calinou</a>), Michael Alexsander (<a
          href="#"
        ></a
        >@YeldhamDev), Paul Batty (<a href="#"></a>@Paulb23), Tomasz Chabora (<a
          href="#"
          >@KoBeWi</a
        >), Yuri Sizov (<a href="#">@YuriSizov</a>)
      </p>
      <div class="ttaab" style="height: 350px">
        <div class="X"></div>
        <table class="tab">
          <tr>
            <th
              style="
                width: 30%;
                height: 50px;
                text-align: left;
                padding: 8px;
                border-bottom: 1px dashed black;
                border-right: 1px dashed black;
              "
            >
              2D
            </th>
            <td
              style="width: 70%; border-bottom: 1px dashed black; padding: 8px"
            >
              Gilles Roudière (<a href="#">@groud</a>), Michael Alexsander (<a
                href="#"
                >@YeldhamDev</a
              >), Tomasz Chabora (<a href="#"></a>@KoBeWi)
            </td>
          </tr>
          <tr>
            <th
              style="
                height: 50px;
                text-align: left;
                padding: 8px;
                border-bottom: 1px dashed black;
                border-right: 1px dashed black;
              "
            >
              3D
            </th>
            <td style="border-bottom: 1px dashed black; padding: 8px">
              Hugo Locurcio (<a href="#">@Calinou</a>), Joan Fons Sanchez
              <a href="#">(@JFonS</a>)
            </td>
          </tr>
          <tr>
            <th
              style="
                height: 80px;
                text-align: left;
                padding: 8px;
                border-right: 1px dashed black;
                border-bottom: 1px dashed black;
              "
            >
              Debugger
            </th>
            <td style="padding: 8px; border-bottom: 1px dashed black">
              Fabio Alessandrelli (<a href="#">@Faless</a>), George Marques (<a
                href="#"
                >@vnen</a
              >)
            </td>
          </tr>
          <tr>
            <th
              style="
                height: 80px;
                text-align: left;
                padding: 8px;
                border-right: 1px dashed black;
              "
            >
              Script editor
            </th>
            <td style="padding: 8px">
              ⭐Paul Batty (<a href="#">@Paulb23</a>), Michael Alexsander (<a
                href="#"
                >@YeldhamDev</a
              >)
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div class="bodo">
      <h3 class="hh1" style="margin-left: 10px">Scripting • #scripting</h3>
      <p style="margin-left: 10px">
        Umbrella team for all the scripting languages usable with Godot.
        Encompasses some shared core components (Object, ClassDB, MethodBind,
        ScriptLanguage, etc.) and language specific implementations in dedicated
        subteams.
      </p>
      <p style="margin-left: 10px">
        George Marques (<a href="#">@vnen</a>), Ignacio Roldán Etcheverry (<a
          href="#"
          >@neikeq</a
        >), Juan Linietsky (<a href="#">@reduz</a>)
      </p>
      <div class="ttaab" style="height: 300px">
        <div class="X"></div>
        <table class="tab">
          <tr>
            <th
              style="
                width: 30%;
                height: 50px;
                text-align: left;
                padding: 8px;
                border-bottom: 1px dashed black;
                border-right: 1px dashed black;
              "
            >
              GDExtension (#gdextension)
            </th>
            <td
              style="width: 70%; border-bottom: 1px dashed black; padding: 8px"
            >
              ⭐David Snopek (<a href="#"></a>@dsnopek), Bastiaan Olij (<a
                href="#"
                >@BastiaanOlij</a
              >), Fabio Alessandrelli (<a href="#">@Faless</a>), George Marques
              (<a href="#">@vnen</a>), Gilles Roudière (<a href="#">@groud</a>),
              Juan Linietsky (<a href="#">@reduz</a>), Pāvels Nadtočajevs (<a
                href="#"
                >@bruvzg</a
              >)
            </td>
          </tr>
          <tr>
            <th
              style="
                height: 50px;
                text-align: left;
                padding: 8px;
                border-bottom: 1px dashed black;
                border-right: 1px dashed black;
              "
            >
              GDScript (#gdscript)
            </th>
            <td style="border-bottom: 1px dashed black; padding: 8px">
              ⭐George Marques (<a href="#">@vnen</a>), Adam Scott (<a href="#"
                >@adamscott</a
              >), Danil Alexeev (<a href="#">@dalexeev</a>), Dmitry Maganov (<a
                href="#"
                >@vonagam</a
              >), ocean (they/them) (<a href="#">@anvilfolk</a>)
            </td>
          </tr>
          <tr>
            <th
              style="
                height: 80px;
                text-align: left;
                padding: 8px;
                border-right: 1px dashed black;
              "
            >
              C#
            </th>
            <td style="padding: 8px">
              ⭐Ignacio Roldán Etcheverry (<a href="#">@neikeq</a>), Aaron
              Franke (<a href="#">@aaronfranke</a>), Raul Santos (<a href="#"
                >@raulsntos</a
              >)
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="bodo" style="height: 300px">
      <h3 class="hh1" style="margin-left: 10px">Buildsystem • #buildsystem</h3>
      <p style="margin-left: 10px">
        Tools and scripts that we use to compile and maintain Godot, both for
        development purpose (SCons, CI) and releases (official build
        containers).
      </p>
      <p style="margin-left: 10px">
        ⭐Rémi Verschelde (<a href="#">@akien-mga</a>), Aaron Franke (<a
          href="#"
        ></a
        >@aaronfranke), Fabio Alessandrelli (<a href="#">@Faless</a>), HP van
        Braam (<a href="#">@hpvb</a>), Hugo Locurcio (<a href="#">@Calinou</a>),
        Ignacio Roldán Etcheverry (<a href="#">@neikeq</a>)
      </p>
    </div>

    <div class="bodo" style="height: 800px">
      <h3 class="hh1" style="margin-left: 10px">Platforms • #platforms</h3>
      <p style="margin-left: 10px">
        Platform specific layers that reside in platform, with shared components
        (Unix, Win32, Apple, etc.) in drivers.
      </p>
      <p style="margin-left: 10px">
        ⭐Pāvels Nadtočajevs (<a href="#">@bruvzg</a>),⭐ Rémi Verschelde (<a
          href="#"
          >@akien-mga</a
        >)
      </p>
      <div class="ttaab" style="height: 530px">
        <div class="X"></div>
        <table class="tab">
          <tr>
            <th
              style="
                width: 30%;
                height: 50px;
                text-align: left;
                padding: 8px;
                border-bottom: 1px dashed black;
                border-right: 1px dashed black;
              "
            >
              Android (#android)
            </th>
            <td
              style="width: 70%; border-bottom: 1px dashed black; padding: 8px"
            >
              ⭐ Fredia Huya-Kouadio (<a href="#">@m4gr3d</a>)
            </td>
          </tr>
          <tr>
            <th
              style="
                height: 50px;
                text-align: left;
                padding: 8px;
                border-bottom: 1px dashed black;
                border-right: 1px dashed black;
              "
            >
              HTML5
            </th>
            <td style="border-bottom: 1px dashed black; padding: 8px">
              ⭐Fabio Alessandrelli (<a href="#">@Faless</a>)
            </td>
          </tr>
          <tr>
            <th
              style="
                height: 80px;
                text-align: left;
                padding: 8px;
                border-right: 1px dashed black;
                border-bottom: 1px dashed black;
              "
            >
              iOS
            </th>
            <td style="padding: 8px; border-bottom: 1px dashed black">
              ⭐Pāvels Nadtočajevs (<a href="#">@bruvzg</a>)
            </td>
          </tr>
          <tr>
            <th
              style="
                width: 30%;
                height: 50px;
                text-align: left;
                padding: 8px;
                border-bottom: 1px dashed black;
                border-right: 1px dashed black;
              "
            >
              Linux / BSD
            </th>
            <td
              style="width: 70%; border-bottom: 1px dashed black; padding: 8px"
            >
              Fabio Alessandrelli (<a href="#">@Faless</a>), HP van Braam (<a
                href="#"
                >@hpvb</a
              >), Pāvels Nadtočajevs (<a href="#">@bruvzg</a>), Rémi Verschelde
              (<a href="#">@akien-mga</a>)
            </td>
          </tr>
          <tr>
            <th
              style="
                width: 30%;
                height: 50px;
                text-align: left;
                padding: 8px;
                border-bottom: 1px dashed black;
                border-right: 1px dashed black;
              "
            >
              macOS
            </th>
            <td
              style="width: 70%; border-bottom: 1px dashed black; padding: 8px"
            >
              ⭐Pāvels Nadtočajevs (<a href="#">@bruvzg</a>)
            </td>
          </tr>
          <tr>
            <th
              style="
                width: 30%;
                height: 50px;
                text-align: left;
                padding: 8px;
                border-bottom: 1px dashed black;
                border-right: 1px dashed black;
              "
            >
              UWP
            </th>
            <td
              style="width: 70%; border-bottom: 1px dashed black; padding: 8px"
            >
              ⭐George Marques (<a href="#">@vnen</a>)
            </td>
          </tr>
          <tr>
            <th
              style="
                width: 30%;
                height: 50px;
                text-align: left;
                padding: 8px;
                border-right: 1px dashed black;
              "
            >
              Windows
            </th>
            <td style="width: 70%; padding: 8px">
              ⭐Pāvels Nadtočajevs (<a href="#">@bruvzg</a>), Max Hilbrunner (<a
                href="#"
                >@mhilbrunner</a
              >)
            </td>
          </tr>
        </table>
      </div>
    </div>
    <h2 class="hh" style="margin-bottom: 20px">Systems</h2>
    <p style="margin-top: 10px">
      Specialized subsystems with their dedicated teams and communication
      channels.
    </p>
    <div class="bodo" style="height: 270px; margin-top: 10px">
      <h3 class="hh1" style="margin-left: 10px">Animation • #animation</h3>
      <p style="margin-left: 10px">
        Nodes and features for 2D and 3D animation and IK workflows.
      </p>
      <p style="margin-left: 10px">
        ⭐Juan Linietsky (<a href="#">@reduz</a>), K. S. Ernest Lee (<a href="#"
          >@fire</a
        >), @lyuma, Silc 'Tokage' Renew (<a href="#">@TokageItLab</a>),
        SaracenOne
      </p>
    </div>
    <div class="bodo" style="height: 200px; margin-top: 10px">
      <h3 class="hh1" style="margin-left: 10px">Audio • #audio</h3>
      <p style="margin-left: 10px">
        All audio-related features, from low-level AudioServer and drivers to
        high-level nodes and effects.
      </p>
      <p style="margin-left: 10px">
        Ellen Poe (<a href="#">@ellenhp</a>), Juan Linietsky (@reduz)
      </p>
    </div>
    <div class="bodo" style="height: 250px; margin-top: 10px">
      <h3 class="hh1" style="margin-left: 10px">Import • #asset-pipeline</h3>
      <p style="margin-left: 10px">
        Asset import pipeline for 2D (textures) and 3D (scenes, models,
        animations, etc.).
      </p>
      <p style="margin-left: 10px">
        ⭐Juan Linietsky (<a href="#">@reduz</a>), Hugo Locurcio (<a href="#"
          >@Calinou</a
        >), Joan Fons Sanchez (<a href="#">@JFonS</a>), K. S. Ernest Lee (<a
          href="#"
          >@fire</a
        >), <a href="#">@lyuma, Rémi Verschelde</a> (@akien-mga)
      </p>
    </div>
    <div class="bodo" style="height: 200px; margin-top: 10px">
      <h3 class="hh1" style="margin-left: 10px">Networking • #networking</h3>
      <p style="margin-left: 10px">
        Networked multiplayer, RPCs and replication, HTTP/TCP/UDP/DNS,
        WebSockets, ENet, encryption.
      </p>
      <p style="margin-left: 10px">
        ⭐Fabio Alessandrelli (<a href="#">@Faless</a>), Max Hilbrunner
        (@mhilbrunner)
      </p>
    </div>
    <div class="bodo" style="height: 200px; margin-top: 10px">
      <h3 class="hh1" style="margin-left: 10px">Physics • #physics</h3>
      <p style="margin-left: 10px">
        Physics servers and their implementation in 2D and 3D.
      </p>
      <p style="margin-left: 10px">
        Fabrice Cipolla (<a href="#">@fabriceci</a>), Juan Linietsky (@reduz),
        <a href="#">@lawnjelly</a>, Ricardo Buring (@rburing)
      </p>
    </div>
    <div class="bodo" style="height: 550px">
      <h3 class="hh1" style="margin-left: 10px">Rendering • #rendering</h3>
      <p style="margin-left: 10px">
        Rendering server and RenderingDevice implementations (Vulkan, OpenGL),
        as well as the actual rendering techniques implemented using those
        graphics APIs.
      </p>
      <p style="margin-left: 10px">
        ⭐Clay John (<a href="#">@clayjohn</a>), Bastiaan Olij (<a href="#"
          >@BastiaanOlij</a
        >), Hugo Locurcio (<a href="#">@Calinou</a>),
        <a href="#">@lawnjelly</a>, Pedro J. Estébanez (RandomShaper), Joan Fons
        Sanchez (@JFonS), Juan Linietsky (@reduz)
      </p>
      <div class="ttaab" style="height: 200px">
        <div class="X"></div>
        <table class="tab">
          <tr>
            <th
              style="
                width: 30%;
                height: 50px;
                text-align: left;
                padding: 8px;
                border-bottom: 1px dashed black;
                border-right: 1px dashed black;
              "
            >
              Shaders
            </th>
            <td
              style="width: 70%; border-bottom: 1px dashed black; padding: 8px"
            >
              ⭐Yuri Rubinsky (@Chaosus), Clay John (@clayjohn)
            </td>
          </tr>
          <tr>
            <th
              style="
                height: 50px;
                text-align: left;
                padding: 8px;
                border-right: 1px dashed black;
              "
            >
              Tech Art
            </th>
            <td style="padding: 8px">
              Clay John (@clayjohn), Hugo Locurcio (@Calinou), Ilaria Cislaghi
              (<a href="#">@QbieShay</a>), Patrick Exner (<a href="#"
                >@paddy-exe</a
              >), Yuri Rubinsky (<a href="#">@Chaosus</a>)
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="bodo" style="height: 470px">
      <h3 class="hh1" style="margin-left: 10px">XR • <a href="#">#xr</a></h3>
      <p style="margin-left: 10px; margin-top: 1px">
        Augmented (AR) and virtual reality (VR).
      </p>
      <p style="margin-left: 10px">
        ⭐Bastiaan Olij (<a href="#">@BastiaanOlij</a>), Fredia Huya-Kouadio (<a
          href="#"
          >@m4gr3d</a
        >)
      </p>
      <div class="ttaab" style="height: 200px">
        <div class="X"></div>
        <table class="tab">
          <tr>
            <th
              style="
                width: 30%;
                height: 50px;
                text-align: left;
                padding: 8px;
                border-bottom: 1px dashed black;
                border-right: 1px dashed black;
              "
            >
              WebXR
            </th>
            <td
              style="width: 70%; border-bottom: 1px dashed black; padding: 8px"
            >
              ⭐David Snopek (@dsnopek)
            </td>
          </tr>
          <tr>
            <th
              style="
                height: 50px;
                text-align: left;
                padding: 8px;
                border-right: 1px dashed black;
              "
            >
              XR Tools
            </th>
            <td style="padding: 8px">
              Malcolm Nixon (<a href="#">@malcolmnixon</a>)
            </td>
          </tr>
        </table>
      </div>
    </div>
    <h2 class="hh">Community</h2>
    <p>
      CommunityThe following teams do not impact the engine code directly, but
      take care of all other important parts of the Godot ecosystem such as the
      documentation, demos, website, etc.
    </p>
    <div class="bodo" style="height: 300px">
      <h3 class="hh1" style="margin-left: 10px">
        Communication • #communication
      </h3>
      <p style="margin-left: 10px; margin-top: 1px">
        The communication team ensures that our platforms, from the website to
        our social media, are kept up to date with current information about the
        engine and showcase other projects from the community.
      </p>
      <p style="margin-left: 10px">
        ⭐Emilio Coppola (<a href="#">@coppolaemilio</a>), Clay John (<a
          href="#"
          >@clayjohn</a
        >), Hugo Locurcio (<a href="#">@Calinou</a>), Ilaria Cislaghi (<a
          href="#"
          >@QbieShay</a
        >), Rémi Verschelde (<a href="#">@akien-mga</a>), Yuri Sizov (<a
          href="#"
          >@YuriSizov</a
        >)
      </p>
    </div>
    <div class="bodo" style="height: 250px">
      <h3 class="hh1" style="margin-left: 10px">Demos • #demo-content</h3>
      <p style="margin-left: 10px; margin-top: 1px">
        Maintenance and creation of official demo projects in
        godot-demo-projects.
      </p>
      <p style="margin-left: 10px">
        ⭐Aaron Franke (<a href="#">@aaronfranke</a>), ⭐Hugo Locurcio
        <a href="#">(@Calinou)</a>
      </p>
    </div>
    <div class="bodo" style="height: 370px">
      <h3 class="hh1" style="margin-left: 10px">Translation • #translation</h3>
      <p style="margin-left: 10px; margin-top: 1px">
        Internationalization and localization team - building the infrastructure
        to make it possible to translate Godot and its documentation.
      </p>
      <p style="margin-left: 10px">
        ⭐Rémi Verschelde (<a href="#">@akien-mga</a>), Haoyu Qiu (<a href="#"
          >@timothyqiu</a
        >), Hugo Locurcio (<a href="#">@Calinou</a>)
      </p>
      <p style="margin-left: 10px">
        If you work on Godot translations and contributors for your language
        have a dedicated communication channel for coordination, let us know so
        we can link it here.
      </p>
    </div>
    <div class="bodo" style="height: 250px">
      <h3 class="hh1" style="margin-left: 10px">Website • #website</h3>
      <p style="margin-left: 10px; margin-top: 1px">
        Maintenance of the official Godot website and other hosted resources
        (Q&A, asset library).
      </p>
      <p style="margin-left: 10px">
        ⭐Maintenance of the official Godot website and other hosted resources
        (Q&A, asset library).
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.body {
  width: 70%;
 
  margin: auto;
  position: relative;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.hh {
  font-size: xx-large;
  font-family: "微软雅黑体";
  margin-top: 50px;
  margin-bottom: 50px;
  color: #546b99;
}
p {
  color: #4a5365;
  line-height: 50px;
  font-family: "微软雅黑体";
  font-size: medium;
}
.li2 {
  margin-top: 20px;
}
.bodo {
  margin-top: 100px;
  background-color: #e6eaed;
  width: 800px;
  height: 700px;
}
.hh1 {
  font-size: x-large;
  font-family: "微软雅黑体";
  margin-top: 50px;
  margin-bottom: 50px;
  color: #546b99;
}
.ttaab {
  margin-left: 20px;
  margin-top: 2px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 300px;
}
.tab {
  width: 95%;
  height: 280;
  border-collapse: collapse;
  border: none;
}
.X {
  width: 5px;
  height: 100%;
  background-color: rgb(249, 142, 160);
  float: left;
}
a {
  color: hsl(206, 58%, 50%);
}
</style>
