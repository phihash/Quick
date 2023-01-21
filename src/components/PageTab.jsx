import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function PageTab() {
  const classes = {
    base:'text-gray-600 py-3 px-8 block hover:text-sky-500 outline-none',
    selected: 'text-blue-500 border-b-2 font-bold border-blue-500',
    notSelected: '',
  }
  const isSelected = true;

  return (
    <>
      <Tabs>
      <TabList className="flex justify-center flex-row">
        <Tab className={`${classes.base} ${isSelected ? classes.selected : classes.notSelected}`}>鑑別</Tab>
        <Tab className={`${classes.base} ${isSelected ? classes.selected : classes.notSelected}`}>身体所見</Tab>
        <Tab className={`${classes.base} ${isSelected ? classes.selected : classes.notSelected}`}>検査所見</Tab>
        <Tab className={`${classes.base} ${isSelected ? classes.selected : classes.notSelected}`}>治療</Tab>
      </TabList>

      <TabPanel>
        <h1>HOMEです</h1>
      </TabPanel>
      <TabPanel>
        <h1>Aboutです</h1>
      </TabPanel>
      <TabPanel>
        <h1>Contactです</h1>
      </TabPanel>
      <TabPanel>
        <h1>Contactです</h1>
      </TabPanel>
    </Tabs>
    </>
  );
}

export default PageTab;
