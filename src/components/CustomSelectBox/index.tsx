import Select from 'react-select';

interface Props {
  data: any;
  placeholder: string;
  width: string;
  height?: string;
  borderColor?: string;
  controlBackgroundColor?: string;
  listBorderColor?: string;
}

export default function CustomSelectBox({
  data,
  placeholder,
  width,
  height = '54px',
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
    option: (styles: any, { isFocused }: any) => ({
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
  };

  const CustomSelectBox = () => (
    <Select
      styles={colorStyles}
      placeholder={placeholder}
      options={data}
      // menuIsOpen={true}
    />
  );

  return <CustomSelectBox />;
}