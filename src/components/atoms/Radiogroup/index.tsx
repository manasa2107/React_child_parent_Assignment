import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { pink } from '@mui/material/colors';


const RadioButtonsGroup =() => {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
    };
    const controlProps = (item: string) => ({
      checked: selectedValue === item,
      onChange: handleChange,
      value: item,
      name: 'color-radio-button-demo',
      inputProps: { 'aria-label': item },
    });

  return (
    <><FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              row
          >
              <FormControlLabel value="female" control={<Radio />} label="Female"   labelPlacement="bottom"/>
              <FormControlLabel value="male" control={<Radio />} label="Male" labelPlacement="top" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
      </FormControl><div>
              <Radio {...controlProps('a')} />
              <Radio {...controlProps('b')} color="secondary" />
              <Radio {...controlProps('c')} color="success" />
              <Radio {...controlProps('d')} color="default" />
              <Radio {...controlProps('e')}
                  sx={{
                      color: pink[800],
                      '&.Mui-checked': {
                          color: pink[600],     
                      },   }} />
          </div>
          </>
);
}

export default RadioButtonsGroup;