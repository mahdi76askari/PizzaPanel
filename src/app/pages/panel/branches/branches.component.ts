import { Component, Inject, inject } from '@angular/core';
import { ButtonComponent } from '../../../components/elements/button/button/button.component';
import { BranchService } from '../../../services/http/branch.service';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { RemoveBranchComponent } from './remove-branch/remove-branch.component';

@Component({
  selector: 'app-branches',
  standalone: true,
  imports: [ButtonComponent, RouterModule],
  templateUrl: './branches.component.html',
  styleUrl: './branches.component.scss',
})
export class BranchesComponent {
  loading = false;
  branchService = inject(BranchService);

  dialog = inject(MatDialog);

  branches: any = [];

  total: number = 0;
  pageSize: number = 10;
  pageNumber: number = 1;

  ngOnInit() {
    this.getBranches();
  }

  getBranches() {
    this.loading = true;
    const param = '';
    this.branchService.getBranches(param).subscribe({
      next: (v: any) => {
        this.branches = v.data;
        this.total = v.meta.total;
        this.pageSize = v.meta.pageSize;
        this.pageNumber = v.meta.pageNumber;
        this.loading = false;
      },
    });
  }

  remove(branch: any) {
    this.dialog
      .open(RemoveBranchComponent, {
        data: {
          branch: branch,
        },
      })
      .afterClosed()
      .subscribe({
        next: (v: any) => {
          this.getBranches();
        },
      });
  }
}
