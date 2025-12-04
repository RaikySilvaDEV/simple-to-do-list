import { ITask } from "./types/tasks";
// Importando módulos do Node.js para ler arquivos
import fs from 'fs/promises';
import path from 'path';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';

export const getAllTodos = async (): Promise<ITask[]> => {
  // Lendo diretamente do arquivo db.json no servidor
  const filePath = path.join(process.cwd(), 'db.json');
  const data = await fs.readFile(filePath, 'utf8');
  const todos = JSON.parse(data);
  return todos.tasks;
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
  const newTodo = await res.json();
  return newTodo;
}

export const editTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
  const updatedTodo = await res.json();
  return updatedTodo;
}

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/tasks/${id}`, {
    method: 'DELETE',
  })
}