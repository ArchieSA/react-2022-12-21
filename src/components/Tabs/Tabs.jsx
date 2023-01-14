import { Button } from '../Button/Button';

export const Tabs = ({ tabNames, active, setActive }) => {
    return (
      <div> 
        {tabNames.map((name, index) => (
          <Button onClick={ ()=> {
              console.log(index);
              setActive(index); 
            } }
            disabled={ (index === active) 
            }>
            {name}
          </Button>
        ))}
      </div>
    );
  };