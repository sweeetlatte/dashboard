/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Icon from 'react-feather';
import Select from 'react-select';

import styles from './styles.module.scss';

interface Props {
  data?: any;
  placeholder?: string;
  width?: string;
  height?: string;
  borderColor?: string;
  controlBackgroundColor?: string;
  listBorderColor?: string;
}

const options = [
  {
    value: '2021',
    label: 'Dec 2021',
  },
  {
    value: '2022',
    label: 'Dec 2022',
  },
  {
    value: '2023',
    label: 'Dec 2023',
  },
];

export default function CustomSelectBox({
  data = options,
  placeholder = options[0].label,
  width = 'max-content',
  height = '50px',
  borderColor = 'var(--card-text)',
  controlBackgroundColor = 'var(--card-bg)',
  listBorderColor,
}: Props) {
  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: controlBackgroundColor,
      width: width,
      height: height,
      color: 'var(--card-text)',
      borderColor: borderColor,
      whiteSpace: 'nowrap',
    }),
    option: ({ isFocused }: any) => ({
      color: 'var(--card-text)',
      backgroundColor: isFocused ? '#cec266' : 'var(--card-bg)',
      padding: '8px 12px',
    }),
    menuList: (styles: any) => ({
      ...styles,
      padding: 0,
      border: `1px solid ${listBorderColor}`,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: 'var(--card-text)',
    }),
    indicatorSeparator: (styles: any) => ({
      ...styles,
      display: 'none',
    }),
    menu: (styles: any) => ({
      ...styles,
      zIndex: '1',
    }),
  };

  const CustomSelectBox = () => (
    <div className={styles.container}>
      <Select
        styles={colorStyles}
        placeholder={placeholder}
        options={data}
        // menuIsOpen={true}
      />
    </div>
  );

  const TemporaryCustomSelectBox = () => (
    <div className={styles.temporary}>
      <div>March 2022</div>
      <Icon.ChevronDown size={18} />
    </div>
  );

  // return <CustomSelectBox />;
  return <TemporaryCustomSelectBox />;
}
