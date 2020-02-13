function getXMLHttpRequest() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        return new ActiveXObject('Microsoft.XMLHTTP');
    }
}


const xhr = getXMLHttpRequest();

function go() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Boom');
        }, 5000);
    });
}

go().then(message => message.toUpperCase())
    .then(message => alert(message));




function get(url) {
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                }

                else {
                    reject({
                        status: xhr.status
                    });
                }
            }

        };

        xhr.open('GET', url, true);
        xhr.send();

    })
}

get('http://localhost:5500/ajax/data.json')
    .then(data => JSON.parse(data))
    .then(data => {
        const namesElem = document.querySelector('#names');
        data.forEach(object => {
            const txt = document.createTextNode(object.name);
            const li = document.createElement('li');

            li.appendChild(txt);
            namesElem.appendChild(li);
        });
    })
    .catch(err => console.log(err));





//Ca marche, mais non réutilisable sans tout copier/coller !

// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//         const json = JSON.parse(xhr.responseText);
//         console.log(json);

//         if (xhr.status === 200) {
//             console.log("tout est ok");

//             const namesElem = document.querySelector('#names');
//             json.forEach(object => {
//                 const txt = document.createTextNode(object.name);
//                 const li = document.createElement('li');

//                 li.appendChild(txt);
//                 namesElem.appendChild(li);
//             });
//         }
//         else {
//             console.log('Error :', xhr.status);

//         }

//     }
// };

// xhr.open('GET', 'http://localhost:5500/ajax/data.json');
// xhr.send();