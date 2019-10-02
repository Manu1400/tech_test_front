const DATA = require('./data.json')

function display(text) {
    console.log(text)
}

function displayCompetences(item) {
    const childrens = item.children || []
    childrens.map((children) => {
        if (children && typeof children.name === `string`) {
            const name = children.name || ``
            display(name)
            displayCompetences(children)
        }
        return;
    });
}

displayCompetences(DATA[0])
