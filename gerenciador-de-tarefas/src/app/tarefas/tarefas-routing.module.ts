import { Routes } from '@angular/router';
import { CadastrarComponent } from '.';
import { ListarComponent } from './listar';

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarComponent
    }

]