import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaSerivce: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
    this.tarefas = [
      new Tarefa(1, "Tarefa 1", false),
      new Tarefa(2, "Tarefa 2", true)
    ]
  }

  listarTodos(): Tarefa[]{
    return this.tarefaSerivce.listarTodos();
  }
}
