import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Professional} from '../models/professional.model';
import {catchError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {
  private apiUrl = 'professionals.json'; // URL do arquivo JSON com os dados dos profissionais

  constructor(private http: HttpClient) {
  }

  getProfessionals() {
    return this.http.get<Professional[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Erro ao carregar profissionais:', error);
        return []; // Retorna um array vazio em caso de erro
      })
    );
  }
}
