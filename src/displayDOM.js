import {ProjectList, Project} from "./project.js";

export {displayDOM};

class displayDOM {
    constructor() {
        this._projects = document.querySelector(".projects");
        this._projectContent = document.querySelector(".project-content");
    }

    showProjectList(projectList) {
        const list = document.createElement("ul");

        projectList.projectList.forEach(project => {
            const li = document.createElement("li");
            li.textContent = project.name;

            list.appendChild(li);
        });

        this._projects.appendChild(list);
    }

    showProject() {

    }

    showTodo() {

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