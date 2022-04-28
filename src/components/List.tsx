import { useDispatch, useSelector } from 'react-redux';
import { ITask } from './interfaces';
import { RootState } from '../store/index';
import { deleteTask, toggleTaskComplete } from '../store/tasksSlice';


export const List: React.FC = () => {

  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  return <ul className='tasklist'>
    {tasks.map((elem: ITask) => {
      const noteClass = ['task__note'];
      if (elem.complete) noteClass.push('task__note--done')
    return <li key={elem.id} className='task'>
      <label>
        <input
          type='checkbox'            
          checked={elem.complete}
          onChange={() => dispatch(toggleTaskComplete({ id: elem.id }))} />
        <span className={noteClass.join(' ')}>{elem.title}</span>
      </label>
      <button
        className='btn-small'
        onClick={() => dispatch(deleteTask({ id: elem.id }))}>
          Delete task
          <i className="material-icons right">delete</i>
      </button>
    </li>})}
  </ul>
}