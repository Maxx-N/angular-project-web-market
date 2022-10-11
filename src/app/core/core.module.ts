import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [IndexComponent, NavbarComponent, ErrorComponent, ProfileComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent],
})
export class CoreModule {}
