/* eslint-disable @next/next/no-img-element */
"use client";

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import React, { useRef } from "react";
import projectData from "@/data/projectData";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export const Projects = () => {
  return (
    <section className="my-20">
      <h3 className="text-5xl font-bold text-center pb-5">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
        {projectData.map((project) => (
          <Card key={project.id}>
            <CardContent>
              <div className="p-2">
                <img src={project.image} alt={project.name} />
                <Separator className="my-4" />
                <h3 className="text-xl font-bold text-primary text-center">
                  {project.name}
                </h3>
                <p className="text-sm text-center text-gray-700">
                  {project.description}
                </p>
                <div className="flex justify-center gap-3">
                  {project.technology.map((tech) => (
                    <img key={tech} src={tech} alt={tech} className="h-8 w-8" />
                  ))}
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between items-center gap-3">
                  <Button
                    variant="outline"
                    onClick={() => window.open(project.liveLink, "_blank")}
                    className="font-semibold flex items-center text-lg"
                  >
                    Live <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open(project.githubLink, "_blank")}
                    className="font-semibold flex items-center text-lg"
                  >
                    GitHub <Github className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
