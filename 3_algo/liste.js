const DATA = require('./data.json')

function displayCompetences(item) {
    const childrens = item.children || []

    const ulItems = childrens.map((children) => {
        if (children && typeof children.name === 'string') {
            const compentences = displayCompetences(children)
            const liItems = compentences.map((name, index) => {
                const name = children.name || ``
                return <li key={index}>
                    {name}
                    {compentences}
                </li>
            });
            return <ul key={todo.id}>
                {liItems}
            </ul>
        }
    })
    return ulItems;
}

displayCompetences(DATA[0])