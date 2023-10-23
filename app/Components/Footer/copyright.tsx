import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link'

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="#B0B8C4" align="center" {...props}>
      {'Copyright © '}
      <Link color='#B0B8C4' href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright