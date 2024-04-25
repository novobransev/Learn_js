try {
    console.log("Normal");
} catch {
    console.log("error");
}

try {
    console.log("Начинаем работу ");
    console.log(a)
} catch(e) {
    console.log(e);
}

let json = {"id": 2}
try {
    let user = JSON.stringify(json);
    
    if (!user.name) {
        throw new Error("ну блин ну...")
    }
} catch(e) {
    console.log(e);
}