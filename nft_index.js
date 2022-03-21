var unirest = require("unirest")


// question 1

var req1 = unirest("GET", "http://localhost:3000/nfts?_limit=10").headers({
    "cache-console": "no-cache",
     // question 3: "response" peut ètre stocké dans le cache si validé par le serveur d'origine, mème si "response" est non-cacheable

})

req1.end(function (res) {
    if (res.error) throw new Error(res.error)
    console.log(res.body)

})

var req2 = unirest("GET", "http://localhost:3000/nfts").headers({
    "cache-console": "no-cache",

})

// question 2
req2.end((response) =>  {
    console.log("\n\n\n")
    console.log("les noms commencant par la lettre M:",response.body.filter((nfts) => nfts.name.startsWith("M")));
})