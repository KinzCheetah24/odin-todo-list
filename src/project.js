export {ProjectList, Project};

class ProjectList {
    constructor() {
        this._projectList = [];
    }

    addProject(project) {
        this._projectList.push(project);
    }

    get projectList() {
        return this._projectList;
    }

    set projectList(projectList) {
        this._projectList = projectList;
    }
};

class Project {
    constructor(name) {
        this._name = name;
        this._todos = [];
    }

    addTodo(todo) {
        this._todos.push(todo);
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get todos() {
        return this._todos;
    }

    set todos(todos) {
        this._todos = todos;
    }
};