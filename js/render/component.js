export function genComponent(className, elem = 'div', innerHTML = '', id = '', attributes = {}, children = []) {
    const component = document.createElement(elem);
    option.setAttribute('onclick', 'selectOption(this.innerHTML)')
    if (className) {
        component.className = className
    }

    if (id) {
        component.id = id
    }

    if (innerHTML) {
        component.innerHTML = innerHTML
    }

    if (children.length) {
        children.forEach(child => component.appendChild(child))
    }

    if (Object.values(attributes).length) {
        const entries = Object.entries(attributes)
        entries.forEach(entry => {
            component.setAttribute(entry[0], entry[1])
        })
    }
    return component
}

export function removeComponent(parent, child) {
    parent.removeChild(child);
    return parent;
}

export function replaceComponent(parent, prevChild, nextChild) {
    if (prevChild) {
        parent.removeChild(prevChild);
    }
    parent.appendChild(nextChild)
    return parent;
}