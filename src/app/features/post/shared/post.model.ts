class Basic {
  id: number;
  body?: string;
}

export class Post extends Basic {
  title: string;
  userId: number;
}

export class Comment extends Basic {
  postId: number;
  name: string;
  email: string;
}
