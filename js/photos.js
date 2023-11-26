(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto("id-"+id, url);
lazyload();
})(`
<li class="item " id="id-20231001585-img-9554" style="background-image: url('/qq/photos/tint/20231001585-IMG_9554-65ba1d.webp')" title="20231001585-IMG_9554">
  <img class="lazyload" data-src="/qq/photos/thumbnail/20231001585-IMG_9554-ccf4df.webp" src="/qq/photos/tint/20231001585-IMG_9554-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/20231001585-IMG_9554-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/20231001585-img-9554" data-target="id-20231001585-img-9554">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/20230929820-img-8255" data-target="id-20230929820-img-8255" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('20231001585-IMG_9554','/qq/20231001585-img-9554');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('20231001585-IMG_9554', '/qq/20231001585-img-9554')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-20230929820-img-8255" style="background-image: url('/qq/photos/tint/20230929820-IMG_8255-65ba1d.webp')" title="20230929820-IMG_8255">
  <img class="lazyload" data-src="/qq/photos/thumbnail/20230929820-IMG_8255-ccf4df.webp" src="/qq/photos/tint/20230929820-IMG_8255-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/20230929820-IMG_8255-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/20230929820-img-8255" data-target="id-20230929820-img-8255">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/20231001585-img-9554" data-target="id-20231001585-img-9554" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/20230929797-img-8264" data-target="id-20230929797-img-8264" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('20230929820-IMG_8255','/qq/20230929820-img-8255');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('20230929820-IMG_8255', '/qq/20230929820-img-8255')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-20230929797-img-8264" style="background-image: url('/qq/photos/tint/20230929797-IMG_8264-65ba1d.webp')" title="20230929797-IMG_8264">
  <img class="lazyload" data-src="/qq/photos/thumbnail/20230929797-IMG_8264-ccf4df.webp" src="/qq/photos/tint/20230929797-IMG_8264-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/20230929797-IMG_8264-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/20230929797-img-8264" data-target="id-20230929797-img-8264">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/20230929820-img-8255" data-target="id-20230929820-img-8255" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/20230929560-img-8222" data-target="id-20230929560-img-8222" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('20230929797-IMG_8264','/qq/20230929797-img-8264');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('20230929797-IMG_8264', '/qq/20230929797-img-8264')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-20230929560-img-8222" style="background-image: url('/qq/photos/tint/20230929560-IMG_8222-65ba1d.webp')" title="20230929560-IMG_8222">
  <img class="lazyload" data-src="/qq/photos/thumbnail/20230929560-IMG_8222-ccf4df.webp" src="/qq/photos/tint/20230929560-IMG_8222-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/20230929560-IMG_8222-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/20230929560-img-8222" data-target="id-20230929560-img-8222">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/20230929797-img-8264" data-target="id-20230929797-img-8264" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/20230929467-img-9298" data-target="id-20230929467-img-9298" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('20230929560-IMG_8222','/qq/20230929560-img-8222');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('20230929560-IMG_8222', '/qq/20230929560-img-8222')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-20230929467-img-9298" style="background-image: url('/qq/photos/tint/20230929467-IMG_9298-65ba1d.webp')" title="20230929467-IMG_9298">
  <img class="lazyload" data-src="/qq/photos/thumbnail/20230929467-IMG_9298-ccf4df.webp" src="/qq/photos/tint/20230929467-IMG_9298-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/20230929467-IMG_9298-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/20230929467-img-9298" data-target="id-20230929467-img-9298">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/20230929560-img-8222" data-target="id-20230929560-img-8222" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/20230928564-img-9148" data-target="id-20230928564-img-9148" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('20230929467-IMG_9298','/qq/20230929467-img-9298');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('20230929467-IMG_9298', '/qq/20230929467-img-9298')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-20230928564-img-9148" style="background-image: url('/qq/photos/tint/20230928564-IMG_9148-65ba1d.webp')" title="20230928564-IMG_9148">
  <img class="lazyload" data-src="/qq/photos/thumbnail/20230928564-IMG_9148-ccf4df.webp" src="/qq/photos/tint/20230928564-IMG_9148-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/20230928564-IMG_9148-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/20230928564-img-9148" data-target="id-20230928564-img-9148">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/20230929467-img-9298" data-target="id-20230929467-img-9298" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/20230927799-img-1225" data-target="id-20230927799-img-1225" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('20230928564-IMG_9148','/qq/20230928564-img-9148');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('20230928564-IMG_9148', '/qq/20230928564-img-9148')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-20230927799-img-1225" style="background-image: url('/qq/photos/tint/20230927799-IMG_1225-65ba1d.webp')" title="20230927799-IMG_1225">
  <img class="lazyload" data-src="/qq/photos/thumbnail/20230927799-IMG_1225-ccf4df.webp" src="/qq/photos/tint/20230927799-IMG_1225-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/20230927799-IMG_1225-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/20230927799-img-1225" data-target="id-20230927799-img-1225">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/20230928564-img-9148" data-target="id-20230928564-img-9148" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/20230927571-img-8949" data-target="id-20230927571-img-8949" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('20230927799-IMG_1225','/qq/20230927799-img-1225');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('20230927799-IMG_1225', '/qq/20230927799-img-1225')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-20230927571-img-8949" style="background-image: url('/qq/photos/tint/20230927571-IMG_8949-65ba1d.webp')" title="20230927571-IMG_8949">
  <img class="lazyload" data-src="/qq/photos/thumbnail/20230927571-IMG_8949-ccf4df.webp" src="/qq/photos/tint/20230927571-IMG_8949-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/20230927571-IMG_8949-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/20230927571-img-8949" data-target="id-20230927571-img-8949">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/20230927799-img-1225" data-target="id-20230927799-img-1225" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/20230927394-img-8925" data-target="id-20230927394-img-8925" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('20230927571-IMG_8949','/qq/20230927571-img-8949');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('20230927571-IMG_8949', '/qq/20230927571-img-8949')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-20230927394-img-8925" style="background-image: url('/qq/photos/tint/20230927394-IMG_8925-65ba1d.webp')" title="20230927394-IMG_8925">
  <img class="lazyload" data-src="/qq/photos/thumbnail/20230927394-IMG_8925-ccf4df.webp" src="/qq/photos/tint/20230927394-IMG_8925-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/20230927394-IMG_8925-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/20230927394-img-8925" data-target="id-20230927394-img-8925">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/20230927571-img-8949" data-target="id-20230927571-img-8949" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/20230927184-img-8045" data-target="id-20230927184-img-8045" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('20230927394-IMG_8925','/qq/20230927394-img-8925');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('20230927394-IMG_8925', '/qq/20230927394-img-8925')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-20230927184-img-8045" style="background-image: url('/qq/photos/tint/20230927184-IMG_8045-65ba1d.webp')" title="20230927184-IMG_8045">
  <img class="lazyload" data-src="/qq/photos/thumbnail/20230927184-IMG_8045-ccf4df.webp" src="/qq/photos/tint/20230927184-IMG_8045-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/20230927184-IMG_8045-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/20230927184-img-8045" data-target="id-20230927184-img-8045">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/20230927394-img-8925" data-target="id-20230927394-img-8925" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/2023092717-img-8956" data-target="id-2023092717-img-8956" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('20230927184-IMG_8045','/qq/20230927184-img-8045');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('20230927184-IMG_8045', '/qq/20230927184-img-8045')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-2023092717-img-8956" style="background-image: url('/qq/photos/tint/2023092717-IMG_8956-65ba1d.webp')" title="2023092717-IMG_8956">
  <img class="lazyload" data-src="/qq/photos/thumbnail/2023092717-IMG_8956-ccf4df.webp" src="/qq/photos/tint/2023092717-IMG_8956-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/2023092717-IMG_8956-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/2023092717-img-8956" data-target="id-2023092717-img-8956">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/20230927184-img-8045" data-target="id-20230927184-img-8045" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/20230926332-img-7983" data-target="id-20230926332-img-7983" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('2023092717-IMG_8956','/qq/2023092717-img-8956');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('2023092717-IMG_8956', '/qq/2023092717-img-8956')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-20230926332-img-7983" style="background-image: url('/qq/photos/tint/20230926332-IMG_7983-65ba1d.webp')" title="20230926332-IMG_7983">
  <img class="lazyload" data-src="/qq/photos/thumbnail/20230926332-IMG_7983-ccf4df.webp" src="/qq/photos/tint/20230926332-IMG_7983-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/20230926332-IMG_7983-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/20230926332-img-7983" data-target="id-20230926332-img-7983">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/2023092717-img-8956" data-target="id-2023092717-img-8956" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/20230926164-img-7957" data-target="id-20230926164-img-7957" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('20230926332-IMG_7983','/qq/20230926332-img-7983');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('20230926332-IMG_7983', '/qq/20230926332-img-7983')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-20230926164-img-7957" style="background-image: url('/qq/photos/tint/20230926164-IMG_7957-65ba1d.webp')" title="20230926164-IMG_7957">
  <img class="lazyload" data-src="/qq/photos/thumbnail/20230926164-IMG_7957-ccf4df.webp" src="/qq/photos/tint/20230926164-IMG_7957-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/20230926164-IMG_7957-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/20230926164-img-7957" data-target="id-20230926164-img-7957">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/20230926332-img-7983" data-target="id-20230926332-img-7983" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/2023092473-img-8340" data-target="id-2023092473-img-8340" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('20230926164-IMG_7957','/qq/20230926164-img-7957');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('20230926164-IMG_7957', '/qq/20230926164-img-7957')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-2023092473-img-8340" style="background-image: url('/qq/photos/tint/2023092473-IMG_8340-65ba1d.webp')" title="2023092473-IMG_8340">
  <img class="lazyload" data-src="/qq/photos/thumbnail/2023092473-IMG_8340-ccf4df.webp" src="/qq/photos/tint/2023092473-IMG_8340-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/2023092473-IMG_8340-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/2023092473-img-8340" data-target="id-2023092473-img-8340">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/20230926164-img-7957" data-target="id-20230926164-img-7957" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/20230924220-img-8311" data-target="id-20230924220-img-8311" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('2023092473-IMG_8340','/qq/2023092473-img-8340');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('2023092473-IMG_8340', '/qq/2023092473-img-8340')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-20230924220-img-8311" style="background-image: url('/qq/photos/tint/20230924220-IMG_8311-65ba1d.webp')" title="20230924220-IMG_8311">
  <img class="lazyload" data-src="/qq/photos/thumbnail/20230924220-IMG_8311-ccf4df.webp" src="/qq/photos/tint/20230924220-IMG_8311-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/20230924220-IMG_8311-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/20230924220-img-8311" data-target="id-20230924220-img-8311">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/2023092473-img-8340" data-target="id-2023092473-img-8340" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/20200609948-039" data-target="id-20200609948-039" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('20230924220-IMG_8311','/qq/20230924220-img-8311');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('20230924220-IMG_8311', '/qq/20230924220-img-8311')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-20200609948-039" style="background-image: url('/qq/photos/tint/20200609948-039-65ba1d.webp')" title="20200609948-039">
  <img class="lazyload" data-src="/qq/photos/thumbnail/20200609948-039-ccf4df.webp" src="/qq/photos/tint/20200609948-039-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/20200609948-039-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/20200609948-039" data-target="id-20200609948-039">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/20230924220-img-8311" data-target="id-20230924220-img-8311" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/0007-1456046255-0" data-target="id-0007-1456046255-0" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('20200609948-039','/qq/20200609948-039');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('20200609948-039', '/qq/20200609948-039')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-0007-1456046255-0" style="background-image: url('/qq/photos/tint/0007-1456046255-0-65ba1d.webp')" title="0007-1456046255-0">
  <img class="lazyload" data-src="/qq/photos/thumbnail/0007-1456046255-0-ccf4df.webp" src="/qq/photos/tint/0007-1456046255-0-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/0007-1456046255-0-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/0007-1456046255-0" data-target="id-0007-1456046255-0">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/20200609948-039" data-target="id-20200609948-039" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81" data-target="id-0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('0007-1456046255-0','/qq/0007-1456046255-0');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('0007-1456046255-0', '/qq/0007-1456046255-0')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81" style="background-image: url('/qq/photos/tint/0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81-65ba1d.webp')" title="0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81">
  <img class="lazyload" data-src="/qq/photos/thumbnail/0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81-ccf4df.webp" src="/qq/photos/tint/0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81" data-target="id-0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/0007-1456046255-0" data-target="id-0007-1456046255-0" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/0005-%E5%AE%97%E6%95%99%E5%92%8C%E7%A7%91%E5%AD%A6" data-target="id-0005-宗教和科学" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81','/qq/0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81', '/qq/0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-0005-宗教和科学" style="background-image: url('/qq/photos/tint/0005-%E5%AE%97%E6%95%99%E5%92%8C%E7%A7%91%E5%AD%A6-65ba1d.webp')" title="0005-宗教和科学">
  <img class="lazyload" data-src="/qq/photos/thumbnail/0005-%E5%AE%97%E6%95%99%E5%92%8C%E7%A7%91%E5%AD%A6-ccf4df.webp" src="/qq/photos/tint/0005-%E5%AE%97%E6%95%99%E5%92%8C%E7%A7%91%E5%AD%A6-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/0005-%E5%AE%97%E6%95%99%E5%92%8C%E7%A7%91%E5%AD%A6-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/0005-%E5%AE%97%E6%95%99%E5%92%8C%E7%A7%91%E5%AD%A6" data-target="id-0005-宗教和科学">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81" data-target="id-0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/0004-do-you-have-a-step-by-step-blog-writing-process-here-s-one-3" data-target="id-0004-do-you-have-a-step-by-step-blog-writing-process-here-s-one-3" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('0005-宗教和科学','/qq/0005-%E5%AE%97%E6%95%99%E5%92%8C%E7%A7%91%E5%AD%A6');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('0005-宗教和科学', '/qq/0005-%E5%AE%97%E6%95%99%E5%92%8C%E7%A7%91%E5%AD%A6')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-0004-do-you-have-a-step-by-step-blog-writing-process-here-s-one-3" style="background-image: url('/qq/photos/tint/0004-Do-You-Have-A-Step-by-Step-Blog-Writing-Process-Here%E2%80%99s-One-3-65ba1d.webp')" title="0004-Do-You-Have-A-Step-by-Step-Blog-Writing-Process-Here’s-One-3">
  <img class="lazyload" data-src="/qq/photos/thumbnail/0004-Do-You-Have-A-Step-by-Step-Blog-Writing-Process-Here%E2%80%99s-One-3-ccf4df.webp" src="/qq/photos/tint/0004-Do-You-Have-A-Step-by-Step-Blog-Writing-Process-Here%E2%80%99s-One-3-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/0004-Do-You-Have-A-Step-by-Step-Blog-Writing-Process-Here%E2%80%99s-One-3-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/0004-do-you-have-a-step-by-step-blog-writing-process-here-s-one-3" data-target="id-0004-do-you-have-a-step-by-step-blog-writing-process-here-s-one-3">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/0005-%E5%AE%97%E6%95%99%E5%92%8C%E7%A7%91%E5%AD%A6" data-target="id-0005-宗教和科学" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/0003-041" data-target="id-0003-041" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('0004-Do-You-Have-A-Step-by-Step-Blog-Writing-Process-Here’s-One-3','/qq/0004-do-you-have-a-step-by-step-blog-writing-process-here-s-one-3');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('0004-Do-You-Have-A-Step-by-Step-Blog-Writing-Process-Here’s-One-3', '/qq/0004-do-you-have-a-step-by-step-blog-writing-process-here-s-one-3')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-0003-041" style="background-image: url('/qq/photos/tint/0003-041-65ba1d.webp')" title="0003-041">
  <img class="lazyload" data-src="/qq/photos/thumbnail/0003-041-ccf4df.webp" src="/qq/photos/tint/0003-041-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/0003-041-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/0003-041" data-target="id-0003-041">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/0004-do-you-have-a-step-by-step-blog-writing-process-here-s-one-3" data-target="id-0004-do-you-have-a-step-by-step-blog-writing-process-here-s-one-3" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/0002-040" data-target="id-0002-040" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('0003-041','/qq/0003-041');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('0003-041', '/qq/0003-041')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-0002-040" style="background-image: url('/qq/photos/tint/0002-040-65ba1d.webp')" title="0002-040">
  <img class="lazyload" data-src="/qq/photos/thumbnail/0002-040-ccf4df.webp" src="/qq/photos/tint/0002-040-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/0002-040-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/0002-040" data-target="id-0002-040">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/0003-041" data-target="id-0003-041" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/0001-jon-ly-487338-unsplash-768x432" data-target="id-0001-jon-ly-487338-unsplash-768x432" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('0002-040','/qq/0002-040');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('0002-040', '/qq/0002-040')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-0001-jon-ly-487338-unsplash-768x432" style="background-image: url('/qq/photos/tint/0001-jon-ly-487338-unsplash-768x432-65ba1d.webp')" title="0001-jon-ly-487338-unsplash-768x432">
  <img class="lazyload" data-src="/qq/photos/thumbnail/0001-jon-ly-487338-unsplash-768x432-ccf4df.webp" src="/qq/photos/tint/0001-jon-ly-487338-unsplash-768x432-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/0001-jon-ly-487338-unsplash-768x432-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/0001-jon-ly-487338-unsplash-768x432" data-target="id-0001-jon-ly-487338-unsplash-768x432">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/0002-040" data-target="id-0002-040" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('0001-jon-ly-487338-unsplash-768x432','/qq/0001-jon-ly-487338-unsplash-768x432');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('0001-jon-ly-487338-unsplash-768x432', '/qq/0001-jon-ly-487338-unsplash-768x432')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
`);