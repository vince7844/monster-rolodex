import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';
import "./ProjectBox.css";


class ProjectBox extends Component {
  state = {
    projectName: '',
    goToProject: false
  }

  handleClick = (projectname) => {
    this.setState({projectName: projectname, goToProject: true});
  }

  render() {
    const { details } = this.props;

    if(this.state.goToProject) {
      return <Redirect to={`/project/${this.state.projectName}`} />
    } 

    return (
      <Card className="project-card">
        <CardActionArea onClick={() => this.handleClick(details.name)}>
          <CardMedia
            className="project-media"
            image={require(`../../assets/img/projects/${details.image}`)}
            title={details.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {details.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {details.subtitle}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {details.buttonName}
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default ProjectBox;