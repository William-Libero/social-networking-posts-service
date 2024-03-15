import { Injectable } from '@nestjs/common';
import { ConfigDatabase } from 'src/database/config';

@Injectable()
export class PostsService {
  constructor(private db: ConfigDatabase) {}

  async create(createPostDto: any) {
    const supabase = this.db.connectDatabaseUsingServiceKey();
    const { error } = await supabase.from('posts').insert(createPostDto);

    if (error) {
      throw new Error(error.message);
    }

    return true;
  }

  async findAll(): Promise<any[]> {
    const supabase = this.db.connectDatabaseUsingAnonKey();
    const { data, error } = await supabase.from('posts').select('*');

    if (error) throw new Error(error.message);
    return data;
  }

  async findOne(id: number) {
    const supabase = this.db.connectDatabaseUsingAnonKey();
    const { data, error } = await supabase.from('posts').select().eq('id', id);

    if (error) throw new Error(error.message);
    return data;
  }

  async update(id: number, updatePostDto: any) {
    const supabase = this.db.connectDatabaseUsingServiceKey();
    const { data, error } = await supabase
      .from('posts')
      .update(updatePostDto)
      .eq('id', id)
      .select();

    if (error) throw new Error(error.message);
    return data;
  }

  async remove(id: number) {
    const supabase = this.db.connectDatabaseUsingServiceKey();
    const { error } = await supabase.from('posts').delete().eq('id', id);

    if (error) throw new Error(error.message);
  }

  // async likePost(id: number) {
  //   const supabase = this.db.connectDatabaseUsingServiceKey();
  //   const { data, error } = await supabase
  //     .from('posts')
  //     .update(updatePostDto)
  //     .eq('id', id)
  //     .select();

  //   if (error) throw new Error(error.message);
  //   return data;
  // }
}
