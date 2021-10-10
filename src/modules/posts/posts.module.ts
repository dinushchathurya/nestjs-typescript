import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Post } from './models/entities/post.entity';
import { CategoriesModule } from '../categories/categories.module';

@Module({
    imports: [
        CategoriesModule,
        TypeOrmModule.forFeature(
            [Post]
        ),
    ],
    controllers: [PostsController],
    providers: [PostsService],
    exports: [PostsService]
})
export class PostsModule {}
