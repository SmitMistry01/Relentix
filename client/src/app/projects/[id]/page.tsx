"use client";

import { useState } from "react";
import ProjectHeader from "../ProjectHeader";

type Props = {
  params: { id: string };
};

const Project = ({ params }: Props) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board");
  const [isModelNewTaskOpen, setIsModelNewTaskOpen] = useState(false);

  return (
    // ModelNew Task
    <div>
      {/* <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} /> */}
    </div>
  );
};

export default Project;
