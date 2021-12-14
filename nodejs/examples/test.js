let a = [
    {cp:"68100", name: "Mulhouse"},
    {cp:"67100", name: "Mulhause"},
];

console.log(a.filter(x => x.name.includes("Mulh") || x.cp.includes("681")));