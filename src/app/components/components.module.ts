import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PopinfoComponent } from './popinfo/popinfo.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({

  declarations: [
    HeaderComponent,
    PopinfoComponent,
    FooterComponent
    

  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    PopinfoComponent,
    FooterComponent
  ]

})
export class ComponentsModule { }
