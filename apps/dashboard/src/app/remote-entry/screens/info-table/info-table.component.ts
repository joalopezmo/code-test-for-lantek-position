import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SharedUIModule } from '@nx-monorepo/shared/ui';
import { BehaviorSubject } from 'rxjs';
import { machine } from '../../interface/machine.interface';
import { InfoTableService } from '../../services/info-table.service';

@Component({
  selector: 'nx-monorepo-info-table',
  standalone: true,
  imports: [CommonModule, SharedUIModule, HttpClientModule],
  providers: [InfoTableService],
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.scss'],
})
export class InfoTableComponent implements OnInit {
  machines: BehaviorSubject<machine[]> = new BehaviorSubject<machine[]>([]);
  displayedColumns: string[] = ['id', 'name', 'manufacturer', 'technology'];
  dataSource = new MatTableDataSource<machine>([]);

  constructor(private infoTableService: InfoTableService) {}

  ngOnInit(): void {
    this.infoTableService.getAllInfo().subscribe((response: any) => {
      console.log(response);
      this.machines.next(response);
      //this.dataSource tomara el nuevo valor de machines
      this.dataSource = new MatTableDataSource<machine>(this.machines.value);
    });
  }

  filterMachines(event: any) {
    const filterValue = event.target.value.toLowerCase();

    // se crea la variable filteredMachines y se filtra segun el valor del input
    const filteredMachines = this.machines.value.filter((machine) => {
      return (
        machine.id.toLowerCase().includes(filterValue) ||
        machine.name.toLowerCase().includes(filterValue) ||
        machine.manufacturer.toLowerCase().includes(filterValue) ||
        machine.technology.toString().includes(filterValue)
      );
    });
    //se actualiza la tabla
    this.machines.next(filteredMachines);
    this.dataSource = new MatTableDataSource<machine>(this.machines.value);
  }

  //se crea el metodo para buscar todas las maquinas
  searchAllMachines() {
    this.infoTableService.getAllInfo().subscribe((response: any) => {
      console.log(response);
      this.machines.next(response);
      //this.dataSource tomara el nuevo valor de machines
      this.dataSource = new MatTableDataSource<machine>(this.machines.value);
    });
  }

  //se crea el metodo para buscar las maquinas por tecnologia 2d
  get2dMachines() {
    this.infoTableService.getInfo2d().subscribe((response: any) => {
      console.log(response);
      this.machines.next(response);
      //this.dataSource tomara el nuevo valor de machines
      this.dataSource = new MatTableDataSource<machine>(this.machines.value);
    });
  }

  //se crea el metodo para buscar las maquinas por tecnologia 3d
  get3dMachines() {
    this.infoTableService.getInfo3d().subscribe((response: any) => {
      console.log(response);
      this.machines.next(response);
      //this.dataSource tomara el nuevo valor de machines
      this.dataSource = new MatTableDataSource<machine>(this.machines.value);
    });
  }

  //se crea el metodo para limpiar el input
  clearInput(event: any) {
    event.target.value = '';
    this.searchAllMachines();
  }
}
