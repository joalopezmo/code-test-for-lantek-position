import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//se importan todos los modulos de angular material
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    MatDividerModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,
    MatSelectModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    MatDividerModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,
    MatSelectModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
  ],
})
export class SharedUIModule {}
