function isMajor(_age, _timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(_age > 17) {
                resolve({
                    age: _age,
                    message: "Il est majeur"
                }); 
            } else { 
                reject("Il est mineur");
            }
        }, _timeout);
        
    });
}

class Toto {
    isMajorSuccess(result) {
        console.log(result.age + ": " + result.message);
    }
    
    static isMajorError(error) {
        console.error(error);
    }
}

let age = 23;

let toto = new Toto();

isMajor(age, 3000)
.then(result => {
    
})
.catch(Toto.isMajorError);

isMajor(16, 1500)
.then(toto.isMajorSuccess)
.catch(Toto.isMajorError);

console.log("OK");
