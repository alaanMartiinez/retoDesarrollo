import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../servicios/connection.service';
import { MatTableDataSource } from '@angular/material/table';
import { AlimentosIngrediente } from '../Interface/alimentos.interface';
import { ModalService } from '../servicios/modalService.service';
import { DetallePlatilloComponent } from '../detalle-platillo/detalle-platillo.component';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.scss']
})
export class PlatillosComponent implements OnInit {
  displayedColumns: string[] = ['idMeal', 'strMeal', 'strMealThumb'];
  dataSource = new MatTableDataSource<AlimentosIngrediente>();

  constructor(
    public connectionService: ConnectionService,
    public modalService: ModalService
    ) { }

  ngOnInit(): void {
    this.connectionService.get('platillos').subscribe(data => {
      this.dataSource = data.meals;
    });
  }

  getDetails(meal: any): void {
    this.modalService.openModal(DetallePlatilloComponent, meal, '1200px', '900px');
  }

}
