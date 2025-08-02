export {displayDOM};

class displayDOM {
    constructor() {
        this._projects = document.querySelector(".projects");
        this._projectContent = document.querySelector(".project-content");
    }

    showProjectList(projectList) {
        this.clearProjects();

        const list = document.createElement("ul");

        projectList.projectList.forEach(project => {
            const li = document.createElement("li");
            li.textContent = project.name;

            list.appendChild(li);
        });

        this._projects.appendChild(list);
    }

    showProject(project) {
        this.clearProjectContent();

        project.todos.forEach(todo => {
            this.showTodo(todo);
        });
    }

    showTodo(todo) {
        const todoDiv = document.createElement("div");
        todoDiv.className = "todo";

        const title = document.createElement("p");
        title.className = "todoTitle";
        title.textContent = todo.title;

        const description = document.createElement("p");
        description.className = "tododescription";
        description.textContent = "Description: " + todo.description;
        description.classList.add("notShow");

        const dueDate = document.createElement("p");
        dueDate.className = "tododueDate";
        dueDate.textContent = "Due: " + todo.dueDate;

        const priority = document.createElement("p");
        priority.className = "todopriority";
        priority.innerHTML = "Priority level: " + todo.priority;

        const notes = document.createElement("p");
        notes.className = "todonotes";
        notes.textContent = "Notes: " + todo.notes;
        notes.classList.add("notShow");

        const done = document.createElement("input");
        done.className = "tododone";
        done.type = "checkbox";

        const expandBtn = document.createElement("button");
        expandBtn.className = "expandBtn";
        expandBtn.textContent = "expand";

        expandBtn.addEventListener("click", () => {
            description.classList.remove("notShow");
            notes.classList.remove("notShow");
            expandBtn.classList.add("notShow");
            contractBtn.classList.remove("notShow");
        });

        const contractBtn = document.createElement("button");
        contractBtn.className = "contractBtn";
        contractBtn.textContent = "contract";
        contractBtn.classList.add("notShow");

        contractBtn.addEventListener("click", () => {
            description.classList.add("notShow");
            notes.classList.add("notShow");
            expandBtn.classList.remove("notShow");
            contractBtn.classList.add("notShow");
        });

        todoDiv.appendChild(title);
        todoDiv.appendChild(description);
        todoDiv.appendChild(dueDate);
        todoDiv.appendChild(priority);
        todoDiv.appendChild(notes);
        todoDiv.appendChild(done);
        todoDiv.appendChild(expandBtn);
        todoDiv.appendChild(contractBtn);

        this._projectContent.appendChild(todoDiv);
    }

    clearProjects() {
        while(this._projects.children.length > 0) {
            this._projects.removeChild(this._projects.children[0]);
        }
    }

    clearProjectContent() {
        while(this._projectContent.children.length > 0) {
            this._projectContent.removeChild(this._projectContent.children[0]);
        }
    }
};