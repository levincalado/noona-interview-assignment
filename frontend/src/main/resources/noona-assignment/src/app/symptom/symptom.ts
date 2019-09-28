export class Symptom {
  description: string;
  intensity: number;
  dateObserved: Date;
  createdDate: Date;

  constructor(description, intensity, dateObserved) {
    this.description = description;
    this.intensity = intensity || 0;
    this.dateObserved = dateObserved || new Date();
  }
}
