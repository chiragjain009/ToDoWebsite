import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
 @Input() todo:Todo;
 @Input() i:number;
 @Output() todoDelete: EventEmitter<Todo>=new EventEmitter(); 
 @Output() checkBox: EventEmitter<Todo>=new EventEmitter(); 

 onClick(todo:Todo){
  this.todoDelete.emit(todo);
  console.log("onclick huha h sir")
 }

 onCheckBoxClick(todo:Todo){
   this.checkBox.emit(todo);
   console.log("mark done huha h sir")
 }
 
}


