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
        const json = JSON.parse(xhr.responseText);
        console.log(json);

        if (xhr.status === 200) {
            console.log("tout est ok");

            const namesElem = document.querySelector('#names');
            json.forEach(object => {
                const txt = document.createTextNode(object.name);
                const li = document.createElement('li');

                li.appendChild(txt);
                namesElem.appendChild(li);
            });
        }
        else {
            console.log('Error :', xhr.status);

        }

    }
};

xhr.open('GET', 'http://localhost:5500/ajax/data.json');
xhr.send();