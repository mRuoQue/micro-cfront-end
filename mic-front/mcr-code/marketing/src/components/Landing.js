import React from "react"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import { Link } from "react-router-dom"

const useStyles = makeStyles(theme => ({
  "@global": {
    a: {
      textDecoration: "none"
    }
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2)
  }
}))

export default function Album() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              合思易快报
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              合思易快报易快报是一个企业报销及费用管理解决方案提供商，致力于运用互联网应用技术，为企业提供企业订购、报销管理、费用控制等一体化的SaaS产品及服务，从而为企业提供有效的费用管控和业务决策支持。
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link to="/pricing">
                    <Button variant="contained" color="primary">
                      价格
                    </Button>
                    <Link to="/dashboard">
                      <Button variant="contained" color="primary">
                        Dashboard
                      </Button>
                    </Link>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          合思易快报
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          合思易快报合思易快报合思易快报合思易快报
        </Typography>
      </footer>
    </React.Fragment>
  )
}
