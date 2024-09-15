function ListaDTarefas(props){
    return (
    <div>
        <h2>Lista de tarefas </h2>
        <ul>
            {props.tarefas.map((tarefa, index) =>(
                <li key={index}>{tarefa}</li>
            ))}
        </ul>
        </div>

    );
}

export default ListaDTarefas;
