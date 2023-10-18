import { Component, OnInit } from '@angular/core';
import { HttpService } from '@shared/services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  sections: any

  constructor(private httpService: HttpService){

  }

  ngOnInit(): void {
    this.httpService.getObservable("menu.json").subscribe((menu) => {
      this.sections = menu.categories;
    })
  }

}
