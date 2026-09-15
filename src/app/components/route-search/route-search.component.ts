import { Component, EventEmitter, Output } from '@angular/core'; 
import { FormsModule } from '@angular/forms'; 

@Component({ 
  selector: 'app-route-search', 
  standalone: true, 
  imports: [FormsModule], 
  template: ` 
    <div class="search-form"> 
      <input [(ngModel)]="routeNumber" placeholder="Номер автобуса" /> 
      <input [(ngModel)]="targetTime" placeholder="Время (08:00)" /> 
      <input [(ngModel)]="targetDay" placeholder="День недели (Monday)" /> 
      <button (click)="onSearch()">Получить прогноз</button> 
    </div> 
  `
}) 

export class RouteSearchComponent { 
  routeNumber: string = '751'; 
  targetTime: string = '08:00'; 
  targetDay: string = 'Monday'; 

  @Output() search = new EventEmitter<{ 
    routeNumber: string; 
    targetTime: string; 
    targetDay: string; 
  }>(); 

  onSearch() { 
    this.search.emit({ 
      routeNumber: this.routeNumber, 
      targetTime: this.targetTime, 
      targetDay: this.targetDay 
    }); 
  } 
} 