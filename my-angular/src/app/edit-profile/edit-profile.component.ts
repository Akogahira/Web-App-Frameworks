// edit-profile.component.ts

import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  name: string;
  email: string;

  constructor(private profileService: ProfileService) {
    this.name = this.profileService.getName();
    this.email = this.profileService.getEmail();
  }

  onSaveChanges(): void {
    this.profileService.setName(this.name);
    this.profileService.setEmail(this.email);
  }
}
