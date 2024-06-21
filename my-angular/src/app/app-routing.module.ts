import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'posts', component: PostsListComponent },
  { path: 'edit', component: EditProfileComponent },
  { path: '', redirectTo: '/profile', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
