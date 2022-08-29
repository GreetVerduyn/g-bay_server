# g-bay_server

creating a new directory for the server side

- I made a new repo and copied this files from our 1st repo into it

  (- server
    - package.json
    - package-lock.json) 


Now I have to find out (again) how this is all working 

// mySQL

https://medium.com/codex/building-a-rest-api-with-node-js-mysql-and-express-d55c090d171e
How to build a REST API with Express and MySQL

https://www.tabnine.com/code/javascript/functions/mysql/createPool


//API testen met Postman

To test whether the APIs we make works good, we can use Postman, So I installed it

https://www.postman.com/downloads/?utm_source=postman-home


// Morgan ge+Installeerd en geconfigureerd
https://levelup.gitconnected.com/better-logs-for-expressjs-using-winston-and-morgan-with-typescript-1c31c1ab9342


// API standaard
https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design

https://medium.com/codex/building-a-rest-api-with-node-js-mysql-and-express-d55c090d171e




// triggers deleteProduct() from 'Database' model  TO TEST

app.delete("/api/product/id/:id", async (req, res) => {
try{
const id = req.params.id;
const result = await Database.Database.deleteProduct(id);
res.status(200).send(result)
}catch (error){
res.status(500).send(error)
}
});