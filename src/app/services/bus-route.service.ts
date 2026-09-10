import { Injectable } from '@angular/core'; 

import { HttpClient } from '@angular/common/http'; 

import { Observable, map } from 'rxjs'; 

import { TripHistoryRecord, RouteForecast } from '../models/bus.model'; 

import { AnalyticsService } from './analytics.service'; 

  

@Injectable({ providedIn: 'root' }) 

export class BusRouteService { 

  constructor( 
    private http: HttpClient, 
    private analytics: AnalyticsService ) {} 

  getRouteForecast( 
    routeNumber: string, 
    targetTime: string, 
    targetDay: string ): Observable<RouteForecast> 
    { 

    return this.http.get<TripHistoryRecord[]>('bus_trip_history.json') 
      .pipe(map((data) => { 
        const filtered = data.filter(record => 
          record.routeNumber === routeNumber && 
          record.scheduledTime === targetTime && 
          record.dayOfWeek === targetDay 
        ); 

        const delays = filtered.map(r => r.delayMinutes); 
        const avgDelay = this.analytics.calculateAverageDelay(delays); 
        const predictedTime = this.addMinutes(targetTime, avgDelay); 

        return { 
          routeNumber, 
          scheduledTime: targetTime, 
          predictedTime, 
          averageDelay: avgDelay, 
          recordsCount: delays.length 
        }; 
      })); 
  } 

  private addMinutes(time: string, minutes: number): string { 
    const [h, m] = time.split(':').map(Number); 
    const total = h * 60 + m + minutes; 
    const newH = Math.floor(total / 60) % 24; 
    const newM = total % 60; 
    return `${String(newH).padStart(2, '0')}:${String(newM).padStart(2, '0')}`; 
  } 
} 