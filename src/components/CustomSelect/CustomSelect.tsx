import { FC, useState, FormEvent } from 'react';
import styles from './CustomSelect.module.css';



interface IItemList {
  id: string;
  name: string;
}

interface IOptions {
  options: IItemList[];
}


const CustomSelect: FC<IOptions> = ({options}) => {

  

  const [value, setValue] = useState('');
  const [show, setShow] = useState(false);
  const [list, setList] = useState(options);
  const [valueActive, setValueActive] = useState('');


  const onChangeSelect = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handlerItemList = (item: IItemList) => {
    setValue(item.name);
    setValueActive(item.id);
  };
 
  return (
    <div 
      className={styles.container} 
      onClick={() => setShow((prev:boolean) => !prev)}
    >
      <div 
        className={show ? `${styles.selectActive}`:`${styles.select}`}
      >
        <input 
          value={value}
          onChange={onChangeSelect}
          className={styles.input}
        />
        {value &&  
          <div 
            onClick={() => setValue('')}
            className={styles.crossCancel}
          >
            &#10006;
          </div>
        }
      </div>
      {show && 
        <div className={styles.list}>
          {list.map((item) => {
            return (
              <div 
                key={item.id} 
                className={valueActive === item.id ? styles.listItemActive : styles.listItem}
                onClick={() => handlerItemList(item)}
              >
                <div className={styles.nameItem}>
                  {item.name}
                </div>
              </div>
            )
          })}
        </div>
      }
    </div>
  )
};

export default CustomSelect;