import { Component, Input } from '@angular/core';
import { Professional } from '../../models/professional.model';

@Component({
  selector: 'app-professional-card',
  standalone: true,
  imports: [],
  templateUrl: './professional-card.component.html',
  styleUrl: './professional-card.component.css'
})
export class ProfessionalCardComponent {
  @Input() professional!: Professional;

  getSpecialtyLabel(specialty: string): string {
    const specialties: Record<string, string> = {
      'clinical': 'Clínica',
      'child': 'Infantil',
      'organizational': 'Organizacional',
      'couple': 'Casais'
    };
    return specialties[specialty] || specialty;
  }
}
