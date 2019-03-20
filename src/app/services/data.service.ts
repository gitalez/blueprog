import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../interface/menu';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }



  getMenuOps(){

    return this.http.get<Menu[]>('/assets/data/menu.json');
  };

}
