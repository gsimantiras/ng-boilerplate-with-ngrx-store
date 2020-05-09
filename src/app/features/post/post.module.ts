import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from 'src/app/shared/shared.module';
import { PostRoutingModule } from './post-routing.module';
import { PostsService } from './shared/posts.service';

import * as fromPost from './posts-store/posts.reducer';
import { PostsEffects } from './posts-store/posts.effects';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [PostListComponent, PostComponent],
  imports: [
    SharedModule,
    PostRoutingModule,

    // ngrx
    StoreModule.forFeature(
      fromPost.postFeatureKey,
      fromPost.reducer
    ),
    EffectsModule.forFeature([PostsEffects]),
  ],
  providers: [PostsService],
})
export class PostModule {}
