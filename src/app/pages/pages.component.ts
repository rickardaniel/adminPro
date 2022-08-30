import { Component, OnInit } from '@angular/core';
import { SettingService } from '../services/setting.service';
declare function customInitFunctions():any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
 
  // public linkTheme = document.querySelector('#theme');

  constructor(
              private settingService: SettingService
             ) { 
              
             }

  ngOnInit(): void {
    customInitFunctions();
  }


}
