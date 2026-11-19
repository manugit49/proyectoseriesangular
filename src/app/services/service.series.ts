import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { Serie } from "../models/serie";
import { Personaje } from "../models/personaje";

@Injectable()
export class ServiceSeries{
    
    constructor(
        private _http: HttpClient
    ) {}

    async getSeriesAsync(): Promise<Serie[]> {
        let request = "api/series";
        //La url
        let url = environment.apiejemplos + request;
        return firstValueFrom(
            this._http.get<Serie[]>(url)
        )
    }

    async findSerieAsync(idSerie: number): Promise<Serie> {
        let request = "api/series/" + idSerie;
        let url = environment.apiejemplos + request;

        return firstValueFrom(
            this._http.get<Serie>(url)
        )
    }

    async findPersonajesAsync(idSerie: number): Promise<Personaje[]> {
        let request = "api/series/personajesserie/" + idSerie;
        let url = environment.apiejemplos + request;

        return firstValueFrom(
            this._http.get<Personaje[]>(url)
        )
    }
}