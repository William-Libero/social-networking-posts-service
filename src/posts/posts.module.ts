import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { ConfigModule } from '@nestjs/config';
import { ConfigDatabase } from 'src/database/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [PostsController],
  providers: [PostsService, ConfigDatabase],
})
export class PostsModule {}
