import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://ykytzzhp:7q8Ad42GmGxh_bkckCA75h1o48Or77Xz@jackal.rmq.cloudamqp.com/ykytzzhp',
      ],
      queue: 'posts',
      queueOptions: {
        durable: false,
      },
    },
  });
  app.listen();
}
bootstrap();
