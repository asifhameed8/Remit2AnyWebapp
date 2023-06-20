import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})

export class StepperComponent {
   
  @Input() steps: Step[] = [];
  @Input() initialStepIndex = 0;
  @Output() stepChange = new EventEmitter<number>();

  currentStepIndex = this.initialStepIndex;

  previousStep(): void {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.steps[this.currentStepIndex].completed = false; 
      this.stepChange.emit(this.currentStepIndex);
    }
  }

  nextStep(): void {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.steps[this.currentStepIndex].completed = true; 
      this.currentStepIndex++;
      this.stepChange.emit(this.currentStepIndex);
    }
  }

  getProgress() {
    return (this.currentStepIndex / (this.steps.length - 1)) * 100;
  }
}
