let options = {
    width: 1400,
    height: 700,
    background: "red",
    font: {
        size: "16px",
        color: "#fff"
    }
};


console.log(JSON.stringify(options)) // Делает из обьекта js в json
console.log(JSON.parse(JSON.stringify(options)))  // Из json в обьект