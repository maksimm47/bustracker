import { Injectable } from '@angular/core'; 

@Injectable({ providedIn: 'root' }) 

export class AnalyticsService { 

  calculateAverageDelay(delays: number[]): number { 

    if (delays.length === 0) return 0; 
    const sum = delays.reduce((a, b) => a + b, 0); 
    return Math.round(sum / delays.length); 
    
  } 
} 