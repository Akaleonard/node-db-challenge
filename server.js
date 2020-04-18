const express = require("express");

const ProjectRouter = require('./project/project-router')
const ResourceRouter = require('./resources/resource-router')
const TaskRouter = require('./tasks/tasks-router')

const server = express();

server.use(express.json());

server.use("/api/projects", ProjectRouter)
server.use("/api/resource", ResourceRouter);
server.use("/api/tasks", TaskRouter);

module.exports = server;