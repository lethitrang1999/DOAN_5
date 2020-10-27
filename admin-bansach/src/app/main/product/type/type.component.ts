import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { FormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from '../../../lib/base-component';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent extends BaseComponent implements OnInit {

  public pageSize = 3;
  public page = 1;
  public product_groups: any;
  public totalRecords:any;
  public formsearch: any;

  constructor(private fb: FormBuilder, injector: Injector) {
    super(injector);
   }

  ngOnInit(): void {
    this.formsearch = this.fb.group({
      'hoten': [''],
      'taikhoan': [''],
    });
    this.search();
  }

  loadPage(page) {
    this._api.get('/api/ItemGroup/get-menu').takeUntil(this.unsubscribe).subscribe(res => {
      this.product_groups = res;
      this.totalRecords =  Object.keys(res).length;
      this.pageSize = 5;
      });
  }

  search() {
    this.page = 1;
    this.pageSize = 5;
    this._api.get('/api/ItemGroup/get-menu').takeUntil(this.unsubscribe).subscribe(res => {
      this.product_groups = res;
      this.totalRecords =  Object.keys(res).length;
      this.pageSize = 5;
      });
  }


}
