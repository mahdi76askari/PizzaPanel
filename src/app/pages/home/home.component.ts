import { Component } from '@angular/core';
import { CategoriesComponent } from '../../components/blocks/categories/categories.component';
import { GridComponent } from '../../components/blocks/grid/grid.component';
import { BasketCardComponent } from '../../components/blocks/basket-card/basket-card.component';
import { GroupService } from '../../services/http/group.service';
import { AccountService } from '../../services/http/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoriesComponent, GridComponent, BasketCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  basketItems = [
    { id: 1, name: 'Item One', quantity: 2, price: 10 },
    { id: 2, name: 'Item Two', quantity: 1, price: 15 },
    { id: 3, name: 'Item Three', quantity: 3, price: 5 },
  ];

  categories: any = [];

  constructor(
    private groupService: GroupService,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCatgeories();
    this.getProfile();
  }

  getCatgeories() {
    this.groupService.getGroups('').subscribe({
      next: (v: any) => {
        this.categories = this.sortByName(v.data).reverse();
      },
    });
  }

  sortByName(array: Array<any>) {
    return array.sort((a, b) => {
      // Compare the names in a case-insensitive manner
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1; // a comes before b
      }
      if (nameA > nameB) {
        return 1; // a comes after b
      }
      return 0; // names are equal
    });
  }

  getProfile() {
    this.accountService.getProfile().subscribe({
      next: (v: any) => {
        if (!v.data.userPlanName) {
          this.router.navigateByUrl('/profile');
        }
      },
    });
  }
}
