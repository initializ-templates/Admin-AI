/* eslint-disable no-unused-vars */
import { useTheme } from '@mui/material/styles';

const Logo = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        fontFamily: 'Poppins, sans-serif' /* Set a clean font */,
        fontSize: '30px' /* Make the text larger */,
        // fontWeight: 'bold' /* Make the text bold */,
        color: '#333' /* Set a dark color for the text */,
        // backgroundColor: '#f0f0f0' /* Light background for contrast */,
        padding: '10px 20px' /* Add some padding */,
        borderRadius: '5px' /* Round the corners */,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' /* Add a subtle shadow */,
        textAlign: 'center' /* Center the text */,
        margin: 'auto'
      }}
    >
      Admin-AI
    </div>
  );
};

export default Logo;
