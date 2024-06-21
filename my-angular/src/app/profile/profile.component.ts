import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name: string;
  email: string;

  constructor(private profileService: ProfileService) {
    this.name = this.profileService.getName();
    this.email = this.profileService.getEmail();
  }
}
