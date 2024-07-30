import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  education,
  skills,
  services,
  projects,
  papers,
  training,
  workshops,
  leadership
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {education.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.degree}</th>
                      <td>{data.institution}</td>
                      <td>{data.year}</td>
                      <td>{data.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp unique_training">
          <Col lg="5">
            <h3 className="color_sec py-4">Training</h3>
          </Col>
          <Col lg="7">
            <ul className="training_list">
              {training.map((data, i) => {
                return (
                  <li className="training_item" key={i}>
                    <h5 className="training_title">{data.title}</h5>
                    <p className="training_location">{data.location}</p>
                    <p className="training_desc">{data.description}</p>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
        <Row className="sec_sp unique_workshops">
          <Col lg="5">
            <h3 className="color_sec py-4">Workshops</h3>
          </Col>
          <Col lg="7">
            <div className="workshops_timeline">
              {workshops.map((data, i) => {
                return (
                  <div className="workshop_item" key={i}>
                    <h5 className="workshop_title">{data.title}</h5>
                    <p className="workshop_desc">{data.description}</p>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp unique_projects">
          <Col lg="5">
            <h3 className="color_sec py-4">Projects</h3>
          </Col>
          <Col lg="7">
            <div className="projects_grid">
              {projects.map((data, i) => {
                return (
                  <div className="project_item" key={i}>
                    <h5 className="project_title">{data.title}</h5>
                    <p className="project_desc">{data.description}</p>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp unique_papers">
          <Col lg="5">
            <h3 className="color_sec py-4">Papers</h3>
          </Col>
          <Col lg="7">
            <div className="papers_list">
              {papers.map((data, i) => {
                return (
                  <div className="paper_item" key={i}>
                    <h5 className="paper_title">{data.title}</h5>
                    <p className="paper_event">{data.event}</p>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        
        <Row className="sec_sp unique_leadership">
          <Col lg="5">
            <h3 className="color_sec py-4">Leadership</h3>
          </Col>
          <Col lg="7">
            <div className="leadership_cards">
              {leadership.map((data, i) => {
                return (
                  <div className="leadership_card" key={i}>
                    <h5 className="leadership_title">{data.title}</h5>
                    <p className="leadership_desc">{data.description}</p>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
