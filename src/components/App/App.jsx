import { MainContent } from '../MainContent/MainContent';

export const App = ({ restaurants }) => {
  return (
    <div>
      <MainContent restaurants={restaurants} />
    </div>
  );
};
