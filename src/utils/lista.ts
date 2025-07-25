export function adicionatarefa e removetarefa(tarefas: string[], tarefa: string): string[] {
  if (tarefas.includes(tarefa)) {
    return tarefas.filter(t => t !== tarefa);
  } else {
    return [...tarefas, tarefa];
  }
}