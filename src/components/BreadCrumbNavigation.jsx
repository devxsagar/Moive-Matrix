import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadCrumbNavigation = ({ mediaType, category }) => {
  // Replace underscores with spaces
  const updatedCategory = category.split("_").join(" ");

  return (
    <Breadcrumb>
      <BreadcrumbList>
       <BreadcrumbItem>
          <p>Explore</p>
        </BreadcrumbItem>
      <BreadcrumbSeparator/>
        <BreadcrumbItem>
          <p className="capitalize">{mediaType}</p>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <p className="capitalize">{updatedCategory}</p>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbNavigation;
