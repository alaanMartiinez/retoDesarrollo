import { AfterViewInit, Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import { DetallePlatilloComponent } from '../detalle-platillo/detalle-platillo.component';
import { AlimentosIngrediente } from '../Interface/alimentos.interface';
import { ConnectionService } from '../servicios/connection.service';
import { ModalService } from '../servicios/modalService.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss']
})
export class BienvenidoComponent implements OnInit, AfterViewInit {
  meal: any;
  srcImagen: any;
  nameMeal: any;
  constructor(
    private connectionServioce: ConnectionService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.connectionServioce.get('aleatorioPlatillo').subscribe(data => {
      this.meal = data.meals[0] as AlimentosIngrediente;
      this.srcImagen = this.meal.strMealThumb;
      this.nameMeal = this.meal.strMeal;
    });
  }

  getDetails(): void {
    this.modalService.openModal(DetallePlatilloComponent, this.meal, '1200px', '900px');
  }

}
