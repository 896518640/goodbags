const Storage =  {}

Storage.get = function (name) {
    return JSON.parse(localStorage.getItem(name))
}

Storage.set = function (name, val) {
    localStorage.setItem(name, JSON.stringify(val))
}

Storage.add = function (name, addVal) {
    let oldVal = Storage.get(name)
    let newVal = Object.assign(addVal,oldVal)
    Storage.set(name, newVal)
}
