import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteSearchComponent } from './components/route-search/route-search.component';
import { RouteDisplayComponent } from './components/route-display/route-display.component';
import { BusRouteService } from './services/bus-route.service';
import { RouteForecast } from './models/bus.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouteSearchComponent,
    RouteDisplayComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  forecast: RouteForecast | null = null;

  constructor(private busService: BusRouteService) {}

  onSearch(params: {
    routeNumber: string;
    targetTime: string;
    targetDay: string;
  }): void {
    this.busService
      .getRouteForecast(params.routeNumber, params.targetTime, params.targetDay)
      .subscribe({
        next: (result) => {
          this.forecast = result;
        },
        error: (err) => {
          console.error('Ошибка при загрузке прогноза:', err);
        }
      });
  }
}