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
    .then(message => console.log(message));




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



// async await

async function getJokes() {
    const data = await get('https://api.chucknorris.io/jokes/random');
    const jokes = JSON.parse(data);
    return jokes.value;

    // throw  new Error('My error');

    // const data2 = await get('https://api.chucknorris.io/jokes/rando');
    // const jokes2 = JSON.parse(data2);
    // console.log(jokes2.value);

}
// try {
//     getJokes().then(joke => console.log(joke));

// } catch (error) {
//     console.log('Error' + error);

// }
