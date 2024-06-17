// webstring by june @ webcatz.neocities.org

// webring settings
webring = {

  sites: [
    "https://old.fluffpumpkin.net/"
  ],

  // PREV and NEXT get replaced with neighboring site urls
  widget: `
    <div id="my-webring" style="gap: 8px; border-style: solid; display: inline-block"; border-color:#222133">
	  <div><img src="images/3d_webring.jpg" alt="3D Webring"></div>
      &nbsp;<a href="PREV" target="_top"><-prev</a>
      <a href="RANDOM" target="_top">random</a>
      <a href="NEXT" target="_top">next -></a>
    </div><br>
  `,

  error: "<div>This site isn't part of the 3D Webring yet.</div>",

};



// all of the actual code
webring.index = location.href.startsWith("file://") ? 0 : webring.sites.findIndex(url => location.href.startsWith(url));
if (webring.index == -1) document.currentScript.outerHTML = webring.error;
else {
  webring.widget = webring.widget.replace("PREV", webring.sites.at(webring.index - 1));
  webring.widget = webring.widget.replace("NEXT", webring.sites[(webring.index + 1) % webring.sites.length]);
  webring.widget = webring.widget.replace("RANDOM", webring.sites[Math.floor(Math.random() * webring.sites.length)]);
  document.currentScript.outerHTML = webring.widget;
}
delete webring;