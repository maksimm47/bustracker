export interface TripHistoryRecord { 
  date: string; 
  dayOfWeek: string; 
  scheduledTime: string; 
  delayMinutes: number; 
  busNumber: string; 
} 

  

export interface RouteForecast { 
  routeNumber: string; 
  scheduledTime: string; 
  predictedTime: string; 
  averageDelay: number; 
  recordsCount: number; 
} 