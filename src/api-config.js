let backendHost;

const hostname = window && window.location && window.location.hostname;

//if(hostname == "192.168.35.181"){
    backendHost = "http://192.168.35.181:8080";    
//}

export const API_BASE_URL = `${backendHost}`;