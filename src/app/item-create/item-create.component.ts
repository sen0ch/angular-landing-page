import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html'
})
export class ItemCreateComponent implements OnInit {

  @Input() itemDetails = { id: '', headline: '', description: '', image: '' };

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit() { }

  createItem(dataItem) {
    this.restApi.createItem(this.itemDetails).subscribe((data: {}) => {
      this.router.navigate(['/items-list']);
    });
  }

}
