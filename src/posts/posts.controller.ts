import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @EventPattern('like_post')
  async likePost(id: number) {
    var post = await this.postsService.findOne(+id);
    if (post.length == 0) {
      throw 'Post não encontrado';
    }

    post[0].likes = post[0].likes + 1;
    console.log(post);
    return this.postsService.update(+id, post);
  }

  @EventPattern('create_post')
  async createPost(createPostDto: any) {
    console.log(createPostDto);
    return this.postsService.create(createPostDto);
  }

  @Post()
  create(@Body() createPostDto: any) {
    console.log(createPostDto);
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: any) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
