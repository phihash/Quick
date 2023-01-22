import { Tab, Tabs, TabList, } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function PageTab({children}) {
  const classes = {
    base:'text-gray-600 py-3 lg:px-10 px-3 block hover:text-sky-500 outline-none text-sm lg:text-xl',
    selected: 'text-blue-500 border-b-2 font-bold border-blue-500',
    notSelected: '',
  }
  const isSelected = true;

  return (
    <div className='w-11/12'>
      <Tabs className="mb-18 cursor-pointer">
          <TabList className="mb-12 flex justify-center px-12 flex-row">
            <Tab className={`${classes.base} ${isSelected ? classes.selected : classes.notSelected}`}>鑑別</Tab>
            <Tab className={`${classes.base} ${isSelected ? classes.selected : classes.notSelected}`}>問診</Tab>
            <Tab className={`${classes.base} ${isSelected ? classes.selected : classes.notSelected}`}>身体所見</Tab>
            <Tab className={`${classes.base} ${isSelected ? classes.selected : classes.notSelected}`}>検査所見</Tab>
            <Tab className={`${classes.base} ${isSelected ? classes.selected : classes.notSelected}`}>治療</Tab>
          </TabList>
          {children}
          {/* <TabPanel>
            <h1>鑑別</h1>
          </TabPanel>
          <TabPanel>
            <h1>問診</h1>
          </TabPanel>
          <TabPanel>
            <h1>Aboutです</h1>
          </TabPanel>
          <TabPanel>
            <h1>Contactです</h1>
          </TabPanel>
          <TabPanel>
            <h1>Contactです</h1>
          </TabPanel> */}
       </Tabs>
    </div>
  );
}

export default PageTab;
