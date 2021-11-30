class MyPromiseContainer
{
    isMajor(_age) 
    {
        return new Promise((resolve, reject) => {
            if(_age >= 18) {
                resolve("Il est majeur");
            } else {
                reject("Il est mineur");
            }
        });
    }

    error(error) {
        console.error(error);
    }

    
}

function ok(message) {
    return new Promise((resolve, reject) => {
        if(message.length < 2) {
            reject("c'est quoi ce message pourri ?");
        } else {
            resolve(message.toUpperCase());
        }
    }); 
    
}

const m = new MyPromiseContainer();

m.isMajor(23).then(ok).catch(m.error);
m.isMajor(15).then(ok).catch(m.error);

// isMajor(23)
// .then(message => {
//     console.log(message);
// })
// .catch(error => {
    
// })





