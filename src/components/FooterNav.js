import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const FooterNav = (props) => {
  return (
    <div>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="http://localhost:3002/">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="https://github.com/DevinDCooper">GitHub</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="https://api.nasa.gov/#apod">Nasa Api</BreadcrumbItem>
        <BreadcrumbItem active tag="span">Astronomy Picture of the Day
</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default FooterNav;