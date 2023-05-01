import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  totalRenault: number = 0;
  totalChevrolet: number = 0;
  totalNissan: number = 0;

  constructor(private vehiculoService: VehiculoService) { }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      this.totalRenault = this.vehiculos.filter(
        (vehiculo) => vehiculo.marca == 'Renault').length;
      this.totalChevrolet = this.vehiculos.filter(
        (vehiculo) => vehiculo.marca == 'Chevrolet').length;
      this.totalNissan = this.vehiculos.filter(
        (vehiculo) => vehiculo.marca == 'Nissan').length;
    });
  }

  ngOnInit() {
    this.getVehiculos();
  }

}
