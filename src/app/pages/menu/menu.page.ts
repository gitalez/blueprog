import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages =   [

    {
      title: 'primera pag con tab',
      url: '/menu/primera',
      icon: 'home'
    },
    {
      title: 'segunda pagina',
      url: '/menu/segunda',
      icon: 'home'
    },
    {
      title: 'Main',
      url: '/menu/main',
      icon: 'home'
    },
    {
      title: 'cool frameworks',
      children: [
        {
          title: 'Ionic',
          url: '/menu/inic',
          icon: 'logo-ionic'
        },
        {
          title: 'Flutter',
          url: '/menu/flutter',
          icon: 'logo-google'
        }
      ]
     
    }
  ];

  // path seleccionado
  pathSeleccionado = '';


  constructor(private route: Router) {

    // nos subscribimos a escuchar eventos del router
    this.route.events.subscribe((event: RouterEvent)=>{

        if(event && event.url){

          //console.log(event.url);
          this.pathSeleccionado = event.url // nos da la url seleccionada en el menu
        }
    })
   }


  ngOnInit() {
  }

}
