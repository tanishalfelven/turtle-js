const t = require("../../turtle");

// example of html generation
const dataPoints = [
    "hey",
    "this",
    "is",
    "a",
    "test"
];

console.log(
    t`tr ${
        t.map(dataPoints, (e, i) => t`td ${`${i+1}: ${e}`}`)
    }`
);

/*
outputs
<tr>
    <td>1: hey</td>
    <td>2: this</td>
    <td>3: is</td>
    <td>4: a</td>
    <td>5: test</td>
</tr>
*/
