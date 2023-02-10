// import React from 'react';
// import './App.css';
// import HookCounterTwo from './components/HookCounter/HookCounterTwo';
// //import HookCounterThree from './components/HookCounter/HookCounterThree';
// //import ClassCounter from './components/ClassCounter';
// //import HookCounter from './components/HookCounter';
// function App() {
//   return (
//     <div className="App">
//       {/* <ClassCounter /> */}
//       {/* <HookCounter /> */}
//       <HookCounterTwo />
//       {/* <HookCounterThree /> */}
//     </div>
//   );
// }
// export default App;



/*
import * as React from 'react';
import ImageAvatars from './components/atoms/Avatar';
import BasicButtons from './components/atoms/Button';
import Checkboxes from './components/atoms/Checkbox';
import RadioButtonsGroup from './components/atoms/Radiogroup';
import BasicSelect from './components/atoms/Select';
import TextFields from './components/atoms/Textfield';
import Types from './components/atoms/Typography';


import './App.css';
import { createTheme,colors, ThemeProvider } from '@mui/material';
import { MuiResponsive } from './MuiResponsive';

const theme = createTheme ({
  status: {
    danger: "#000",
  },
  palette: {
    success: {
      main: colors.red[500],
    },
     neutral: {
      main: colors.grey[500],
          darker: colors.grey[700],     
     },
  },
  typography: {
    h4: {
      fontFamily: "Helvetica",
      textTransform: "lowercase",
      fontSize:"5rem",
      fontWeight: 600,
      lineHeight: 2,
      color: "#000",
    },
  }
})

 const App =() =>{
// return (
//       <><Checkboxes />
//       <BasicButtons />
//       <RadioButtonsGroup/>
//       <BasicSelect />
//       <TextFields />
//      <Types />
//       <ImageAvatars />
//       </>
// );

 return (
  <ThemeProvider theme={theme}>
     <div className='App'>
       <MuiResponsive />
     </div>
   </ThemeProvider>
 );
}
export default App;

*/

import React from 'react';
import Parentchild from './components/Parentchild';

const App =() => {
  return (
<Parentchild />

  );
}
export default App;

//  import React from 'react';
//  import Job from './components/molecules/Job';
// const App =() => {
//   return (
// <Job />
//   );
// }
// export default App;