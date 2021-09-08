const fontFamily = 'Montserrat-Regular';

const theme = {
  colors: {
    primary: '#3d33a3',
  },
  Text: {
    style: {
      fontFamily,
    },
    h4Style: {
      fontFamily,
    },
  },
  Input: {
    inputStyle: {
      fontFamily,
    },
    labelStyle: {
      fontFamily,
    },
    errorStyle: {
      fontFamily,
      marginHorizontal: 0,
    },
  },
  Button: {
    titleStyle: {
      fontFamily,
      fontWeight: '600',
    },
  },
  Icon: {
    type: 'material-community',
  },
  Header: {
    leftComponent: {
      color: '#ffffff',
      type: 'material-community',
    },
    containerStyle: {
      borderBottomWidth: 0,
    },
  },
  SearchBar: {
    cancelButtonProps: {
      buttonTextStyle: {
        color: '#3d33a3',
        fontFamily,
        fontSize: 14,
      },
    },
  },
  CheckBox: {
    iconType: 'material-community',
    checkedIcon: 'radiobox-marked',
    uncheckedIcon: 'radiobox-blank',
    containerStyle: {
      backgroundColor: 'transparent',
      borderWidth: 0,
      padding: 0,
      marginLeft: 0,
    },
    uncheckedColor: '#8a8a8a',
    titleProps: {
      style: {
        color: '#8a8a8a',
        fontFamily: 'Montserrat-Regular',
        marginLeft: 8,
      },
    },
  },
};

export default theme;
