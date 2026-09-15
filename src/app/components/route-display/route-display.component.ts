import { Component, Input } from '@angular/core'; 

import { CommonModule } from '@angular/common'; 

import { RouteForecast } from '../../models/bus.model'; 

  

@Component({ 
  selector: 'app-route-display', 
  standalone: true, 
  imports: [CommonModule], 
  template: ` 
    <div *ngIf="forecast" class="forecast-card"> 
      <h3>Маршрут {{ forecast.routeNumber }}</h3> 
      <p>По расписанию: {{ forecast.scheduledTime }}</p> 
      <p><strong>Прогноз: {{ forecast.predictedTime }}</strong></p> 
      <p>Средняя задержка: {{ forecast.averageDelay }} мин.</p> 
      <p>На основе {{ forecast.recordsCount }} записей</p> 
    </div> 
  ` 
}) 

export class RouteDisplayComponent { 
  @Input() forecast: RouteForecast | null = null; 
} 