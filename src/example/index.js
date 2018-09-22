const t = require("../../turtle");

// example of html generation
console.log(
    t`tr ${
        t.repeat(5)`td ${
            "hello world"
            }`
        }`
);

// outputs
// <tr>
//     <td>hello world</td>
//     <td>hello world</td>
//     <td>hello world</td>
//     <td>hello world</td>
//     <td>hello world</td>
// </tr>
