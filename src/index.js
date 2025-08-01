import "./style.css";
import {ProjectList, Project} from "./project.js";
import {Todo} from "./todo-item.js";
import { displayDOM } from "./displayDOM.js";

const projectList = new ProjectList();
const project = new Project("Project");
const todo = new Todo ("Test Todo", "This is a test todo", "01/09/2025", 5, "Some notes");

const dom = new displayDOM();

projectList.addProject(project);
project.addTodo(todo);

console.log(todo.title);
console.log(project.todos);
console.log(projectList.projectList);

dom.showProjectList(projectList);
// dom.clearProjects();