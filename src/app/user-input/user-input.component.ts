import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { output, Output } from '@angular/core';
import { InvestmentInput } from '../investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitialInvestment = '';
  enteredAnnualInvestment = '';
  enteredExpectedReturn = '';
  enteredDuration = '';
  @Output() calculate = new EventEmitter<InvestmentInput>();

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment,
    });
  }
}
