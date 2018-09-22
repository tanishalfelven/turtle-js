'use strict';

function parseTagData(tag) {
    tag = tag.trim();
    const tokens = tag.match(/(\#|\.)\w+/g);
    const classes = [];
    let id = "";
    const tags = {
        tag : tag.match(/(.+?(?=\#|\.))|(\w+)/)[0]
    };

    if (tokens) {
        tokens.forEach(token => {
            const [ tkn, identifier ] = [ token.charAt(0), token.slice(1) ];
    
            switch (tkn) {
                case ".":
                    classes.push(identifier);
                    break;
                case "#":
                    id = identifier;
                    break;
            }
        });
    }

    if (id !== "") {
        tags.id = id;
    }

    if (classes.length > 0) {
        tags.classes = classes;
    }

    return tags;
}
function turtle(slices, ...vars) {
    return slices
    .map((slice) => slice.split("\n").map(e => e.trim()).filter(e => e != ""))
    .filter(e => e.length > 0)
    .map((slice, i) => slice.map((e, j, arr) => {
            const tagData = parseTagData(e);
            e = `<${tagData.tag}${"classes" in tagData && tagData.classes ? ` class="${tagData.classes.join(" ")}"` : ""}${"id" in tagData && tagData.id ? ` id=${tagData.id}` : ""}>`;

            if (j+1 === arr.length) {
                e += vars[i];
            }

            e += `</${tagData.tag}>`;

            return e;
        }).join("")
    ).join("");
}
turtle.prototype.turtle = function repeat(n, renderer) {
    return (...templData) => {
        let str = "";
        for (let i = 0; i < n; i++) {
            str += renderer(...templData);
        }

        return str;
    }
};

module.exports = turtle;
