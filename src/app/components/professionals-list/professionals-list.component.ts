import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from '../../services/professional.service';
import { Professional } from '../../models/professional.model';
import { ProfessionalCardComponent } from '../professional-card/professional-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professionals-list',
  standalone: true,
  imports: [CommonModule, ProfessionalCardComponent],
  templateUrl: './professionals-list.component.html',
  styleUrls: ['./professionals-list.component.css']
})
export class ProfessionalsListComponent implements OnInit {
  professionals: Professional[] = [];
  filteredProfessionals: Professional[] = [];
  activeFilter = 'all';
  isLoading = false; // Variável para controle de loading

  // Definindo os filtros disponíveis
  filters = [
    { id: 'all', label: 'Todos' },
    { id: 'clinical', label: 'Clínica' },
    { id: 'child', label: 'Infantil' },
    { id: 'organizational', label: 'Organizacional' },
    { id: 'couple', label: 'Casais' }
  ];

  constructor(private professionalService: ProfessionalService) { }

  ngOnInit(): void {
    this.loadProfessionals();
  }

  loadProfessionals(): void {
    this.isLoading = true; // Adicionando variável de loading
    this.professionalService.getProfessionals().subscribe(data => {
      this.professionals = data;
      this.filteredProfessionals = [...this.professionals];
      this.isLoading = false;
    });
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
    this.filteredProfessionals = filter === 'all'
      ? [...this.professionals]
      : this.professionals.filter(p => p.specialty === filter);
  }

  // Função para obter o rótulo do filtro
  getFilterLabel(filterId: string): string {
    const filter = this.filters.find(f => f.id === filterId);
    return filter ? filter.label : filterId;
  }
}
