import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { GitHub, OpenInBrowser } from '@mui/icons-material'
import styles from './Card.module.css'
import { Link } from 'next/link'
import Image from 'next/image'

const CustomCard = (props) => {
  const { cardData } = props
  console.log(cardData)
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 10 }}>
      <CardHeader
        avatar={
          <Avatar>
            <Image src={cardData.image} alt={cardData.name} layout="fill" />
          </Avatar>
        }
        title={cardData.name}
        subheader={cardData.subtitle}
      />
      <a href={cardData.websiteUrl} target="_blank" rel="noopener noreferrer">
        <CardMedia className={styles.cardMedia}>
          <Image src={cardData.image} alt={cardData.name} />
        </CardMedia>
      </a>
      <CardContent>
        <Typography className={styles.description}>{cardData.description}</Typography>
      </CardContent>
      <CardActions disableSpacing className={styles.flexEnd}>
        {/* only show github button if there is a github url */}
        {cardData.gitHubUrl ? (
          <IconButton
            component="a"
            href={cardData.gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit on GitHub">
            <GitHub />
          </IconButton>
        ) : null}
        {cardData.internal ? (
          <IconButton component={Link} href={cardData.websiteUrl} aria-label="Open">
            <OpenInBrowser />
          </IconButton>
        ) : (
          <IconButton
            component="a"
            href={cardData.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open In New Tab">
            <OpenInBrowser />
          </IconButton>
        )}
      </CardActions>
    </Card>
  )
}

export default CustomCard
