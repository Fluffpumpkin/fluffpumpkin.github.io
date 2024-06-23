// webstring by june @ webcatz.neocities.org

// webring settings
webring = {

  sites: [
    "old.fluffpumpkin.net"
  ],

  // PREV and NEXT get replaced with neighboring site urls
  widget: `
    <div id="my-webring" style="gap:8px; border-style:solid; display:inline-block; border-color:#222133;line-height:0">
	  <a href="https://old.fluffpumpkin.net/" target="_top"><img src="https://old.fluffpumpkin.net/images/3d_webstring.jpg" alt="3D Webring"></a><br>
      <a href="PREV" target="_top"><img src="https://old.fluffpumpkin.net/images/prev.jpg" alt="<-prev "></a><a href="RANDOM" target="_top"><img src="https://old.fluffpumpkin.net/images/rand.jpg" alt="random"></a><a href="NEXT" target="_top"><img src="https://old.fluffpumpkin.net/images/next.jpg" alt=" next->"></a>
    </div><br>
  `,

  error: "<div>This site isn't part of the 3D Webring yet.</div>",

};



// all of the actual code
webring.index = location.href.startsWith("file://") ? 0 : webring.sites.findIndex(url => location.href.startsWith("https://" + url));
if (webring.index == -1) document.currentScript.outerHTML = webring.error;
else {
  webring.widget = webring.widget.replace("PREV", webring.sites.at(webring.index - 1));
  webring.widget = webring.widget.replace("NEXT", webring.sites[(webring.index + 1) % webring.sites.length]);
  webring.widget = webring.widget.replace("RANDOM", webring.sites[Math.floor(Math.random() * webring.sites.length)]);
  document.currentScript.outerHTML = webring.widget;
}
delete webring;