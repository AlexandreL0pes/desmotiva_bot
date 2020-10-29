const rls = require("readline-sync");
const fs = require("fs");
const path = require("path");

const message = rls.question("Digite a mensagem: ");

const author = rls.question("Digite seu nome:");

console.log("A mensagem foi salva!");
console.log(`${message} - ${author}`);

fs.readFile(path.join(__dirname, "./database/phrases.json"), function (err, data) {
	if (err) throw err;
	obj = JSON.parse(data);
	obj.push({ auth: author, message: message });
	json = JSON.stringify(obj);
	fs.writeFile(path.join(__dirname, "./database/phrases.json"), json, "utf8", () => {});
});
