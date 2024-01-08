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
    new user("FirstUser", "firstuser@gmail.com", "1234", [
        new list("this is list ex", [
            new item("first", false),
            new item("second", false),
        ]),
    ])
)
