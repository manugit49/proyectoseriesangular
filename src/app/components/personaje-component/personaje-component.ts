import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Personaje } from '../../models/personaje';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceSeries } from '../../services/service.series';

@Component({
  selector: 'app-personaje-component',
  standalone: false,
  styleUrl: './personaje-component.css',
  templateUrl: './personaje-component.html',
})
export class PersonajeComponent implements OnInit{
  arraypersonajes!: Personaje[]

  constructor(
    private _active: ActivatedRoute,
    private _service: ServiceSeries,
    private _cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    this._active.params.subscribe(async (params: Params) => {
      let idserie = params['idserie']
      console.log(idserie);
      this.arraypersonajes = await this._service.findPersonajesAsync(idserie);
      this._cdr.detectChanges();
    })
  }
}
