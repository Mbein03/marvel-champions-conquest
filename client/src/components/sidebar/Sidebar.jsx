import { SelectPlayerButtons } from './button-groups/SelectPlayerButtons';
import { NavigationButtons } from './button-groups/NavigationButtons';

export const Sidebar = () => {
  return (
    <div className='w-1/4 flex-shrink flex-grow-0'>
      <div className='sticky top-0 p-4 w-full'>
        <SelectPlayerButtons />
        <NavigationButtons />
      </div>
    </div>
  );
};
