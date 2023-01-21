import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function PageTab({body}) {
  const classes = {
    base:'text-gray-600 py-3 lg:px-10 px-3 block hover:text-sky-500 outline-none text-sm lg:text-lg',
    selected: 'text-blue-500 border-b-2 font-bold border-blue-500',
    notSelected: '',
  }
  const isSelected = true;

  return (
    <>
      <Tabs className="mb-18 cursor-pointer">
          <TabList className="mb-12 flex justify-center flex-row">
            <Tab className={`${classes.base} ${isSelected ? classes.selected : classes.notSelected}`}>鑑別</Tab>
            <Tab className={`${classes.base} ${isSelected ? classes.selected : classes.notSelected}`}>問診</Tab>
            <Tab className={`${classes.base} ${isSelected ? classes.selected : classes.notSelected}`}>身体所見</Tab>
            <Tab className={`${classes.base} ${isSelected ? classes.selected : classes.notSelected}`}>検査所見</Tab>
            <Tab className={`${classes.base} ${isSelected ? classes.selected : classes.notSelected}`}>治療</Tab>
          </TabList>

          <TabPanel>
            <h1>HOMEです</h1>
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
          </TabPanel>
       </Tabs>
    {body}
    </>
  );
}

export default PageTab;
