export {Todo};

class Todo {
    constructor(title, description, dueDate, priority, notes = null, done = false) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._notes = notes;
        this._done = done;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get dueDate() {
        return this._dueDate;
    }

    get priority() {
        return this._priority;
    }

    get notes() {
        return this._notes;
    }

    get done() {
        return this._done;
    }

    set title(title) {
        this._title = title;
    }

    set description(description) {
        this._description = description;
    }

    set dueDate(dueDate) {
        this._dueDate = dueDate;
    }

    set priority(priority) {
        this._priority = priority;
    }

    set notes(notes) {
        this._notes = notes;
    }

    set done(done) {
        this._done = done;
    }
};