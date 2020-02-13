function getXMLHttpRequest() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        return new ActiveXObject('Microsoft.XMLHTTP');
    }
}


const xhr = getXMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        console.log(xhr.responseText);

    }
};

xhr.open('GET', 'http://localhost:5500/ajax/data.json');
xhr.send();