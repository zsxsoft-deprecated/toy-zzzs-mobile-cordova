/**
 * 异步得到json
 * @exports
 * @param  {string}   url      
 * @param  {Function} callback 
 * @return {XMLHttpRequest}
 */
export function getJsonAsync(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
    xmlHttp.addEventListener("readystatechange", function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            callback(null, JSON.parse(xmlHttp.responseText));
        } else if (xmlHttp.readyState === 4) {
            callback({
                readyState: xmlHttp.readyState,
                status: xmlHttp.status,
                statusText: xmlHttp.statusText
            }, null);
        }
    });
    return xmlHttp;
}
