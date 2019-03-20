import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/menu/intro',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,

    children: [
      {
        path: 'primera',
        loadChildren: '../tabs/tabs.module#TabsPageModule'
      },
      {
        //path: 'segunda',
        //loadChildren: '../second/second.module#SecondPageModule'
      },
      {
        //path: 'segunda/details',
        //loadChildren: '../details/details.module#DetailsPageModule'
      },
      { 
        //path: 'inic', 
        //loadChildren: '../inic/inic.module#InicPageModule'
      },
      { 
        //path: 'flutter',
        //loadChildren: '../flutter/flutter.module#FlutterPageModule'
      },
      { 
        path: 'main',
        loadChildren: '../main/main.module#MainPageModule'
      }
      
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
