import { StoreService } from './../services/store.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar-find-store-by-store-category-description',
  templateUrl: './searchbar-find-store-by-store-category-description.component.html',
  styleUrls: ['./searchbar-find-store-by-store-category-description.component.scss']
})
export class SearchbarFindStoreByStoreCategoryDescriptionComponent implements OnInit {

  storeForm!: FormGroup;
  nameCategory!:string;

  response: any;
  get = false;
  message = '';

  constructor(private formBuilder: FormBuilder, private storeService: StoreService,private router: Router) { }

  ngOnInit(): void {
    this.storeForm = this.formBuilder.group({
      nameOrCategory: ['']
    });
  }

  storeNameOrCategory() {
    this.nameCategory = this.storeForm.get("nameOrCategory")?.value;
    this.requestStore();

  }

  requestStore() {
    this.router.navigate(['/stores/name-category/'+ this.nameCategory]);
    // this.storeService.getStoresByNameOrCategory(this.nameCategory).subscribe({
    //   next: data => {
    //     this.response = data;
    //     this.get = true;
    //   },
    //   error: error => this.message = error,
    //   complete: () => this.message = "Request Completed..."
    // });
  }

}
