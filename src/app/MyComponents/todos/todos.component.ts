import { Component,OnInit } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  localItem: string;
  todos:Todo[];
  constructor(){
    const userJson=localStorage.getItem("todos");
    this.localItem = userJson !== null ? userJson : "";

    if(this.localItem==""){
      this.todos=[];
    }
    else{
      this.todos=JSON.parse(this.localItem);
    }

  }
  ngOnInit():void{

  }

  deleteTodo(todo:Todo){
    console.log(todo);
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1)
    localStorage.setItem("todos",JSON.stringify(this.todos));
   
  }

  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos));
   
  }
  checkBoxTodo(todo:Todo){
    console.log(todo);

    const index=this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
   
  }
}
