import { PostDto } from './blog.model';
export declare class BlogService {
    posts: PostDto[];
    getAllPosts(): PostDto[];
    createPost(postDto: PostDto): void;
    getPost(id: any): PostDto | undefined;
    delete(id: any): void;
    updatePost(id: any, postDto: PostDto): {
        id: any;
        updatedDt: Date;
        title: string;
        content: string;
        name: string;
        createdDt: Date;
    };
}
