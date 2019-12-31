import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-edit.component.html'
})

export class ItemEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  itemData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.restApi.getItem(this.id).subscribe((data: {}) => {
      this.itemData = data;
    });
  }

  updateItem() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.restApi.updateItem(this.id, this.itemData).subscribe(data => {
        this.router.navigate(['items-list']);
      });
    }
  }

}
