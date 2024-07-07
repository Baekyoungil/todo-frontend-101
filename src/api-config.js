let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname == "backend"){
    backendHost = "http://192.168.49.2:38080";    
}

export const API_BASE_URL = `${backendHost}`;