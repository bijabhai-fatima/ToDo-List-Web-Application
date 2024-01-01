export var user = function (username, email, password, lists) {
    this.username = username
    this.email = email
    this.password = password
    this.lists = lists
    return this
}
export var list = function (listName, items) {
    this.listName = listName
    this.items = items
    return this
}
export var item = function (task, status) {
    this.task = task
    this.status = status
    return this
}

export var users = []

users.push(
    new user("Alex", "alex@gmail.com", "1234", [
        new list("this is list ex", [
            new item("first", false),
            new item("second", false),
        ]),
    ])
)
users.push(
    new user("Alex2", "alex2@gmail.com", "1234", [
        new list("this is list ex2", [
            new item("first2", false),
            new item("second2", false),
        ]),
    ])
)
