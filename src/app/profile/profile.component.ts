import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any[];
  username: string;
  repos: any[];

  constructor(private profileService: ProfileService) {

    }

  findprofile() {
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;

  });
  this.profileService.getProfileRepos().subscribe(repos => {
    console.log(repos);
    this.repos = repos;
  });
}

ngOnInit() {
}

}
