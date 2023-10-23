import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import FooterSectionTitle from './footer-section-title'

interface Navigation {
  label: string
  path: string
}

const productMenu: Array<Navigation> = [
  {
    label: 'Components',
    path: '#',
  },
  {
    label: 'Templates',
    path: '#',
  },
  {
    label: 'Experimental',
    path: '#',
  },
  {
    label: 'Full Kit',
    path: '#',
  },
]

const resourceMenu: Array<Navigation> =[
  {
    label: 'Material Icons',
    path: '#', // '/',
  },
  {
    label: 'Free templates',
    path: '#', 
  },
  {
    label: 'Theming',
    path: '#', 
  },
  {
    label: 'Customization',
    path: '#', 
  },
]

const companyMenu: Array<Navigation> = [
  { label: 'Contact Us', path: '#' },
  { label: 'Privacy & Policy', path: '#' },
  { label: 'Term & Condition', path: '#' },
  { label: 'FAQ', path: '#' },
]

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={path} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          mb: 1,
          color: '#B0B8C4',
        }}
      >
        {label}
      </MuiLink>
    </Link>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Products" />
        {productMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={/* path */ '#'} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Resources" />
        {resourceMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Explore" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
    </Grid>
  )
}

export default FooterNavigation
