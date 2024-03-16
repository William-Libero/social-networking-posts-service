# NestJS API - Social Network Project

<p align="center">
  <a href="https://go.dev/" target="blank"><img src="https://go.dev/images/go-logo-white.svg" width="200" alt="Go Logo" /></a>
  <a href="https://www.rabbitmq.com/" target="blank"><img src="https://www.rabbitmq.com/img/rabbitmq-logo-with-name.svg" width="200" alt="Go Logo" /></a>
</p>

[![NestJS](https://img.shields.io/badge/NestJS-v10.0.0-red.svg)](https://nestjs.com/)
[![RabbitMQ](https://img.shields.io/badge/RabbitMQ-v4.1.0-orange.svg)](https://www.rabbitmq.com/)

This project is a REST API developed in NestJS that allows the creation and liking of posts. The creation and liking actions are performed by consuming messages from a RabbitMQ queue, which are published by another API developed in Go (<a href="https://github.com/William-Libero/social-networking-posts-and-rabbitmq" target="blank">Project Link</a>).

## Features

- **Post Creation**: Allows users to create new posts via HTTP POST requests.
- **Post Liking**: Enables users to like posts by sending HTTP PATCH requests.
- **RabbitMQ Integration**: Consumes messages from a RabbitMQ queue to perform post creation and liking actions.
- **Microservices Architecture**: Decouples the post creation and liking functionalities, allowing for independent scaling and maintenance.
