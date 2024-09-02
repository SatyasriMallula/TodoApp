const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log(fruits.get("apples"));

async function getText(text) {
    let x = await fetch(text)
    let y = await x.text();
    console.log(y);
}
getText("fetchtest.txt")
