import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: '',
//     component: TopbarComponent,
//   },
// ];

@NgModule({
  declarations: [TopbarComponent],
  imports: [
    CommonModule,
    //  RouterModule.forChild(routes),
    MatIconModule,
  ],
  exports: [TopbarComponent],
})
export class TopbarModule {}
