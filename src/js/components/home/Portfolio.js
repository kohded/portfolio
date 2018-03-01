import React, { Component, Fragment } from 'react';
import CSSModules from 'react-css-modules';
import Project from 'components/home/Project';
import Modal from 'components/ui/Modal';
import projects from 'data/projects';
import styles from 'scss/components/home/portfolio.scss';

class Portfolio extends Component {
  state = {
    client: undefined,
    modalImages: undefined,
    isModalOpen: false,
    project: undefined,
  };

  handleModalClick = (event, client, project) => {
    // event.stopPropagation();
    if (event.target.tagName !== 'A') {
      this.setState(prevState => ({
        isModalOpen: !prevState.isModalOpen,
      }));

      this.setState(prevState => (
        client && project && project !== prevState.project ?
          {
            client,
            project,
            modalImages: projects[client][project].images.modal,
          } :
          undefined
      ));
    }
  };

  handleModalKeyUp = (event, client, project) => {
    if (event.keyCode === 13) this.handleModalClick(client, project);
  };

  renderModalContent = () => (
    this.state.client && this.state.project ?
      <Fragment>
        {this.renderModalContentImages()}
      </Fragment> :
      undefined
  );

  renderModalContentImages = () => (
    Object.keys(this.state.modalImages).map((image) => {
      const modalImage = this.state.modalImages[image];

      return (
        <Fragment key={image}>
          <h3>{this.state.modalImages[image].description}</h3>
          <img alt={modalImage.description} key={image} src={modalImage.image} />
        </Fragment>
      );
    })
  );

  renderProjects = () => Object.keys(projects).map(client => (
    Object.keys(projects[client]).map((project) => {
      const clientProject = projects[client][project];

      return (
        <Project
          ariaLabel="Open"
          client={client}
          date={clientProject.date}
          key={project}
          onClick={event => this.handleModalClick(event, client, project)}
          onKeyUp={event => this.handleModalKeyUp(event, client, project)}
          project={project}
          projectImage={clientProject.images.project}
          role="button"
          tabIndex={0}
          technologies={clientProject.technologies}
          url={clientProject.url}
        />
      );
    })
  ));

  render() {
    return (
      <div id="portfolio" styleName="portfolio">
        <section styleName="container">
          <h1>PORTFOLIO</h1>
          <div styleName="projects">
            {this.renderProjects()}
            <Modal
              isOpen={this.state.isModalOpen}
              onModalClick={this.handleModalClick}
              onModalKeyUp={this.handleModalKeyUp}
              styleName="modal"
            >
              {this.renderModalContent()}
            </Modal>
          </div>
        </section>
      </div>
    );
  }
}

export default CSSModules(Portfolio, styles);
