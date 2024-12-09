// script.js 
// (This remains the same as the previous response - 
//  it handles the dynamic text based on URL parameters) 
function getQueryParams(url) {
    const queryParams = {};
    const queryString = url.split("?")[1]; 
    if (queryString) {
      const params = queryString.split("&");
      for (let i = 0; i < params.length; i++) {
        const [key, value] = params[i].split("=");
        queryParams[key] = decodeURIComponent(value);
      }
    }
    return queryParams;
  }
  
  $(document).ready(function() {
    const queryParams = getQueryParams(window.location.href);
    const name = queryParams.name;
    const count = queryParams.count;
  
    let inviteText = "Join us as we celebrate our wedding";
    if (name && count) {
      inviteText = `Dear ${name}, we invite you with a count of ${count}`;
    } else if (count) {
      inviteText = `We invite you, family, with a count of ${count}`;
    } else if (name) {
      inviteText = `Dear ${name} family, we invite you to our wedding`; 
    }
  
    $("#invite-text").text(inviteText);
  });