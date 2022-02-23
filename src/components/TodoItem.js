import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function TodoItem(props) {
  var [iconClass, setIconClass] = useState(faCircle);
  var [itemClass, setItemClass] = useState('item');

  const changeClass = () => {
    if (iconClass !== faCircleCheck) {
      setIconClass(faCircleCheck);
      setItemClass(itemClass + ' completed');
    }
    else {
      setIconClass(faCircle);
      setItemClass('item');
    }
  }


  return (
    <li className={itemClass}>
      <FontAwesomeIcon icon={iconClass} onClick={changeClass} className="check" />
      <p className="text">{props.title}</p>
      <FontAwesomeIcon icon={faTrash} onClick={props.deleteBtnHandler} className="delete" />
    </li>
  );
}
export default TodoItem;